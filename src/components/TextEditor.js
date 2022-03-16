import { EditorState } from 'draft-js';
import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class TextEditor extends Component {
  render() {
    return (
      <div>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />;
      </div>
    )
  }
}
