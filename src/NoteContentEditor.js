import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import ReactDOM from 'react-dom';

// @todo how to serialise / deserialise this stuff. Can I store it like Markdown? Or what do they recommend?
// so I can store it in Redux state rather than React state
// and also how to store in like local storage or something if I want to persist between sessions

export default class NoteContentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      console.log('onChange, editorState is ', editorState);
      this.setState({editorState});
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const {editorState} = this.state;
    return <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange} />;
  }
}
