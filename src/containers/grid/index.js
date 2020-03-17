import React, {Component, Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import selectors from "../../selectors";
import actions from "../../actions";
import {withRouter} from "react-router";
import {
    Grid,
    Dropdown,
    Divider,
    Table,
    Segment,
    Label,
    Search,
    Card,
    Button,
    Icon,
    Menu,
    Statistic,
    Popup
} from "semantic-ui-react"
import "../../assets/styles/index.css"
import RepresentationModal from "./representation";
import {getGrids} from "../../selectors/userInfo";
import grid from "../../reducers/grid";

class Grids extends Component {
    constructor(props) {
        super(props);


        this.state = {
            items: [],
            totalCount: 0,
            isShow: false,
            isEdit: false,
            representationName: localStorage.getItem(this.props.match.params.name),
            isEditDisable: false
        };
        this.representationHide = this.representationHide.bind(this);
        this.representationEditShow = this.representationEditShow.bind(this);
        this.representationCreateShow = this.representationCreateShow.bind(this);
        this.defaultRepresentationName = `${this.props.t("default_representation")}`;
    }

    componentDidMount() {
        const {match} = this.props;
        this.props.getGrids(this.props.match.params.name, 0);
        this.props.getGridViews(this.props.match.params.name);
        if(!localStorage.getItem(match.params.name)) localStorage.setItem(match.params.name, this.defaultRepresentationName);
        if(this.state.representationName === this.defaultRepresentationName) {
            this.setState({
                isEditDisable: true
            });
        } else {
            this.setState({
                isEditDisable: false
            });
        };
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        const {match, getGrids,getGridViews,grids} = this.props;
        if (match.params.name!==prevProps.match.params.name){
            getGrids(match.params.name, 0);
            getGridViews(match.params.name);

        }
        if (grids.totalCount!==prevState.totalCount)
        {
            this.setState({
                totalCount: grids.totalCount,
                items:grids.items
            })
        }
    }

    representationEditShow() {
        this.setState({
            isShow: true,
            isEdit: true
        })
    };

    representationCreateShow(e) {
        e.nativeEvent.target.preventDefault;
        this.setState({
            isShow: true,
            isEdit: false
        })
    };

    representationHide() {
        this.setState({
            isShow: false
        })
    }

    render() {
        const {t} = this.props;
        return (
            <>
                <Grid>
                    <Grid.Row>
                        <Grid.Column className="grid_row" width={1}>
                            {t("representation")}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Dropdown selection >
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        {t("default_representation")}
                                    </Dropdown.Item>
                                    {
                                        this.props.gridViewColumnNames && this.props.gridViewColumnNames.map((viewName, index) => {
                                            return <Dropdown.Item as="button" key={index}>{viewName}</Dropdown.Item>
                                        })
                                    }
                                    <Divider/>
                                    <Dropdown.Item onClick={this.representationCreateShow}>
                                        {t("create_btn")}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid.Column>
                        <Grid.Column>
                            <Popup
                                trigger={<Button className="settings" icon='settings' size="big"
                                                 disabled={this.state.isEditDisable}
                                                 onClick={this.representationEditShow}/>}
                                content={t("customize_representation")}
                                position="bottom left"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Statistic.Group horizontal size="mini">
                                <Statistic>
                                    <p>{t("totalCount")}</p>
                                </Statistic>
                            </Statistic.Group>
                        </Grid.Column>
                        <Grid.Column width="4" floated='right'>
                            <Button icon="add" size='big'>
                            </Button>
                            <Button icon="download" size='big'>
                            </Button>
                            <Button icon="filter" size='big'>
                            </Button>
                        </Grid.Column>
                        <Grid.Column floated='right' width={2}>
                            <Search placeholder='Искать по всем полям'/>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>
                <Table basic selectable inverted>
                    <Table.Header>
                        <Table.Row>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                {
                    this.state.isShow &&
                    <RepresentationModal open={this.state.isShow} isEdit={this.state.isEdit} onClose={this.representationHide}/>
                }
            </>

        )
    }
}

const mapStateToProps = (state, props) => ({
    grids: selectors.userInfo.getGrids(state),
    gridViewName: selectors.gridView.getGridViewName(state),
    defaultColumns: selectors.userInfo.getDefaultColumns(state, props.match.params.name),
    defaultColumnsNames: selectors.userInfo.getNamesDefaultColumns(state, props.match.params.name),
    gridViewColumnNames: selectors.gridView.getGridViewColumnNames(state)

});
const mapDispatchToProps = dispatch => ({
    getGrids: (gridName, gridItemsCount) => dispatch(actions.gridLoadRequest(gridName, gridItemsCount)),
    getGridViews: (gridName) => dispatch(actions.getGridViewRequest(gridName))
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grids);