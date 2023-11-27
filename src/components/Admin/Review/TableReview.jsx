import { Button, Table, Select } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { callGetListReview } from "../../../services/api";

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
                // setOpenModalUpdateStatus(true)
                // setIdOrder(record?.id)
              }}
            />
          </>
        );
      },
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(10);

  const [listReview, setListReview] = useState([]);

  useEffect(() => {
    fetchListReview();
  }, [currentPage, pageSize]);

  let data = [];

  const fetchListReview = async () => {
    // /api/v2/review/index?page=1&perpage=10&rate[]=4&room_id[]=33&user_id[]=5
    let queryReview = `page=${currentPage}&perpage=${pageSize}`;

    const res = await callGetListReview(queryReview);

    if (res && res?.data?.data) {
      //setListReview(res?.data?.data);
      console.log("dataRes >>>", res?.data?.total);
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

    //  console.log("data foreach", data);
      setListReview(data);
      setTotal(res?.data?.total)
    }
  };

 

  const onSelectChange = (newSelectedRowKeys) => {
    //console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // select rate

  const handleSelectRate = () => {

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

  return (
    <>
      <div style={{ padding: "25px 35px" }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
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
                      <Select
                        showSearch
                        placeholder="Select a status"
                        optionFilterProp="children"
                        onChange={handleSelectRate}
                        options={[
                          { value: "&status[]=pending", label: "Pending" },
                          { value: "&status[]=access", label: "Access" },
                          { value: "&status[]=ending", label: "Ending" },
                          { value: "&status[]=cancel", label: "Cancel" },
                        ]}
                      />
                    </span>
                    <span>
                      <Select
                        defaultValue="All"
                        style={{ width: 120 }}
                      //  onChange={handleChangeType}
                        options={[
                          { value: "&type[]=room&type[]=tour", label: "All" },
                          { value: "&type[]=room", label: "Room" },
                          { value: "&type[]=tour", label: "Tour" },
                        ]}
                      />
                    </span>
                  </div>
                </div>
              </>
            );
          }}
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
