import imageHome from "../../assets/Banner.jpg";
import "./listRoom.scss";
import img1 from "../../assets/img1.jpg";
import img5 from "../../assets/img5.jpg";
import roomItem from "../../assets/roomItem.jpg";
import room8 from "../../assets/room8.jpg";
import room9 from "../../assets/room9.jpg";
import { Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Row, Col, Form, InputNumber, Pagination, Input } from "antd";
import { Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { callGetTourRoomPage, callGetCategoryForUser } from "../../services/api";
import { doSaveCategoryAction } from "../../redux/categoryAD/categorySlice";
import { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const ListRoom = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Search } = Input;
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const [dataCate, setListDataCate] = useState([]);
  const [listDataTour, setListDataTour] = useState([]);
  const [queryCheckbox, setQueryCheckbox] = useState("");
  const [queryInputRange, setQueryInputRange] = useState("");
  const [querySort, setQuerySort] = useState("");
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    
    getCateForTourPage();
  }, []);

  const getCateForTourPage = async () => {
    const resOne = await callGetCategoryForUser();
    if (resOne?.data) {
      dispatch(doSaveCategoryAction(resOne.data));
      setListDataCate(resOne.data);
    }
  };

  useEffect(() => {
    fetchListTour();
  }, [queryCheckbox, currentPage, pageSize, queryInputRange, querySort, querySearch]);

  const fetchListTour = async () => {
    // `page=1&perpage=10&type[]=tour&type[]=room&category[]=1&category[]=2&search=tour1&cost_min=12&cost_max=80&sort_cost=asc`
    let tourQuery = `page=${currentPage}&perpage=${pageSize}&type[]=room`;
    if(querySearch){
      tourQuery += querySearch;
    }
    if (queryCheckbox) {
      tourQuery += queryCheckbox;
    }

    if (queryInputRange) {
      tourQuery += queryInputRange;
    }

    if(querySort){
        tourQuery += querySort;
    }

   // console.log("query after checkbox>>>", tourQuery);

    const res = await callGetTourRoomPage(tourQuery);
    if (res && res.data) {
      //console.log("api>>>", res.data.data);
      setListDataTour(res.data.data);
      setTotal(res.data.total);
    }

    //console.log("listTour>>>", res.data);
  };

  // Selected

  const onChangeSelect = (value) => {
    console.log("value sort>>>", value);
    if(value){
        setQuerySort(value)
        setCurrentPage(1)
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

  //range price
  const handleChangeFilter = (changedValues, values) => {
    console.log(
      "handleChangeFilter values,changedValues >>>",
      values,
      changedValues
    );
  };

  //checkbox
  const onChange = (checkedValues) => {
    if (checkedValues.length >= 1) {
      let queryByCheckCate = checkedValues.join("");
      setQueryCheckbox(queryByCheckCate);
      //console.log('checked => ', queryByCheckCate);
      setCurrentPage(1)
    } else {
      setQueryCheckbox("");
    }
  };

  //handle submit form
  const onFinish = (values) => {
    //console.log("onFinish >>>", values);
    if (values) {
      let queryRange = `&cost_min=${values.range.from}&cost_max=${values.range.to}`;
      setQueryInputRange(queryRange);
      setCurrentPage(1)
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if(e.target.dataSearch){
      setQuerySearch(`&search=${e.target.dataSearch.value}`);
    }
  }

 // console.log(querySearch);

 
  return (
    <>
      <div className="list-tour">
        <div className="home">
          <div className="overlay">
            <img src={room9} alt="#img" />
          </div>
          <div className="homeContent container">
            <div className="textDiv">
              <span className="smallText">Our Packages</span>
              <h1 className="homeTitle">Search your Holiday</h1>
            </div>
            <div className="cardDiv-room">
              <div className="content">
                <form onSubmit={(e)=>handleSearch(e)} >
                      <Input 
                        placeholder="Search your Holiday" 
                        className="input-search-room" 
                        name="dataSearch"
                        />
                   
                     <div className="btn-search-room">
                      <button className="btn-search-holiday" >Search Holiday</button>
                    </div>
                   
                </form>
              </div>
          </div>
         
          </div>
        </div>
        <div className="container-list-tour">
          {/* col-left----- */}

          <Row gutter={[20, 20]}>
            <Col span={6}>
              <Form
                form={form}
                onValuesChange={(changedValues, values) =>
                  handleChangeFilter(changedValues, values)
                }
                onFinish={onFinish}
              >
                <Form.Item>
                  <div className="range-cell">
                    <span className="range-title" style={{textAlign:'center'}}>Khoảng giá</span>
                    <div className="range-value">
                      <Form.Item name={["range", "from"]} labelCol={24}>
                        <InputNumber placeholder="Từ" name="from" min={0} />
                      </Form.Item>
                      <span>-</span>
                      <Form.Item name={["range", "to"]} labelCol={24}>
                        <InputNumber placeholder="Đến" name="to" min={0} />
                      </Form.Item>
                    </div>
                    <div
                      className="btn-search-range"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button type="primary" onClick={() => form.submit()}>
                        Search
                      </Button>
                      <Button
                        type="error"
                        style={{ border: "1px solid #ECECEC" }}
                        onClick={() => {
                          form.resetFields();
                          setQueryCheckbox("");
                          setQueryInputRange("");
                          setCurrentPage(1);
                        }}
                      >
                        Refresh
                      </Button>
                    </div>
                  </div>
                </Form.Item>

                <Form.Item name={"category"}>
                  <div className="category-cell">
                    <span className="category-title">Loại tour</span>
                    <Checkbox.Group
                      className="list-checkbox"
                      onChange={onChange}
                    >
                      {dataCate?.map((cate, index) => {
                        return (
                          <>
                            <div key={`index-${index}`}>
                              <Checkbox
                                className="checkbox-item"
                                value={`&category[]=${cate.id}`}
                              >
                                {cate.name}
                              </Checkbox>
                            </div>
                          </>
                        );
                      })}
                    </Checkbox.Group>
                  </div>
                </Form.Item>
              </Form>
            </Col>
            <Col span={18}>
              <Row>
                <div className="select-sort">
                  <span>Sắp xếp theo: </span>
                  <span>
               
                    <Select
                        showSearch
                        placeholder="Select a sort"
                        optionFilterProp="children"
                        onChange={onChangeSelect}
                    
                        options={[
                            {
                                value: "&sort_cost=asc",
                                label: "Thấp đến cao",
                            },
                            {
                                value: "&sort_cost=desc",
                                label: "Cao đến thấp",
                            },
                        ]}
  />
                  </span>
                </div>
              </Row>
              <Row>
                <div className="tour-list">
                  {listDataTour?.map((tour) => {
                    return (
                      <>
                        <div className="tour-item" onClick={()=>navigate(`/room/${tour?.id}`)}>
                          <div className="left-item">
                            <div className="media-tour">
                              <img src={`${tour?.logo}`} alt="#imgTour" />
                            </div>
                            <div className="tour-content">
                              <h5 className="tour-name">{tour?.name}</h5>
                              <p className="tour-desc">
                                {tour?.description}
                              </p>
                              <div className="list-info">
                                <div className="tour-info">
                                  
                                  <span className="item-info">
                                    {tour?.categories.number} người
                                  </span>
                                  {/* <span className="item-info">
                                    {tour?.can_order} Vé còn lại
                                  </span> */}
                                </div>
                                <div className="item-info-price">
                                  <span>Giá từ: </span>
                                  <span className="price">
                                    {new Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(tour.cost ?? 0)}/ngày
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Row>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "25px",
                }}
              >
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={total}
                  showSizeChanger
                  onChange={(curr, size) => handleOnChangePage(curr, size)}
                />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ListRoom;
