import * as React from 'react';
import { Redirect, Route } from 'react-router';
import Layout from './components/Layout';
import Product from './components/Product';
import './custom.css'
import "primeflex/primeflex.css";
import AddProduct from './components/AddProduct';


export default () => (
    <Layout>
        <Route exact path="/"><Redirect to="/product"/></Route>
        <Route path='/product' component={Product} />
        <Route path='/add-product' component={AddProduct} />
    </Layout>
);
