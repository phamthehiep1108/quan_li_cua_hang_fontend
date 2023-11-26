import { useParams } from "react-router-dom";
import TourDetail from "../../components/Tour/TourDetail";
import { callGetTourRoomDetail, callGetListCommentTour } from "../../services/api";
import { useEffect, useState } from "react";

const TourPage = () => {
   
    const [tourDetail, setTourDetail] = useState([])
    const [listComment, setListComment] = useState([])
    const params = useParams(); 
    let id = params?.id
    

    useEffect(() => {
        getTourDetail();
        getListCommentTour();
    }, [id]);



    const getTourDetail = async() => {
        const res = await callGetTourRoomDetail(id)
        if(res && res.data){
            setTourDetail(res.data)
        }
    }
    const getListCommentTour = async() => {
        const res = await callGetListCommentTour(id)
        if(res && res?.data && res?.data?.data){
            setListComment(res.data.data)
        }
    }

    return ( 
        <>
            <TourDetail
                tourDetail = {tourDetail}
                id = {id}
                tourComment = {listComment}
            />
        </>
     );
}
 
export default TourPage;