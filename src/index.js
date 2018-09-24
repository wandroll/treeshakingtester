import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent';

const Index = () => (<div>
  <span>Hello React!</span>
  <SomeComponent />
</div>);

ReactDOM.render(<Index />, document.getElementById('index'));
