import { Button, Table, Select, Popconfirm, message } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { callDeleteReview, callGetListReview } from "../../../services/api";

const TableReview = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Room Name",
      dataIndex: "room_name",
    },
    {
      title: "Rate",
      dataIndex: "rate",
    },
    {
      title: "Content",
      dataIndex: "content",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   width: 100,
    //   render: (text, record, index) => {
    //     return (
    //       <>
    //         <EditTwoTone
    //           twoToneColor="#3cc41a"
    //           style={{ cursor: "pointer", marginLeft: "20px" }}
    //           onClick={() => {
    //             // setOpenModalUpdateStatus(true)
    //             // setIdOrder(record?.id)
    //           }}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(10);

  const [listReview, setListReview] = useState([]);
  const [rateQuery, setRateQuery] = useState('');
 

  useEffect(() => {
    fetchListReview();
  }, [currentPage, pageSize, rateQuery]);

  let data = [];

  const fetchListReview = async () => {
    setLoading(true);
    // /api/v2/review/index?page=1&perpage=10&rate[]=4&room_id[]=33&user_id[]=5
    let queryReview = `page=${currentPage}&perpage=${pageSize}`;

    if(rateQuery){
      queryReview += rateQuery;
    }

    const res = await callGetListReview(queryReview);

    if (res && res?.data?.data) {
     
      //console.log("dataRes >>>", res?.data?.total);
      res?.data?.data.forEach((item) => {
        return data.push({
          id: item?.id,
          room_id: item?.room?.id,
          room_name: item?.room?.name,
          rate: item?.rate,
          content: item?.content,
          email: item?.user?.email,
          phone: item?.user?.phone_number,
        });
      });

   
      setListReview(data);
      setTotal(res?.data?.total)
    }
    setLoading(false);
  };

 

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // select rate

  const handleSelectRate = (value) => {
     // console.log('value',value);
      setRateQuery(value)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination.current, currentPage);
    if (pagination && pagination.current !== currentPage) {
      setCurrentPage(pagination.current);
    }

    if (pagination && pagination.pageSize !== pageSize) {
      setPageSize(pagination.pageSize);
      setCurrentPage(1);
    }
  };

  //handle delete
  const confirm = async(e) => {
   // console.log("hello world");
   // message.success('Click on Yes');
   const idsDelete = {
      ids: [...selectedRowKeys]
   }

   const res = await callDeleteReview(idsDelete)
      console.log('check res>>>',res);
      if(res && res.status === 200){
        message.success("Xóa thành công");
        await fetchListReview();
        setSelectedRowKeys([]);
      }else{
        message.error("Có lỗi xảy ra!!!")
      }
  };

  return (
    <>
      <div style={{ padding: "25px 35px" }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? 
            <div style={{display:'flex',gap:'20px'}}>
              <span>{`Selected ${selectedRowKeys.length} items` }</span>
              
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                okText="Yes"
                cancelText="No"
                onConfirm={confirm}
              >
                <Button type="primary" danger>Delete</Button>
              </Popconfirm>
            </div>
            
            : 
            ""
            }
          </span>
         
        </div>
        <Table
          title={() => {
            return (
              <>
                <div
                  className="selected-status"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Quản lý Comment Review</span>
                  <div style={{ display: "flex", gap: "30px" }}>
                    <span>
                      
                    </span>
                    <span>
                      <Select
                        defaultValue="5 Star"
                        style={{ width: 120 }}
                        onChange={handleSelectRate}
                        options={[
                          { value: "&rate[]=5", label: "5 Star" },
                          { value: "&rate[]=4", label: "4 Star" },
                          { value: "&rate[]=3", label: "3 Star" },
                          { value: "&rate[]=2", label: "2 Star" },
                          { value: "&rate[]=1", label: "1 Star" },
                        ]}
                      />
                    </span>
                  </div>
                </div>
              </>
            );
          }}
          loading = {loading}
          rowKey={(record) => record.id}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={listReview}

          onChange={onChange}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => {
              return (
                <div>
                  {range[0]}- {range[1]} / {total}
                </div>
              );
            },
          }}
        />
      </div>
    </>
  );
};

export default TableReview;
