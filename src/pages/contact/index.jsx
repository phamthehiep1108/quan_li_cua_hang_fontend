import { Modal,Row, Col,} from 'antd';
import ImgContact from '../../assets/halong.jpg'
import './contact.scss'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { callGetContactCus } from '../../services/api';
import { useEffect, useState } from 'react';


const ContactPage = (props) => {
 
    const {open, setOpen} = props
    const [dataContact, setDataContact] = useState({})

    useEffect(()=>{
        fetchContactForCus();
    },[])

    const fetchContactForCus = async() => {
        const res = await callGetContactCus();
        if(res && res.status === 200){
            setDataContact(res?.data)
        }
        //console.log('res>>>',res);
    }
    
    return ( 
        <>
       <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        maskClosable={false}
        width = {"45vw"}
        footer = {false}
        
      >
            <div className="contact-container">
                <Row gutter={[0]}>
                    <Col span={14}>
                        <div className="contact-info">
                            <span className="contact-title">
                                Để đặt vé liên hệ ngay qua hotline hoặc truy cập vào website để biết thêm thông tin
                            </span>
                            <div className="contact-detail">
                                <div className="contact-item">
                                    <span className='item-one'>
                                        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                                            <MdOutlinePhoneInTalk /> 
                                            Hotline:
                                        </div>
                                    </span>
                                    <span>{dataContact?.phone_number}</span>
                                </div>
                                <div className="contact-item">
                                    <span className='item-one'>
                                        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                                        <FaInternetExplorer />
                                            Website:
                                        </div>
                                    </span>
                                    <span>{dataContact?.email}</span>
                                </div>
                                <div className="contact-item">
                                    <span className='item-one'>
                                        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                                            <FaFacebook /> 
                                            Facebook:
                                        </div>
                                    </span>
                                    <span>
                                        {dataContact?.facebook}
                                    </span>
                                </div>
                                <div className="contact-item">
                                    <span className='item-one'>
                                        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                                            <SiZalo/> 
                                            Zalo:
                                        </div>
                                    </span>
                                    <span>
                                        {dataContact?.zalo}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="media-contact">
                            <img src={ImgContact} alt="#imgContact" />
                        </div>
                    </Col>
                </Row>
            </div>
        
      </Modal>
        </>
     );
}
 
export default ContactPage;