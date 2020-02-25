export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_ERROR = 'USER_INFO_ERROR';

export const userInfoRequest = () => (
    {
        type: USER_INFO_REQUEST
    }
);

export const userInfoSuccess = (payload) => (
    {
        type: USER_INFO_SUCCESS,
        payload
    }
);

export const userInfoError = () => (
    {
        type: USER_INFO_ERROR
    }
);