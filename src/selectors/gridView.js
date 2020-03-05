import {createSelector} from "reselect";

const getGridViewName = state => (state.gridView.gridViews['key']);
const getGridViewItems = state => state.gridView.gridViews['value'] && JSON.parse(state.gridView.gridViews['value']);

const getGridViewColumnNames = createSelector(
    getGridViewItems,
    (views)=>{
        return views && Object.keys(views)
    }
);

export {getGridViewItems,getGridViewName, getGridViewColumnNames}