import {
    Modal,
    message,
    notification
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { callDeleteRoomTour } from "../../../services/api";

const ModalDeleteTR = (props) => {

    const { open, setOpen, fetchGetRoomTour, selectedRowKeys } = props;
    
      const [isSubmit, setIsSubmit] = useState(false);

      const handleOk = async() => {
        const dataId =
        {
          "ids":[...selectedRowKeys]
        }
        
        const res = await callDeleteRoomTour(dataId)
        if(res){
          message.success("Xóa room tour thành công")
          setOpen(false);
          await fetchGetRoomTour();
        }
      };
      
      const handleCancel = () => {
          setOpen(false);
      };
      
    return ( 
        <>
            <Modal 
            title="Xóa Room/Tour" 
            open={open} 
            onOk={handleOk} 
            onCancel={handleCancel}
            okText="Xóa"
            cancelText="Hủy"
            confirmLoading={isSubmit}
            width={'30vw'}
            maskClosable = {false}
            >
                <h2>Xác nhận xóa</h2>
        
            </Modal>
        </>
     );
}
 
export default ModalDeleteTR;