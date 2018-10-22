'use strict';

import React from 'react';
import NoteForm from '../note-create-form/index.js';
import NoteList from '../note-list/index.js';
import NoteUpdateForm from '../note-update/index.js';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

  }

  addNote(note) {
    //add an instance of a note to our 'notes' state
    this.state.notes.push(note);
    //set state
    this.setState({ notes: this.state.notes });
  }

  removeNote(note) {
    let notes = this.state.notes;
    let noteIndex = notes.indexOf(note);
    notes.splice(noteIndex, 1);

    this.setState({ notes });
  }

  updateNote(note, title, content) {
    let notes = this.state.notes;
    let noteIndex = notes.indexOf(note);

    notes[noteIndex].title = title;
    notes[noteIndex].content = content;

    this.setState({ notes });
    //get an id from a uuid from a note and update i

  }

  render() {
    return (<div className="dashboard">
      <h1> Dashboard </h1>
      <h2>Add A Note</h2>
      <NoteForm addNote={this.addNote} />
      <h2>My Notes:</h2>
      <NoteList notes={this.state.notes} destroyNote={this.removeNote}
        updateNote={this.updateNote} />


      {/* Delete all button goes here */}

    </div>
    );
  }

}