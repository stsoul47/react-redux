// Create a new component, This component should produce some HTML
// 새로운 컴포넌트를 생성하고, 이 컴포넌트는 HTML을 생성하게 될 것이다.

// Take this component's generated HTML and put it on the page (in the DOM)
// 이 컴포넌트가 만든 HTML을 가지고 가고, 페이지에 반영한다.(DOM 안에)
// why? 리액트에게 내가 만든 컴포넌트를 DOM으로 넣으라고 지시를 해야 함

//잘못된 코드
const App = function() {
  return <div>HI!</div>;
}