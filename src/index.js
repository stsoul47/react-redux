// Create a new component, This component should produce some HTML
// 새로운 컴포넌트를 생성하고, 이 컴포넌트는 HTML을 생성하게 될 것이다.

// Take this component's generated HTML and put it on the page (in the DOM)
// 이 컴포넌트가 만든 HTML을 가지고 가고, 페이지에 반영한다.(DOM 안에)
// why? 리액트에게 내가 만든 컴포넌트를 DOM으로 넣으라고 지시를 해야 함

import React from 'react'; 
import ReactDOM from 'react-dom';
// 코어 리액트 라이브러리 => 리액트 컴포넌트와 어떻게 작동하는지 알고 있다. 
// 어떻게 렌더링 되며, 어떻게 그것들을 모으는지 등을 아는 것
// 하지만 이 컴포넌트를 가져와 DOM에 삽입하는 라이브러리는 별도로 React DOM이라고 부른다.


const App = function() {
  return <div>HI!</div>;
}

ReactDOM.render(App);