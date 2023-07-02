
const API_ROUTE = 'http://ec2-44-203-200-73.compute-1.amazonaws.com';

export const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const apiURL = {
    home_api: `${API_ROUTE}/request/home`,
    signup_api: `${API_ROUTE}/users/sign-up`,
    login_api: `${API_ROUTE}/users/login`,
    otp_verify_api: `${API_ROUTE}/users/verify-otp`,
    time_line_api: `${API_ROUTE}/api/get-event-timeline`,
    photos_api: `${API_ROUTE}/api/photos`,
}
