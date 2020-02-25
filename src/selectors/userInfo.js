const getUserName = state => state.userInfo.userInfo;
const getAppConfig = state => state.userInfo.appConfig;
const getProfile = state => state.userInfo.profile;

export default {getUserName,getAppConfig,getProfile}