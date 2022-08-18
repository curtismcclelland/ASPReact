import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SideBar } from './components/SideBar';
import { Contact } from './components/Contact';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;
    

  render () {
    return (
        <Layout>
            <SideBar />
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/contact-us' component={Contact} />
      </Layout>
    );
  }
}
