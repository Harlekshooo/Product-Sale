import React, { useEffect, useState } from "react";
import "./homescreen.css";
import firstImage from "../../../assets/first big image.png";
import dots from "../../../assets/dots.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/header";
import { myLogin } from "../../../Slices/UserSlice";

const First = () => {
  // const [loggedInUser, setLoggedInUser] = useState(true);
  const dispatch = useDispatch()

  //The useSelector brought out the dispatched state of the loggedIn from the <login.jsx /> from the store which is true

  //loggedUser = loggedIn  ( from the dispatched(loggedIn(true)) in <login.jsx /> )
  const loggedIn = useSelector((state) => state.logged.value);

  const user = useSelector((state) => state.user.value);

  // useEffect(() => {
  //   dispatch(myLogin({ restoredData }))
  // }, [])

  // console.log(user);

  
  // useEffect(() => {
  //   // We can't use loggedUser like that so we had to vary it with a state variable called loggedInUser.  
  //   if (loggedUser) {
  //     // when the loggedUser is true, the loggedInUser is set to false.
  //     setLoggedInUser(false);
  //   } else {
  //     // when the loggedUser is false, the loggedInUser is set to true.
  //     setLoggedInUser(true);
  //   }
  // }, []);
  const userr = localStorage.getItem('user')
  let restoredData = JSON.parse(userr)

  const handleLogOut = () => {
    // const alex = Object.keys(user).length > 0
    console.log('handleLogOut');
    localStorage.removeItem('user')
    
    let restoredData = {}
    dispatch(loggedIn(false))
  }

  console.log('d', loggedIn);
  

  return (
    <div className="container">
      <Header />
      <div className="heroContent">
        <div className="textContainer">
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare, accesible
            on mobile and online for everyone
          </p>
          { loggedIn ? (
            // loggedInUser has been originally set to true above
            // If loggedInUser is true it will display the login button
            <NavLink to="" onClick={handleLogOut}>
              <div className="login">Log out{loggedIn}</div>
            </NavLink>
          ) : (
            
                // If loggedInUser is false, it won't display the login button
                <NavLink to="/login">
                  <div className="login">Login</div>
                </NavLink>
           
          )}
        </div>
        <div className="imageContainer">
          <img src={firstImage} alt="/" />
        </div>
      </div>

      <div className="dotContainer">
        <img src={dots} alt="/" />
      </div>
    </div>
  );
};

export default First;
