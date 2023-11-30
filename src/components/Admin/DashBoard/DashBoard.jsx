import CountUp from 'react-countup';
import { Col, Row, Statistic, Card } from 'antd';
import './dash.scss';
import { callGetInfoDashBoard } from '../../../services/api';
import { ResponsiveContainer, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { useEffect, useState } from 'react';
const DashBoard = () => {
    const formatter = (value) => <CountUp end={value} separator="," />;
    const [chartData, setChartData] = useState({})

    useEffect(()=>{
        fetchGetInfoDash()
    },[])

    const fetchGetInfoDash = async() => {
        const res = await callGetInfoDashBoard();
        console.log("res>>>",res);
        if(res && res.status === 200){
            setChartData(res.data)
        }
    }
   
    const data = [
        {
          "name": "Order pending",
          "op": chartData?.order_pending,
          
         
        },
        {
          "name": "Order access",
          "oa": chartData?.order_access,
         
        },
        {
          "name": "Order ending",
          "oe": chartData?.order_ending,
         
        },
        {
          "name": "Order cancel",
          "oc": chartData?.order_cancel,
         
        },
        {
          "name": "Order pending cancel",
          "opc": chartData?.order_pending_cancel,
         
        },
        
      ]
    
    return ( 
        <>
            <div className='dashboard-container'>
                <div className="header-dash">
                <Row gutter={5} style={{display:'flex', gap:'70px'}}>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Statistic title="Customer" value={chartData?.customer} formatter={formatter} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Statistic title="Room" value={chartData?.room} formatter={formatter} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Statistic title="Tour" value={chartData?.tour} formatter={formatter} />
                        </Card>
                    </Col>
                </Row>
                </div>
                <div className="chart-dash">
                    <ResponsiveContainer width="95%" height={400}>
                            <BarChart  data={data} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="op" fill="#84add8" />
                                <Bar dataKey="oa" fill="#3ae414" />
                                <Bar dataKey="oe" fill="#f89728" />
                                <Bar dataKey="oc" fill="#e41414" />
                                <Bar dataKey="opc" fill="#e414d6" />
                            </BarChart>
                    </ResponsiveContainer>    
                </div>
            </div>
        </>
     );
}
 
export default DashBoard;