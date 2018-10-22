import React from 'react';
import NoteUpdateForm from '../note-update/index.js'

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }

    this.destroy = this.destroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleEdit() {
    this.setState({ editing: !this.state.isEditing });
  }


  destroy() {
    this.props.destroyNote(this.props.note)
  }

  render() {
    return (
      <li className="note" onDoubleClick={this.handleEdit}>
        {this.state.editing === false ?
          <section>
            <p> Content: {this.props.note.content}</p>
            <label>Editing:
          <input
                disabled
                type="checkbox"
                value={this.props.note.completed} />
            </label>
            <label> Completed:
              <input
                disabled
                type="checkbox"
                value={this.props.note.completed} />
            </label>
            <div id="title" className="title"><h2>{this.props.note.title}</h2></div>
            <div id="content" className="content"> <p>{this.props.note.content}</p></div>
            <button onClick={this.destroy}>delete</button>
          </section> :
          <NoteUpdateForm note={this.props.note} app={this.props.app} />
        }
      </li>

    )
  }
}