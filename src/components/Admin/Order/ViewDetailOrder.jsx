import { Drawer, Descriptions, Badge, Divider } from 'antd';

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
                    <Descriptions.Item label="ID">
                        {dataView?.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="RoomID">
                        {dataView?.room_id}
                    </Descriptions.Item>
                    
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
                            <img src={`${dataView?.logo}`} alt="#imgLogo" style={{height:"300px", width:"300px"}}/>
                        </>
                        :   "Không có ảnh hiển thị"

                        }
                    </Descriptions.Item>
                   
                    <Descriptions.Item label="userID">
                        {dataView?.user_id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                        {dataView?.user?.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="User Name">
                        {dataView?.user?.display_name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Phone Number">
                        {dataView?.user?.phone_number}
                    </Descriptions.Item>
                   
                </Descriptions>
            </Drawer>
        </>
     );
}
 
export default ViewDetailOrder;