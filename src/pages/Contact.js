import React from "react";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div>
      <Layout>
        <h1 className=" mt-2"> Office Contacts</h1>
        <hr />

        <div className="contact-details">
          <p>
            {" "}
            <b>Address </b>: Nabiganj Pourohova Office{" "}
          </p>
          <p>
            {" "}
            <b>Phone </b>: +88017********{" "}
          </p>
          <p>
            {" "}
            <b>Email </b>: exapmle@gmail.com{" "}
          </p>
        </div>
        <hr />

        <div className="address">
          <h3> Here you will find us</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3923814401287!2d91.50774558202743!3d24.575651100188328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37513f824b0a37b5%3A0xde63dbf391993445!2zTmFiaWdhbmogUGF1cmFzaGF2YSBPZmZpY2Ug4Kao4Kas4KeA4KaX4Kae4KeN4KacIOCmquCnjOCmsOCmuOCmreCmviDgppXgpr7gprDgp43gpq_gpr7gprLgp58!5e0!3m2!1sen!2see!4v1668287074384!5m2!1sen!2see"
            width="600"
            title="Map"
            height="450"
    
          ></iframe>
        </div>
      </Layout>
    </div>
  );
}
