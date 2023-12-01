import axios from '../utils/axios-customize';


//-------------------------- ADMIN --------------------------

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

// setting-contact -- get info
export const callGetInfoContact = () => {
    return axios.get(`/api/v2/setting/contact`);
}

//setting-contact --  update info
export const callUpdateInfoContact = (phone_number, email, facebook, zalo) => {
    return axios.post(`/api/v2/setting/create-contact`,{phone_number, email, facebook, zalo});
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

    //console.log('dataID',{...dataID});

    return axios.delete(`/api/v2/category/multiple-delete`,{params:dataID})
}

// Get Room -- /api/v2/room/index?page=1&perpage=10&search=Phong so 1&status[]=1&type[]=1&type[]=2&type_room[]=room
export const callGetRoomTour = (query) => {
    return axios.get(`/api/v2/room/${query}`)
}

// --- /api/v2/room/index?page=1&perpage=10&type_room[]=room&type_room[]=tour&search=Ha Noi - HCM
// create new room admin
export const callCreateNewRoom = (name, description, type, cost, logo, banner, status, type_room) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    banner?.files?.forEach((file) => data.append('banner[]', file));
    data.append("status", status);
    data.append("type_room", type_room);
    
    return axios.post(`/api/v2/room/create-room`,data)
}
// create new tour admin
export const callCreateNewTour = (name, description, type, cost, logo, banner, status, type_room, start_date, end_date) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    banner?.files?.forEach((file) => data.append('banner[]', file))
   
    data.append("status", status);
    data.append("type_room", type_room);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    
    return axios.post(`/api/v2/room/create-room`,data)
}

//Update room
export const callUpdateRoom = (id, name, description, type, cost, logo, status) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("logo_delete", true);
    data.append("status", status);
    data.append("type_room", "room");
   
    return axios.post(`/api/v2/room/update/${id}`,data)
}

export const callUpdateTour = (id, name, description, type, cost, logo, status,  start_date, end_date) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("logo_delete", true);
    data.append("status", status);
    data.append("type_room", "tour");
    data.append("start_date", start_date);
    data.append("end_date", end_date);

    return axios.post(`/api/v2/room/update/${id}`,data)
}

// Delete Room Tour
export const callDeleteRoomTour = (dataID) => {
    return axios.delete(`/api/v2/room/multiple-delete`,{params:dataID})
}

//Get order booking
export const callGetListOrder = (query) => {
    return axios.get(`/api/v2/order/${query}`)
}
//Update status order
export const callUpdateStatusOrder = (idOrder, status) => {
    console.log(idOrder, status);
    return axios.post(`/api/v2/order/update-status/${idOrder}?status=${status}`)
}

//Get list request cancel
export const callGetListRequestCancel = (query) => {
    return axios.get(`/api/v2/request-cancel/index?${query}`)
}
//Get list request cancel
export const callUpdateRequestCancel = (idRequest, status) => {
    return axios.post(`/api/v2/request-cancel/update-status/${idRequest}?status=${status}`)
}

//Get list staff and admin--------------
export const callGetListStaff = (query) => {
    // -- /api/v2/staff/index?page=1&perpage=10&search=&role_id[]=1&role_id[]=3
    return axios.get(`api/v2/staff/index?${query}`)
}

// Create new staff
export const callCreateNewStaff = (email, password, display_name, phone_number, detail_address, role_id, image_data) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("display_name", display_name);
    data.append("phone_number", phone_number);
    data.append("detail_address", detail_address);
    data.append("role_id", role_id);
    data.append("image_data", image_data);
    
    return axios.post(`/api/v2/staff/create`,data)
}

//Get list review admin


export const callGetListReview = (query) => {
    // /api/v2/review/index?page=1&perpage=10&rate[]=4&room_id[]=33&user_id[]=5
    return axios.get(`/api/v2/review/index?${query}`)
}

// Delete review - admin
export const callDeleteReview = (ids) => {
    return axios.delete(`/api/v2/review/multiple-delete`,{params:ids})
}
// Delete review - admin
export const callGetInfoDashBoard = () => {
    return axios.get(`/api/v2/dashboard/general`)
}

//1-forgot password
export const callPostEmailForgotPass = (email) => {
    return axios.post(`/api/user/send-code`,{email})
}
//2-verify otp
export const callPostVerifyCode = (email, code) => {
    return axios.post(`/api/user/verify-code`,{email, code})
}
//3-reset password
export const callResetPassword = (email, code, new_password) => {
    return axios.post(`/api/user/reset-password`,{email, code, new_password})
}













// ----------- USER-CUSTOMER ----------------------//

//Customer get tour room

export const callGetTourRoomHome = (pageSize,type,cateNumber) => {
    return axios.get(`/api/room?page=1&perpage=${pageSize}&type[]=${type}&category[]=${cateNumber}`)
}

// Customer cate
export const callGetCategoryForUser = () => {
    return axios.get(`/api/category/index`)
}

// Cus get tour

//  ---/api/room?page=1&perpage=10&type[]=tour&type[]=room&category[]=1&category[]=2&search=tour1&cost_min=12&cost_max=80&sort_cost=asc

export const callGetTourRoomPage = (query) => {
    return axios.get(`api/room?${query}`)
}

// Get tour/room detail
export const callGetTourRoomDetail = (id) => {
    return axios.get(`/api/room/detail/${id}`)
}

// Call Booking tour
export const callBookingTour = (id_room, id_user) => {

    const data = new FormData();
    data.append("id_room", id_room);
    data.append("id_user", id_user);

    return axios.post(`/api/order/booking-tour`,data)
}
// Call Booking Room
export const callBookingRoom = (id_room, id_user, start_date, end_date) => {

    const data = new FormData();
    data.append("id_room", id_room);
    data.append("id_user", id_user);
    data.append("start_date", start_date);
    data.append("end_date", end_date);

    return axios.post(`/api/order/booking-room`,data)
}

// Call get order user
export const callGetListOrderUser = (query) => {
    return axios.get(`/api/order/list-order?${query}`)
}
// cancel order
export const callCancelOrderUser = (id) => {
    return axios.post(`/api/order/cancel/${id}`)
}

//get detail order
export const callGetDetailOrder = (id) => {
    return axios.get(`/api/order/show/${id}`)
}
//get detail info user
export const callGetInfoUser = (id) => {
    return axios.get(`/api/user/show/${id}`)
}
// update info user
export const callUpdateInfoUser = (id, display_name, phone_number, detail_address, avatar) => {

    const data = new FormData();
    data.append("display_name", display_name);
    data.append("phone_number", phone_number);
    data.append("detail_address", detail_address);
    data.append("image_delete", true);
    data.append("image_data", avatar? avatar : "");

    return axios.post(`/api/user/update/${id}`,data)
}

//update password user
export const callChangePassUser = (id, password, newPassword) => {
    const data = new FormData();
    data.append("password", password);
    data.append("newPassword", newPassword);
    
    return axios.post(`/api/user/updatePs/${id}`,data)
}

//Get list comment
export const callGetListCommentTour = (id) => {
    return axios.get(`/api/review/${id}`)
}

//create comment
export const callCreateReview = (user_id, room_id, rate, content, images) => {
    console.log('img>>>',images);
    const data = new FormData();
    data.append("user_id", user_id);
    data.append("room_id", room_id);
    data.append("rate", rate);
    data.append("content", content);
    images?.files?.forEach((file) => data.append('images[]', file))
    return axios.post(`/api/review/create`,data)
}

//get contact(setting)
export const callGetContactCus = () => {
    return axios.get(`/api/setting/contact`)
}












