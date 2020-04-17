import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './components/app';
import CreateDocument from './components/create_document';
import DocumentsList from './components/documents_list';
import Header from './components/header';

import './main.html';
import { Documents } from '../imports/collections/documents';

const routes = (
   <Router>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={DocumentsList} />
          <Route path="/documents/:documentId" component={CreateDocument} />
        </Switch>
   </Router>
);

//Load the browser
Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container'));
});
