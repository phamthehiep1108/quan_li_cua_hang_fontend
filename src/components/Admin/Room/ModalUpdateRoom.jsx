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
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { callUpdateRoom } from "../../../services/api";
import imgRoom from "../../../assets/room3.jpg";
import "./updateTour.scss";
const ModalUpdateRoom = (props) => {
  const {
    open,
    setOpen,
    fetchGetRoomTour,
    setTypeRT,
    dataUpdateRoom,
    setDataUpdateRoom,
  } = props;
  const [isSubmit, setIsSubmit] = useState(false);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const cates = useSelector((state) => state.cate.category);
  const [logo, setLogo] = useState({});
  const [banner, setBanner] = useState({});

  const [previewLogo, setPreviewLogo] = useState(null);

  useEffect(() => {
    // initData = {

    // }
    if (dataUpdateRoom) {
      //setInitData(dataUpdateRoom)
      form.setFieldsValue(dataUpdateRoom);
      setPreviewLogo(dataUpdateRoom.logo);
    }
  }, [dataUpdateRoom]);

  //Select
  const options = cates?.map((item) => {
    return {
      value: `${item.id}`,
      label: `${item.name}`,
    };
  });

  const handleUploadImg = (event, type) => {
    if (
      event.target &&
      event.target.files &&
      event.target.files[0] &&
      type === "logo"
    ) {
      setLogo(event.target.files[0]);
      setPreviewLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  //Cate status

  let optionsStatus = [
    {
      value: "1",
      label: "Public",
    },
    {
      value: "0",
      label: "UnPublic",
    },
  ];

  const onFinish = async (value) => {
    const { id, name, type, cost, description, status } = value;
    //setIsSubmit(true)
    const res = await callUpdateRoom(
      id,
      name,
      description,
      type,
      cost,
      logo,
      status
    );
    //setIsSubmit(false)
    if (res && res.data) {
      message.success("Update phòng mới thành công");
      setOpen(false);
      setTypeRT("&type_room[]=room");
      await fetchGetRoomTour();
    } else {
      notification.error({
        message: "Có lỗi xảy ra!!!",
        description: "Không thể update phòng",
        duration: 3,
      });

      //  setIsSubmit(false)

      //console.log("res check", res);
    }
  };

  return (
    <>
      <Modal
        title="Update Room"
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          setDataUpdateRoom(null);
          form.resetFields();
        }}
        okText="Cập nhật"
        cancelText="Hủy"
        confirmLoading={isSubmit}
        width={"50vw"}
        maskClosable={false}
      >
        <Divider />
        <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
          <Row gutter={15}>
            <Form.Item
              hidden={true}
              label="ID"
              name="id"
              labelCol={{ span: 24 }}
            >
              <Input />
            </Form.Item>

            <Col span={12} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Name Room"
                name="name"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Please input name!" }]}
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
              <div className="handle-logo-tour">
                <div className="media-tour">
                  <img src={previewLogo || imgRoom} alt="#tour" />
                </div>
                <div className="input-tour">
                  <label htmlFor="imgTour">
                    <span className="btn-change-tour">Đổi Logo</span>
                    <input
                      type="file"
                      id="imgTour"
                      style={{ display: "none" }}
                      onChange={(e) => handleUploadImg(e, "logo")}
                    />
                  </label>
                </div>
              </div>
            </Col>

            <Col span={24} style={{ padding: "0 10px" }}>
              <Form.Item
                label="Description"
                name="description"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Please input description!" },
                ]}
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

export default ModalUpdateRoom;
