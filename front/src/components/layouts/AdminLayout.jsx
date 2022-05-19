import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { token } from '../../services/tokenService';
import AdminBouquets from '../../views/AdminBouquets/AdminBouquets';
import InsertBouquet from '../../views/AdminBouquets/InsertBouquet';
import UpdateBouquet from '../../views/AdminBouquets/UpdateBouquet';
import AdminCategories from '../../views/AdminCategory/AdminCategories';
import InsertUpdateCategory from '../../views/AdminCategory/InsertUpdateCategory';
import AdminFlowers from '../../views/AdminFlowers/AdminFlowers';
import InsertFlower from '../../views/AdminFlowers/InsertFlower';
import UpdateFlower from '../../views/AdminFlowers/UpdateFlower';
import AdminMain from '../../views/AdminMain/AdminMain';
import AdminOrders from '../../views/AdminOrders/AdminOrders';
import UpdateOrder from '../../views/AdminOrders/UpdateOrder';
import AdminQuestions from '../../views/AdminQuestion/AdminQuestion';
import UpdateQuestion from '../../views/AdminQuestion/UpdateQuestion';
import AdminSettings from '../../views/AdminSettings/AdminSettings';
import HeaderAdmin from '../admin/HeaderAdmin'
import NotFoundPage from '../not-found/NotFoundPage';

export default function AdminLayout() {
  const logged = token.getToken();
  return (
    <div className="flex flex-row relative h-full">
      <HeaderAdmin />
      <div className='px-16 h-full ml-20 py-4 overflow-y-scroll text-gray-700 bg-gray-200 w-screen'>
        {logged
          ? <Switch>
            <Route path="/admin/main" component={AdminMain} exact />
            <Route path="/admin/categories" component={AdminCategories} />
            <Route path="/admin/category/add" component={InsertUpdateCategory} />
            <Route path="/admin/category/update/:id" component={InsertUpdateCategory} />
            <Route path="/admin/orders" component={AdminOrders} />
            <Route path="/admin/order/update/:id" component={UpdateOrder} />
            <Route path="/admin/bouquets" component={AdminBouquets} />
            <Route path="/admin/bouquet/add" component={InsertBouquet} />
            <Route path="/admin/bouquet/update/:id" component={UpdateBouquet} />
            <Route path="/admin/questions" component={AdminQuestions} />
            <Route path="/admin/question/update/:id" component={UpdateQuestion} />
            <Route path="/admin/settings" component={AdminSettings} />
            <Route path="/admin/glossary" component={AdminFlowers} exact/>
            <Route path="/admin/glossary/add" component={InsertFlower} />
            <Route path="/admin/glossary/update/:id" component={UpdateFlower} />
            <Route component={NotFoundPage} />
          </Switch>
          : <Redirect to={`/login`} />}
      </div>
    </div>
  )
}
