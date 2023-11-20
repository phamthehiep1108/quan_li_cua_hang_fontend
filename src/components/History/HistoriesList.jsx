import "./layoutHis.scss";
import img4 from '../../assets/img4.jpg'
import { Divider, Badge, Input, message, Dropdown, Select, Avatar, Button, Tag } from "antd";
const HistoriesList = () => {
  const { Search } = Input;
  //search
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  //select
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="history-container">
        <div className="history-option">
            <span className="title-history">Lịch sử đơn hàng</span>
            <div className="option-filter">
            <div className="input-search">
                <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 386 }}
                />
            </div>
            <span style={{fontSize:'14px', fontWeight:"500"}}>Sắp xếp theo</span>
            <div className="input-select">
            <Select
                defaultValue="lucy"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                    value: 'jack',
                    label: 'Jack',
                    },
                    {
                    value: 'lucy',
                    label: 'Lucy',
                    },
                
                ]}
            />
            </div>
            
            </div>
        </div>
        <div className="list-order">
                <div className="order-item">
                    <div className="header-item">
                        <div className="info-code">
                          <span className="code-order">Mã đơn hàng: ĐH20001</span>
                          <span className="info-tag">
                            <Tag color="orange" style={{fontSize:'13px'}}>Chờ thanh toán</Tag>
                          </span>
                        </div>
                        <div className="btn-handle">
                            <Button danger>Hủy đơn hàng</Button>
                            <Button type="primary">Chi tiết đơn</Button>
                        </div>
                    </div>
                    <Divider/>
                    <div className="content-item">
                      <div className="media-content">
                        <img src={img4} alt="#ImgOrder" />
                      </div>
                      <div className="tour-content">
                        <span className="title">Tour du lịch trải nghiệm tại làng nghề Mỹ Trạch</span>
                        <span className="date-start">Ngày bắt đầu: 01/05/2023</span>
                        <span className="tour-price">7.300.000 VND</span>
                      </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default HistoriesList;
