import { createSelector } from 'reselect'
const getUserName = state => state.userInfo.userInfo.userName;
const getAppConfig = state => state.userInfo.appConfig;
const getProfile = state => state.userInfo.profile;
const getGrids = (state) => state.userInfo.appConfig.grids;
const getSettingFields = state => state.userInfo.appConfig.editFieldProperties;
const getDictionaries = state => state.userInfo.appConfig.dictionaries;


const getColumns = (state, name) =>state.userInfo.appConfig.grids.filter(grid=>grid.name ===name).map(grid => grid["columns"]).flat();
const getDefaultColumns = (state, name) => [].concat(...state.userInfo.appConfig.grids.filter(grid => grid.name === name).map(grid => grid["columns"].filter(column => column.isDefault === true)));

const getNamesDefaultColumns = createSelector(
    getDefaultColumns,
    (items) => items.map(item => item.name)
);

export {getUserName, getAppConfig, getProfile, getGrids, getDictionaries, getSettingFields, getDefaultColumns, getNamesDefaultColumns, getColumns}