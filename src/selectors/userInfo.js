const getUserName = state => state.userInfo.userInfo.data.userName;
const getAppConfig = state => state.userInfo.appConfig;
const getProfile = state => state.userInfo.profile;
const getGrids = (state) => state.userInfo.appConfig.data.grids;
const getSettingFields = state => state.userInfo.appConfig.data.editFieldProperties;
const getDictionaries = state => state.userInfo.appConfig.data.dictionaries;


export {getUserName,getAppConfig,getProfile, getGrids, getDictionaries, getSettingFields}