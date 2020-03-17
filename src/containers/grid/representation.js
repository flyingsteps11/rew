import React, {Component, createRef} from 'react';
import {
    Search,
    Button,
    Header,
    Modal,
    Grid,
    GridColumn,
    Input,
    Form,
    Table,
    Card
} from "semantic-ui-react";
import {connect} from "react-redux";
import {withTranslation, Trans} from "react-i18next";
import selectors from "../../selectors";
import actions from "../../actions";
import {withRouter} from "react-router";
import {compose} from "redux";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";


class RepresentationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewName: "",
            items: [],
            selectedItems: []
        };
        this.viewNameChange = this.viewNameChange.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

   static defaultProps ={
        gridViewItems:{}
   };

    viewNameRef = createRef();

    componentDidUpdate(prevProps) {
        console.log(this.props.viewName);
        const {gridViews, view} = this.props;
        if (gridViews !== prevProps.gridViews) {
            this.setState({
                selectedItems: gridViews[view]
            });
        }
    }

    saveRepresentation=()=> {
        const {match} = this.props;
        const gridName = match.params.name;
        const selectedItems = this.state.selectedItems;
        const viewName = this.viewNameRef.current.value;
        const representationItems = this.props.gridViewItems;
        this.props.saveGridView(gridName, selectedItems, viewName, representationItems);
    };

    viewNameChange(e) {
        this.setState({
            viewName: e.target.value
        });
    }

    onDragEnd(result) {
        const {source, destination} = result;

        const move = (source, destination, droppableSource, droppableDestination) => {
            const sourceClone = Array.from(source);
            const destClone = Array.from(destination);
            const [removed] = sourceClone.splice(droppableSource.index, 1);

            destClone.splice(droppableDestination.index, 0, removed);

            const result = {};
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;

            return result;
        };

        const id2List = {
            items: 'items',
            selectedItems: 'selectedItems'
        };

        const getList = id => this.state[id2List[id]];

        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
        };

        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
            const items = reorder(getList(source.droppableId), source.index, destination.index)

            let state = {items};

            if (source.droppableId === "selectedItems") {
                state = {selectedItems: items};
            }
            this.setState(state);
        } else {
            const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
            this.setState({
                items: result.items,
                selectedItems: result.selectedItems
            });
        }

    };
    renderRepresentation =() => {
        const name = this.props.viewName;
        const getItemStyle = (isDragging, draggableStyle) => ({
            position: "static",
            userSelect: "none",
            background: isDragging ? "lightgreen" : "lightgrey",
            ...draggableStyle
        });


        return (
            <Modal open={this.props.open} onClose={this.props.onClose} closeIcon>
                <Modal.Header>
                    {
                        this.props.isEdit ? <Trans
                            i18nKey="Edit representation">{{name}}</Trans> : this.props.t("Create representation")
                    }
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <p>{this.props.t("name")}</p>
                                <Input ref = {this.viewNameRef}/>
                            </Form.Field>
                            <Search placeholder={this.props.t("search_field")}/>
                        </Form>
                        <br/>
                        <Grid>
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <GridColumn width={8}>
                                    <Card>
                                        <Card.Header as='h3' textAlign='center'>
                                            {this.props.t("Available")}
                                        </Card.Header>
                                        <Droppable droppableId="items">
                                            {(provided, snapshot) => (
                                                <Card.Content
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}>
                                                    {
                                                        this.state.items.map((column, index) => (
                                                            <Draggable
                                                                key={`item-${column.name}`}
                                                                draggableId={`item-${index}`}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}
                                                                    >
                                                                        {this.props.t(column.displayNameKey)}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))
                                                    }
                                                    {provided.placeholder}
                                                </Card.Content>
                                            )
                                            }
                                        </Droppable>
                                    </Card>
                                </GridColumn>

                                <GridColumn width={8}>
                                    <Card>
                                        <Card.Header as='h3' textAlign='center'>
                                            {this.props.t("Selected")}
                                        </Card.Header>
                                        <Droppable droppableId="selectedItems">
                                            {(provided, snapshot) => (
                                                <Card.Content ref={provided.innerRef}>
                                                    {
                                                        this.state.selectedItems.map((column, index) => (
                                                            <Draggable
                                                                key={`item-${index}`}
                                                                draggableId={`item-${column.name}`}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}
                                                                    >
                                                                        {this.props.t(column.displayNameKey)}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))
                                                    }
                                                    {provided.placeholder}
                                                </Card.Content>
                                            )
                                            }
                                        </Droppable>
                                    </Card>
                                </GridColumn>
                            </DragDropContext>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button floated='left' negative>{this.props.t("delete")}</Button>
                    <Button color='grey'>{this.props.t("CancelButton")}</Button>
                    <Button
                        primary /*onClick={this.props.saveGridView(this.props.match.params.name, this.state.selectedItems,this.state.viewName) }*/>{this.props.t("SaveButton")}</Button>
                </Modal.Actions>

            </Modal>
        )
    };
    render(){
        return this.renderRepresentation();
    }
}


const mapStateToProps = (state, props) => ({
    columns: selectors.userInfo.getColumns(state, props.match.params.name),
    gidViewItems: selectors.gridView.getGridViewItems(state)
});
const mapDispatchToProps = dispatch => ({
    saveGridView: (gridName, gridColumns, viewName) => dispatch(actions.saveGridViewsRequest(gridName, gridColumns, viewName)),
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(RepresentationModal)