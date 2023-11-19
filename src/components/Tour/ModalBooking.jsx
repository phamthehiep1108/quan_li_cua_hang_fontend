import { Modal, Form, Divider, Row, Col, Input, message, notification} from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { callBookingTour } from '../../services/api';


const ModalBooking = (props) => {

    const {open, setOpen, tourId} = props
    const [form] = Form.useForm()
    const[isSubmit, setIsSubmit] = useState(false)

    const accountUser = useSelector(state => state.account.user)

    const userID = `${accountUser?.id}`
    const tourID = `${tourId}`

    const onFinish = async(value) => {
        console.log("value >>>",value);
        const { id_room, id_user} = value
        const res = await callBookingTour(id_room, id_user);

       // console.log("res>>>",id_room, id_user);

        if(res && res.data){
            message.success(res.message)
            setOpen(false)
            console.log("res>>>",res);
        }else{
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
        title="Xác nhận đặt tour"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}

        okText="Đặt tour"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        width={"50vw"}
        maskClosable={false}
      >
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span= {12}>
              <Form.Item
                label="ID user"
                name="id_user"
                initialValue={userID}
               //hidden = {true}
               labelCol={{ span: 24 }}
              >
                <Input/>
              </Form.Item>
            </Col>
            
            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="ID room"
                name="id_room"
                initialValue={tourID}
                labelCol={{ span: 24 }}
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