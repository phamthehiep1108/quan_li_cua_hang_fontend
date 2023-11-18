import "./tourDetail.scss";
import img4 from "../../assets/img4.jpg";
import img9 from "../../assets/img9.jpg";
import { BsImage } from "react-icons/bs";
import { Rate } from 'antd';

const TourDetail = () => {
  return (
    <>
      <div className="home">
        <div className="overlay">
          <img src={img4} alt="#img" />
        </div>
      </div>
      {/* <div className="media-avatar">
        <img src={img9} alt="" />
      </div> */}
      <div className="container-detail-page">
        <div className="main-page">
          <div className="left-content">
            <div className="left-item">
              <div className="type">
                <span><BsImage className="icon" /></span>
                <span>Giới thiệu</span>
              </div>
            </div>
            <div className="left-item">
              <div className="type">
                <span><BsImage className="icon" /></span>
                <span>Hình ảnh</span>
              </div>
            </div>
            <div className="left-item">
              <div className="type">
                <span><BsImage className="icon" /></span>
                <span>Đánh giá</span>
              </div>
            </div>
          </div>
          <div className="center-content">
              <h2 className="tour-title">
                 VINPEARL RESORT & SPA NHA TRANG BAY
              </h2>
              <div className="tour-rate">
                 <Rate disabled defaultValue={5} />
              </div>
              <div className="tour-location">
                Hòn Tre, Vĩnh Nguyên, Tp. Nha Trang, Khánh Hòa, Vietnam
              </div>
              <div className="tour-intro">
                <h3>Giới thiệu</h3>
                <p className="tour-description">
                  Vinpearl Resort & Spa Nha Trang Bay là nơi có thể nhìn từ giường ngủ ra toàn cảnh Vịnh Nha Trang với tầm nhìn sống động nhất. Được vinh danh khu nghỉ dưỡng biển hàng đầu Việt Nam bởi giải thưởng danh giá World Travel Award năm 2018, nơi đây thu hút với 7 chòi spa trên mặt hồ thơ mộng cùng các liệu trình đẳng cấp từ Bali. Với các villa rộng lớn có từ 3 - 4 phòng ngủ vừa riêng tư, vừa gắn kết, khu Kids Club và công viên giải trí VinWonders chỉ cách 300m, khu nghỉ dưỡng là lựa chọn lý tưởng cho một kỳ nghỉ đầy niềm vui của mọi gia đình.
                </p>
              </div>
          </div>
          <div className="right content">
              <a className="btn-booking">
                  ĐẶT TOUR NGAY
              </a>
              <a className="btn-review">
                  VIẾT BÌNH LUẬN
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
