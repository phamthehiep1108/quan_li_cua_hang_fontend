import {Table, Badge, Select, Button, Popconfirm, message, Form } from "antd";
import {
    RedoOutlined,
    DeleteTwoTone,
    EditTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./TableManage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { callGetRoomTour } from "../../../services/api";
import InputSearchRT from "./InputSearchRoom";
import ModalCreateRoom from "./ModalCreateRoom";
import ModalCreateTour from "./ModalCreateTour";
import ModalUpdateRoom from "./ModalUpdateRoom";
import ModalUpdateTour from "./ModalUpdateTour";
import ModalDeleteTR from "./ModalDeleteTR";


const TableOrder = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [typeRT, setTypeRT] = useState("&type_room[]=room&type_room[]=tour")
    const [querySearch, setQuerySearch] = useState("")
    const [listRoomTour, setListRoomTour] = useState([])
    

    const [openCreateRoom, setOpenCreateRoom] = useState(false)
    const [openUpdateRoom, setOpenUpdateRoom] = useState(false)
    const [dataUpdateRoom, setDataUpdateRoom] = useState({})


    const [openCreateTour, setOpenCreateTour] = useState(false)
    const [openUpdateTour, setOpenUpdateTour] = useState(false)
    const [dataUpdateTour, setDataUpdateTour] = useState({})
    
    
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

  //Table Component--------------------------
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record, index) => {
        return (
            <a onClick={()=>{
              //setDataViewRoom(record)
            }}>{record?.id}</a>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      
    },
    {
      title: "Description",
      dataIndex: "description",
      width:'400px',
      
    },
    {
      title: "Type",
      dataIndex: "type_room",
    },
    {
      title: "Cost",
      dataIndex: "cost",
    },
    {
      title: "Start date",
      dataIndex: "start_date",
    },
    {
      title: "End date",
      dataIndex: "end_date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
        title: "Action",
        dataIndex: "action",
        width: 100,
        render: (text, record, index) => {
          // console.log("record =>>>",record);

          return (
          <>  
          {record?.type_room === "room" ?
          
          <EditTwoTone
              twoToneColor="#3cc41a"
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={()=>{
                  setOpenUpdateRoom(true)
                  setDataUpdateRoom(record)
              }}
            />
            :
            <EditTwoTone
              twoToneColor="#3cc41a"
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={()=>{
                  setOpenUpdateTour(true)
                  setDataUpdateTour(record)
              }}
            />
            
          }
          </>)
        },
      },
  
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys >>> ", newSelectedRowKeys);
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
  const handleChange = (value) => {
    setTypeRT(value)
  };

  //Search
  const handleQuerySearch = (searchInput) => {
  
      setQuerySearch(searchInput)
  }

  //----------------------------------------------------------

  useEffect(() => {
    fetchGetRoomTour();
  }, [typeRT, currentPage, pageSize, querySearch]);


  const fetchGetRoomTour = async () => {
    let queryRT= `index?page=${currentPage}&perpage=${pageSize}`
    if(typeRT){
      queryRT += typeRT
    }

    if(querySearch){
      queryRT += querySearch  
    }

    const res = await callGetRoomTour(queryRT);
    if (res && res?.data) {

      setListRoomTour(res?.data?.data);
      setTotal(res.data.total)
     
     // console.log("resAll",res);
    }
  };
  
  //console.log('dataListRT',listRoomTour);


//Confirm Delete
const handleDelete = async() => {
  setOpenDeleteModal(true)
};

  return (
    <>
      <div className="container-table-cate">
        
        <div className="header-table">
          <div className="title-table">
            <InputSearchRT handleQuerySearch = {handleQuerySearch}/>
          </div>
         
            {typeRT === "&type_room[]=room"?
            
            <Button
            type="primary"
            onClick={() => {
               setOpenCreateRoom(true)
            }}
            > New Room</Button>
            : 
            <Button
            type="primary"
            onClick={() => {
              setOpenCreateTour(true)
            }}
            >New Tour</Button>
            }
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
                <span style={{ padding: "5px 8px", border: "1px solid black" }}>
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
                  Quản lý Room - Tour
                </span>
                <span>
                <Select
                  defaultValue="All"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: '&type_room[]=room&type_room[]=tour', label: 'All' },
                    { value: '&type_room[]=room', label: 'Room' },
                    { value: '&type_room[]=tour', label: 'Tour' },
                  ]}
                />
                </span>
              </div>
            );
          }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={listRoomTour}

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
                    {range[0]}- {range[1]} / Trên {total}
                  </div>
                );
              },
            }}
        />
      </div>
        
      {/* {typeRT === "&type_room[]=room"?"New Room" : "New Tour"} */}


      <ModalCreateRoom 
        open = {openCreateRoom}
        setOpen = {setOpenCreateRoom}
        fetchGetRoomTour = {fetchGetRoomTour}
        setTypeRT = {setTypeRT}
      />

      <ModalUpdateRoom
        dataUpdateRoom = {dataUpdateRoom} 
        open = {openUpdateRoom}
        setOpen = {setOpenUpdateRoom}
        fetchGetRoomTour = {fetchGetRoomTour}
        setTypeRT = {setTypeRT}

      />

     <ModalCreateTour
       open = {openCreateTour}
       setOpen = {setOpenCreateTour}
       fetchGetRoomTour = {fetchGetRoomTour}
       setTypeRT = {setTypeRT}
     />

     <ModalUpdateTour
        dataUpdateTour = {dataUpdateTour} 
        open = {openUpdateTour}
        setOpen = {setOpenUpdateTour}
        fetchGetRoomTour = {fetchGetRoomTour}
        setTypeRT = {setTypeRT}
     />

     <ModalDeleteTR
       open = {openDeleteModal}
       setOpen = {setOpenDeleteModal}
       fetchGetRoomTour = {fetchGetRoomTour}
       selectedRowKeys = {selectedRowKeys}
     />
    </>
  );
};

export default TableOrder;
