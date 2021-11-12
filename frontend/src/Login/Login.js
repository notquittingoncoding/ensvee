import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const history=useHistory();
  const [user,setUser]=useState({
      email:"",
      password:""
      
  })
  let name,value;
  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
  }
  const PostData = async(e)=>{
    e.preventDefault();
    const {email,password}=user;


    const res=await fetch("/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });
    if(res.status===400)
    {
        window.alert("Invalid Credentials")
    }
    else{
        window.alert("Signin successfully");
        history.push("/LoginUser");
    }

    
}
  return (
    <div className="signup">
      <div className="signupbox">
        <div className="signupleft">
          <div className="signupcontent">
            <div>
              <span className="heading">Sign In</span>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <span>Welcome, we missed you</span>
            </div>
            <div className="signupfields">
              <div>
                <span>Your email</span>
              </div>
              <div className="inputstyle">
                <input
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={user.email}
                   onChange={handleInputs}
                />
              </div>

              <div>
                <span>Password</span>
              </div>
              <div className="inputstyle">
                <input
                  type="password"
                  placeholder="enter your password"
                  name="password"
                  value={user.password}
                   onChange={handleInputs}
                />
              </div>

              <div className="radiocolumn">
                <div>
                  <input type="radio" />
                  <span> Remember me</span>
                </div>

                <div>
                  <span style={{ marginRight: "20px", color: "orange" }}>
                    Forget Password?
                  </span>
                </div>
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
                    backgroundColor: "orange",
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
                  Sign In
                </button>
              </div>

              <div
                style={{
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <div>---------</div>
                <div>
                  <span>or continue with</span>
                </div>
                <div>----------</div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <button
                  style={{
                    width: "50%",
                    height: "44px",
                    backgroundColor: "#2d3436",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  className="point"
                 
                >
                  <i
                    className="fab fa-steam"
                    style={{ paddingRight: "8px", fontSize: "20px" }}
                  ></i>
                  SIgn in with stream
                </button>
                <button
                  style={{
                    width: "30%",
                    height: "44px",
                    backgroundColor: "#74b9ff",
                    float: "right",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "20px",
                  }}
                  className="point"
                >
                  <i className="fab fa-wix" style={{ fontSize: "20px" }}></i>
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
                  Don't have an account?
                  <span style={{ color: "gold", paddingLeft: "4px" }}
                  className="point">
                   <NavLink to="/" style={{textDecoration:"none",color:"gold"}}> click here</NavLink>
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
