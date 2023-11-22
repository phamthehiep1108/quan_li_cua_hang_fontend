import {Table, Badge, Select, Button, Popconfirm, message, Form } from "antd";
import {
    RedoOutlined,
    DeleteTwoTone,
    EditTwoTone,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import "./tableCategory.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { callDeleteCategory, callGetCategory } from "../../../services/api";
import InputSearchCate from "./InputSearchCate";
import ModalCreateCate from "./ModalCreateCate";
import ModalUpdateCate from "./ModalUpdateCate";
import ModalDeleteCate from "./ModalDelete";
import { doSaveCategoryAction } from "../../../redux/categoryAD/categorySlice";


const TableCategory = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [listCategory, setListCategory] = useState([]);
    
    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})
    const [searchQuery, setSearchQuery] = useState('')


    const handleQuerySearch = (query) => {
        //console.log('query',query);
        setSearchQuery(query)
    }
  
    const dispatch = useDispatch()
   

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
      title: "Name",
      dataIndex: "name",
      
    },
    {
      title: "Description",
      dataIndex: "description",
      width:650,
    },
    {
      title: "People",
      dataIndex: "number",
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
                onClick={()=>{
                    setShowModalUpdate(true)
                    setDataUpdate(record)
                }}
              />
          </>)
        },
      },
  
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
   // console.log("selectedRowKeys: ", newSelectedRowKeys);
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


  //----------------------------------------------------------
  useEffect(() => {
    getAllCategory();
  }, [searchQuery, currentPage, pageSize]);

  useEffect(()=>{
      const getCateForCreate = async() => {
        const resOne =  await callGetCategory('index?');
        if(resOne?.data?.data){
          dispatch(doSaveCategoryAction(resOne.data.data))
        }

      }
      getCateForCreate()
  },[])

  const getAllCategory = async () => {

    let queryCate = `index?page=${currentPage}&perpage=${pageSize}`
    if(searchQuery){
      queryCate += searchQuery
    }

    const res = await callGetCategory(queryCate);
    if (res && res?.data) {
    
      setListCategory(res.data.data);
      setTotal(res.data.total)
     
    }
     console.log('dataList',res.data.data);
};

//console.log("dataUpdate", dataUpdate);


//Confirm Delete

const handleDelete = async() => {
  setShowModalDelete(true)
};

  return (
    <>
      <div className="container-table-cate">
        <div className="header-table">
          <div className="title-table">
            <InputSearchCate handleQuerySearch={handleQuerySearch}/>
          </div>
          <Button
            type="primary"
            onClick={() => {
                setShowModalAdd(true)
            }}
          >
            New Category
          </Button>
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
               
                  <Button danger onClick={()=>handleDelete()}>Delete Category</Button>
              
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
        <Table
        rowKey={(record) => record.id} // fix select one but delect all
          title={() => {
            return (
              <div className="selected-status" style={{display:"flex"}}>
                    Quản lý Category
              </div>
            );
          }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={listCategory}

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
        
      <ModalCreateCate 
        open = {showModalAdd}
        setOpen = {setShowModalAdd}
        fetchListCate = {getAllCategory}
      />

      <ModalUpdateCate
        open = {showModalUpdate}
        setOpen = {setShowModalUpdate}
        dataCate = {dataUpdate}
        setDataCate = {setDataUpdate}
        fetchListCate = {getAllCategory}
      />
     <ModalDeleteCate
        open = {showModalDelete}
        setOpen = {setShowModalDelete}
        selectedRowKeys = {selectedRowKeys}
        fetchListCate = {getAllCategory}
     />
    </>
  );
};

export default TableCategory;
