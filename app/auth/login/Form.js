// components/LoginForm.js
'use client'
import setCookie from './setCookie';
import Redirect from './Redirect'
import {post} from '../../../functions/axios.post'
import React, { useState } from 'react';


const LoginForm = (props) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    let data = {
        id:loginId,
        password:password
    }
    post(props.URL,data,(DATA)=>{
       if(DATA.data.auth==props.KEY){
            setCookie();
            Redirect();
       }
       else{
        console.log('Security Alert');
       }
       
    })
    
  };

  return (
    <div style={{width:'100vw', height:'100vh', display:'grid', placeItems:'center'}}>
    <form onSubmit={handleSubmit} action='/admin'>
      <style jsx>{`
        form {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
          display: block;
          margin-bottom: 8px;
        }

        input {
          width: 100%;
          padding: 8px;
          margin-bottom: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
      <label htmlFor="loginId">Login ID</label>
      <input
        type="text"
        id="loginId"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
