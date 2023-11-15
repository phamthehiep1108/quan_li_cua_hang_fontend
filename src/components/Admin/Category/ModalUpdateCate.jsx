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
  InputNumber,
} from "antd";

import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { callUpdateCategory } from "../../../services/api";

const ModalUpdateCate = (props) => {
  const { open, setOpen, fetchListCate, dataCate, setDataCate } = props;
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log(">>>",dataCate);

  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = async (values) => {
     const {id, name, number, description } = values;
     setIsSubmit(true);
     const res = await callUpdateCategory(id,name, number, description);
     setIsSubmit(false);
     if (res) {
      message.success("Update category thành công");
      form.resetFields();
      setOpen(false);
      await fetchListCate();
    } else {
      notification.error({
        message: "Có lỗi xảy ra!!!",
        description: "Không thể update category",
        duration: 3,
      });

      // console.log("res check", res);
     }
  };

  useEffect(()=>{
        //fix bug lap data khi dong modal
        form.setFieldsValue(dataCate) /// not ---setField(s)Value---
  },[dataCate])

  return (
    <>
      <Modal
        forceRender
        title="Update Category"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
          setDataCate(null)
        }}

        okText="Cập nhật"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        width={"50vw"}
        maskClosable={false}
      >
        <Divider />
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Col span= {24}>
              <Form.Item
                name="id"
                hidden = {true}
               
              >
                <InputNumber/>
              </Form.Item>
            </Col>
            
            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Name Category"
                name="name"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input name!" }]}
               
              >
                <Input/>
              </Form.Item>
            </Col>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Number"
                name="number"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input number!" }]}
                
              >
                <InputNumber style={{width:'350px'}}/>
              </Form.Item>
            </Col>

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Description"
                name="description"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Please input description!" },
                ]}
                
              >
                <TextArea rows={4}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ModalUpdateCate;
