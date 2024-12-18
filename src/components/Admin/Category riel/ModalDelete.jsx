import {
  Modal,
  message,
  notification
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { callDeleteCategory } from "../../../services/api";

const ModalDeleteCate = (props) => {
  const { open, setOpen, fetchListCate, selectedRowKeys } = props;
//  console.log("open",open);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOk = async() => {
  
    const dataId =
    {
      "ids":[...selectedRowKeys]
    }

    const res = await callDeleteCategory(dataId)
    if(res){
      message.success("Xoa thanh cong")
      await fetchListCate()
    }else{
      message.error("Co loi xay ra khi xoa")
    }
  };
  
  const handleCancel = () => {
      setOpen(false);
  };
  

  return (
    <>

      <Modal 
      title="Xóa Category" 
      open={open} 
      onOk={handleOk} 
      onCancel={handleCancel}
      okText="Xóa"
      cancelText="Hủy"
      confirmLoading={isSubmit}
      width={'30vw'}
      maskClosable = {false}
      >
           <h4>Xác nhận xóa Category này</h4>
     
      </Modal>
      
    </>
  );
};

export default ModalDeleteCate;
