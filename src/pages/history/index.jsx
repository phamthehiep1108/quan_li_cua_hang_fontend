import { useParams } from "react-router-dom";
import HistoryDetail from "../../components/History/HistoryDetail";
import { callGetDetailOrder } from "../../services/api";
import { useEffect, useState } from "react";

const HistoryPage = () => {
    const params = useParams()
    const id = params?.id;
    const [dataDetail, setDataDetail]  = useState({})
    useEffect(()=>{
        fetchDetailOrder()
    },[id])

    const fetchDetailOrder = async() => {
        const res = await callGetDetailOrder(id)
        if( res && res.status === 200){
            setDataDetail(res.data)
        }
        
    }
    return ( 
        <>
            <HistoryDetail  dataDetail={dataDetail}/>            
        </>
     );
}
 
export default HistoryPage;