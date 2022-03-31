import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router';
import SlideRoutes from 'react-slide-routes';
import { useSelector } from 'react-redux';
import Main from '../../views/Main/Main';
import AdminBouquets from '../../views/AdminBouquets/AdminBouquets';
import AdminAddUpdateBouquet from '../../views/AdminBouquets/AdminAddUpdate';
import AdminCategories from '../../views/AdminCategory/AdminCategories';
import InsertUpdateCategory from '../../views/AdminCategory/InsertUpdateCategory';
import AdminOrders from '../../views/AdminOrders/AdminOrders';
import UpdateOrder from '../../views/AdminOrders/UpdateOrder';
import AdminQuestions from '../../views/AdminQuestion/AdminQuestion';
import UpdateQuestion from '../../views/AdminQuestion/UpdateQuestion';
import AdminMain from '../../views/AdminMain/AdminMain';
import AdminSettings from '../../views/AdminSettings/AdminSettings';
import SuccessMessage from '../messages/SuccessMessage';

function ContentAdmin(props) {
    const location = useLocation();
    const auth = useSelector(state => state.loadAuthReducer.auth);
    return (
        <SuccessMessage>
            <Switch>
                <Route path="/admin/main" component={AdminMain} exact />
                <Route path="/admin/categories" component={AdminCategories} />
                <Route path="/admin/category/add" component={InsertUpdateCategory} />
                <Route path="/admin/category/update/:id" component={InsertUpdateCategory} />
                <Route path="/admin/orders" component={AdminOrders} />
                <Route path="/admin/order/update/:id" component={UpdateOrder} />
                <Route path="/admin/bouquets" component={AdminBouquets} />
                <Route path="/admin/bouquet/add" component={AdminAddUpdateBouquet} />
                <Route path="/admin/bouquet/update/:id" component={AdminAddUpdateBouquet} />
                <Route path="/admin/questions" component={AdminQuestions} />
                <Route path="/admin/question/update/:id" component={UpdateQuestion} />
                <Route path="/admin/settings" component={AdminSettings} />
            </Switch>
        </SuccessMessage>
    );
}

export default ContentAdmin;