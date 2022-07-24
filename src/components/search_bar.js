/**
 * 이 컴포넌트의 목적
 * 
 * 상단의 입력창, 타이핑 가능
 * 검색어 단어를 입력하면, 오른쪽에 비디오 리스트 업데이트가 가능
 */
import React, { Component } from 'react'; //jsx를 가지면 모든 컴포넌트에 React를 import를 해줘야 한다.
// 여기서 괄호의 의미는 React라이브러리에서 Component라 부르는 변수를 프로퍼티 형태로 가져오라는 것이다.

class SearchBar extends Component {

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input type="text" onChange={ this.onInputChange } />;
  }
}


export default SearchBar;