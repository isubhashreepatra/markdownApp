import React, { Component } from 'react';

class DocumentsShare extends Component{
  handleShareClick(event){
      event.preventDefault();
      const mailId = this.refs.email.value;
      console.log('You clicked me', mailId);
      Meteor.call('document.share', this.props.document, mailId);
  }

  renderSharedIds() {
    if (!this.props.document) {
      return (<div>Loading ...</div>);
    }
    return this.props.document.sharedWith.map(emailId => {
      return (
        <button
          key={emailId}
          className='btn btn-default'>
            {emailId}
        </button>
      );
    });
  }

  render() {
    return (
      <footer className="doc-share">
        <div className='input-group'>
          <input ref='email' className='form-control'/>
          <div className='input-group-btn'>
            <button className='btn btn-info' onClick={this.handleShareClick.bind(this)}>
              Share
            </button>
          </div>
        </div>
        <div>Shared With:</div>
        <div className='btn-group'>
          {this.renderSharedIds()}
        </div>
      </footer>
    );
  }
}

export default DocumentsShare;
