import httpRequest from './request';

const {requestInst} = httpRequest;

class AuthService {
    static authLogin(data){
        return requestInst.post('/identity/login', data);
    }
};
export default AuthService;