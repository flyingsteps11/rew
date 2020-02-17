import Request from './request';

const {requestInst} = Request;

class UserService {
    static userLogin(data) {
        return requestInst.post('/identity/login', data);
    }
}

export default UserService