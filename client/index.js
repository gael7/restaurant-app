import React from 'react';
import ReactDOM from 'react-dom';
import Navigbar from './Navigbar';
import LoginLayout from './LoginLayout'

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    React.createElement(Navigbar),
    document.getElementById('bar')
  );
  ReactDOM.render(
    React.createElement(LoginLayout),
    document.getElementById('app')
  );
});
