/**
 * 이 컴포넌트의 목적
 * 
 * 상단의 입력창, 타이핑 가능
 * 검색어 단어를 입력하면, 오른쪽에 비디오 리스트 업데이트가 가능
 */
import React, { Component } from 'react'; //jsx를 가지면 모든 컴포넌트에 React를 import를 해줘야 한다.
// 여기서 괄호의 의미는 React라이브러리에서 Component라 부르는 변수를 프로퍼티 형태로 가져오라는 것이다.

class SearchBar extends Component {

  /**
   * state를 정의하거나 재초기화 하는 방법
   * constructor(props) {
   * super(props);
   * this.state = { term: '' };
  }
   */
  constructor(props) {
    super(props); // SearchBar 컴포넌트가 Component를 상속받는데, Component에는 constructor함수를 가진다. 

    this.state = { term: '' };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input
        type="text" 
        name="term" 
        value={this.state.term}
        onChange={ this.onInputChange } />
        Value of the input: {this.state.term}
      </div>
    );
  }
}


export default SearchBar;