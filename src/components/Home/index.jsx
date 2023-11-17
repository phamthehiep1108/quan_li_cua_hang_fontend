import { callGetTourRoomHome } from "../../services/api";
import { useEffect, useState } from "react";
import { Rate } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate()
  const [listTour, setListTour] = useState([])
  const [listRoom, setListRoom] = useState([])

  useEffect(() => {
      fetchListTourHome();
      fetchListRoomHome();
  }, []);

  const fetchListTourHome = async() => {
      const res = await callGetTourRoomHome("3","tour")
      if(res && res?.data){
          setListTour(res.data.data)
        //  console.log("check res",res);
      }
  }
  const fetchListRoomHome = async() => {
    const res = await callGetTourRoomHome("3","room")
    if(res && res?.data){
        setListRoom(res.data.data)
      //  console.log("check res",res);
    }
  }

  //console.log( moment('2011-02-07 15:13:06').diff(moment('2011-02-01 12:14:06'),"days"));

  return (
    <>
    <HomePage
      listTour = {listTour}
      listRoom = {listRoom}
    />
    
    </>
  );
};

export default Home;
