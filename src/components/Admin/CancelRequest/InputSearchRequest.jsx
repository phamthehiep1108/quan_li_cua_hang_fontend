import { Col, Row, Input, Form, theme, Button } from "antd";

const InputSearchRequest = (props) => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const {handleQuerySearch} = props
  
  const formStyle = {
    maxWidth: "750px",
   // background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 20,
  };

  const onFinish = (value) => {
    const {name} = value
    let querySearch = ``;
    if(name){
      querySearch+=`&search=${name}`
    }
    handleQuerySearch(querySearch)
  };

  return (
    <>
      <Form name="advanced_search" style={formStyle} form={form} onFinish={onFinish} >
        <Row>
          <Col span={16}>
            <Form.Item
              labelCol={{ span: 24 }}
              name={`name`}
              label={"Name order"}
              autocomplete="off"
            >
              <Input status="" />
            </Form.Item>
          </Col>
          <Col span={8} style={{ textAlign: "right", marginTop:"40px" }}>
            <Button type="primary" htmlType="submit">
                Search
            </Button>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Form>
    </>
  );
};

export default InputSearchRequest;
