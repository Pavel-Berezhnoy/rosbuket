import './../styles/App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import cartThunk from '../store/actions/cartThunk';
import { useEffect } from 'react';
import HeaderAdmin from './admin/HeaderAdmin';
import ContentAdmin from './admin/ContentAdmin';
import settingsThunk from '../store/actions/settingsThunk';
import { api } from '../api/api.get';
import { token } from '../services/tokenService';
import { authenticateThunk } from '../store/actions/loginactions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get('cart'))
      dispatch(cartThunk());
    if (token.getToken())
      dispatch(authenticateThunk(async () => {
        return await api.get('/api/auth/user');
      }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(settingsThunk(async () => {
      return await api.get('/api/admin/settings');
    }));
  }, []);
  const logged = useSelector(state => state.loadAuthReducer.auth);
  return (
    <>
      {logged ? <div className="flex flex-row relative h-full">
        <HeaderAdmin></HeaderAdmin>
        <div className="px-16 h-full ml-20 py-4 overflow-y-scroll text-gray-700 bg-gray-200 w-screen">
          <ContentAdmin />
        </div>
      </div> : <div className="wrap">
        <Header />
        <Content />
        <Footer />
      </div>
      }
    </>
  );
}

export default App;
