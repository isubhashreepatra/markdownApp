import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Accounts from './accounts';

class Header extends Component {

  handleClickEvent(event) {
    event.preventDefault();

    Meteor.call('documents.insert', (error, documentId) => {
        console.log(documentId);
        this.props.history.push(`/documents/${documentId}`);
    });
  };

  render(){
    return (
      <nav className='navbar navbar-default bg-light'>
        <div className='container-fluid'>
          <div className='navbar-header'>
              <Link to="/" className='navbar-brand'>Markdown Document</Link>
          </div>
            <ul className='nav navbar-nav'>
              <li><a><Accounts /></a></li>
              <li><a href='#' onClick={this.handleClickEvent.bind(this)}>Create Document</a></li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
