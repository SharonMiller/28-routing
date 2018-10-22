import React from 'react';
import NoteUpdateForm from '../note-update/index.js'

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }

    this.destroy = this.destroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }


  destroy() {
    this.props.destroyNote(this.props.note)
  }

  render() {
    return (
      <li className="noteItem" onDoubleClick={this.handleEdit}>
        <section>
          <label>Editing:
          <input
              disabled
              type="checkbox"
              checked={this.props.note.isEditing} />
          </label>
          <label> Completed:
              <input
              disabled
              type="checkbox"
              checked={this.props.note.isCompleted} />
          </label>
        </section>
        {(this.state.isEditing === false) ? <section>
          <div id="title" className="title"><h2>{this.props.note.title}</h2></div>
          <div id="content" className="content"> <p>{this.props.note.content}</p></div>
          <button onClick={this.destroy}>delete</button>
        </section> :
          <NoteUpdateForm note={this.props.note} getDashboard={this.props.getDashboard} handleEdit={this.handleEdit} />
        }
      </li>

    )
  }
}