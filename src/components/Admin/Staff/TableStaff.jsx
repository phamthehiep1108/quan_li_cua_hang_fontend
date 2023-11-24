import { Table, Badge, Select, Button, Popconfirm, message, Form } from "antd";
import { RedoOutlined, DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { callGetListStaff } from "../../../services/api";
//import InputSearchRequest from "./InputSearchRequest";


const TableStaff = () => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
 
  const [searchQuery, setSearchQuery] = useState("");
  const [typeRole, setTypeRole] = useState("&role_id[]=1");
 
  const [listStaff, setListStaff] = useState([]);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);



  const handleQuerySearch = (query) => {
    //console.log('query',query);
    setSearchQuery(query);
  };

  //Handle select
  const handleChangeType = (value) => {
    setTypeRole(value)
  };


  //Table Component--------------------------
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record, index) => {
        return (
           <Link to= {'/'}>{record?.id}</Link>
        );
      },
    },
    {
        title: "Role ID",
        dataIndex: "role_id",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
      title: "Name",
      dataIndex: "display_name",
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Detail Address",
      dataIndex: "detail_address",
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
                //  setOpenModalUpdate(true)
                //  setIdRequest(record?.id)
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
     fetchListStaff();
  }, [searchQuery, currentPage, pageSize, typeRole]);

  const fetchListStaff = async () => {

    let queryRequest = `page=${currentPage}&perpage=${pageSize}`;
    if(typeRole){
        queryRequest+=typeRole
    }

    // if(statusRequest){
    //     queryRequest+=statusRequest
    // }

     const res = await callGetListStaff(queryRequest);
    if(res && res?.data){
        setListStaff(res.data.data)
        setTotal(res.data.total)
    }

     console.log('check res >>>',res);
  };

  return (
    <>
      <div className="container-table-cate">
        <div className="header-table">
          <div className="title-table">
            {/* <InputSearchRequest handleQuerySearch={handleQuerySearch} /> */}
          </div>
        </div>
        <div
          style={{
            marginLeft: 8,
          }}
        ></div>
        <Table
          rowKey={(record) => record.id} // fix select one but select all
          title={() => {
            return (
              <div className="selected-status-table" style={{display:'flex', justifyContent:'space-between'}}>
                <div className="title-table">Quản lý Staff</div>
                <div className="select-option-table" style={{display:'flex', gap:'20px'}}>
                  <span>
                    <Select
                      defaultValue="Admin"
                      style={{ width: 120 }}
                      onChange={handleChangeType}
                      options={[
                        { value: "&role_id[]=1", label: "Admin" },
                        { value: "&role_id[]=3", label: "Staff" },
                    
                      ]}
                    />
                  </span>
                  <span>
                    <Button type="primary">New Staff</Button>
                  </span>
                </div>
              </div>
            );
          }}
          columns={columns}
          dataSource={listStaff}
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
                  {range[0]} - {range[1]} / Trên {total}
                </div>
              );
            },
          }}
        />
      </div>
      
    </>
  );
};

export default TableStaff;
