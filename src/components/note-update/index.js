import React from 'react'
import Note from '../../models/note';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title || '',
      content: this.props.content || '',
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
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === this.props.note.id) {
          note.content = this.state.content
        }
        return note
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
        <button type="submit">++</button>
      </form>
    )
  }
}