import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router-dom";
export const Signup = () => {
  const history=useHistory();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: ""

});
let name, value;
const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });

}

const PostData = async(e)=>{
  e.preventDefault();
  const { fullname,email,password,cpassword}=user;


  const res=await fetch("/api/auth/register",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          fullname,email,password,cpassword
      })
  });
  //const data =await res.json();
  if(res.status===401)
  {
      window.alert("invalid details")
  }
  else{
      window.alert("User Registered Successfully");
      history.push("/Login");
  }    
}


  return (
    <div className="signup">
      <div className="signupbox">
        <div className="signupleft">
          <div className="signupcontent">
            <div>
              <span className="heading">Sign Up</span>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <span>Don't have an account?</span>
            </div>
            <div className="signupfields">
              <div>
                <span>Full Name</span>
              </div>
              <div className="inputstyle">
                <input type="text"
                 placeholder="enter your name"
                 value={user.fullname} onChange={handleInputs}
                  name="fullname" />
              </div>

              <div>
                <span>Your Email</span>
              </div>
              <div className="inputstyle">
                <input
                  type="email"
                  placeholder="enter your email"
                  value={user.email} onChange={handleInputs}
                  name="email"
                />
              </div>

              <div>
                <span>Password</span>
              </div>

              <div className="inputstyle">
                <input
                  type="password"
                  placeholder="enter your password"
                  value={user.password} onChange={handleInputs}
                  name="password"
                />
              </div>

              <div>
                <span>Repeat Password</span>
              </div>

              <div className="inputstyle">
                <input
                  type="password"
                  placeholder="enter your password"
                  value={user.cpassword} onChange={handleInputs}
                  name="cpassword"
                />
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#0984e3",
                    color: "white",
                    width: "100%",
                    height: "44px",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "15px",
                  }}
                  className="point"
                  onClick={PostData}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="signupright">
          <div className="signupimage">
            <img
              src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="..."
            />
            <div
              style={{ position: "absolute", bottom: "30px", width: "100%" }}
            >
              <div
                style={{
                  position: "relative",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>
                  I have an account?
                  <span
                    style={{ color: "gold", paddingLeft: "4px" }}
                    className="point"
                  >
                    <NavLink
                      to="Login"
                      style={{ textDecoration: "none", color: "gold" }}
                    >
                      click here
                    </NavLink>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
