import axios from '../utils/axios-customize';

//Login User
export const callLoginUser = (email, password, device_token) => {
    return axios.post('/api/auth/login', { email, password, device_token })

}

//Register User
export const callLRegisterUser = (email, password, display_name, phone_number, detail_address) => {
   
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("display_name", display_name);
    data.append("phone_number", phone_number);
    data.append("detail_address", detail_address);
  
    return axios.post('/api/register', data)
}

