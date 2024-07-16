import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams();
  console.log(params);
  return <div>Contact</div>;
};

export default Contact;
