import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import HeaderComponent from "components/header/navbar";
import RegisterComponent from "components/admin/register.component";
import LoginComponent from "components/admin/login.component";
import ContactComponent from "components/admin/contact.component";

import './register.css';




const RegisterFormComponent = () => {
    return (
        <>
    
    <HeaderComponent />

    <section  id="fixed-sub-nav" className="vh-100 gradient-background">
   
   
    <section id="register" className="py-5">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-6 col-md-8 col-12  mt-2 pt-1">
             <RegisterComponent/>
             </div>
          </div>
        </div>
        </section>

        <section id="register" className="py-5">
         <div className="container">
             <div className="row align-items-center">
                <div className="col-md-6"> 
                   <LoginComponent/>
                </div>
                <div className="col-md-6 mt-3" style={{marginBottom: 'auto'}}>
                <h2 className="about-title">Already have a SMART account? Log in</h2>

               <p className="about-details mt-4">
               As a professional in the fields of microwaves, antennas, and radar technologies, logging into the Society for Microwaves, Antennas and Radar Technologies (SMART) platform provides you with exclusive access to a wealth of resources and opportunities. By becoming a member, you can participate in specialized workshops, receive newsletters, and connect with a network of experts in areas such as RF and microwave engineering, millimeter-wave and terahertz technologies, and radar systems. Engaging with SMART will enhance your professional development and keep you informed about the latest advancements in your field.
                       </p> 
            </div>
                
                </div>
             </div>
      </section> 

      <section id="contact" className="py-5 fade-in">
     <ContactComponent/>
   </section>
        


      </section>


       </>
  )
}
export default RegisterFormComponent;

