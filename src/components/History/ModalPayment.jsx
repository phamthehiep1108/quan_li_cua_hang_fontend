import { Modal, message } from 'antd';
import QRImage from '../../assets/QRPayment.jpg'
import './modalPayment.scss'
const ModalPayment = (props) => {
  
    const {open , setOpen} = props
    const handleCancel = () => {
      setOpen(false);
    };

    return ( 
        <>
            <Modal 
               // title="Xác Nhận Hủy Đơn Hàng" 
                open={open} 
                onCancel={handleCancel}
                width={"25%"}
                footer = {false}
              >
                <div className='payment-container'>
                    <div className='paymentt-title'>THANH TOÁN</div>
                    <div className="media-payment">
                      <img src={QRImage} alt="#imgQR" />
                    </div>
                    <div className="info-payment">
                      <div className="info-item">
                        <div className="info-title">Tên TK</div>
                        <div className="info-content">Cổng thông tin du lịch</div>
                      </div>
                      <div className="info-item">
                        <div className="info-title">Số TK</div>
                        <div className="info-content">0123456789</div>
                      </div>
                      <div className="info-item">
                        <div className="info-title">Ngân hàng</div>
                        <div className="info-content">Vietcombank- chi nhánh Ba Đình, Hà Nội</div>
                      </div>
                    </div>
                </div>
            </Modal>
        </>
     );
}
 
export default ModalPayment;