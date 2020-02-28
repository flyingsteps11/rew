import React, {Component, Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import selectors from "../selectors";
import actions from "../actions";
import {withRouter} from "react-router";
import {Grid, Dropdown, Divider, Table, Segment, Label, Search, Card, Button, Icon, Menu} from "semantic-ui-react"

class Grids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            totalCount: 0
        };
    }

    componentDidMount() {
        this.props.getGrids(this.props.match.params.name, 0);
    };

    componentDidUpdate() {
        console.log(this.props)
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
                            <Segment>
                                <Dropdown>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            {t("default_representation")}
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Segment>

                        </Grid.Column>
                        <Grid.Column>
                            <Button icon='settings' size="big">

                            </Button>
                        </Grid.Column>
                        <Grid.Column floated='right' width={2}>
                            <Search/>
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
            </>

        )
    }
}

const mapStateToProps = (state, props) => ({
    gridItems: selectors.userInfo.getGrids(state),
});
const mapDispatchToProps = dispatch => ({
    getGrids: (gridName, gridItemsCount) => dispatch(actions.gridLoadRequest(gridName, gridItemsCount)),
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grids);