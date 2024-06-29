import React, { useRef, useState, useEffect } from "react";
import "./testimonial.css";
import Slider from "react-slick";
import pic from "../../../assets/Profile image.jpg";
import Header from "../../Header/header";
import { data } from "../../../data";
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  // const loggedUser = useSelector((state) => state.logged.value)
  const navigate = useNavigate()
  
  // useEffect(() => {
  //   if (loggedUser === false) {
  //     navigate('/')
  //   }
  //   },[])

  

  
  const [comments, setComments] = useState(data);
  const [result, showResult] = useState (false, true)
  const form = useRef ()
  const Result = () => {
    return (
        <p className="shortReply">Your profile has been successfully created</p>
    )
} 

  const handleComments = (e) => {
    e.preventDefault();
      
        emailjs.sendForm("service_6wn8t1p", "template_xlx01hb", form.current, "b_dDVDOi_UBiXebXF")
        .then(
          (result) => {
            console.log(result.text);
            console.log("Your profile has been successfully created")
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
      showResult(true);
    };
    setTimeout(() => {
      showResult(false);
     },5000 );


  return (
    <div className="sliderContainer">
      <Header />
      <div className="innerSliderCont">
        <h2 className="testimonialHeader">what our customers are saying</h2>
        <Slider {...settings} className="feedbackContainer">
          {comments.map((theComments) => {
            return (
              <div className="slideWrap">
                <div className="commentBox" key={theComments.id}>
                  <div className="profileSection">
                    <div className="imgCont">
                      <img src={theComments.photo} alt="" />
                    </div>
                    <h4>{theComments.userName}</h4>
                    <h5>{theComments.profession}</h5>
                  </div>
                  <div className="messageSection">
                    <p>{theComments.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <form ref={form} onSubmit={handleComments} className="complaints">
        <label className="commentName">
          Name: <input className="commentInput" placeholder="Name" name="user_Name" type="text" />
        </label>
        <label className="commentEmail">
          Email: <input className="commentInput" placeholder="Email" name="user_Email" type="email" />
        </label>
        <label className="commentProfession">
          Profession: <input className="commentInput" placeholder="Profession" name="user_Profession" type="text" />
        </label>
        <label className="comments">
          COMMENTS: <textarea className="comment" name="user_Comment" placeholder="Type in your comments/complaints" cols="30" rows="10"></textarea>
        </label>

        <button className="submitComment">Send</button>
      <div>{result ? <Result/>: null}</div>
      </form>
    </div>
  );
}
