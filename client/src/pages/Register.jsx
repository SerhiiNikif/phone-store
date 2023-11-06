import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from "../redux/user/asyncActions";
import { selectUser } from "../redux/user/selectors";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status, ...user} = useSelector(selectUser);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (status === "error" && isErrorVisible) {
      setIsErrorVisible(true);
    }
  }, [status, isErrorVisible]);

  const handleRegister = async (email, password) => {
    dispatch(
      fetchAuth({
        email,
        password,
        action: "registration"
      })
    );
    setIsErrorVisible(true);
  }

  useEffect(() => {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);

    if (user.isAuth) {
      navigate("/")
    }

  }, [status, navigate, user]);

  return (
    <div className="register__container">
      <div className="register__wrapper">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <div className="register__form">
          <input 
            type="email" 
            placeholder="email" 
            onChange={e => setEmail(e.target.value)} 
            onFocus={() => setIsErrorVisible(false)}
            value={email} 
          />

          <input 
            type="password" 
            placeholder="password" 
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setIsErrorVisible(false)}
            value={password} 
          />

          <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>

          <button onClick={() => handleRegister(email, password)}>CREATE</button>
          {status ==="error" && isErrorVisible && <div className="auth__error">Something went wrong...</div>}
        </div>

        <p className="link-register">
          <Link to="/login">I am already registered</Link>
        </p>
        
      </div>
    </div>
  )
}

export default Register
