import {
  Modal,
  Form,
  Input,
  Col,
  Row,
  Divider,
  Select,
  message,
  notification
} from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { callCreateCategory } from "../../../services/api";


const ModalCreateCate = (props) => {
  const { open, setOpen, fetchListCate } = props;
  const [isSubmit, setIsSubmit] = useState(false);

  const [form] = Form.useForm();
  const { TextArea } = Input;



  const onFinish = async (value) => {
    
     const {name,description} = value
     setIsSubmit(true)
     const res = await callCreateCategory(name, description)
     setIsSubmit(false)
     if(res){
        message.success('Thêm mới category thành công')
        form.resetFields();
        setOpen(false)
        await fetchListCate()
      }else{
          notification.error({
          message: 'Có lỗi xảy ra!!!',
          description:'Không thể thêm mới category',
          duration: 3
      })

      console.log("res check", res);
     }

  };

  return (
    <>
      <Modal
        title="Thêm mới Category"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields()
        }}
        okText="Thêm mới"
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
                label="Name Category"
                name="name"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input name!"}]}
              >
                <Input />
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

export default ModalCreateCate;
