import imageHome from "../../assets/Banner.jpg";
import "./home.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import roomBanner from "../../assets/roomBanner.jpg";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Rate, Input } from 'antd';
import moment from "moment/moment";
import { Link, useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate()
  const {listTour, listRoom} = props
  
  console.log('listTour>>>',listTour);

  return (
    <>
      <div className="home">

        <div className="overlay">
          <img src={imageHome} alt="#img" />
        </div>

        <div className="homeContent container">

          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your Holiday</h1>
          </div>

          <div className="cardDiv">
              <div className="content">
                    <Input placeholder="Search your Holiday" className="input-search"/>
              </div>
          </div>

        </div>

      </div>
      <div className="home-tour-container">
        <div className="text-header">
          <h1>Khám phá điểm đến nổi bật</h1>
          <p>
            Nhận cơ hội để đi du lịch | Đi nghỉ | Nghỉ dưỡng cùng gia đình | Tận
            hưởng chính mình
          </p>
        </div>
        <div className="layout-intro">
          <div className="list-img">
            <div className="img-item">
              <img src={img2} alt="#" />
            </div>
            <div className="img-item">
              <img src={img1} alt="#" />
            </div>
            <div className="img-item">
              <img src={img4} alt="#" />
            </div>
            <div className="img-item">
              <img src={img3} alt="#" />
            </div>
          </div>
        </div>
        <div className="text-review">
          <h1>Tour HOT 2023</h1>
          <p>
            Chào hè 2023 sôi động với những Tour du lịch hấp dẫn, những địa điểm
            thu hút khách du lịch tại Nha Trang. Khám phá ngay để có thêm những
            trải nghiệm hè thật sôi động bên gia đình, người thân nào !
          </p>
        </div>
        <div className="tour-list">
          {listTour.length > 0 &&
            listTour?.map(tour => {
              return (
                <>
                  <div className="tour-item">
                    <div className="left-item">
                      <div className="media-tour">
                        <img src={`${tour.logo}`} alt="#imgTour" />
                      </div>

                      <div className="tour-content">
                        <h5 className="tour-name">{tour.name}</h5>
                        <p className="tour-desc">
                         {tour.categories.description}
                        </p>
                        <div className="list-info">
                          <div className="item-info" style={{display:'flex', alignItems:'center'}}>
                              <IoIosTime />
                            <span>
                              {moment(`${tour.end_date}`).diff(moment(`${tour.start_date}`),"days")} ngày
                            </span>
                          </div>
                          <div className="item-info" style={{display:'flex', alignItems:'center'}}>
                            
                              <BsFillPeopleFill />
                            <span>
                              {tour?.categories.number} người
                            </span>
                          </div>
                          <div className="item-info" style={{display:'flex', alignItems:'center'}}>
                            <IoLocationSharp />
                            <span>
                              4 địa điểm
                            </span>
                          </div>
                          <div className="item-info" style={{display:'flex', alignItems:'center'}}>
                            <IoTicket />
                            <span>{tour?.can_order} Vé còn lại</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-item">
                      <div className="review-and-start">
                        <span className="the-reviews">3.1540 Review</span>
                        <span>
                           <Rate disabled defaultValue={5} />
                        </span>
                      </div>
                      <span className="price-tour">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tour.cost ?? 0)} / Người
                      </span>
                      <button className="btn-booking"
                        onClick={()=>navigate(`/tour/${tour?.id}`)}
                      >Đặt ngay</button>
                    </div>
                  </div>
                </>
              )
            })
          }
          
        </div>
      </div>
      <div className="btn-view-more">
        <button onClick={()=>navigate('/tour')}>Xem thêm</button>
      </div>
      <div className="home-room-container">
        <div className="banner-room">
          <img src={roomBanner} alt="#bannerImg" />
        </div>

        <div className="list-room">
          {listRoom.length > 0 && 
          
          listRoom?.map(room => {
            return (
              <>
                <div className="room-item" onClick={()=>navigate(`/room/${room?.id}`)}>
                  <div className="room-media">
                    <img src={`${room.logo}`} alt="#roomImg" />
                  </div>
                  <div className="room-info">
                    <div className="room-info-top">
                      <h4 className="room-title">
                        {room.name}
                      </h4>
                      <div className="room-rate">
                          <Rate disabled defaultValue={4} />
                      </div>
                      <div className="room-review">
                        <span style={{color:'red'}}>Đánh giá: 4.0 Rất tốt</span>
                        <span>(1.27k đánh giá)</span>
                      </div>
                      <div className="room-tag">
                        <span className="tag-item">Giá tốt</span>
                        <span className="tag-item">Gần biển</span>
                        <span className="tag-item">Luxury</span>
                      </div>
                    </div>
                    <div className="room-info-bottom">
                      <h3 className="room-price">
                      {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(room.cost ?? 0)}
                      </h3>
                      <p className="room-noti">*Chấp nhận sau 24h</p>
                    </div>
                  </div>
                </div>     
              </>
            )
          })   
          }
        </div>
       
      </div>
            <div className="view-more-room">
           
              <Link>
                <span>
                  Xem thêm
                </span>
              </Link>
         
            </div>
    
    
    </>
  );
};

export default HomePage;
