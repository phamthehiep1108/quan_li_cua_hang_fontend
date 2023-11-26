import { Modal, Form, Divider, Row, Col, Input, message, notification, Rate} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { callCreateReview } from '../../services/api';

const ModalReview = (props) => {
    const {open, setOpen, id, tourDetail} = props
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const accountUser = useSelector(state => state.account.user)

    const [imgPreview, setImgPreview] = useState("")
    const [images, setImages] = useState([])

    // Rating star
    const [rate, setRate] = useState(3);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


    const onFinish = async(value) => {

        // if(isAuthenticated === false){
        
        //   notification.error({
        //       message:'Bạn chưa đăng nhập',
        //       description:'Không thể thực hiện review'
        //   })
        //   return;
        // }


  
        // const res = await callBookingRoom(id_room, id_user, startDate, endDate);
        // if(res && res.data && res.status === 200){
        //       message.success(res.message)
        //       setOpen(false)
        //       console.log("res>>>",res);
        // }
    }
   // console.log("check rate", rate);

    const handleFile = (event) => {

    }

    return ( 
     <>
     <Modal
        title="Đánh giá"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}

        okText="Đánh giá"
        cancelText="Hủy"
       // confirmLoading={isSubmit}
        width={"45vw"}
        maskClosable={false}
      >
        <div>Viện Hải Dương Học Khánh Hòa</div>
        <Divider/>
        
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span= {12}>
              <Form.Item
                label="ID user"
                name="user_id"
               
               hidden = {true}
               labelCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="ID room"
                name="room_id"
              
                labelCol={{ span: 24 }}
                hidden = {true}
              >
                <Input/>
              </Form.Item>
            </Col>

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Chất lượng"
                name="rate"
               // labelCol={{ span: 24 }}
               
              >
                 <Rate tooltips={desc} onChange={setRate} value={rate} />
                        {rate ? <span>{` ${desc[rate - 1]}`}</span> : ' '}
                 </Form.Item>
            </Col> 

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Nội dung"
                name="content"
                labelCol={{ span: 24 }}
               
              >
                  <TextArea 
                    rows={4} 
                    placeholder='Chia sẻ những cảm nhận của bạn với những người khác...'
                  />
              </Form.Item>
            </Col>
            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Images"
                name="images"
                labelCol={{ span: 24 }}
               
              >
               
                  <label for="fileUpload" style={{visibility:"hidden"}} onChange={handleFile} multiple>
                        <input id="fileUpload"  type={"file"} />
                        Upload Image
                    </label>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
     </>
            
     );
}
 
export default ModalReview;