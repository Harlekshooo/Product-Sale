import React, { useEffect } from "react";
import "./aboutUs.css";
import Header from "../../Header/header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const aboutUs = () => {

  // const loggedUser = useSelector((state) => state.logged.value)

  const navigate = useNavigate()
  // useEffect(() => {
  //   if (loggedUser === false) {
  //     navigate('/')
  //   }
  //   },[])

  return (
    <div>
      <Header />
      <h3 className="aboutHeader">what you need to know about us</h3>
      <p className="aboutMessage">
        Trafalgar is an app that helps you to purchase various kinds of products
        online. With Trafalgar, you can purchase smartphones, laptops, perfumes,
        home decoration arts and groceries at reduced price rates. All you need
        to do is call your shot and we will deliver. We are fast and reliable. It
        has improved lives and depleted the stress of going out to purchase such
        products at a higher rate. We also have a global space that allows us to
        receive feedbacks from our customers about the products they purchased.
        We work on the complaints of our customers so that they can have a more
        improved and sensational experience whenever they hop on a ride into the
        global space.
      </p>
    </div>
  );
};

export default aboutUs;
