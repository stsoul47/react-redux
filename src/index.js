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

/**
 * const App = function() {
 * return <div>HI!</div>;
 * } 
 * 을 아래와 같이 ES6 문법의  Fat arrow(화살표 함수)로 바꿔줄수 있다.
 */
const App = () => {
  return <div>Hi!</div>;
}



// ReactDOM은 실제 DOM과 상호작용하는 반면에, 리액트는 컴포넌트를 생성하고 관리한다는 점
// ReactDOM.render(App);
ReactDOM.render(<App />, document.querySelector('.container'));

// 우리가 컴포넌트 혹은 클래스 컴포넌트, 타입 컴포넌트를 생성할 때, 
/**
 * const App = function() {
 * return <div>HI!</div>;
 *  }
 * 이코드가 타입 컴포넌트이다, App은 많은 다른 인스턴스들을 가질 수 있다.
 * 이는 인스턴스가 아니라 클래스라고 부른다. 위에 함수는 팩토리 형태이다.
 * 실제 DOM에 랜더링 되는 컴포넌트의 인스턴스들을 만든다.
 * 
 * 컴포넌트를 인스턴스화 하는 과정이 필요
 * 
 * ReactDOM.render(App); 에서 App을 인스턴스화 해서 사용하려면 아래와 같이 바꿔주면 된다,
 * 
 * ReactDOM.render(<App />);
 */
