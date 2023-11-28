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
  } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { callCreateNewRoom } from "../../../services/api";
 
  const ModalCreateRoom = (props) => {
    const { open, setOpen, fetchGetRoomTour, setTypeRT } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm();
    const { TextArea } = Input;
    
    const cates = useSelector(state => state.cate.category)
    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
    const [banner, setBanner] = useState([]);
    const [bannerPreview, setBannerPreview] = useState([]);

 
    //Select
    let options = cates?.map(item => {
        return {
          value: `${item.id}`,
          label: `${item.name}`
        }
    })


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
          value: "Public",
          label: "1"
      },
      {
          value: "UnPublic",
          label: "0"
      }
  ]

  // select type
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
      const {name, type_room, type ,cost, description, status} = value
            setIsSubmit(true)
            const res = await callCreateNewRoom(name, description, type, cost, logo, banner, status, type_room)
            if(res && res.data){
              message.success('Tạo phòng mới thành công')
              form.resetFields();
              setOpen(false)
                setTypeRT('&type_room[]=room')
                await fetchGetRoomTour()
                
              }else{
                  notification.error({
                  message: 'Có lỗi xảy ra!!!',
                  description:'Không thể tạo mới phòng',
                  duration: 3
              })
  
          setIsSubmit(false)
          //console.log("res check", res);
        }
    };
    
  
    return (
      <>
        <Modal
          title="Thêm mới Room"
         
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields();
            setBanner([]);
            setBannerPreview([]);
            setLogo(null);
            setLogoPreview(null);
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
                  label="Name Room"
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
                  rules={[{ required: true, message: "Please input type!" }]}
                >
                  <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="children"
                    options={options}
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
                  label="Type Room"
                  name="type_room"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input type_room!" }]}
                >
                  <Select
                        showSearch
                        placeholder="Select a type room"
                        optionFilterProp="children"
                        options={optionsType}
                    />
                </Form.Item>
              </Col>
              <Col span={8} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="IMG Logo"
                 
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
                         <img src={logoPreview} alt="#imgLogo" />
                      </div> 
                </div>
                </Form.Item>
              </Col>
              <Col span={16} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="IMG Banner"
              
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Please input banner!" }]}
                >
                  {/* <input type="file" onChange={(e)=>handleUploadImg(e,'banner')}/> */}
                  <div style={{marginTop:'15px'}}>
                    <label for="fileBanner" className="upload-files">
                        Upload Banner
                    </label>
                </div>
                <input
                  id="fileBanner"
                  type={"file"}
                  onChange={handleFileBanner}
                  multiple
                  style={{ visibility: "hidden" }}
                />
                <div className="list-img-review">
                  {bannerPreview && bannerPreview?.files?.map(file => {
                      return (
                        <>
                          <div className="img-review-item">
                              <img src={URL.createObjectURL(file)} alt="#imgBanner" />
                          </div>
                        </>
                      )
                  })}
                    
                </div>
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
  
  export default ModalCreateRoom;
  