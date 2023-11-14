import axios from '../utils/axios-customize';

//Login Admin/Staff
export const callLoginAdmin = (email, password) => {
    return axios.post('/api/v2/auth/login', { email, password })
}

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

// Customer -- /api/v2/customer/index?page=1&perpage=5&search=1%20ng%C6%B0%C6%A1%CC%80i
export const callGetAllCustomer = (query) => {
    return axios.get(`/api/v2/customer/${query}`)
}
// Update status customer
export const callUpdateStatusCustomer = (id, status) => {
    const statusData = new FormData();
    statusData.append("status", status);
    return axios.post(`/api/v2/customer/updateStatus/${id}`,statusData)
}

// Delete customer
export const callDeleteCustomer = (idDelete) => {
    //console.log('checkApi',{...idDelete});
    return axios.delete(`/api/v2/customer/multiple-delete`,{params:idDelete})
}
// Get category -- /api/v2/category/index?page=1&perpage=10&search=2%20ng%C3%A0y%201%20%C4%91%C3%AAm
export const callGetCategory = (query) => {
    return axios.get(`/api/v2/category/${query}`)
}

// Create Category
export const callCreateCategory = (name, number, description) => {
    
    const data = new FormData();
    data.append("name", name);
    data.append("number", number);
    data.append("description", description);
    
    return axios.post(`/api/v2/category/create`,data)
}

// Update Category
export const callUpdateCategory = (id,name, number, description) => {
    
    const data = new FormData();
    data.append("name", name);
    data.append("number", number);
    data.append("description", description);
    
    return axios.post(`/api/v2/category/update/${id}`,data)
}

// Delete category
export const callDeleteCategory = (dataID) => {

    console.log('dataID',{...dataID});

    return axios.delete(`/api/v2/category/multiple-delete`,{params:dataID})
}






