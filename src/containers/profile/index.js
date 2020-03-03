import {compose} from "redux";
import {withRouter} from "react-router-dom";

import Profile from "../../components/Profile";

export default compose(
    withRouter,
)(Profile)