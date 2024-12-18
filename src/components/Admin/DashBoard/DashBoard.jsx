import CountUp from 'react-countup';
import { Col, Row, Statistic, Card } from 'antd';
import './dash.scss';
import { callGetAllCustomer, callGetAllPrice, callGetAllPriceRe, callGetDetailOrder, callGetInfoDashBoard, callGetListOrder, callGetListOrderDash, callGetRoomTour, callGetRoomTourDash, callGetStockInOrder, callGetStockInOrderDash, callListOrderStatus, callListReceiptStatus } from '../../../services/api';
import { ResponsiveContainer, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts';

import { useEffect, useState } from 'react';
const COLORS = ['#0088FE', '#FF8042'];
const DashBoard = () => {
    const formatter = (value) => <CountUp end={value} separator="," />;
    const [chartData, setChartData] = useState({})

    useEffect(()=>{
        fetchGetInfoDash()
        
    },[])

    const fetchGetInfoDash = async() => {
        
        // const res = await callGetInfoDashBoard();
        const res = await callGetAllCustomer()
        const res2 = await callGetListOrderDash()
        const res2Re = await callGetStockInOrderDash()
        const res3 = await callGetRoomTourDash()
        const res4 = await callGetAllPrice()
        const res4Re = await callGetAllPriceRe()
        const res5 = await callListOrderStatus()
        const res6 = await callListReceiptStatus() 
        const revenue = res4 - res4Re
        console.log("res>>>",res);
        if(res && res.data){
            // setChartData(res.data)
            setChartData({
                customer: res.total,
                products: res3.total,
                orders: res2.total,
                receipts: res2Re.total,
                revenue_order: res4,
                revenue_receipt: res4Re,
                revenue: revenue,
                order_pending: res5[1]?.orderCount || 0,
                order_completed: res5[0]?.orderCount || 0,
                receipt_completed: res6[1]?.receiptCount || 0,
                receipt_pending: res6[2]?.receiptCount || 0,
                receipt_cancel: res6[0]?.receiptCount || 0,
            })
        }
    }
   
    const data = [
        {
          "name": "Order pending",
          "op": chartData?.order_pending,
        },
        {
          "name": "Order completed",
          "oa": chartData?.order_completed,
         
        },
        {
          "name": "Receipt pending",
          "oe": chartData?.receipt_pending,
         
        },
        {
          "name": "Receipt completed",
          "oc": chartData?.receipt_completed,
        },
        {
          "name": "Receipt cancel",
          "opc": chartData?.receipt_cancel,
        },
        
      ]
    const pieData = [
        { name: "Sell", value: chartData?.revenue_order || 0 },
        { name: "Buy", value: chartData?.revenue_receipt || 0 }
    ];
    
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
                            <Statistic title="Products" value={chartData?.products} formatter={formatter} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Statistic title="Orders" value={chartData?.orders} formatter={formatter} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Statistic title="Receipts" value={chartData?.receipts} formatter={formatter} />
                        </Card>
                    </Col>

                </Row>
                <Row gutter={5} style={{display:'flex', gap:'83px',  marginTop: '60px'}}>
                    <Col span={5}>
                        <Card bordered={false}>
                            <Statistic title="Orders Revenue (VNĐ)" value={chartData?.revenue_order} formatter={formatter} />
                        </Card>
                    </Col>
                    <Col span={7}  >
                        <Card bordered={false}>
                            <Statistic title="Income Revenue (VNĐ)" value={chartData?.revenue_receipt} formatter={formatter}  />
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card bordered={false}>
                            <Statistic title="Revenue (VNĐ)" value={chartData?.revenue} formatter={formatter} />
                        </Card>
                    </Col>
                </Row>
                </div>
                <div className="chart-dash">
                    
                    <ResponsiveContainer width="50%" height={400}>
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
                    <ResponsiveContainer width="50%" height={400}>
                        <PieChart>
                            
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label={(entry) => `${entry.name}: ${entry.value}`}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            
                            <Legend verticalAlign="bottom" height={36} />
                            
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>


                </div>
           
            
        </>
     );
}
 
export default DashBoard;