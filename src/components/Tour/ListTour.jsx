import imageHome from "../../assets/Banner.jpg";
import "./listtour.scss";
import "./haha.scss";
import img1 from "../../assets/img1.jpg";
import img5 from "../../assets/img5.jpg";
import roomItem from "../../assets/roomItem.jpg";
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
import 'bootstrap/dist/css/bootstrap.min.css'
 

const ListTour = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Search } = Input;
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const [dataCate, setListDataCate] = useState([]);
  const [listDataTour, setListDataTour] = useState([{
    "id": 101,
    "logo": "https://example.com/tour101.jpg",
    "name": "Tour Biển Nha Trang",
    "description": "Tham quan bãi biển tuyệt đẹp và thưởng thức hải sản tươi sống.",
    "start_date": "2024-12-01",
    "end_date": "2024-12-05",
    "categories": {
      "number": 50
    },
    "can_order": 20,
    "cost": 3000000
  },
  {
    "id": 102,
    "logo": "https://example.com/tour102.jpg",
    "name": "Tour Núi Đà Lạt",
    "description": "Khám phá những đồi thông bạt ngàn và không khí trong lành.",
    "start_date": "2024-11-15",
    "end_date": "2024-11-20",
    "categories": {
      "number": 40
    },
    "can_order": 15,
    "cost": 4500000
  },
  {
    "id": 103,
    "logo": "https://example.com/tour103.jpg",
    "name": "Tour Thành Phố Hà Nội",
    "description": "Khám phá lịch sử và văn hóa thủ đô.",
    "start_date": "2024-10-10",
    "end_date": "2024-10-14",
    "categories": {
      "number": 30
    },
    "can_order": 10,
    "cost": 3500000
  },
  {
    "id": 104,
    "logo": "https://example.com/tour104.jpg",
    "name": "Tour Sinh Thái Miền Tây",
    "description": "Trải nghiệm cuộc sống miền sông nước và tham quan vườn trái cây.",
    "start_date": "2024-11-25",
    "end_date": "2024-11-29",
    "categories": {
      "number": 25
    },
    "can_order": 5,
    "cost": 2800000
  }]);
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
    let tourQuery = `page=${currentPage}&perpage=${pageSize}&type[]=tour`;
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
  return (
    <>
      <div className="list-tour">
        <div className="home">
          <div className="overlay">
            
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

                <Form.Item name={"category"}>
                  <div className="category-cell">
                    <span className="category-title">Cathegory</span>
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
                        <div className="tour-item" onClick={()=>navigate(`/tour/${tour?.id}`)}>
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
                                    {moment(`${tour.end_date}`).diff(
                                      moment(`${tour.start_date}`),
                                      "days"
                                    )} ngày
                                  </span>
                                  <span className="item-info">
                                    {tour?.categories.number} người
                                  </span>
                                  <span className="item-info">
                                    {tour?.can_order} Vé còn lại
                                  </span>
                                </div>
                                <div className="item-info-price">
                                  <span>Giá từ: </span>
                                  <span className="price">
                                    {new Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(tour.cost ?? 0)}
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
        <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

            <div className="category-section mb-4">
          <h4 className="mb-3">Categories</h4>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#" id="nav-all-category">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-fruits-category">Fruits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-vegetables-category">Vegetables</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-drinks-category">Drinks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-snacks-category">Snacks</a>
            </li>
          </ul>
        </div>

          <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <a href="#" className="btn-wishlist">
                  <svg width="24" height="24">
                    <use href="#heart"></use>
                  </svg>
                </a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="https://cdn-icons-png.flaticon.com/512/6482/6482627.png" className="tab-image" alt="Product"/>
                  </a>
                </figure>
                <h3>Sunstar Fresh Melon Juice</h3>
                <span className="qty">1 Unit</span>
                <span className="rating">
                  <svg width="24" height="24" className="text-primary">
                    <use href="#star-solid"></use>
                  </svg> 4.5
                </span>
                <span className="price">$18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-group product-qty">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <use href="#minus"></use>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                        <svg width="16" height="16">
                          <use href="#plus"></use>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <a href="#" className="nav-link">
                    Add to Cart <iconify-icon icon="uil:shopping-cart" />
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default ListTour;
