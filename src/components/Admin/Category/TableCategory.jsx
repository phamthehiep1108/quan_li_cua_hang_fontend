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
      title: "Product ID",
      dataIndex: "productId",
      key: "productId",
      render: (text, record) => {
        return <Link to={`/admin/inventory/${record.productId}`}>{record.productId}</Link>;
      },
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Inventory Date",
      dataIndex: "inventoryDate",
      key: "inventoryDate",
      render: (text) => {
        return <span>{text ? new Date(text).toLocaleDateString() : "-"}</span>;
      },
    },
    {
      title: "Stock Remaining",
      dataIndex: "stockRemaining",
      key: "stockRemaining",
      render: (text) => {
        return <Badge count={text} style={{ backgroundColor: "#52c41a" }} />;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <>
            <EditTwoTone
              twoToneColor="#3cc41a"
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => {
                setShowModalUpdate(true);
                setDataUpdate(record); // Pass the record to update form
              }}
            />
            <Popconfirm
              title="Are you sure you want to delete this item?"
              onConfirm={() => handleDelete(record.productId)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteTwoTone twoToneColor="#ff4d4f" style={{ cursor: "pointer" }} />
            </Popconfirm>
          </>
        );
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
  }, [searchQuery]);

  // useEffect(()=>{
  //     const getCateForCreate = async() => {
  //       const resOne =  await callGetCategory('index?');
  //       if(resOne?.data?.data){
  //         dispatch(doSaveCategoryAction(resOne.data.data))
  //       }

  //     }
  //     getCateForCreate()
  // },[])

  const getAllCategory = async () => {
    setIsLoading(true);
    let queryCate = ``
    // let queryCate = `index?page=${currentPage}&perpage=${pageSize}`
    if(searchQuery){
      queryCate += searchQuery
    }

    const res = await callGetCategory(queryCate);
    if (res.data) {
    
      setListCategory(res.data);
      setTotal(res.total)
     
    }
    // console.log('dataList',res.data.data);
     setIsLoading(false);
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
                    Stock Manager
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
