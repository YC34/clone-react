/* eslint-disable */
import React , { useState } from 'react';
import './App.css';

function App() {
    /**
     * es6 destructuring
     * var [a,b] = [10, 100];
     * a와 b에 각각 10과 100을 넣어주세요~
     */

    let [subject, subjectChange] = useState(['관광 장소 추천','관광 맛집 추천','관광지 정보']);  // [a,b]라는 배열이 생김.
    let [good, goodChange] = useState(0);
    let posts ='금천구 맛집';

    function change(){
        // 깊은 복사를 통해 변경해야 한다.
        // state data 변경 방법.
        let newArray = [...subject];
        newArray[0] = '첫번째만 바꾸겠다.';
        subjectChange(newArray);
    }

    function orderBy(){
        let newArray = [...subject];
        newArray = [subject[2],subject[1],subject[0]];
        subjectChange(newArray);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <button onClick ={ change }>버튼</button>
            <button onClick={ orderBy }>정렬</button>
            <div className="list">
                {/*<h3> {subject[0]} <span onClick={() => {console.log(1)}}>👍</span>0 </h3>*/}
                <h3> {subject[0]} <span onClick={() => {goodChange(good++)}}>👍</span> { good } </h3>
                <p>7월 27일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {subject[1]}</h3>
                <p>7월 28일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {subject[2]}</h3>
                <p>7월 29일 발행</p>
                <hr/>
            </div>
            <Modal/>
        </div>
    );
}


// component 만드는법
// 대문자로 시작해야한다.
// return 안에는 태그하나로 묶어야 한다.
// <div>를 사용하기 싫다면 <></>로 사용.
// 반복적으로 사용하는 HTML 덩어리들을 만들면 좋다.
// 자주 바뀌는 HTML UI
// 다른 페이지 만들 때도 컴포넌트로 만듦.
// state 쓸 때 복잡해짐
function Modal(){
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날씨</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
