import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const LoginName = () => {
    const history = useHistory();
    const [name,setName]=useState("");
    useEffect(() => {

        const callHomePage = async () => {

            try {
                const res = await fetch("/api/auth/userLogin", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })

                const data = await res.json();
                setName(data.fullname);
            }
            catch (err) {
                history.push("/");
            }
        }
        callHomePage();
        
    }, [history]);
    const PostData = async(e)=>{
        e.preventDefault();
        fetch("/api/auth/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            history.push('/Login',{replace:true});
            if(!res.status!==200)
            {
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })  
      }
      
    return (
        <div style={{display:"flex",height:"100vh",alignItems:"center",
        textAlign:"center",flexDirection:"column"}}>
        <div>
            <h1>The logged user name is <span>     {name}</span></h1>
        </div>
        <div>
            <button onClick={PostData}>Logout</button>
        </div>
            
        </div>
    )
}

export default LoginName
