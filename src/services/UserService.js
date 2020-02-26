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
    static userRegistration(data) {
        return requestInstance.post('/identity/registration', data);
    }
    static gridOrders(data) {
        return requestInst.post('/orders/search', data);
    }
    static gridShippings(data) {
        return requestInst.post('/shippings/search', data);
    }
}



export default UserService