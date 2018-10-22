import React from 'react'
import Note from '../../models/note';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.note.content || '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleEdit();
    this.props.getDashboard.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === this.props.note.id) {
          note.content = this.state.content
        }
        return note //this returns a note array with one of the updated
      })
    }))
  }

  render() {
    return (
      <form className="note-update-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange} />
        <button type="submit">Submit Change</button>
      </form>
    )
  }
}