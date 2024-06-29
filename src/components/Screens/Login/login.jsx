import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myLogin } from "../../../Slices/UserSlice.jsx";
import { loggedIn } from "../../../Slices/IsLoggedIn";
import Header from "../../Header/header";

const login = () => {
  const baseUrl = "https://dummyjson.com";
  //   const [loggedData, setLoggedData] = useState({});
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorPage, setErrorPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: passWord,
        }),
      });

      const data = await res.json();
      // loggedIn was originally set to false in the <IsLoggedIn.jsx />.
      // It was dispatched to be true in order to determine whether the login button will be dispalyed in the <Homescreen /> or not.
      // When you are navigated back to the <Homescreen/> from the login page, the loggedIn state becomes true.
      dispatch(loggedIn(true));

      if (res.ok) {
        // console.log('login', data);
        // if the res.ok is true, it sends the data to the redux store and also navigates you to the home page without the login button
        const savedData = localStorage.setItem('user', JSON.stringify(data))
        dispatch(myLogin({ data }));
        dispatch(loggedIn(true))
        navigate("/");
      }
      // if it isn't true, it brings out an error message
      else {
        setErrorMessage(true);

        // it brings out the error message below when the input fields are empty
        setEmptyData(false);
        let data = {};
        dispatch(loggedIn(false));
      }

      if (userName == "" && passWord == "") {
        // if th username and th password input fiields are empty, it brings out the error messages above the input fields(setEmptyData) but does not bring out the error message beloe the button(setError message)
        setEmptyData(true);
        setErrorMessage(false);
      }
    } catch (error) {
      console.log(error);
      // it brings out the set error page when it is unable to fetch the data or when there is no network or probably when the site is down
      setErrorPage(true);
    }
  };

  return (
    <div className="loginContainer">
      <Header />
      <h2>Login Page</h2>

      <form method="GET" onSubmit={handleSubmit} className="loginDetails">
        {emptyData && <p className="failedEntry">Please enter username</p>}
        <div className="nameEntry">
          Username:
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Enter your Username"
          />
        </div>

        {emptyData && <p className="failedEntry">Please enter password</p>}
        <div className="passwordEntry">
          Password:
          <input
            type="password"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            placeholder="Enter your Password"
          />
        </div>

        <button className="submitForm">login</button>
      </form>

      {errorMessage && (
        <p className="errorContent">Incorrect username or password</p>
      )}

      {errorPage && navigate("/error")}
    </div>
  );
};

export default login;
