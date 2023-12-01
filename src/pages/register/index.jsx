import { Button, Divider, Form, Input, InputNumber, message, notification } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './register.scss';
import { callLRegisterUser } from '../../services/api';
import ModalVerify from './ModalVerify';


const RegisterPage = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const [openVerify, setOpenVerify] = useState(false);
    const [emailVerify, setEmailVerify] = useState("");

    const onFinish = async (values) => {
        const { email, password, display_name, phone_number, detail_address} = values;
        setEmailVerify(email)
        if(phone_number.length < 10){
            message.error("Số điện thoại cần nhập tối thiểu 10 số!")
            return
        }
        setIsSubmit(true);
         const res = await callLRegisterUser(email, password, display_name, phone_number, detail_address);
        setIsSubmit(false);
         if (res?.data?.id) {
             message.success('Đăng ký tài khoản thành công!');
             setOpenVerify(true)
             //navigate('/login')
         } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                    'Đã xảy ra lỗi khi đăng ký, vui lòng kiểm tra lại thông tin đăng ký',
                duration: 3
            })
        }
      //  console.log('check res =>',res);
    };

    

    return (
        <div className="register-page" style={{backgroundColor:'#469afa'}}>
            <main className="main" >
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h2 className="text text-large">Đăng Ký Tài Khoản</h2>
                            <Divider />
                        </div>
                        <Form
                            name="basic"
                            // style={{ maxWidth: 600, margin: '0 auto' }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                labelCol={{ span: 24 }} //whole column
                                label="Họ tên"
                                name="display_name"
                                rules={[{ required: true, message: 'Họ tên không được để trống!' }]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                labelCol={{ span: 24 }} //whole column
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Email không được để trống!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                labelCol={{ span: 24 }} //whole column
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                labelCol={{ span: 24 }} //whole column
                                label="Số điện thoại"
                                name="phone_number"
                                rules={[{ required: true, message: 'Số điện thoại không được để trống!' }]}
                            >
                                <Input maxLength={10}/>
                            </Form.Item>
                            <Form.Item
                                labelCol={{ span: 24 }} //whole column
                                label="Địa chỉ"
                                name="detail_address"
                                rules={[{ required: true, message: 'Địa chỉ không được để trống!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                            // wrapperCol={{ offset: 6, span: 16 }}
                            >
                                <Button type="primary" htmlType="submit" loading={isSubmit}>
                                    Đăng ký
                                </Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <p className="text text-normal">Đã có tài khoản ?
                                <span>
                                    <Link to='/login' > Đăng Nhập </Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
            <ModalVerify
                open = {openVerify}
                setOpen = {setOpenVerify}
                emailVerify = {emailVerify}
            />
        </div>
    )
}

export default RegisterPage;