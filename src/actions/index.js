import * as authActions from './auth';
import * as userInfoActions from './userInfo'
import * as gridActions from './grid'
import * as gridViewsActions from './gridView'

export default {...authActions, ...userInfoActions, ...gridActions, ...gridViewsActions}


