import imgNew from '../../assets/night.jpg'
import imgBig from '../../assets/tour-duth3.jpg'
import imgItem from '../../assets/tour-dao7.jpg'
import imgPost from '../../assets/tour-dao8.jpg'
import imgNew1 from '../../assets/news1.jpg'
import imgNew2 from '../../assets/news2.jpg'
import imgNew3 from '../../assets/news3.jpg'
import imgNew4 from '../../assets/news4.jpg'
import './new.scss'

const NewPage = () => {
  return (
    <>
      <div className="home-new">
        <div className="overlay-new">
          <img src={imgNew} alt="#img" />
        </div>
      </div>
      <div className="page-container">
            <div className="title-page">
                Mới nhất
            </div>
            <div className="main-news-page">
                <div className="page-left">   
                    <div className="news-media-big">
                        <img src={imgBig} alt="#imgBig" />
                        <div className="content-in-media">
                            <span className='day-in-media'>20/04/2023</span>
                            <span className='title-in-media'>Tàu du lịch cao cấp SILVER MUSE đến Nha Trang</span>
                            <p className='desc-in-media'>
                              Kỳ nghỉ lễ 30-4 và 1-5 năm nay, thời tiết ở Nha Trang khá nóng. Khách du lịch đến Nha Trang đã kéo nhau đi tour biển, đảo để “giải nhiệt”. Sáng 30-4, lượng khách đến Bến tàu du lịch Nha Trang ...
                            </p>
                            <span className='read-more-in-media'>Đọc thêm</span>
                        </div>
                    </div>
                    <div className="list-news">
                        <div className="new-item">
                            <div className="news-media-item">
                                <img src={imgNew4} alt="#imgItem" />
                            </div>
                            <div className="new-bottom">
                                <div className="new-info">
                                    <span className="new-tag">Nổi bật</span>
                                    <span className="new-day">17/01/2023</span>
                                </div>
                                <div className="new-title">
                                    “Thiên đường đôi ta” tại Wild Beach Resort & Spa
                                </div>
                                <div className="new-content-item">
                                    Khu nghỉ dưỡng Wild Beach Resort & Spa vừa đưa ra chương trình “Thiên đường đôi ta” dành cho những đôi tình nhân nhân dịp Tết Canh Dần và lễ Tình nhân ...
                                </div>
                                <div className="read-more">
                                    Đọc thêm
                                </div>
                            </div>
                        </div>
                        <div className="new-item">
                            <div className="news-media-item">
                                <img src={imgNew1} alt="#imgItem" />
                            </div>
                            <div className="new-bottom">
                                <div className="new-info">
                                    <span className="new-tag">Nổi bật</span>
                                    <span className="new-day">17/01/2023</span>
                                </div>
                                <div className="new-title">
                                      Đến Wonderpark Nha Trang để thư giãn và tản bộ
                                </div>
                                <p className="new-content-item">
                                    Với giá vé vào cửa 20.000 đồng /người người lớn và 10.000 đồng/trẻ em, du khách đã có thể tham quan toàn cảnh khu du lịch, chơi trò chơi, tắm biển, thư giãn.
                                </p>
                                <div className="read-more">
                                    Đọc thêm
                                </div>
                            </div>
                        </div>
                        <div className="new-item">
                            <div className="news-media-item">
                                <img src={imgNew2} alt="#imgItem" />
                            </div>
                            <div className="new-bottom">
                                <div className="new-info">
                                    <span className="new-tag">Nổi bật</span>
                                    <span className="new-day">17/01/2023</span>
                                </div>
                                <div className="new-title">
                                    Lặn biển khám phá “Hòn Mun” tại Nha Trang
                                </div>
                                <div className="new-content-item">
                                    Nằm trong vịnh Nha Trang, Hòn Mun là khu bảo tồn biển đầu tiên của nước ta. Sau gần mười năm dày công bảo vệ và phát triển môi trường mang tính bền vững.
                                </div>
                                <div className="read-more">
                                    Đọc thêm
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="post-title-big">
                        Bài viết
                    </div>
                    <div className="list-post">
                        <div className="post-item">
                            <div className="media-post">
                                <img src={imgNew3} alt="#imgPost" />
                            </div>
                            <div className="post-content">
                               
                                    <div className="post-info">
                                        <span className='post-tag'>Nổi bật</span>
                                        <span className='post-day'>17/03/2023</span>
                                    </div>
                                    <div className="post-title">
                                        Hơn 11.000 lượt du khách tham quan Tháp Bà Ponagar trong 2 ngày đầu nghỉ lễ
                                    </div>
                                    <div className="post-desc">
                                        Nằm gần trung tâm TP. Nha Trang, Khu di tích Tháp Bà Ponagar luôn là điểm tham quan nằm trong các tour du lịch đến thành phố biển. Theo bà Nguyễn Thị Thúy Hằng - Trưởng Ban quản lý Khu.
                                    </div>
                                    <div className="post-read-more">
                                        Đọc thêm
                                    </div>
                               
                            </div>
                        </div>
                        <div className="post-item">
                            <div className="media-post">
                                <img src={imgItem} alt="#imgPost" />
                            </div>
                            <div className="post-content">
                               
                                    <div className="post-info">
                                        <span className='post-tag'>Nổi bật</span>
                                        <span className='post-day'>17/03/2023</span>
                                    </div>
                                    <div className="post-title">
                                        10 chuyến du lịch Nha Trang 3 ngày 3 đêm trọn gói chi phí chỉ từ 1,8 triệu
                                    </div>
                                    <div className="post-desc">
                                        Nằm gần trung tâm TP. Nha Trang, Khu di tích Tháp Bà Ponagar luôn là điểm tham quan nằm trong các tour du lịch đến thành phố biển. Theo bà Nguyễn Thị Thúy Hằng - Trưởng Ban quản lý Khu.
                                    </div>
                                    <div className="post-read-more">
                                        Đọc thêm
                                    </div>
                               
                            </div>
                        </div>
                        <div className="post-item">
                            <div className="media-post">
                                <img src={imgPost} alt="#imgPost" />
                            </div>
                            <div className="post-content">
                               
                                    <div className="post-info">
                                        <span className='post-tag'>Nổi bật</span>
                                        <span className='post-day'>17/03/2023</span>
                                    </div>
                                    <div className="post-title">
                                         Du lịch Cam Ranh – Chia sẻ kinh nghiệm chi tiết, cập nhật mới nhất
                                    </div>
                                    <div className="post-desc">
                                        Nằm gần trung tâm TP. Nha Trang, Khu di tích Tháp Bà Ponagar luôn là điểm tham quan nằm trong các tour du lịch đến thành phố biển. Theo bà Nguyễn Thị Thúy Hằng - Trưởng Ban quản lý Khu.
                                    </div>
                                    <div className="post-read-more">
                                        Đọc thêm
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-right">
                    <div className="col-right-one">

                        <div className="title-right">
                            Xem nhiều nhất
                        </div>
                        <div className="list-newfeat">
                            <div className="newfeat-item">
                                <div className="newfeat-info">
                                    <span className='newfeat-tag'>Nổi bật</span>
                                    <span>17/03/2323</span>
                                </div>
                                <div className="newfeat-content">
                                    Chuẩn bị tổ chức Lễ hội Dù lượn Nha Trang lần thứ 2 năm 2023
                                </div>
                            </div>
                            <div className="newfeat-item">
                                <div className="newfeat-info">
                                    <span className='newfeat-tag'>Nổi bật</span>
                                    <span>17/03/2323</span>
                                </div>
                                <div className="newfeat-content">
                                    Chuẩn bị tổ chức Lễ hội Dù lượn Nha Trang lần thứ 2 năm 2023
                                </div>
                            </div>
                            <div className="newfeat-item">
                                <div className="newfeat-info">
                                    <span className='newfeat-tag'>Nổi bật</span>
                                    <span>17/03/2323</span>
                                </div>
                                <div className="newfeat-content">
                                    Chuẩn bị tổ chức Lễ hội Dù lượn Nha Trang lần thứ 2 năm 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default NewPage;
