class JwtHelper {
    static saveTokenToLS(token) {
        localStorage.setItem('token', token);
    }

    static removeToken() {
        localStorage.removeItem('token');
    }

    static get token() {
        return localStorage.getItem('token');
    }

    static get isTokenExist() {
        return !!localStorage.getItem('token');
    }

}

export default JwtHelper