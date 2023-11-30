import { Button, Divider, Form, Input, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../redux/account/accountSlice';
import { callLoginUser } from '../../services/api';



const LoginPage = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const dispatch = useDispatch();

    const onFinish = async (values) => {

        const { email, password } = values;
      //  setIsSubmit(true);
        const res = await callLoginUser(email, password, "xxx111xxx");
        console.log("res login>>>",res);
        if (res?.data && res.status === 200) {
            localStorage.setItem('access_token', res.data.token);
            dispatch(doLoginAction(res.data))
            message.success('Đăng nhập tài khoản thành công!');
            navigate('/')
        }else if(res?.status !== 200) {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                "Có lỗi xảy ra khi đăng nhập, vui lòng kiểm tra lại thông tin",
                duration: 3
            })
        }
        setIsSubmit(false);
    };


    return (
        <div className="login-page" style={{backgroundColor:'#469afa'}}>
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h2 className="text text-large">Đăng Nhập</h2>
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
                            // wrapperCol={{ offset: 6, span: 16 }}
                            >
                                <Button type="primary" htmlType="submit" loading={isSubmit}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <div className='login-footer'>
                                <p className="text text-normal">Chưa có tài khoản ?
                                    <span>
                                        <Link to='/register' > Đăng Ký </Link>
                                    </span>
                                </p>
                                <p>
                                    <Link to='/forgot-password' > Quên mật khẩu </Link>
                                </p>
                            </div>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default LoginPage;
