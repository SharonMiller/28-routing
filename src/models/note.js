'use strict';

import uuid from 'uuid';



export default class Note {
  constructor(title, content, isEditing, isCompleted) {
    this.id = uuid.v4();
    this.isEditing = isEditing || false;
    this.isCompleted = isCompleted || false;
    this.title = title || '';
    this.content = content || '';
  }
}