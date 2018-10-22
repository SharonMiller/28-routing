'use strict';

import React from 'react';
import Note from '../../models/note';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    //need to add uuid in here

    this.state = {
      title: '',
      content: ''
    };
    //need to add UUID INFO

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })

  }
  onComplete(e) {
    e.preventDefault();

    let note = new Note(this.state.title, this.state.content);
    this.props.addNote(note);

    this.setState({ title: '', content: '' });
  }


  render() {
    return (
      <form onSubmit={this.onComplete} id="create-note-form">
        <label>
          Title:
        <input type="text" name="title" value={this.state.title} placeholder="school work" onChange={this.handleChange} />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={this.state.content} placeholder="finish lab" onChange={this.handleChange} />
        </label>
        <button type="submit">Add Note To List</button>
      </form>
    );
  }
}