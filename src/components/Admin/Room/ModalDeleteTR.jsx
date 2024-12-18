import {
    Modal,
    message,
    notification
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { callDeleteRoomTour } from "../../../services/api";
import { useSelector } from "react-redux";
const ModalDeleteTR = (props) => {

    const { open, setOpen, fetchGetRoomTour, selectedRowKeys } = props;
    const userRole = useSelector(state => state.account.role);
      const [isSubmit, setIsSubmit] = useState(false);

      const handleOk = async() => {
        const dataId =
        {
          "id":[...selectedRowKeys]
        }
        console.log(userRole)
        let res = {};
            if (userRole != "Admin") {
              res = "You dont have delete permission";
      
            } else {
              res = await callDeleteRoomTour(dataId)
            }
        if( res != "You dont have delete permission" ){
          message.success("Delete product succesfully!!!")
          setOpen(false);
          await fetchGetRoomTour();
        } else {
          notification.error({
            message: "Something gone wrong!!!",
            description: "You dont have delete permission",
            duration: 3,
          });
        }
      };
      
      const handleCancel = () => {
          setOpen(false);
      };
      
    return ( 
        <>
            <Modal 
            title="Delete product" 
            open={open} 
            onOk={handleOk} 
            onCancel={handleCancel}
            okText="Delete"
            cancelText="Cancel"
            confirmLoading={isSubmit}
            width={'30vw'}
            maskClosable = {false}
            >
                <h4>Confirm Deletion</h4>
        
            </Modal>
        </>
     );
}

export default ModalDeleteTR;