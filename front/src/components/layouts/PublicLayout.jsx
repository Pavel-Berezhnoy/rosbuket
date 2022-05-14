import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import About from '../../views/About/About'
import Ask from '../../views/Ask/Ask'
import Login from '../../views/Auth/Login'
import Detail from '../../views/BouquetDetail/Detail'
import Cart from '../../views/Cart/Cart'
import Catalog from '../../views/Catalog/Catalog'
import Contact from '../../views/Contact/Contact'
import Delivery from '../../views/Delivery/Delivery'
import Main from '../../views/Main/Main'
import Footer from '../Footer'
import Header from '../Header'
import NotFoundPage from '../not-found/NotFoundPage'

export default function PublicLayout() {
  return (
    <div className='wrap'>
      <Header />
      <div className="content wrapper max-content">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/catalog" component={Catalog} />
          <Route path="/contact" component={Contact} />
          <Route path="/ask" component={Ask} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/category/:id" component={Catalog} />
          <Route path="/bouquet/:id" component={Detail} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
