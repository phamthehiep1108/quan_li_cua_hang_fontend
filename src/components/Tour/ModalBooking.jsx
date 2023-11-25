import { Modal, Form, Divider, Row, Col, Input, message, notification} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { callBookingTour } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const ModalBooking = (props) => {
 
    const {open, setOpen, tourId} = props
    const [form] = Form.useForm()
    const[isSubmit, setIsSubmit] = useState(false)

    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const accountUser = useSelector(state => state.account.user)
    //console.log('isAuthenticated',isAuthenticated);
    const navigate = useNavigate()

    const userID = `${accountUser?.id}`
    const tourID = `${tourId}`

    useEffect(() => {
      let initData = {
        id_user: userID,
        id_room: tourID
      }
      form.setFieldsValue(initData)
    }, [userID, tourID]);

    const onFinish = async(value) => {

      console.log('isAuthenticated>>>',isAuthenticated);
      if(isAuthenticated === false){
          navigate('/login')
          notification.error({
              message:'Bạn chưa đăng nhập',
              description:'Không thể thực hiện booking tour'
          })
      }
       
        const { id_room, id_user} = value
        const res = await callBookingTour(id_room, id_user);
       // console.log("res>>>",res);
        if(res && res.data && res.status === 200){
            message.success(res.message)
            setOpen(false)
        } 
        
    }

    return ( 
        <>
       <Modal
        forceRender
        title="Xác Nhận Đặt Tour"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}

        okText="Đặt tour"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        //width={"25vw"}
        maskClosable={false}
      >
        <Row>
            Bạn có chắc chắn muốn đặt tour này?
        </Row>
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span= {12}>
              <Form.Item
                label="ID user"
                name="id_user"
               
               hidden = {true}
               labelCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="ID room"
                name="id_room"
              
                labelCol={{ span: 24 }}
                hidden = {true}
              >
                <Input/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
        </>
     );
}
 
export default ModalBooking;