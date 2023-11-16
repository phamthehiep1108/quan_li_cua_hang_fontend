import {
    Modal,
    Form,
    Input,
    Col,
    Row,
    Divider,
    Upload,
    Select,
    message,
    notification,
    Calendar, theme
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { callCreateNewTour } from "../../../services/api";
 
  const ModalCreateTour = (props) => {
    const { open, setOpen, fetchGetRoomTour, setTypeRT } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm();
    const { TextArea } = Input;
    
    const cates = useSelector(state => state.cate.category)
    const [logo, setLogo] = useState({});
    const [banner, setBanner] = useState({});


    //Select cate
    let options = cates?.map(item => {
        return {
          value: `${item.id}`,
          label: `${item.name}`
        }
    })

    const handleUploadImg = (event, type) => {
      if (event.target && event.target.files && event.target.files[0] && type ==='logo') {
        setLogo(event.target.files[0]);
      } 

      if (event.target && event.target.files && event.target.files[0] && type === 'banner') {
        setBanner(event.target.files[0]);
      } 
    }
    //Cate status

    let optionsStatus = [
        {
            value: "1",
            label: "1"
        },
        {
            value: "0",
            label: "0"
        }
    ]

    let optionsType = [
        {
            value: "room",
            label: "Room"
        },
        {
            value: "tour",
            label: "Tour"
        }
    ]


    const onFinish = async (value) => {
      const {name, type_room, type ,cost, description, status, start_date, end_date} = value
            setIsSubmit(true)
            const res = await callCreateNewTour(name, description, type, cost, logo, banner, status, type_room, start_date, end_date)
            setIsSubmit(false)
            if(res && res.data){
                console.log("res check", res);
                message.success('Tạo phòng mới thành công')
                form.resetFields();
                setOpen(false)
                setTypeRT('&type_room[]=tour')
                await fetchGetRoomTour()

              }else{
                  notification.error({
                  message: 'Có lỗi xảy ra!!!',
                  description:'Không thể tạo mới phòng',
                  duration: 3
              })
  
            }
            //console.log("res check", value);
      };
    
  
    return (
      <>
        <Modal
          title="Thêm mới Tour"
         
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields()
          }}
          okText="Tạo mới"
          cancelText="Hủy"
          confirmLoading={isSubmit}
          width={'50vw'}
          maskClosable = {false}
        >
          <Divider/>
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
            <Row gutter={15}>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Name Tour"
                  name="name"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input name!"}]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Category"
                  name="type"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input type!" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="children"
                    options={options}
                 />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Cost"
                  name="cost"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input cost!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Type Room"
                  name="type_room"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input type_room!" }]}
                >
                    <Select
                        showSearch
                        placeholder="Select a type room"
                        optionFilterProp="children"
                        options={optionsType}
                    />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Date Start"
                  name="start_date"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input start_date follow format YYYY-MM-DD" }]}
                >
                    <Input/>
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Date end"
                  name="end_date"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input end_date follow format YYYY-MM-DD" }]}
                >
                    <Input/>
                </Form.Item>
              </Col>
              <Col span={8} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="IMG Logo"
                 
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input logo!" }]}
                >
                  <input type="file" onChange={(e)=>handleUploadImg(e, 'logo')}/>
                </Form.Item>
              </Col>
              <Col span={8} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="IMG Banner"
              
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input banner!" }]}
                >
                  <input type="file" onChange={(e)=>handleUploadImg(e,'banner')}/>
                </Form.Item>
              </Col>
              <Col span={8} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Status"
                  name="status"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input status!" }]}
                >
                   <Select
                    showSearch
                    placeholder="Select a status"
                    optionFilterProp="children"
                    options={optionsStatus}
                 />
                </Form.Item>
              </Col>
           
              <Col span={24} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Description"
                  name="description"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input description!" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
        
            </Row>
          </Form>
        </Modal>
        
      </>
    );
  };
  
  export default ModalCreateTour;
  