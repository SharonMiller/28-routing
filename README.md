Simple TODO list
===

## A Simple TODO List

By Sharon Miller

#### Technologies
* React
* Webpack
* scss
* Babel
* UUID

###### App Component
* The App component manages the frontend routes and has a navbar
* the `/` route displaysthe `Landing` component
* the `/dashboard` route displays the `Dashboard` component

###### Landing Component
* The Landing component displays a brief description of the notes app

###### Dashboard Component 
* The Dashboard component manages the entire **application state**
* The state  contains a notes array
* It has a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added has the following data
    * `id`: always contains the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It has a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

###### NoteForm Component
* `onComplete` the NoteForm adds a note to the application state

###### NoteList Component 
* displays an unordered list of NoteItem components

###### NoteItem
* displays the notes content and title
* displays a delete button
  * `onClick` the note is removed from the application state

