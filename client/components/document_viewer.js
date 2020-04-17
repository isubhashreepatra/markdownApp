import React, { Component } from 'react';
import { markdown } from 'markdown';

class DocumentViewer extends Component{
  render() {
    if (!this.props.document) {
      return (<div>Loading ...</div>);
    }

    const rawHTML = markdown.toHTML(this.props.document.content);

    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>);
  }
}

export default DocumentViewer;
