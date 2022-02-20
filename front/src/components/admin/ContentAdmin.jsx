import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router';
import SlideRoutes from 'react-slide-routes';
import { useSelector } from 'react-redux';
import Main from '../../routes/Main/Main';
import AdminBouquets from '../../routes/AdminBouquets/AdminBouquets';
import AdminAddUpdateBouquet from '../../routes/AdminBouquets/AdminAddUpdate';
import AdminCategories from '../../routes/AdminCategory/AdminCategories';
import InsertUpdateCategory from '../../routes/AdminCategory/InsertUpdateCategory';
import AdminOrders from '../../routes/AdminOrders/AdminOrders';
import UpdateOrder from '../../routes/AdminOrders/UpdateOrder';
import AdminQuestions from '../../routes/AdminQuestion/AdminQuestion';
import UpdateQuestion from '../../routes/AdminQuestion/UpdateQuestion';
import AdminMain from '../../routes/AdminMain/AdminMain';
import AdminSettings from '../../routes/AdminSettings/AdminSettings';

function ContentAdmin(props) {
    const location = useLocation();
    const auth = useSelector(state => state.loadAuthReducer.auth);
    return(
        
            <Switch>
                <Route path="/admin/main" component={AdminMain} exact/>
                <Route path="/admin/categories" component={AdminCategories}/>
                <Route path="/admin/category/add" component={InsertUpdateCategory}/>
                <Route path="/admin/category/update/:id" component={InsertUpdateCategory}/>
                <Route path="/admin/orders" component={AdminOrders}/>
                <Route path="/admin/order/update/:id" component={UpdateOrder}/>
                <Route path="/admin/bouquets" component={AdminBouquets}/>
                <Route path="/admin/bouquet/add" component={AdminAddUpdateBouquet}/>
                <Route path="/admin/bouquet/update/:id" component={AdminAddUpdateBouquet}/>
                <Route path="/admin/questions" component={AdminQuestions}/>
                <Route path="/admin/question/update/:id" component={UpdateQuestion}/>
                <Route path="/admin/settings" component={AdminSettings}/>
            </Switch>
    );
}

export default ContentAdmin;