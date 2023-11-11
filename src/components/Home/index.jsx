import imageHome from "../../assets/Banner.jpg";
import "./home.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import roomBanner from "../../assets/roomBanner.jpg";
import roomItem from "../../assets/roomItem.jpg";
const Home = () => {
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
            Test content
            <div className="content">content 2</div>
            <div className="content">content 3</div>
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
          <div className="tour-item">
            <div className="left-item">
              <div className="media-tour">
                <img src={img1} alt="#imgTour" />
              </div>

              <div className="tour-content">
                <h5 className="tour-name">Tour Đảo Yến - Hòn Nội</h5>
                <p className="tour-desc">
                  Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                  Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                  khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                  phong phú đa dạng bậc nhất Việt Nam, được ăn trưa giữa biển
                  khơi, giải trí với “ca nhạc quốc tế”, thỏa chí cùng “quầy bar
                  nổi” đặc sắc…
                </p>
                <div className="list-info">
                  <div className="item-info">
                    <span>6 ngày</span>
                  </div>
                  <div className="item-info">
                    <span>20 người</span>
                  </div>
                  <div className="item-info">
                    <span>4 địa điểm</span>
                  </div>
                  <div className="item-info">
                    <span>Tàu + Ô tô</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-item">
              <div className="review-and-start">
                <span className="the-reviews">3.1540 Review</span>
                <span>Start Review</span>
              </div>
              <span className="price-tour">1.000.000 VND/Người</span>
              <button className="btn-booking">Đặt ngay</button>
            </div>
          </div>
          <div className="tour-item">
            <div className="left-item">
              <div className="media-tour">
                <img src={img1} alt="#imgTour" />
              </div>

              <div className="tour-content">
                <h5 className="tour-name">Tour Đảo Yến - Hòn Nội</h5>
                <p className="tour-desc">
                  Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                  Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                  khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                  phong phú đa dạng bậc nhất Việt Nam, được ăn trưa giữa biển
                  khơi, giải trí với “ca nhạc quốc tế”, thỏa chí cùng “quầy bar
                  nổi” đặc sắc…
                </p>
                <div className="list-info">
                  <div className="item-info">
                    <span>6 ngày</span>
                  </div>
                  <div className="item-info">
                    <span>20 người</span>
                  </div>
                  <div className="item-info">
                    <span>4 địa điểm</span>
                  </div>
                  <div className="item-info">
                    <span>Tàu + Ô tô</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-item">
              <div className="review-and-start">
                <span className="the-reviews">3.1540 Review</span>
                <span>Start Review</span>
              </div>
              <span className="price-tour">1.000.000 VND/Người</span>
              <button className="btn-booking">Đặt ngay</button>
            </div>
          </div>
          <div className="tour-item">
            <div className="left-item">
              <div className="media-tour">
                <img src={img1} alt="#imgTour" />
              </div>

              <div className="tour-content">
                <h5 className="tour-name">Tour Đảo Yến - Hòn Nội</h5>
                <p className="tour-desc">
                  Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                  Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                  khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                  phong phú đa dạng bậc nhất Việt Nam, được ăn trưa giữa biển
                  khơi, giải trí với “ca nhạc quốc tế”, thỏa chí cùng “quầy bar
                  nổi” đặc sắc…
                </p>
                <div className="list-info">
                  <div className="item-info">
                    <span>6 ngày</span>
                  </div>
                  <div className="item-info">
                    <span>20 người</span>
                  </div>
                  <div className="item-info">
                    <span>4 địa điểm</span>
                  </div>
                  <div className="item-info">
                    <span>Tàu + Ô tô</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-item">
              <div className="review-and-start">
                <span className="the-reviews">3.1540 Review</span>
                <span>Start Review</span>
              </div>
              <span className="price-tour">1.000.000 VND/Người</span>
              <button className="btn-booking">Đặt ngay</button>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-view-more">
        <button>Xem thêm</button>
      </div>
      <div className="home-room-container">
        <div className="banner-room">
          <img src={roomBanner} alt="#bannerImg" />
        </div>

        <div className="list-room">
          <div className="room-item">
            <div className="room-media">
              <img src={roomItem} alt="#roomImg" />
            </div>
            <div className="room-info">
              <div className="room-info-top">
                <h4 className="room-title">
                  Resort VINPEARL RESORT & SPA Nha Trang Bay
                </h4>
                <div className="room-rate">START RATING</div>
                <div className="room-review">
                  <span>Đánh giá: 4.0 Rất tốt</span>
                  <span>(1.27k đánh giá)</span>
                </div>
                <div className="room-tag">
                  <span className="tag-item">Giá tốt</span>
                  <span className="tag-item">Gần biển</span>
                  <span className="tag-item">Luxury</span>
                </div>
              </div>
              <div className="room-info-bottom">
                <h3 className="room-price">3.650.000Đ</h3>
                <p className="room-noti">*Chấp nhận sau 24h</p>
              </div>
            </div>
          </div>
          <div className="room-item">
            <div className="room-media">
              <img src={roomItem} alt="#roomImg" />
            </div>
            <div className="room-info">
              <div className="room-info-top">
                <h4 className="room-title">
                  Resort VINPEARL RESORT & SPA Nha Trang Bay
                </h4>
                <div className="room-rate">START RATING</div>
                <div className="room-review">
                  <span>Đánh giá: 4.0 Rất tốt</span>
                  <span>(1.27k đánh giá)</span>
                </div>
                <div className="room-tag">
                  <span className="tag-item">Giá tốt</span>
                  <span className="tag-item">Gần biển</span>
                  <span className="tag-item">Luxury</span>
                </div>
              </div>
              <div className="room-info-bottom">
                <h3 className="room-price">3.650.000Đ</h3>
                <p className="room-noti">*Chấp nhận sau 24h</p>
              </div>
            </div>
          </div>
          <div className="room-item">
            <div className="room-media">
              <img src={roomItem} alt="#roomImg" />
            </div>
            <div className="room-info">
              <div className="room-info-top">
                <h4 className="room-title">
                  Resort VINPEARL RESORT & SPA Nha Trang Bay
                </h4>
                <div className="room-rate">START RATING</div>
                <div className="room-review">
                  <span>Đánh giá: 4.0 Rất tốt</span>
                  <span>(1.27k đánh giá)</span>
                </div>
                <div className="room-tag">
                  <span className="tag-item">Giá tốt</span>
                  <span className="tag-item">Gần biển</span>
                  <span className="tag-item">Luxury</span>
                </div>
              </div>
              <div className="room-info-bottom">
                <h3 className="room-price">3.650.000Đ</h3>
                <p className="room-noti">*Chấp nhận sau 24h</p>
              </div>
            </div>
          </div>
          <a style={{marginTop:'20px'}}>Xem thêm --+</a>
        </div>
       
      </div>

    </>
  );
};

export default Home;
