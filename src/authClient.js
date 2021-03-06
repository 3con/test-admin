import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
//import {signInUser, forgotPassword, retrieveUserFromLocalStorage} from './auth/cognito'

export default (type, params) => {
    // called when the user attempts to  log in
    if (type === AUTH_LOGIN) {
        const { username } = params;
        //localStorage.setItem('username', username);
        // accept all username/password combinations
        console.log(params);
        return Promise.resolve();
        //return signInUser(params);
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        //localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called hen the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            //localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        //return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
        return Promise.resolve();
    }
    return Promise.reject('Unknown method');
};