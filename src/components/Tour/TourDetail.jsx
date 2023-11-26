import "./tourDetail.scss";
import img1 from "../../assets/img1.jpg";
import img9 from "../../assets/img9.jpg";

import tourDao4 from "../../assets/tour-dao4.jpg";
import tourDao5 from "../../assets/tour-dao5.jpg";

import tourDao3 from "../../assets/tour-dao3.jpg";
import { BsImage } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { Rate, Row, Col, Image, Badge, Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { useEffect, useState } from "react";
import ModalBooking from "./ModalBooking";

const TourDetail = (props) => {
  const { tourDetail, id, tourComment } = props;
  console.log("tourComment>>>", tourComment);
  const [openModalBook, setOpenModalBook] = useState(false);

  let dateStart = tourDetail?.start_date?.substring(0, 10);
  let dateEnd = tourDetail?.end_date?.substring(0, 10);

  const handleBooking = () => {
    setOpenModalBook(true);
  };

  return (
    <>
      <div className="home-detail">
        <div className="overlay-detail">
          <img src={tourDetail?.banner?.image_data ?? img9} alt="#img" />
        </div>
        
      </div>

      <div className="media-avatar">
              <img src={tourDetail?.logo} alt="#avatar" />
      </div>

      <div className="container-detail-page">
        <div className="main-page">
         
            <div className="left-content">
                <div className="left-item">
                  <div className="type">
                    <span>
                      <GrOverview className="icon" />
                    </span>
                    <span className="title-icon">Giới thiệu</span>
                  </div>
                </div>
                <div className="left-item">
                  <div className="type">
                    <span>
                      <MdOutlineDescription className="icon" />
                    </span>
                    <span className="title-icon">Mô tả</span>
                  </div>
                </div>
                <div className="left-item">
                  <div className="type">
                    <span>
                      <BsImage className="icon" />
                    </span>
                    <span className="title-icon">Hình ảnh</span>
                  </div>
                </div>
                <div className="left-item">
                  <div className="type">
                    <span>
                      <MdOutlineRateReview className="icon" />
                    </span>
                    <span className="title-icon">Đánh giá & bình luận</span>
                  </div>
                </div>
            </div>
            
            
              <div className="cr-content">
               
                    <div className="center-content">
                    <div className="header-info">
                      <h2 className="tour-title">{tourDetail?.name}</h2>
                      <div className="tour-rate">
                        <Rate disabled defaultValue={5} style={{ fontSize: "16px" }} />
                      </div>
                      <div className="tour-location">
                        Hòn Tre, Vĩnh Nguyên, Tp. Nha Trang, Khánh Hòa, Vietnam
                      </div>
                    </div>
                    <div className="tour-intro">
                      <h3>Giới thiệu</h3>
                      <p className="tour-description">{tourDetail?.description}</p>
                    </div>
                    <div className="tour-intro">
                      <h3>Mô tả</h3>
                      <p className="tour-description">
                        {tourDetail?.categories?.description}
                      </p>
                    </div>
                    <div className="tour-media">
                      <h3>Hình ảnh</h3>
                      <div className="list-media">
                        <div className="media-item">
                          <Image
                            width={138}
                            src={img1}
                            style={{ borderRadius: "6px" }}
                          />
                        </div>
                        <div className="media-item">
                          <Image
                            width={138}
                            src={tourDao4}
                            style={{ borderRadius: "6px" }}
                          />
                        </div>
                        <div className="media-item">
                          <Image
                            width={138}
                            src={tourDao5}
                            style={{ borderRadius: "6px" }}
                          />
                        </div>
                        <div className="media-item">
                          <Image
                            width={138}
                            src={tourDao3}
                            style={{ borderRadius: "6px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tour-review">
                      <h3>Đánh giá và bình luận</h3>
                      {tourComment.length > 0 &&
                        tourComment?.map((item) => {
                          return (
                            <>
                              <div className="tour-review-item">
                                <div className="review-main">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                    }}
                                  >
                                    <div>
                                      <Avatar size={40} src={item?.user?.avatar} />
                                    </div>
                                    <div>
                                      <div className="right-info-review">
                                        <span>{item?.user?.display_name}</span>
                                        <Rate
                                          disabled
                                          defaultValue={item?.rate}
                                          style={{ fontSize: "15px" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-review">
                                    <p>
                                      {item?.content}
                                    </p>
                                  </div>
                                  <div className="media-review">
                                    <div className="list-media-comment">
                                      {/* <div className="media-item-cmt">
                                        <img src="" alt="" />
                                    </div> */}
                                      <div className="media-cmt-item">
                                      
                                        <Image
                                          width={140}
                                          src={item?.image[0]?.image_data}
                                        />
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    </div>
                 
                    <div className="right-content">
                      <div className="btn-group">
                        <a className="btn-booking" onClick={() => handleBooking()}>
                          ĐẶT TOUR NGAY
                        </a>

                        <a className="btn-review">VIẾT BÌNH LUẬN</a>
                      </div>
                      <div className="tour-info">
                        <span className="title">Ngày khởi hành</span>
                        <span
                          className="data-picker"
                          style={{ fontSize: "15px", fontWeight: "500" }}
                        >
                          {dateStart}
                        </span>
                        <span className="title">Ngày kết thúc</span>
                        <span
                          className="data-picker"
                          style={{ fontSize: "15px", fontWeight: "500" }}
                        >
                          {dateEnd}
                        </span>
                        <h5>Ưu đãi</h5>
                        <div className="endow-list">
                          <ul>
                            <li>Bảo hiểm</li>
                            <li>Bữa ăn</li>
                            <li>Hướng dẫn viên</li>
                          </ul>
                          <ul>
                            <li>Xe đưa đón</li>
                            <li>Khách sạn 4 sao</li>
                            <li>Vé tham quan</li>
                          </ul>
                        </div>
                        <h5 style={{ marginTop: "15px" }}>Giá khách lẻ</h5>
                        <span className="tour-price">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(tourDetail?.cost ?? 0)}{" "}
                          / Người
                        </span>
                        <h5 style={{ marginTop: "15px" }}>
                          Số người {tourDetail?.categories?.number}
                        </h5>
                        <h5 style={{ marginTop: "15px" }}>
                          <Badge
                            status="processing"
                            text={`Số vé còn lại ${tourDetail?.can_order}`}
                          />
                        </h5>
                        <h5 style={{ marginTop: "15px" }}>
                          Số ngày{" "}
                          {moment(`${tourDetail?.end_date}`).diff(
                            moment(`${tourDetail?.start_date}`),
                            "days"
                          )}
                        </h5>
                        <div className="contact-info">
                          <span className="title-contact">Liên hệ ngay</span>
                          <span className="phone">Gọi 0389059185</span>
                        </div>
                      </div>
                    </div>
                 
              </div>  
           
        </div>
      </div>

      <ModalBooking
        open={openModalBook}
        setOpen={setOpenModalBook}
        tourId={id}
      />
    </>
  );
};

export default TourDetail;
