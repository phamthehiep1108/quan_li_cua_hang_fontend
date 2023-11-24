import { Table, Badge, Select, Button, Popconfirm, message, Form } from "antd";
import { RedoOutlined, DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { callGetListRequestCancel } from "../../../services/api";
import InputSearchRequest from "./InputSearchRequest";
import ModalUpdateStatus from "./ModalUpdateStatus";

const CancelRequest = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
 
  const [searchQuery, setSearchQuery] = useState("");
  const [typeRoom, setTypeRoom] = useState("&type[]=tour");
  const [statusRequest, setStatusRequest] = useState("&status[]=pending");
  const [listCancelRequest, setListCancelRequest] = useState([]);
  
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idRequest, setIdRequest] = useState(null);

 

  const handleQuerySearch = (query) => {
    //console.log('query',query);
    setSearchQuery(query);
  };

  //Handle select
  const handleChangeType = (value) => {
    setTypeRoom(value)
  };
  const handleChangeStatus = (value) => {
    setStatusRequest(value)
  };

  //Table Component--------------------------
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record, index) => {
        return (
           <Link to= {'/admin/cancel-request'}>{record?.id}</Link>
        );
      },
    },
    {
      title: "ID order",
      dataIndex: "order_id",
    },
    {
      title: "Name",
      dataIndex: "name",
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
        title: "Status",
        dataIndex: "status",
        render : (text, record, index) => {
          return (
            <>
            {record?.status === "pending"?
             <span>
              <Badge status="processing" /> {' '}
              {record?.status}
             </span>
             :
             record?.status === "access"?
             <span>
             <Badge status="success" /> {' '}
             {record?.status}
              </span>
             :
             <span>
             <Badge status="error" /> {' '}
             {record?.status}
              </span>
            }
           
            </>
          )
        }
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      render: (text, record, index) => {
        return (
          <>
            <EditTwoTone
              twoToneColor="#3cc41a"
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={() => {
                 setOpenModalUpdate(true)
                 setIdRequest(record?.id)
              }}
            />
          </>
        );
      },
    },
  ];

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

  //----------------------------------------------------------
  useEffect(() => {
    fetchListCancelRequest();
  }, [searchQuery, currentPage, pageSize, typeRoom, statusRequest]);

  const fetchListCancelRequest = async () => {
    //page=1&perpage=10&status[]=pending&type[]=tour

    let queryRequest = `page=${currentPage}&perpage=${pageSize}`;

    if(typeRoom){
        queryRequest+=typeRoom
    }

    if(statusRequest){
        queryRequest+=statusRequest
    }

    const res = await callGetListRequestCancel(queryRequest);
    if(res && res?.data){
        setListCancelRequest(res.data.data)
        setTotal(res.data.total)
    }

    console.log('check res >>>',res);
  };

  return (
    <>
      <div className="container-table-cate">
        <div className="header-table">
          <div className="title-table">
            <InputSearchRequest handleQuerySearch={handleQuerySearch} />
          </div>
        </div>
        <div
          style={{
            marginLeft: 8,
          }}
        ></div>
        <Table
        
          title={() => {
            return (
              <div className="selected-status-table" style={{display:'flex', justifyContent:'space-between'}}>
                <div className="title-table">Quản lý Cancel Request</div>
                <div className="select-option-table" style={{display:'flex', gap:'20px'}}>
                  <span>
                    <Select
                      defaultValue="Tour"
                      style={{ width: 120 }}
                      onChange={handleChangeType}
                      options={[
                        { value: "&type[]=tour", label: "Tour" },
                        { value: "&type[]=room", label: "Room" },
                    
                      ]}
                    />
                  </span>
                  <span>
                    <Select
                      defaultValue="Pending"
                      style={{ width: 120 }}
                      onChange={handleChangeStatus}
                      options={[
                        { value: "&status[]=pending", label: "Pending" },
                        { value: "&status[]=access", label: "Access" },
                        { value: "&status[]=cancel", label: "Cancel" },
                    
                      ]}
                    />
                  </span>
                </div>
              </div>
            );
          }}
          columns={columns}
           dataSource={listCancelRequest}
          onChange={onChange}
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
      <ModalUpdateStatus
        open = {openModalUpdate}
        setOpen = {setOpenModalUpdate}
        fetchList = {fetchListCancelRequest}
        idRequest = {idRequest}
      />
    </>
  );
};

export default CancelRequest;
