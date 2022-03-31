import React, {useEffect, useState} from 'react';
import './styles/style.css';
import Input from '../../components/form/Input';
import { useDispatch, useSelector } from 'react-redux';
import authThunk from '../../store/actions/loginactions';
import { Redirect } from 'react-router-dom';
import { api } from '../../api/api.get';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState();

  const dispatch = useDispatch();

  const data = {
    email: email,
    password: password,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authThunk(async () => {
      return await api.postJson('/api/auth/login',data);
    }));
  };

  const auth = useSelector(state => state.loadAuthReducer);
  return (
    <>
    {
      !auth.auth ? 
      <div className="auth__form">
      <div className="auth__form-content">
        <div className="auth__title">
          <span>Авторизация</span>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="auth__content">
            <Input
              type="text"
              placeholder="E-mail"
              onChange={(event) => {setEmail(event.target.value)}}
              name = "email"
            />
            <Input
              type="password"
              placeholder="Пароль"
              onChange={(event) => {setPassword(event.target.value)}}
              name = "pass"
            />
            <div>
              <Input
                type="checkbox"
                placeholder="Запомнить меня?"
                onChange={event => {setRemember(event.target.checked)}}
                name = "remember"
              />
            </div>
            <Input
              type="submit"
              value = "Войти"
              name = "submit"
              submit = {handleSubmit}
            />
          </div>
        </form>
      </div>
    </div> : <Redirect to="/admin/bouquets"></Redirect>
    }
    </>
  );
};

export default Login;
