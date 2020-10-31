import React, { Component } from "react";
//import smallGirl from "../img/kettle-bg.jpg";
import "../../../src/styles/home.css";
import Card from "../common/elements/card";
import ThaliMenuCard from "../common/elements/thaliMenuCard";
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <NavbarNew/>
        <DetailBar/>
       <div className="basic-data-card-row">
         <Card cardName={"Daily Thaali Count:"} cardCount={192}/>
         <Card cardName={"Total User Count:"} cardCount={350}/>
         <Card cardName={"Notified Users:"} cardCount={25}/>
       </div>
       <div className="big-data-card-row">
         <ThaliMenuCard date={'1/11/20'} course1={'Malvi Ghost'} course2={"Masoor Dal"} roti={"Roti"} salawat={"Gajar Halvo"}/>
         <ThaliMenuCard date={'2/11/20'} course1={'Biryani'} salawat={"Dudi Halvo"}/>
       </div>
      </div>
    );
  }
}

export default Dashboard;
