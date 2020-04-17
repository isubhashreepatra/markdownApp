import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';


import { Documents } from '../../imports/collections/documents';

class DocumentsList extends Component {

  handleClickRemove(doc) {
    Meteor.call('documents.remove', doc);
  }

  renderList() {

    return this.props.documents.map(doc => {

      const path = `/documents/${doc._id}`;

      return (
        <li className='list-group-item' key={ doc._id }>
          <Link to={path}>
                Document Id: { doc._id }
          </Link>
          <span className='pull-right'>
          <button className='btn btn-danger' onClick={() => this.handleClickRemove(doc) }>
            Remove
          </button>
        </span>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.documents);
    return (
      <div>
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('documents');
  Meteor.subscribe('sharedDocuments');
  return { documents: Documents.find({}).fetch() };
})(DocumentsList);
