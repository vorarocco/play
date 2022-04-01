// LogIn
export const loginStart = () => ({
    type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});
  
//LogOut
  
export const logOutFailure = () => ({
    type: "LOGOUT",
});

export const logOutSuccess = () => ({
    type: "LOGOUT_SUCCESS",
});

export const logOutStart = () => ({
    type: "LOGOUT_FAILURE",
});