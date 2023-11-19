import { useParams } from "react-router-dom";
import TourDetail from "../../components/Tour/TourDetail";
import { callGetTourRoomDetail } from "../../services/api";
import { useEffect, useState } from "react";

const TourPage = () => {
   
    const [tourDetail, setTourDetail] = useState([])
    const params = useParams(); 
    let id = params?.id
    

    useEffect(() => {
        getTourDetail()
    }, [id]);

    const getTourDetail = async() => {
        const res = await callGetTourRoomDetail(id)
        if(res && res.data){
           // console.log(res.data);
            setTourDetail(res.data)
        }
    }

    return ( 
        <>
            <TourDetail
                tourDetail = {tourDetail}
                id = {id}
            />
        </>
     );
}
 
export default TourPage;