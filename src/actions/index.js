import * as authActions from './auth';
import * as userInfoActions from './userInfo'
import * as gridActions from './grid'

export default {...authActions, ...userInfoActions, ...gridActions}