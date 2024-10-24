import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import { callGetTourRoomHome } from "../../services/api";
import "./home.scss";

const Home = () => {
  const [listTour, setListTour] = useState([]);
  const [listRoom, setListRoom] = useState([]);

  useEffect(() => {
    fetchListTourHome();
    fetchListRoomHome();
  }, []);

  const fetchListTourHome = async () => {
    const res = await callGetTourRoomHome("3", "tour", "1");
    if (res && res.data) {
      setListTour(res.data.data);
    }
  };

  const fetchListRoomHome = async () => {
    const res = await callGetTourRoomHome("3", "room", "10");
    if (res && res.data) {
      setListRoom(res.data.data);
    }
  };

  return (
    <>
      <HomePage listTour={listTour} listRoom={listRoom} />
    </>
  );
};

export default Home;
