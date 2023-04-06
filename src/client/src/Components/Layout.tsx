import React from "react";

import Footer from "./Footer";
import Header from "./Header";





export default function Layout(props:any){
    return(
        <div className="Container">
        <Header/>
        {props.children}
        <Footer/>
        
        </div>
    )
}