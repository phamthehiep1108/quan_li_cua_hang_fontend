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
            <p>Xac nhan Xoas Category</p>
       
        </Modal>
        
      </>
    );
  };
  
  export default ModalDeleteCate;
  