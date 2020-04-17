import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Documents } from '../../imports/collections/documents';
import DocumentEditor from './document_editor';
import DocumentViewer from './document_viewer';

class CreateDocument extends Component {
  render() {
    return (
      <div>
        <DocumentEditor document={this.props.document} />
        <DocumentViewer document={this.props.document} />
      </div>
    );
  }

}

export default withTracker((props)=> {
  const docId = props.match.params.documentId;
  Meteor.subscribe('documents');
  return { document: Documents.findOne(docId) };
})(CreateDocument);
