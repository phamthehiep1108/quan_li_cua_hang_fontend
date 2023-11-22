import { Modal, Form, Divider, Row, Col, Input, message, notification} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { callBookingTour } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const ModalBooking = (props) => {
 
    const {open, setOpen, tourId} = props
    const [form] = Form.useForm()
    const[isSubmit, setIsSubmit] = useState(false)

    const accountUser = useSelector(state => state.account.user)
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
        //console.log("value >>>",value);
        const { id_room, id_user} = value

        console.log("res>>>",id_room, id_user);

        const res = await callBookingTour(id_room, id_user);

        if(res && res.data && res.status === 200){
            message.success(res.message)
            setOpen(false)
            console.log("res>>>",res);
        }  
        else{
            navigate('/login')
            notification.error({
                message:'Có lỗi xảy ra',
                description:'Không thể booking tour'
            })
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