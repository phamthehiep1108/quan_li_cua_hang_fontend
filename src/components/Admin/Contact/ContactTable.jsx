import { Col, Divider, Row, Form, Input, Button, message } from "antd";
import "./contact.scss";

import { useEffect, useState } from "react";
import { callGetInfoContact, callUpdateInfoContact } from "../../../services/api";


const ContactTable = () => {
  const [form] = Form.useForm();

  const [infoContact, setInfoContact] = useState({});
  const [initValue, setInitValue] = useState({});



  useEffect(() => {
    fetchInfoContact();
  }, []);

  //get info user
  const fetchInfoContact = async () => {
    const res = await callGetInfoContact();
    console.log('check contact',res);
    if (res && res.status === 200) {
        setInfoContact(res.data);
        form.setFieldsValue(res.data);
     }
  };

  //update info user

  const onFinish = async (values) => {
     const { phone_number, zalo, facebook, email } = values;
   
     const res = await callUpdateInfoContact(phone_number, email, facebook, zalo);
     if (res && res.status === 200) {
       message.success("Thông tin đã được chỉnh sửa");
       await fetchInfoContact();
     }
  };

 

  return (
    <>
      <div className="info-page-container">
        <div className="page-wrapper">
          <div className="info-header">
            <h2>Thông tin liên hệ</h2>
            <span style={{fontSize:'13px'}}>Quản lý thông tin liên hệ</span>
          </div>
          <Divider />
          <div className="form-update-info">
            <Form form={form} onFinish={onFinish}>
              <Row gutter={[]}>
                <Col span={16}>
                  <Row gutter={[20]}>
                    <Col span={12}>
                      <Form.Item
                        name={"phone_number"}
                        label="Số điện thoại"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input name!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"email"}
                        label="Email"
                        labelCol={{ span: 24 }}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"facebook"}
                        label="Facebook"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input phone!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"zalo"}
                        label="Zalo"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input address!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        danger
                        onClick={() => form.submit()}
                      >
                        Cập nhật thông tin
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTable;
