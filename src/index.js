/**
 * 기존버전에서 리펙토링을 한 버전
 * 기존 버전은 index_old_version으로 유지 중
 */
import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

/**
 * API Key를 할당하는 변수
 */
const API_KEY = "AIzaSyCsGoyf-mxvkA323AO6DkX04mOKh6_C6_Y";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    // 네트워크 리퀘스트의 시간 때문에, 데이터를 가져오는 시간이 조금 걸림
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // console.log("[YTSearch] callback data: ", data);
      this.setState({ videos }); 
      // === this.setState({videos: videos}); 
      // 이는 신택틱 슈거(syntactic sugar)로 우리의 코드를 정리하기 위한 것
      // 오직 키와 변수 이름이 같을 때 동작한다.
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
        {/* App은 VideoList의 부모이고, VideoList는 App의 state(this.state)에 접근이 가능하다. */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));