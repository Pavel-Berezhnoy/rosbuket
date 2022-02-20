import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router';
import SlideRoutes from 'react-slide-routes';
import Main from './../routes/Main/Main';
import Contact from '../routes/Contact/Contact';
import About from '../routes/About/About';
import Catalog from '../routes/Catalog/Catalog';
import Delivery from '../routes/Delivery/Delivery';
import Cart from '../routes/Cart/Cart';
import Ask from '../routes/Ask/Ask';
import { useSelector } from 'react-redux';
import Login from './../routes/Auth/Login';
import Detail from '../routes/BouquetDetail/Detail';

function Content(props) {
    const location = useLocation();
    const auth = useSelector(state => state.loadAuthReducer.auth);
    return(
        <div className="content wrapper max-content">
            <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/catalog" component={Catalog}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/ask" component={Ask}/>
                <Route path="/delivery" component={Delivery}/>
                <Route path="/about" component={About}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
                <Route path="/category/:id" component={Catalog}/>
                <Route path="/bouquet/:id" component={Detail}/>
                {
                    auth 
                    ? 
                    <>
                        {/* <Route path="admin/bouquets" component={Bouquets}></Route> */}
                    </> 
                    : 
                    <Redirect to="/login"/>
                }
            </Switch>
        </div>
    );
}

export default Content;