import React from 'react';
import { render } from 'react-dom';
import style from './style/app.scss';
import NavBar from './jsx/NavBar.jsx';

render(<NavBar />, document.querySelector('#top'));
