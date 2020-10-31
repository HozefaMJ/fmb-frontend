import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';
import "../../../src/styles/detailBar.css";

function DetailBar() {
    return (
        <>
        <IconContext.Provider value={{color:'#2ACB60'}}>
            <div className="detailbar-item-text detailbar-menu-items">
                <div className="detailbar-data">
                    <FaIcons.FaUser/>
                    <p>Hozefa Bhai Jaorawala</p>
                </div>
                <div className="detailbar-data">
                    <FaIcons.FaUserEdit/>
                    <p>Admin</p>
                </div>
                <div className="detailbar-data">
                    <FaIcons.FaIdCard/>
                    <p>30443457</p>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default DetailBar;