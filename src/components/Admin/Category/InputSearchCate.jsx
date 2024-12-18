import { Col, Row, Form, theme, Button, DatePicker } from "antd";
import moment from "moment";

const InputSearchByDate = (props) => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const { handleQuerySearch } = props;

  const formStyle = {
    maxWidth: "750px",
    borderRadius: token.borderRadiusLG,
    padding: 4,
  };

  const onFinish = (value) => {
    
    const { date } = value;
    
    let querySearch = ``;
    if (date) {
      // Format date to YYYY-MM-DD
      const formattedDate = moment(date.$d).format("YYYY-MM-DD");
      const sqlDate = moment(date).utcOffset(0).format("YYYY-MM-DD");
      console.log(formattedDate)
     
      querySearch += `toDate=${formattedDate}`;
    }
    handleQuerySearch(querySearch);
  };

  return (
    <Form
      name="search_by_date"
      style={formStyle}
      form={form}
      onFinish={onFinish}
    >
      <Row gutter={16}>
        <Col span={16}>
        <Form.Item
          labelCol={{ span: 24 }}
          name={`date`}
          label={"Select Date"}
          rules={[{ required: true, message: "Please select a date!" }]} 
        >
        <DatePicker
            format="YYYY-MM-DD"
            style={{ width: "100%" }}
            status=""
        />
      </Form.Item>
        </Col>
        <Col span={6} style={{ textAlign: "right", marginTop: "40px" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default InputSearchByDate;
