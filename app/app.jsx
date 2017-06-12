if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing
import {Hero} from './components/hero.jsx';
import {Kid} from './components/kid.jsx';
import {HomeAway} from './components/homeaway.jsx';
import Sidebar from './components/sidebar.jsx';

import './css/FlexTesting.css';

import FlexTesting from './components/FlexTesting.jsx';

ReactDOM.render(<div className="container"> <FlexTesting/>  </div>, document.getElementById('root'));