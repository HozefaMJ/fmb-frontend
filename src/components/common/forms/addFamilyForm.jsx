import React from 'react';
import { Link } from 'react-router-dom';
import DetailBar from '../detailBar';
import NavbarNew from '../navbarnew';
import * as BiIcons from "react-icons/bi";
import "../../../styles/elementsCss/addFamilyForm.css";

function AddFamilyForm(){
    return(
        <div className="add-family-form-main">
        <NavbarNew/>
        <DetailBar/>
        <Link to="/users" className="back-to-previous"> 
            <BiIcons.BiArrowBack/>
            <h6>Back To Families</h6>
        </Link>
        <div className="add-family-main-form">
        <h1>User Registration</h1>
            <div className="add-family-form">
                <div className="add-family-form-div1">
                    <input type="text" placeholder="Full Name" name="fullname" />
                    <textarea type="text" placeholder="Address" name="address"/>
                    <input type="number" placeholder="Family Members Count" id="" name="familysize"/>
                    <input type="number" placeholder="Phone No." id="" name="phonenumber"/>
                </div>
                <div className="add-family-form-div2">
                    <input type="text" placeholder="Sabil" name="sabil"/>
                    <input type="number" placeholder="HOF ITS" name="hofits"/>
                    <input type="email" placeholder="Email Id" name="email" id=""/>
                    <button type="submit">Add Family</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddFamilyForm;