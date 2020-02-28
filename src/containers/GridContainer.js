import React, {Component, Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import selectors from "../selectors";
import actions from "../actions";
import {withRouter} from "react-router";
import {Dropdown,Divider,Table} from "semantic-ui-react"

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
        return(
         <div>
1
         </div>
        )
    }
}
const mapStateToProps = (state, props) =>({
    gridItems: selectors.userInfo.getGrids(state),
});
const mapDispatchToProps = dispatch =>({
   getGrids: (gridName, gridItemsCount) => dispatch(actions.gridLoadRequest(gridName,gridItemsCount)),
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grids);