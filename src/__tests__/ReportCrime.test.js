import React from 'react';
import ReactDOM from 'react-dom';
import ReportCrime from '../ReportCrime';

//import { Provider } from 'react-redux';
//import './index.css';
//import store from '../store';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from '../serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker
} from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ReportCrime /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
  //enzyme mount
  //shallow

});

it('it contains MuiPickersUtilsProvider', () => {
 
  const wrapper = mount(<Router><ReportCrime /></Router>);
  //expect(wrapper.find('#datetime')).to.have.lengthOf(1);
  //const datetime = wrapper.find(MuiPickersUtilsProvider);
  //console.log(datetime);
  //expect(wrapper.find(MuiPickersUtilsProvider)).to.have.lengthOf(1);
  const datetime = wrapper.find('#datetime');
  console.log(datetime.length);
  expect(datetime.length).to.equal(3);
});

it('it contains TextField', () => {
  
  const wrapper = mount(<Router><ReportCrime /></Router>);
  //expect(wrapper.find('#datetime')).to.have.lengthOf(1);
  //const datetime = wrapper.find(MuiPickersUtilsProvider);
  //console.log(datetime);
  expect(wrapper.find(TextField)).to.have.lengthOf(3);
});

it('it contains submitReport', () => {
 
  const wrapper = mount(<Router><ReportCrime /></Router>);
  //expect(wrapper.find('#datetime')).to.have.lengthOf(1);
  //const datetime = wrapper.find(MuiPickersUtilsProvider);
  //console.log(datetime);
  expect(wrapper.find(Button)).to.have.lengthOf(1);
});


it('should set address to santa monica', () => {
	const wrapper = mount(<Router><ReportCrime /></Router>);
	//console.log(wrapper.html());
	console.log(wrapper.find('#address').hostNodes());
    wrapper.find('#address').hostNodes().simulate('change', {
      target: {
        value: 'santamonica',
      },
    });
    console.log(wrapper.find('#address').hostNodes().prop("value"));
    //expect(wrapper.find('#address').at(0).prop('value')).to.equal('santa monica');
  });