import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { selectUser } from '../redux/user/selectors';
import { fetchAuth } from '../redux/user/asyncActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status, ...user} = useSelector(selectUser);
  const [ email, setEmail] = useState("test@gmail.com");
  const [ password, setPassword] = useState("test");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (status === "error" && isErrorVisible) {
      setIsErrorVisible(true);
    }
  }, [status, isErrorVisible]);

  const handleLogin = async (email, password) => {
    dispatch(
      fetchAuth({
        email,
        password,
        action: "login"
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

  }, [navigate, user]);

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h1 className="login__title">SIGN IN</h1>
        <div className="login__form">
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

          <button onClick={() => handleLogin(email, password)}>SIGN IN</button>
          {status ==="error" && isErrorVisible && <div className="auth__error">Something went wrong...</div>}
        </div>

        {/* <p className="link-forgot"><Link>Forgot the password?</Link></p> */}
        <p className="link-login"><Link to="/register">Create a new account</Link></p>
        
      </div>
    </div>
  )
}

export default Login
