import {
    Modal,
    Form,
    Input,
    Col,
    Row,
    Divider,
    Upload,
    Select,
    message,
    notification,
    DatePicker, theme
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { callCreateNewTour } from "../../../services/api";
import imgUpload from '../../../assets/img-upload.jpg'
 
  const ModalCreateTour = (props) => {
    const { open, setOpen, fetchGetRoomTour, setTypeRT } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm();
    const { TextArea } = Input;
    
    const cates = useSelector(state => state.cate.category)
    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
    const [banner, setBanner] = useState([]);
    const [bannerPreview, setBannerPreview] = useState([]);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    //Select cate
    // let options = cates?.map(item => {
    //     return {
    //       value: `${item.id}`,
    //       label: `${item.name}`
    //     }
    // })

    // let options = {
    //   value: 1,
    //   label: "Hoa quả"
    // }
  

    const handleFileBanner = (e) => {

      const files = [...banner]; 
      files.push(...e.target.files); 
      setBanner({files});
      setBannerPreview({files});
    }

    const handleFileLogo = (event) => {
      if (event.target && event.target.files && event.target.files[0]) {
        setLogo(event.target.files[0]);
        setLogoPreview(URL.createObjectURL(event.target.files[0]))
      } 
    };
    //Cate status

    let optionsStatus = [
        {
            value: "1",
            label: "Public"
        },
        {
            value: "0",
            label: "UnPublic"
        }
    ]

    let optionsType = [
        {
            value: "room",
            label: "Room"
        },
        {
            value: "tour",
            label: "Tour"
        }
    ]


    const onFinish = async (value) => {
      const {name,cost, description, status} = value
            setIsSubmit(true)
            const res = await callCreateNewTour(name, description, cost, logo, status)
            setIsSubmit(false)
            if(res.message == 'Successfully!' ){
                console.log("res check", res);
                message.success('Tạo sản phẩm mới thành công')
                form.resetFields();
                setOpen(false)
                setTypeRT('&type_room[]=tour')
                await fetchGetRoomTour()

              }else{
                  notification.error({
                  message: 'Có lỗi xảy ra!!!',
                  description:'Không thể tạo mới sản phẩm',
                  duration: 3
              })
  
            }
            //console.log("res check", value);
      };


      const onChangeStart = (date, dateString) => {
        // console.log('start>>>', dateString);
         setStartDate(dateString)
       };
       const onChangeEnd = (date, dateString) => {
         //console.log('end>>>',date, dateString);
         setEndDate(dateString)
       };


    return (
      <>
        <Modal
          title="Thêm mới Tour"
         
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields();
            setBanner([])
            setBannerPreview([])
            setLogo(null)
            setLogoPreview(null)
          }}
          okText="Tạo mới"
          cancelText="Hủy"
          confirmLoading={isSubmit}
          width={'50vw'}
          maskClosable = {false}
        >
          <Divider/>
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
            <Row gutter={15}>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Name Product"
                  name="name"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input name!"}]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Category"
                  name="type"
                  labelCol={{ span: 24 }}
                >
                  <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="children"
                    
                 />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Cost"
                  name="cost"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input cost!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Status"
                  name="status"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input status!" }]}
                >
                   <Select
                    showSearch
                    placeholder="Select a status"
                    optionFilterProp="children"
                    options={optionsStatus}
                 />
                </Form.Item>
              </Col>
  
              <Col span={8} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Logo"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input logo!" }]}
                >

                  {/* <input type="file" onChange={(e)=>handleUploadImg(e, 'logo')}/> */}

                  <div style={{marginTop:'15px'}}>
                    <label for="fileUpload" className="upload-files">
                        Upload Logo
                    </label>
                 </div>
                 <input
                  id="fileUpload"
                  type={"file"}
                  onChange={handleFileLogo}
                  style={{ visibility: "hidden" }}
                />
                <div className="list-img-review">
                      <div className="img-review-item">
                         <img src={logoPreview || imgUpload} alt="#imgLogo" />
                      </div> 
                </div>

                </Form.Item>
              </Col>
              
              <Col span={24} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Description"
                  name="description"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input description!" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
        
            </Row>
          </Form>
        </Modal>
        
      </>
    );
  };
  
  export default ModalCreateTour;
  