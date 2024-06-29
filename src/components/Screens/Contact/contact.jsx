import React, { useEffect } from 'react'
import './contact.css'
import Header from '../../Header/header'
// import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const contact = () => {

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
        <h3 className='access'>contact us</h3>
        <div className="theContacts">
          <div className="facebookCont"><h4 className='facebook'>Facebook <FaFacebook />:</h4><h4 className='facebookInfo'>alexander adekola</h4></div>
          <div className="whatsappCont"><h4 className='whatsapp'>WhatsApp <FaWhatsappSquare />:</h4><h4 className='whatsappInfo'>+234 706 806 1262</h4></div>
          <div className="twitterCont"><h4 className='twitter'>Twitter <FaTwitter />:</h4><h4 className='twitterInfo'>@Lexx8642</h4></div>
        </div>
    </div>
  )
}

export default contact