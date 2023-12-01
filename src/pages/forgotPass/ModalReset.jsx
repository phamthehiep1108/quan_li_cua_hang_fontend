import { Modal, Form, Divider, Row, Col, Input, message, notification} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callResetPassword } from '../../services/api';


const ModalResetPass = (props) => {
 
    const {open, setOpen, emailUser, codeOTP} = props
    const [form] = Form.useForm()
    const[isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      let initValue = {
        email: emailUser,
        code: codeOTP,
      }
      form.setFieldsValue(initValue)
    }, [emailUser,codeOTP]);

    //console.log("code",codeOTP);

    const onFinish = async(value) => {
       setIsSubmit(true);
       const {email, code, new_password} = value;
       const res = await callResetPassword(email, code, new_password)
      if(res.status === 200){
        message.success("Reset password thành công!")
        setIsSubmit(false);
        setOpen(false);
        navigate('/login')
      }else{
        notification.error({
          message: "Có lỗi xảy ra",
          description:
          "Có lỗi xảy ra khi đăng nhập, vui lòng kiểm tra lại thông tin",
          duration: 3
      })
        setIsSubmit(false);
      }
    }

    return ( 
        <>
       <Modal
        forceRender
        title="Reset Password"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}

        okText="Xác nhận"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        width={"25vw"}
        maskClosable={false}
      >
        
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span= {24}>
              <Form.Item
                label="Email"
                name="email"
               //hidden = {true}
               labelCol={{ span: 24 }}
              
              >
                <Input />
              </Form.Item>
            </Col>
       
            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Mã OTP"
                name="code"
                labelCol={{ span: 24 }}
                hidden = {true}
              >
                <Input/>
              </Form.Item>
            </Col>

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="New Password"
                name="new_password"
                labelCol={{ span: 24 }}
               // hidden = {true}
              >
                <Input.Password/>
              </Form.Item>
            </Col>

            
          </Row>
        </Form>
      </Modal>
        </>
     );
}
 
export default ModalResetPass;