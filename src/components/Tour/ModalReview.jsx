import {
    Modal,
    Form,
    Divider,
    Row,
    Col,
    Input,
    message,
    notification,
    Rate,
    Avatar
  } from "antd";
  import { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { callCreateReview } from "../../services/api";
  
  
  const ModalReview = (props) => {
    const { open, setOpen, room_id, tourDetail, getListComment } = props;
    const [form] = Form.useForm();
    const { TextArea } = Input;
  
    const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
    const accountUser = useSelector((state) => state.account.user);
    const user_id = accountUser?.id
  
    const [imgPreview, setImgPreview] = useState([]);
    const [images, setImages] = useState([]);
  
    // Rating star
    const [rate, setRate] = useState(3);
    const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  
    //upload file
    const handleFile = (e) => {
  
        const files = [...images]; // Spread syntax creates a shallow copy
        files.push(...e.target.files); // Spread again to push each selected file individually
        setImages({files});
        setImgPreview({files});
    };
  
    //onfinish
    const onFinish = async (value) => {
      const {content } = value
      console.log("value",value);
      if(isAuthenticated === false){
        notification.error({
            message:'Bạn chưa đăng nhập',
            description:'Không thể thực hiện review'
        })
        return;
      }
  
      const res = await callCreateReview( user_id, room_id, rate, content, images);
      if(res && res.data && res.status === 200){
            message.success(res.message)
            setOpen(false)
            await getListComment();
            console.log("res>>>",res);
      }
      };
  
  
  
    return (
      <>
        <Modal
          title="Đánh giá"
          open={open}
          onOk={() => form.submit()}
          onCancel={() => {
            setOpen(false);
            form.resetFields();
            setImages([])
            setImgPreview([])
          }}
          okText="Đánh giá"
          cancelText="Hủy"
          // confirmLoading={isSubmit}
          width={"45vw"}
          maskClosable={false}
        >
          <span>{tourDetail?.name}</span>
          <Divider />
  
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
            <Row gutter={15}>
  
              <Col span={24} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Chất lượng"
                  name="rate"
                  // labelCol={{ span: 24 }}
                >
                  <Rate tooltips={desc} onChange={setRate} value={rate} />
                  {rate ? <span>{` ${desc[rate - 1]}`}</span> : " "}
                </Form.Item>
              </Col>
  
              <Col span={24} style={{ padding: "0 10px" }}>
                <Form.Item
                  label="Nội dung"
                  name="content"
                  labelCol={{ span: 24 }}
                >
                  <TextArea
                    rows={4}
                    placeholder="Chia sẻ những cảm nhận của bạn với những người khác..."
                  />
                </Form.Item>
              </Col>
              <Col span={24} style={{ padding: "0 10px" }}>
                <Form.Item label="Hình ảnh" name="images" labelCol={{ span: 24 }}>
                  <div className="list-img-review">
                    {imgPreview && imgPreview?.files?.map(file => {
                        return (
                          <>
                            <div className="img-review-item">
                                <img src={URL.createObjectURL(file)} alt="#imgRv" />
                            </div>
                          </>
                        )
                    })}
                      
                  </div>
                  <div style={{marginTop:'15px'}}>
                      <label for="fileUpload" className="upload-files">
                          Upload Image
                      </label>
                  </div>
                  <input
                    id="fileUpload"
                    type={"file"}
                    onChange={handleFile}
                    multiple
                    style={{ visibility: "hidden" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </>
    );
  };
  
  export default ModalReview;
  