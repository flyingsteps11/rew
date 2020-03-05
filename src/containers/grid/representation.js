import React, {Component} from 'react';
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
    Popup,
    Card
} from "semantic-ui-react";
import {connect} from "react-redux";
import {withTranslation, Trans} from "react-i18next";
import selectors from "../../selectors";
import actions from "../../actions";
import {withRouter} from "react-router-dom";
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
    }
    componentDidUpdate(prevProps){
        const {gridViews, view}=this.props;
        if (gridViews!==prevProps.gridViews){
            this.setState({
                selectedItems: gridViews[view]
            });
        }
    }

    viewNameChange(e) {
        this.setState({
            viewName: e.target.value
        });
    }

    render() {
        const name = "";
        const {t} = this.props;
        return (
            <Modal open={this.props.open} onClose={this.props.onClose} closeIcon>
                <Modal.Header>
                    {
                        this.props.isEdit ? <Trans i18nKey="Edit representation">{{name}}</Trans> : this.props.t("Create representation")
                    }
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <p>{t("name")}</p>
                                <Input onChange={this.viewNameChange}/>
                            </Form.Field>
                            <Search placeholder={t("search_field")}/>
                        </Form>
                        <br/>
                        <Grid>
                            <GridColumn width={8}>
                                <Header as='h3' textAlign='center'>
                                    {t("Available")}
                                </Header>
                                <Table>
                                    <Table.Body>
                                        <Droppable>
                                        </Droppable>
                                    </Table.Body>
                                </Table>
                            </GridColumn>

                            <GridColumn width={8}>
                                <Header as='h3' textAlign='center'>
                                    {t("Selected")}
                                </Header>
                                <Table>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>IlYA</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>IlYA</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>IlYA</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </GridColumn>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button floated='left' negative>{t("delete")}</Button>
                    <Button color='grey'>{t("CancelButton")}</Button>
                    <Button primary onClick={this.props.onClose}>{t("SaveButton")}</Button>
                </Modal.Actions>

            </Modal>
        )
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