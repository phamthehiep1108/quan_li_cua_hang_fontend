import { useState } from "react";
import img4 from "../../assets/img4.jpg";
import "./hisDetail.scss";
import { Divider, message, Button, Steps } from "antd";
import moment from "moment";
import ModalCancelOrder from "./ModalCancelOrder";
import ModalPayment from "./ModalPayment";

const HistoryDetail = (props) => {
  const { dataDetail } = props;
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const [openModalPayment, setOpenModalPayment] = useState(false)

  return (
    <>
      <div className="history-container">
        <div className="history-option">
          <div className="step-order">
            <Steps
              current={1}
              items={[
                {
                  title: "Đơn hàng đã đặt",
                 // description: " a description 1",
                },
                {
                  title: "Chờ thanh toán",
                 // description: " a description 2",
                },
                {
                  title: "Thanh toán thành công",
                 // description: " a description 3",
                },
                {
                  title: "Đánh giá",
                 // description: " a description 3",
                },
              ]}
            />
          </div>
          <span className="title-history-detail">{`Mã đơn hàng : ĐH200${dataDetail?.id}`}</span>
        </div>
        <div className="detail-order">
          <div className="content-left">
            <div className="media">
              <img src={dataDetail?.logo} alt="#ImgOrder" />
            </div>
            <div className="content-detail">
              <span className="title-detail">{dataDetail?.name}</span>
              <div className="info-tour-one">
                <span>
                  {moment(`${dataDetail?.end_date}`).diff(
                    moment(`${dataDetail?.start_date}`),
                    "days"
                  )}{" "}
                  ngày
                </span>
                <span>4 địa điểm</span>
                <span>Tàu + Ô tô</span>
              </div>
              <div className="info-tour-two">
                <div className="info-detail-item">
                  <span className="info-title">Địa diểm khởi hành:</span>
                  <span>Hà Nội</span>
                </div>
                <div className="info-detail-item">
                  <span className="info-title">Ngày khởi hành:</span>
                  <span>{dataDetail?.start_date}</span>
                </div>
                <div className="info-detail-item">
                  <span className="info-title">Ngày kết thúc:</span>
                  <span>{dataDetail?.end_date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right">
            <span className="title-content-right">
              Thông tin người thanh toán
            </span>
            <div className="item-content-right">
              <div className="main-content-right">
                <span className="item-one">Họ và tên:</span>
                <span className="item-two">
                  {dataDetail?.user?.display_name}
                </span>
              </div>
              <div className="main-content-right">
                <span className="item-one">Số điện thoại:</span>
                <span className="item-two">
                  {dataDetail?.user?.phone_number}
                </span>
              </div>
              <div className="main-content-right">
                <span className="item-one">Email:</span>
                <span className="item-two">{dataDetail?.user?.email}</span>
              </div>
            </div>
            <div className="group-btn-right">
              <Button type="primary" onClick={()=>setOpenModalPayment(true)}>Thanh toán</Button>
              <Button type="primary" danger onClick={()=>setOpenModalCancel(true)}>
                Hủy đơn hàng
              </Button>
            </div>
          </div>
        </div>
        <div className="total-price">
          <span>Thành tiền</span>
          <span className="price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(dataDetail?.cost ?? 0)}
          </span>
        </div>
      </div>
      <ModalCancelOrder
        open = {openModalCancel}
        setOpen = {setOpenModalCancel}
        id = {dataDetail?.id}

      />
      <ModalPayment
        open = {openModalPayment}
        setOpen = {setOpenModalPayment}
      />
    </>
  );
};

export default HistoryDetail;
