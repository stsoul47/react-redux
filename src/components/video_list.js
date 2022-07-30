import React from 'react';

const VideoList = (props) => {
  // const videos = props.videos;
  return (
    // bootstrap 컬럼을 설정 => col-md-4
    <ul className='col-md-4 list-group'>
      {props.videos.length} {/* 함수형 기반 컴포넌트를 클래스 기반 컴포넌트로 리팩토링 할 대 알아야 할 중요한 것은 props를 this.props로 바꿔야 한다는 거다. */}
    </ul>
  );
};

export default VideoList;