export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";

export const ProfileRequest = () => ({
    type: PROFILE_REQUEST,
});

export const ProfileSuccess = payload => ({
    type: PROFILE_SUCCESS,
    payload
});