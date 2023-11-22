import { Button, Modal, Form, Input, InputNumber, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { callCancelOrderUser } from '../../services/api';
const ModalDeleteHis = (props) => {
  
    const {open , setOpen, id, fetchList} = props
   
   // console.log('id>>>',id);

    const handleCancel = () => {
      setOpen(false);
    };

    const handleOk = async() => {
      const res = await callCancelOrderUser(id)
      if(res && res?.data){
        console.log('check res',res);
        message.success("Đã hủy đơn hàng thành công")
        setOpen(false);
        await fetchList()
      }else{
        message.error("Đã có lỗi xảy ra khi hủy đơn hàng")
      }
      
    };


    return ( 
        <>
            <Modal 
                title="Xác Nhận Hủy Đơn Hàng" 
                open={open} 
                onOk={handleOk}
                onCancel={handleCancel}
                
              >
                <span>
                  Bạn có chắc chắn muốn hủy đơn hàng này?
                </span>
            </Modal>
        </>
     );
}
 
export default ModalDeleteHis;