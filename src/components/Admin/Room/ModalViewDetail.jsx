import {Badge, Select, Drawer, Descriptions, Row, Col } from "antd";
const ModalViewDetail = (props) => {
    const {open, setOpen, dataView, setDataView} = props
    console.log('data>>>',dataView);
    const onClose = () => {
        setOpen(false)
    }
    return ( 
        <>
            <Drawer 
                title="Xem chi tiết" 
                placement="right" 
                onClose={onClose} 
                open={open}
                size={"large"}
            >
                <Descriptions bordered column={2}>
                    <Descriptions.Item label="ID">
                        {dataView?.id}
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="RoomID">
                        {dataView?.room_id}
                    </Descriptions.Item> */}
                    
                    <Descriptions.Item label="Category Number">
                        {dataView?.type}
                    </Descriptions.Item>
                    <Descriptions.Item label="Type Room">
                        {dataView?.type_room}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={12}>
                        <Badge status="processing" /> {' '}
                        {dataView?.status}
                    </Descriptions.Item>
                    <Descriptions.Item label="Start Date">
                        {dataView?.start_date}
                    </Descriptions.Item>
                    <Descriptions.Item label="End Date">
                         {dataView?.end_date}      
                    </Descriptions.Item>
                    <Descriptions.Item label="Name Room">
                        {dataView?.name}  
                    </Descriptions.Item>
                    <Descriptions.Item label="Cost">
                        
                         {dataView?.cost} 
                       
                    </Descriptions.Item>
                    <Descriptions.Item label="Description" span={12}>
                        {dataView?.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Logo" span={12}>
                        {dataView?.logo ? <>
                            <img src={`${dataView?.logo}`} alt="#imgLogo" style={{height:"250px", width:"350px"}}/>
                        </>
                        :   "Không có ảnh hiển thị"

                        }
                    </Descriptions.Item>
                   
                    
                   
                </Descriptions>
            </Drawer>
        </>
     );
}
 
export default ModalViewDetail;