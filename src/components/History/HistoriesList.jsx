import "./layoutHis.scss";
import img4 from '../../assets/img4.jpg'
import { Divider, Badge, Input, message, Dropdown, Select, Avatar, Button, Tag, Pagination } from "antd";
import { callGetListOrderUser } from "../../services/api";
import { useState, useEffect } from "react";
const HistoriesList = () => {
  
  const { Search } = Input;

  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(5)

  const [listOrder, setListOrder] = useState([])
  const [typeRoom, setTypeRoom] = useState("&type[]=tour")
  const [statusOrder, setStatusOrder] = useState("&status[]=pending")


  //search
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  //select
  const handleChangeType = (value) => {
    console.log(`selected ${value}`);
    if(value !== typeRoom){
      setTypeRoom(value)
    }
  };
  const handleChangeStatus = (value) => {
    console.log(`selected ${value}`);
    //&type[]=tour
    if(value !== statusOrder){
      setStatusOrder(value)
    }
  };

  //paginate

  const handleOnChangePage = (curr, size) => {
    if (curr !== currentPage) {
      setCurrentPage(curr);
    }
    if (size !== pageSize) {
      setPageSize(size);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    fetchListOrderCus()
  }, [currentPage,pageSize, typeRoom, statusOrder]);

  const fetchListOrderCus = async() => {
    //page=1&perpage=10&type[]=tour&status[]=cancel
    let queryOrder = `page=${currentPage}&perpage=${pageSize}`

    if(typeRoom){
      queryOrder+=typeRoom
    }

    if(statusOrder){
      queryOrder+=statusOrder
    }

      const res = await callGetListOrderUser(queryOrder)
      console.log('check res>>>',res);
      if(res && res?.data){
        setListOrder(res.data.data)
        setTotal(res.data.total)
      }
  }

  return (
    <>
      <div className="history-container">
        <div className="history-option">
            <span className="title-history">Lịch sử đơn hàng</span>
            <div className="option-filter">
               <div className="input-search">
                <Search
                placeholder="Tìm kiếm theo tên đơn hàng"
                onSearch={onSearch}
                style={{ width: 386 }}
                />
            </div>
            <div className="filter-status-order">
              <span style={{fontSize:'14px', fontWeight:"500"}}>Lọc theo</span>
              <div className="input-select">
              <Select
                  defaultValue="Tour"
                  style={{
                      width: 120,
                  }}
                  onChange={handleChangeType}
                  options={[
                      {
                      value: '&type[]=tour',
                      label: 'Tour',
                      },
                      {
                      value: '&type[]=room',
                      label: 'Room',
                      },
                  
                  ]}
              />
              </div>
            </div>
            <div className="filter-status-order">
              <span style={{fontSize:'14px', fontWeight:"500"}}>Lọc theo trạng thái</span>
              <div className="input-select">
            <Select
                defaultValue="Chờ thannh toán"
                style={{
                    width: 180,
                }}
                onChange={handleChangeStatus}
                options={[
                    {
                    value: '&status[]=pending',
                    label: 'Chờ thanh toán',
                    },
                    {
                    value: '&status[]=access',
                    label: 'Đã chấp nhận',
                    },
                    {
                    value: '&status[]=ending',
                    label: 'Đã kết thúc',
                    },
                
                    {
                    value: '&status[]=cancel',
                    label: 'Đã bị hủy',
                    },
                
                ]}
            />
            </div>
            </div>
            
            </div>
        </div>
        <div className="list-order">
          {listOrder?.length > 0 && listOrder?.map(item => {
            return (
              <>
                <div className="order-item">
                    <div className="header-item">
                        <div className="info-code">
                          <span className="code-order">{`Mã đơn hàng: ĐH2000${item?.room_id}`}</span>
                          <span className="info-tag">
                            {item?.status === 'pending'?
                                <Tag color="orange" style={{fontSize:'13px'}}>Chờ thanh toán</Tag>
                            :
                            item?.status === 'access'?
                               <Tag color="green" style={{fontSize:'13px'}}>Đã thanh toán</Tag>
                            :
                            item?.status === 'ending'?
                               <Tag color="blue" style={{fontSize:'13px'}}>Đã xử lý xong</Tag>
                            :
                               <Tag color="red" style={{fontSize:'13px'}}>Đơn hàng bị hủy </Tag>
                            }
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
                        <img src={item?.logo} alt="#ImgOrder" />
                      </div>
                      <div className="tour-content">
                        <span className="title">{item?.name}</span>
                        <span className="date-start">{`Ngày bắt đầu: ${item?.start_date?.substring(0, 10)}`}</span>
                        <span className="tour-price">
                          {`Thành tiền `}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item?.cost ?? 0)}
                        </span>
                      </div>
                    </div>
                </div>
              </>
            )
          })
          
          }
                
               
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
            <Pagination 
              currentPage = {currentPage}
              pageSize = {pageSize}
              onChange={(curr, size) => handleOnChangePage(curr, size)}
              total={total} 
            />
        </div>
      </div>
    </>
  );
};

export default HistoriesList;
