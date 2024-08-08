// ajax.js

// 페이지를 동적으로 불러오는 함수
// function showSection(pageName) {
//     const section = document.getElementById('main');

//     // XMLHttpRequest 객체 생성
//     const xhr = new XMLHttpRequest();

//     // 비동기 요청 초기화
//     xhr.open('GET', `${pageName}.html`, true);

//     // 응답이 완료되면 실행될 콜백 함수
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 // 응답 텍스트를 section에 삽입
//                 section.innerHTML = xhr.responseText;
//             } else {
//                 // 에러 처리
//                 section.innerHTML = '<p>페이지를 불러올 수 없습니다.</p>';
//             }
//         }
//     };

//     // 요청 전송
//     xhr.send();
// }


