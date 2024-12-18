import { Drawer, Descriptions, Badge, Divider } from 'antd';
import { useState, useEffect } from 'react';
import { callGetProductBasedOnOrders } from '../../../services/api';
const ViewDetailOrder = (props) => {

    const {open, setOpen, dataView} = props
    return ( 
        <>
            <Drawer 
                title="Xem chi tiết" 
                placement="right" 
                onClose={()=>setOpen(false)} 
                open={open}
                size={"large"}
            >
                <Descriptions bordered column={2}>
                    {/* <Descriptions.Item label="ID">
                        {dataView?.id}
                    </Descriptions.Item> */}
                    <Descriptions.Item label="Order ID">
                        {dataView?.orderId}
                    </Descriptions.Item>
                    
                    <Descriptions.Item label="Order Date">
                        {dataView?.orderDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="Total Amount">
                        {dataView?.totalAmount}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={12}>
                        <Badge status="processing" /> {' '}
                        {dataView?.status}
                    </Descriptions.Item>

                    <Descriptions.Item label="Products Add">
                        {dataView?.products && dataView.products.length > 0 ? (
                            dataView.products.map((product, index) => (
                            <div key={index}>
                                <p>{product.productName} (x{product.quantity})</p>

                            </div>
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                    </Descriptions.Item>

                    <Descriptions.Item label="Cost">
                        
                    {dataView?.products && dataView.products.length > 0 ? (
                            dataView.products.map((product, index) => (
                            <div key={index}>
                                <p>{product.productPrice} VNĐ</p>

                            </div>
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                       
                    </Descriptions.Item>
                    
                    <Descriptions.Item label="Description" span={12}>
                        "No description here..."
                    </Descriptions.Item>
                    <Descriptions.Item label="Logo" span={12}>
                        {dataView?.logo ? <>
                            <img src={`${dataView?.logo}`} alt="#imgLogo" style={{height:"300px", width:"300px"}}/>
                        </>
                        :   "No image available"

                        }
                    </Descriptions.Item>
                   
                    <Descriptions.Item label="Supplier Id">
                        {dataView?.supplierId}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                        {dataView?.supplierEmail}
                    </Descriptions.Item>
                    <Descriptions.Item label="Supplier Name">
                        {dataView?.supplierName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Phone">
                        {dataView?.supplierPhone}
                    </Descriptions.Item>

                   
                </Descriptions>
            </Drawer>
        </>
     );
}
 
export default ViewDetailOrder;