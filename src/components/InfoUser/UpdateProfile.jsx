import { Col, Divider, Row, Form, Input, Button, message } from "antd";
import "./profile.scss";
import avatarImg from "../../assets/img6.jpg";
import { useEffect, useState } from "react";
import { callGetInfoUser, callUpdateInfoUser } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { doUpdateInfoAction } from "../../redux/account/accountSlice";


const UpdateInfo = () => {
  const [form] = Form.useForm();
  const [previewImg, setPreviewImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [infoUser, setInfoUser] = useState({});
  const [initValue, setInitValue] = useState({});

  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch()
  const userId = user.id;

  useEffect(() => {
    fetchInfoUser();
  }, []);

  //get info user
  const fetchInfoUser = async () => {
    const res = await callGetInfoUser(userId);
    //  console.log('check res',res);
    if (res && res.status === 200) {
      setInfoUser(res.data);
      const formValues = {
        display_name: res.data?.display_name,
        email: res.data?.email,
        phone_number: res.data?.phone_number,
        detail_address: res.data?.detail_address,
        avatar: res.data?.avatar,
      };
      setInitValue(formValues);
      setPreviewImg(res.data?.avatar);
      form.setFieldsValue(formValues);
    }
  };

  //update info user

  const onFinish = async (values) => {
    const { display_name, detail_address, phone_number } = values;
    //console.log('values onf',display_name, detail_address, phone_number, avatar);
    const res = await callUpdateInfoUser(
      userId,
      display_name,
      phone_number,
      detail_address,
      avatar
    );
    if (res && res.status === 200) {
      message.success("Thông tin của bạn đã được chỉnh sửa");
      dispatch(doUpdateInfoAction(res.data))
      await fetchInfoUser();
    }
  };

  const handleChangeAvatar = (e) => {
    if (e && e?.target?.files[0]) setAvatar(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="info-page-container">
        <div className="page-wrapper">
          <div className="info-header">
            <h2>Thông tin cá nhân</h2>
            <span style={{fontSize:'13px'}}>Quản lý thông tin cá nhân</span>
          </div>
          <Divider />
          <div className="form-update-info">
            <Form form={form} onFinish={onFinish}>
              <Row gutter={[]}>
                <Col span={16}>
                  <Row gutter={[20]}>
                    <Col span={12}>
                      <Form.Item
                        name={"display_name"}
                        label="Tài khoản"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input name!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"email"}
                        label="Email"
                        labelCol={{ span: 24 }}
                      >
                        <Input disabled={true} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"phone_number"}
                        label="Số điện thoại"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input phone!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={"detail_address"}
                        label="Địa chỉ"
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "Please input address!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        danger
                        onClick={() => form.submit()}
                      >
                        Chỉnh sửa thông tin
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Row>
                    <div className="media-avatar-profile">
                      <img src={previewImg || avatarImg} alt="#avatar" />
                    </div>
                    <div className="input-avatar">
                      <label htmlFor="avatar">
                        <span className="btn-change-avatar">Đổi Avatar</span>
                        <input
                          type="file"
                          id="avatar"
                          style={{ display: "none" }}
                          onChange={(e) => handleChangeAvatar(e)}
                        />
                      </label>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInfo;
