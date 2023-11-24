import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin , FaTwitterSquare} from "react-icons/fa";
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer className="footer">
          <div className="container-footer">
            <div className="row">
              <div className="footer-col">
                <h4>Công ty</h4>
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Our service</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Affiliate program</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Điểm đến</h4>
                <ul>
                    <li><a>Điểm du lịch</a></li>
                    <li><a>Ẩm thực</a></li>
                    <li><a>Room</a></li>
                    <li><a>Tour</a></li>
                    <li><a>Khách sạn</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Dịch vụ</h4>
                <ul>
                    <li><a>Phương tiện đi lại</a></li>
                    <li><a>Công ty lữ hành</a></li>
                    <li><a>Ngân hàng</a></li>
                    <li><a>Hỗ trợ du lịch</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Follow us</h4>
                <div className='social-links'>
                    <a><FaFacebook/></a>
                    <a><FaInstagramSquare/></a>
                    <a><FaTwitterSquare/></a>
                    <a><FaLinkedin/></a>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer