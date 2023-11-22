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
import { callUpdateRequestCancel } from "../../../services/api";


  const ModalUpdateStatus = (props) => {
    const { open, setOpen, fetchList, idRequest } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [statusValue, setStatusValues] = useState("");
  
    const [form] = Form.useForm();
 

    const optionsStatus = [
        {
            value: "access",
            label: "Access"
        },
      
        {
            value: "cancel",
            label: "Cancel"
        },
    ]

    const handleChangeStatus = (value) => {
        setStatusValues(value)
    }

    const onFinish = async () => {
      
     //  setIsSubmit(true)
       const res = await callUpdateRequestCancel(idRequest, statusValue)
      // setIsSubmit(false)
       if(res && res.status === 200 ){
          message.success('Update status thành công')
          form.resetFields();
          setOpen(false)
          await fetchList();
        }else{
            notification.error({
            message: 'Có lỗi xảy ra!!!',
            description:'Không thể update status',
            duration: 3
        })

       // console.log("res check", res);
       }
  
    };
  
    return (
      <>
        <Modal
          title="Update Status Order"
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields()
          }}
          okText="Cập nhật"
          cancelText="Hủy"
          confirmLoading={isSubmit}
          width={'25vw'}
          maskClosable = {false}
        >
          <Divider/>
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
            <Row gutter={15}>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Select Status Order"
                  name="name"
                  labelCol={{ span: 24 }}
                >
                   <Select
                    showSearch
                    placeholder="Select a status"
                    optionFilterProp="children"
                    options={optionsStatus}
                    onChange={handleChangeStatus}
                 />
                </Form.Item>
              </Col>
        
            </Row>
          </Form>
        </Modal>
        
      </>
    );
  };
  
  export default ModalUpdateStatus;
  