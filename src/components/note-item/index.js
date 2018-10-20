import React from 'react';

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);

  }
  destroy() {
    this.props.destroyNote(this.props.note)
  }

  render() {
    return (
      <li className="note">
        <div id="title" className="title"><h2>{this.props.note.title}</h2></div>
        <div id="content" className="content"> <p>{this.props.note.content}</p></div>
        <button onClick={this.destroy}>delete</button>

      </li>
    )
  }
}