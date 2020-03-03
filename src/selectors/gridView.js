import {createSelector} from "reselect";

const getGridViewName = state => (state.gridView.gridViews['key']);
const getGridViewItems = state =>(JSON.parse(state.gridView.gridViews['value']));

const getGridViewNames = createSelector(
    getGridViewItems,
    (views)=>{
        return views && Object.keys(views)
    }
)

export {getGridViewItems,getGridViewName}