// showSection 함수는 클릭된 버튼에 따라 해당 HTML 파일을 로드하는 기능을 합니다.
function showSection(pageName) {
    // 새로운 XMLHttpRequest 객체 생성 (AJAX 요청을 위해 사용)
    var xhr = new XMLHttpRequest();

    // GET 요청을 설정하고, 'sectionPages' 폴더 안에서 해당하는 페이지를 로드하도록 지정
    xhr.open('GET', 'sectionPages/' + pageName + '.html', true);

    // readyState가 변화할 때마다 호출되는 콜백 함수 설정
    xhr.onreadystatechange = function() {
        // readyState가 4(완료)일 때 실행
        if (xhr.readyState === 4) {
            // 응답 상태가 200(성공)일 때
            if (xhr.status === 200) {
                // 서버에서 받은 HTML 내용을 section 태그에 삽입
                document.getElementById('section').innerHTML = xhr.responseText;
            } else {
                // 페이지가 없거나 로드에 실패한 경우, 기본 페이지(main.html)를 로드
                loadDefaultSection();
            }
        }
    };

    // 설정한 요청을 서버로 보냄
    xhr.send();
}

// 기본 페이지(main.html)를 로드하는 함수
function loadDefaultSection() {
    // 기본 섹션을 'main.html'로 로드
    showSection('main'); 
}

// 페이지가 처음 로드될 때 기본적으로 main.html을 불러오는 초기화 코드
window.onload = function() {
    // loadDefaultSection 함수를 호출하여 main.html을 로드
    loadDefaultSection();
};

// 로그인 모달을 서서히 보이게 하는 함수
function showLoginModal() {
    // 모달 요소를 가져옴
    var modal = document.getElementById('loginModal');
    
    // 모달을 화면에 보이도록 설정
    modal.style.display = 'block';
    
    // 초기 투명도를 0으로 설정 (보이지 않음)
    modal.style.opacity = 0; 
    var opacity = 0;

    // 일정 간격으로 투명도를 증가시키는 애니메이션 실행
    var interval = setInterval(function() {
        // 투명도를 0.05씩 증가
        opacity += 0.05;
        modal.style.opacity = opacity;
        
        // 투명도가 1(완전 투명하지 않음)이 되면 애니메이션을 종료
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 30); // 애니메이션 속도 조절 (30ms마다 실행)
}

// 로그인 모달을 서서히 닫는 함수
function hideLoginModal() {
    // 모달 요소를 가져옴
    var modal = document.getElementById('loginModal');
    var opacity = 1;

    // 일정 간격으로 투명도를 감소시키는 애니메이션 실행
    var interval = setInterval(function() {
        // 투명도를 0.05씩 감소
        opacity -= 0.05;
        modal.style.opacity = opacity;
        
        // 투명도가 0이 되면 애니메이션을 종료하고 모달을 화면에서 숨김
        if (opacity <= 0) {
            clearInterval(interval);
            modal.style.display = 'none';
        }
    }, 30); // 애니메이션 속도 조절 (30ms마다 실행)
}

// DOMContentLoaded 이벤트: DOM이 완전히 로드되었을 때 실행
document.addEventListener('DOMContentLoaded', function() {
    // 카카오 로그인 버튼과 이메일 로그인 버튼 요소를 가져옴
    var kakaoLoginButton = document.getElementById('kakao-login');
    var emailLoginButton = document.getElementById('email-login');

    // 카카오 로그인 버튼 클릭 시 이벤트 처리
    kakaoLoginButton.addEventListener('click', function() {
        // 카카오 로그인 페이지로 리다이렉트
        window.location.href = 'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fmail.kakao.com#login';
        hideLoginModal(); // 모달을 닫음
    });

    // 이메일 로그인 버튼 클릭 시 이벤트 처리
    emailLoginButton.addEventListener('click', function() {
        // 로그인 섹션으로 이동 (login.html을 로드)
        showSection('login');
        hideLoginModal(); // 모달을 닫음
    });
});

// 페이지 시작 시에 인기 순위를 불러오는 코드
// 인기 순위는 처음에만 로드되며, 이후에는 따로 관리할 가능성이 있어 여기서 분리
document.addEventListener("DOMContentLoaded", function() {
    // aside-cafe-ranking에 cafe-ranking.html을 로드
    loadRanking('aside-cafe-ranking', 'rankingPages/cafe-ranking.html');
    // aside-bookmark-ranking에 bookmark-ranking.html을 로드
    loadRanking('aside-bookmark-ranking', 'rankingPages/bookmark-ranking.html');
});

// 해당 태그에 특정 HTML 파일을 불러와 삽입하는 함수
function loadRanking(elementId, file) {
    // fetch API를 사용하여 파일을 비동기적으로 가져옴
    fetch(file)
        .then(response => {
            // 응답이 성공적이지 않은 경우 에러 처리
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 응답의 텍스트를 반환 (HTML 내용)
            return response.text();
        })
        .then(data => {
            // 가져온 HTML 내용을 지정한 elementId를 가진 태그에 삽입
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            // 에러가 발생한 경우 콘솔에 에러 메시지 출력
            console.error('There was a problem with the fetch operation:', error);
        });
}