import imageHome from "../../assets/Banner.jpg";
import "./listtour.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import roomBanner from "../../assets/roomBanner.jpg";
import roomItem from "../../assets/roomItem.jpg";
import { Checkbox } from 'antd';
import { InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { Select } from 'antd';


const ListTour = () => {
    return (
        <>
        <div className="listtour">
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
            <div className="container-list-tour">
                <div className="filter-select-option">
                    <div className="inputPrice">
                        <span className="title-select">Khoảng giá</span>
                        <InputNumber defaultValue={1} />  -  <InputNumber defaultValue={1} />
                            <Button type="primary" icon={<SearchOutlined />} className="btn-search">
                                Search
                            </Button>
                    </div>
                    <div className="listcheckbox">
                        <span className="title-select">Loại tour</span>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                            <div className="checkbox"><Checkbox defaultChecked={false}> Tất cả </Checkbox></div>
                    </div>
                </div>
                <div className="container-data-tour">
                    <div className="select-price">
                        <span>Sắp xếp theo: </span>
                            <Select
                                showSearch
                                placeholder="Select price"
                                optionFilterProp="children"
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Thấp đến cao',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Cao đến thấp',
                                    },
                                ]}
                            />
                    </div>
                    <div className="tour-list">
                        <div className="tour-item">
                                <div className="left-item">
                                    <div className="media-tour">
                                        <img src={img1} alt="#imgTour" />
                                    </div>
                                    <div className="tour-content">
                                        <h5 className="tour-name">Tour du thuyền khám phá Vịnh Nha Trang - Cruise to explore Nha Trang Bay</h5>
                                        <p className="tour-desc">
                                            Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                                            Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                                            khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                                            phong phú đa dạng bậc nhất Việt Nam.
                                        </p>
                                        <div className="list-info">
                                            <div className="item-info">
                                                <span>6 ngày</span>
                                            </div>
                                            <div className="item-info">
                                                <span>20 người</span>
                                            </div>
                                            <div className="item-info-price">
                                                <h3>Giá từ: </h3>
                                                <span>1,000,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="tour-item">
                                <div className="left-item">
                                    <div className="media-tour">
                                        <img src={img1} alt="#imgTour" />
                                    </div>
                                    <div className="tour-content">
                                        <h5 className="tour-name">Tour du thuyền khám phá Vịnh Nha Trang - Cruise to explore Nha Trang Bay</h5>
                                        <p className="tour-desc">
                                            Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                                            Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                                            khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                                            phong phú đa dạng bậc nhất Việt Nam.
                                        </p>
                                        <div className="list-info">
                                            <div className="item-info">
                                                <span>6 ngày</span>
                                            </div>
                                            <div className="item-info">
                                                <span>20 người</span>
                                            </div>
                                            <div className="item-info-price">
                                                <h3>Giá từ: </h3>
                                                <span>1,000,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="tour-item">
                                <div className="left-item">
                                    <div className="media-tour">
                                        <img src={img1} alt="#imgTour" />
                                    </div>
                                    <div className="tour-content">
                                        <h5 className="tour-name">Tour du thuyền khám phá Vịnh Nha Trang - Cruise to explore Nha Trang Bay</h5>
                                        <p className="tour-desc">
                                            Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                                            Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                                            khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                                            phong phú đa dạng bậc nhất Việt Nam.
                                        </p>
                                        <div className="list-info">
                                            <div className="item-info">
                                                <span>6 ngày</span>
                                            </div>
                                            <div className="item-info">
                                                <span>20 người</span>
                                            </div>
                                            <div className="item-info-price">
                                                <h3>Giá từ: </h3>
                                                <span>1,000,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="tour-item">
                                <div className="left-item">
                                    <div className="media-tour">
                                        <img src={img1} alt="#imgTour" />
                                    </div>
                                    <div className="tour-content">
                                        <h5 className="tour-name">Tour du thuyền khám phá Vịnh Nha Trang - Cruise to explore Nha Trang Bay</h5>
                                        <p className="tour-desc">
                                            Tour 4 đảo là “đặc sản” du lịch biển đảo của Nha Trang - Khánh
                                            Hòa mà hiếm địa phương nào có được. Tham gia tour 4 đảo, du
                                            khách sẽ được tận mắt chiêm ngưỡng rạn san hô, cá cảnh biển
                                            phong phú đa dạng bậc nhất Việt Nam.
                                        </p>
                                        <div className="list-info">
                                            <div className="item-info">
                                                <span>6 ngày</span>
                                            </div>
                                            <div className="item-info">
                                                <span>20 người</span>
                                            </div>
                                            <div className="item-info-price">
                                                <h3>Giá từ: </h3>
                                                <span>1,000,000</span>
                                            </div>
                                        </div>
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

export default ListTour;
