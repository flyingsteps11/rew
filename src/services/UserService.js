import Request from './request';

const {requestInst} = Request;

class UserService {
    static userLogin(data) {
        return requestInst.post('/identity/login', data);
    }
    static userInfo(){
        return requestInst.get('/identity/userInfo');
    }
    static appConfig() {
        return requestInst.get('/appConfiguration');
    }
    static profileInfo() {
        return requestInst.get('/profile/info');
    }
}



export default UserService