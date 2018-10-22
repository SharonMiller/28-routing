import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import NoteForm from '../../components/note-create-form/index'

describe('noteform component tests', () => {

  test('should handle change on title input', () => {
    //arrange
    let onChange = sinon.spy(NoteForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteForm />);
    const event = {
      target: {
        name: "title",
        value: "s"
      }
    };

    //act
    wrapper.find('input[name="title"]').simulate('change', event);
    //assert
    expect(onChange.callCount).toBe(1);
  });
});
//must have componentDidMount(){
  // console.log('')
// } in your tested file to be sure the test will run 
//then test let wrapper = Enzyme.shallow(<Dashboard/>);
//or use const spy= sinon.spy(Dashboard.prototype, 'compnentDidMount');
//then test let wrapper = Enzyme.shallow(<Dashboard/>);
//expect(spy.calledOnce)toBe(true);