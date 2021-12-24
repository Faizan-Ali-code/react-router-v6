import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams();
  console.log(params.bookingref);
  console.log(params.email);
  return (
    <div>
      <h1>Contact</h1>
      {/* <h1> {params.bookingref}</h1> */}
    </div>
  );
};

export default Contact;
