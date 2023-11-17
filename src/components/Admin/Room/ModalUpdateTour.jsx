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
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { callUpdateTour } from "../../../services/api";
 
  const ModalUpdateTour = (props) => {
    const { open, setOpen, fetchGetRoomTour, setTypeRT, dataUpdateTour, setDataUpdateTour } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm();
    const { TextArea } = Input;
    
    const cates = useSelector(state => state.cate.category)
    const [logo, setLogo] = useState({});
    const [banner, setBanner] = useState({});

    //const [initData, setInitData] = useState({})

    useEffect(() => {
        if(dataUpdateTour){
            //setInitData(dataUpdateTour)
            form.setFieldsValue(dataUpdateTour)
        }
    }, [dataUpdateTour]);
 
    //Select
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
    }

    //Cate status

    let optionsStatus = [
      {
          value: "Public",
          label: "1"
      },
      {
          value: "UnPublic",
          label: "0"
      }
  ]

  // select type
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
  //Select delete logo
  let optionsDeleteLogo = [
    {
        value: true,
        label: "true"
    },
    {
        value: false,
        label: "false"
    }
]

    const onFinish = async (value) => {
      const {id, name, type_room, type ,cost, description, status, start_date, end_date} = value
            setIsSubmit(true)
            const res = await callUpdateTour(id, name, description, type, cost, logo, banner, status, type_room, start_date, end_date)
            setIsSubmit(false)
            if(res && res.data){
                message.success('Update phòng mới thành công')
                setOpen(false)
                setTypeRT('&type_room[]=tour')
                await fetchGetRoomTour()

              }else{
                  notification.error({
                  message: 'Có lỗi xảy ra!!!',
                  description:'Không thể update phòng',
                  duration: 3
              })
  
          //console.log("res check", res);
        }
      };


  
    return (
      <>
        <Modal
          title="Update Tour"
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields();
            
            setDataUpdateTour(null) //fix close modal lost data
          }}
          okText="Cập nhật"
          cancelText="Hủy"
          confirmLoading={isSubmit}
          width={'50vw'}
          maskClosable = {false}
        >
          <Divider/>
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
            <Row gutter={15}>
             
                <Form.Item
                  hidden ={true}
                  label="ID"
                  name="id"
                  labelCol={{ span: 24 }}
                >
                  <Input />
                </Form.Item>
              
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
                  label="Confirm Delete Logo"
                  name="logo_delete"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input status!" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select a status"
                    optionFilterProp="children"
                    options={optionsDeleteLogo}
                 />
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
  
  export default ModalUpdateTour;
  