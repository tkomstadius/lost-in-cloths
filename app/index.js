import React from 'react';
import { render } from 'react-dom';
import TestAss from './TestComponent.jsx';
import style from './style/app.scss';
import NavBar from './jsx/NavBar.jsx';

render(<NavBar />, document.querySelector('#top'));
render(<TestAss />, document.querySelector('.poo'));
