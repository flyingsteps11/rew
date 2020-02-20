const getUserName = state => console.log(state);
const isLoading = state => state.auth.isLoading;
const isAuth = state => state.auth.isAuth;

export { getUserName, isAuth, isLoading }