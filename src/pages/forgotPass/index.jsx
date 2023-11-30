import { Button, Divider, Form, Input, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './forgot.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../redux/account/accountSlice';
import { callPostEmailForgotPass } from '../../services/api';
import ModalOTP from './ModalOTP';



const ForgotPass = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const [openOTP, setOpenOTP] = useState(false);
    const [emailUser, setEmailUser] = useState("");

    const onFinish = async (values) => { 
        setIsSubmit(true);
        const { email } = values;
        setEmailUser(email)
        const res = await callPostEmailForgotPass(email);
        console.log("res forgot >>>",res);
        if (res.status === 200) {
            message.success(res.message);
            setIsSubmit(false);
            setOpenOTP(true);
        }else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                "Có lỗi xảy ra khi đăng nhập, vui lòng kiểm tra lại thông tin",
                duration: 3
            })
            setIsSubmit(false);
        }
    };


    return (
        <div className="login-page" style={{backgroundColor:'#469afa'}}>
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h2 className="text text-large">Forgot Password</h2>
                            <Divider />

                        </div>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Email không được để trống!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={isSubmit} >
                                    Gửi mã OPT
                                </Button>
                               
                            </Form.Item>
                            <Divider>Or</Divider>
                            <div className='login-footer'>
                                <p className="text text-normal">
                                    <span>
                                        <Link to='/login' > Tiếp tục đăng nhập </Link>
                                    </span>
                                </p>
                                
                            </div>
                        </Form>
                    </section>
                </div>
            </main>
            <ModalOTP
                open = {openOTP}
                setOpen = {setOpenOTP}
                emailUser = {emailUser}
            />
        </div>
    )
}

export default ForgotPass;
