import {Table, Badge, Select, Button, Popconfirm, message, Form, Drawer } from "antd";
import {
    RedoOutlined,
    DeleteTwoTone,
    EditTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { callGetListOrder, callGetRoomTour } from "../../../services/api";
import InputSearchOrder from "./InputSearchOrder";
import ViewDetailOrder from "./ViewDetailOrder";
import ModalUpdateStatus from "./ModalUpdateStatus";
// import InputSearchRT from "./InputSearchRoom";

const TableOrder = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [typeRT, setTypeRT] = useState("")
    const [statusOrder, setStatusOrder] = useState("")
    const [querySearch, setQuerySearch] = useState("")
    const [listOrderRoomTour, setListOrderRoomTour] = useState([])

    const [openViewModal, setOpenViewModal] = useState(false)
    const [dataViewDetail, setDataViewDetail] = useState({})
    
    const [openModalUpdateStatus, setOpenModalUpdateStatus] = useState(false)
    const [idOrder, setIdOrder] = useState(0)

  //Table Component--------------------------
  const columns = [
    {
      title: "ID",
      dataIndex: "orderId",
      render: (text, record) => (
        <a
          onClick={() => {
            setOpenViewModal(true);
            setDataViewDetail(record);
           
          }}
        >
          ORD0{record.orderId}
        </a>
      ),
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName"
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate"
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => `${text} VNĐ`, // Thêm VNĐ vào sau totalAmount
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus"
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <EditTwoTone
            twoToneColor="#3cc41a"
            style={{ cursor: "pointer", marginLeft: "20px" }}
            onClick={() => {
              setOpenModalUpdateStatus(true);
              setIdOrder(record.orderid);
            }}
          />
        </>
      ),
    },
  ];
  

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    //console.log("selectedRowKeys >>> ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  
  //pagination
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current !== currentPage) {
      setCurrentPage(pagination.current);
    }

    if (pagination && pagination.pageSize !== pageSize) {
      setPageSize(pagination.pageSize);
      setCurrentPage(1);
    }
  };

  // Selected
  const handleChangeType = (value) => {
    setTypeRT(value)
  };

  const handleChangeStatus = (value) => {
    setStatusOrder(value)
  }

  //Search
  const handleQuerySearch = (searchInput) => {
      setQuerySearch(searchInput)
  }

  //-----------------------Main Event--------------------------
  useEffect(() => {
    fetchGetOrderRoomTour();
  }, [querySearch]);

  const fetchGetOrderRoomTour = async () => {
    setIsLoading(true);
    // let queryRT= `index?page=${currentPage}&perpage=${pageSize}`
   
    // if(typeRT){
    //   queryRT += typeRT
    // }
    let queryRT = ''
    if(querySearch){
      queryRT += querySearch  
    }

    // if(statusOrder){
    //   queryRT += statusOrder
    // }
  //  console.log('query>>>', queryRT);
    const res = await callGetListOrder(queryRT);
    
    if (res && res?.data) {
      setListOrderRoomTour(res.data)
      
      setTotal(res.total)
      //console.log("resAll",res);
    }
    setIsLoading(false);
  };

//Confirm Delete
const handleDelete = async() => {
  setOpenDeleteModal(true)
};


  return (
    <>
      <div className="container-table-cate">
        
        <div className="header-table">
          <div className="title-table">
            <InputSearchOrder handleQuerySearch = {handleQuerySearch}/>
          </div>
         
        </div>
        <div
          style={{
            marginLeft: 8,
          }}
        >
          {/* selectedRowKeys la array gom cac phan tu da select */}
          <span>
            {selectedRowKeys.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "20px",
                  cursor:'pointer'
                }}
              >
                <span style={{ padding: "5px 8px", border: "1px solid black", borderRadius:'5px' }}>
                  {`Selected ${selectedRowKeys.length} items`}
                </span>
               
                  <Button danger onClick={()=>handleDelete()}>Delete Item</Button>
              
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
        <Table
        rowKey={(record) => record.id} // fix select one but select all
          title={() => {
            return (
              <div className="selected-status" style={{display:"flex", justifyContent:'space-between'}}>
                <span>
                  Orders manager
                </span>
                <div style={{display:"flex", gap:'30px'}}>
                  <span>
                  <Select
                    showSearch
                    placeholder="Select a status"
                    optionFilterProp="children"
                    onChange={handleChangeStatus}
                    options={[
                      { value: '&status[]=pending', label: 'Pending' },
                      { value: '&status[]=access', label: 'Access' },
                      { value: '&status[]=ending', label: 'Ending' },
                      { value: '&status[]=cancel', label: 'Cancel' },
                    ]}
                 />
                  </span>
                  <span>
                  <Select
                    defaultValue="All"
                    style={{ width: 120 }}
                    onChange={handleChangeType}
                    options={[
                      { value: '&type[]=room&type[]=tour', label: 'All' },
                      { value: '&type[]=room', label: 'Room' },
                      { value: '&type[]=tour', label: 'Tour' },
                    ]}
                  />
                  </span>
                </div>
              </div>
            );
          }}
          
            rowSelection={rowSelection}
            columns={columns}
            dataSource={listOrderRoomTour}

            onChange={onChange}
            loading={isLoading}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              pageSizeOptions: ["5", "10", "15", "20"],
              showSizeChanger: true,
              total: total,
              showTotal: (total, range) => {
                return (
                  <div>
                    {range[0]}- {range[1]} / total {total}
                  </div>
                );
              },
            }}
        />
      </div>

      <ViewDetailOrder 
        open = {openViewModal}
        setOpen = {setOpenViewModal}
        dataView = {dataViewDetail}
      />

      <ModalUpdateStatus
        open = {openModalUpdateStatus}
        setOpen = {setOpenModalUpdateStatus}
        fetchGetOrderRoomTour = {fetchGetOrderRoomTour}
        idOrder = {idOrder}
        dataView = {dataViewDetail}
      />

     {/* <ModalDeleteTR
       open = {openDeleteModal}
       setOpen = {setOpenDeleteModal}
       fetchGetRoomTour = {fetchGetRoomTour}
       selectedRowKeys = {selectedRowKeys}
     />  */}
     
    </>
  );
};

export default TableOrder;
