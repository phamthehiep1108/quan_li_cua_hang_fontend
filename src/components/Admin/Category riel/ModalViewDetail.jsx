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
                title="Detail" 
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
                    
                    <Descriptions.Item label="Name">
                        {dataView?.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Products">
                        {dataView?.name}
                    </Descriptions.Item>

                    <Descriptions.Item label="Description" span={12}>
                        {dataView?.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Logo" span={12}>
                        {dataView?.logo ? <>
                            <img src={`${dataView?.logo}`} alt="#imgLogo" style={{height:"250px", width:"350px"}}/>
                        </>
                        :   "No image available..."

                        }
                    </Descriptions.Item>
                   
                    
                   
                </Descriptions>
            </Drawer>
        </>
     );
}
 
export default ModalViewDetail;