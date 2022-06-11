import './../styles/App.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import cartThunk from '../store/actions/cartThunk';
import { useEffect } from 'react';
import settingsThunk from '../store/actions/settingsThunk';
import { api } from '../api/api.get';
import { token } from '../services/tokenService';
import { authenticateThunk } from '../store/actions/loginThunk';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import { Route, Switch } from 'react-router-dom';
import Message from './messages/Message';

export const getCart = async () => {
  const items = await JSON.parse(Cookies.get('cart'));
  const cart = items.map(item => {
    const [id, qty] = Object.entries(item);
    return [id[1], qty[1]];
  });
  return cart;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get('cart'))
      dispatch(cartThunk(getCart));
    if (token.getToken())
      dispatch(authenticateThunk(async () => {
        return await api.get('/api/auth/user');
      }));
  }, []);

  useEffect(() => {
    dispatch(settingsThunk(async () => {
      return await api.get('/api/admin/settings');
    }));
  }, []);
  return (
    <Message>
      <Switch>
        <Route path={'/admin'} component={AdminLayout} />
        <Route path={'/'} component={PublicLayout} />
      </Switch>
    </Message>
  );
}

export default App;
