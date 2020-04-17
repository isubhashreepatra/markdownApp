import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class DocumentEditor extends Component {
  onInputChange(input){
    console.log(input);
    Meteor.call('documents.update', this.props.document, input);

  }
  render() {
    if (!this.props.document) {
      return (<div>Loading ...</div>);
    }
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.document.content}
          onChange={this.onInputChange.bind(this)}
          options={{ mode:'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default DocumentEditor;
