import {
  Modal,
  Form,
  Input,
  Col,
  Row,
  Divider,
  Select,
  message,
  notification,
} from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import {callCreateNewStaff} from "../../../services/api";
import imgA from '../../../assets/img-upload.jpg'
const ModalCreateStaff = (props) => {
  const { open, setOpen, fetchListStaff } = props;
  const [isSubmit, setIsSubmit] = useState(false);

  const [avatar, setAvatar] = useState({});
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = async (value) => {
    console.log("value staff",value);
       const {display_name, email, phone_number, detail_address, role_id, password} = value
    //    setIsSubmit(true)
        const res = await callCreateNewStaff(email, password, display_name, phone_number, detail_address, role_id, avatar)
        
       if(res && res?.status == 201){
           message.success('Thêm mới staff thành công')
           form.resetFields();
           setOpen(false);
           await fetchListStaff();
        }else{
            notification.error({
                message: 'Có lỗi xảy ra!!!',
                description:'Không thể thêm mới staff',
                duration: 3
            })
        }
        setIsSubmit(false)
  };

  const handleUploadImg = (event) => {
    if (
      event.target &&
      event.target.files &&
      event.target.files[0] 
    ) {
      setAvatar(event.target.files[0]);
      setPreviewAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };


  return (
    <>
      <Modal
        title="Thêm mới Staff"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}
        okText="Thêm mới"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        width={"50vw"}
        maskClosable={false}
      >
        <Divider />
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Staff name"
                name="display_name"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Email"
                name="email"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input email!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Phone number"
                name="phone_number"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input phone!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Address"
                name="detail_address"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input address!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Role ID"
                name="role_id"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Please input role = 1 or 3!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Password"
                name="password"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input pass!" }]}
              >
                <Input.Password />
              </Form.Item>
            </Col>

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Avatar"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Please input description!" },
                ]}
              >
                <div className="handle-logo-tour">
                  <div className="media-tour">
                    <img src={previewAvatar || imgA} alt="#avatar" />
                  </div>
                  <div className="input-tour">
                    <label htmlFor="imgTour">
                      <span className="btn-change-tour">Upload avatar</span>
                      <input
                        type="file"
                        id="imgTour"
                        style={{ display: "none" }}
                        onChange={(event) => handleUploadImg(event)}
                      />
                    </label>
                  </div>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCreateStaff;
