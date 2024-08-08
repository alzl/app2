document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const loginModal = document.getElementById('loginModal');
    const modalContent = document.querySelector('.modal-content');

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
        modalContent.style.animation = 'slideDown 0.3s ease';
    });

    function closeModal() {
        modalContent.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            loginModal.style.display = 'none';
        }, 300); // 애니메이션 시간이랑 맞추기
    }

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal();
        }
    });

    // 애니메이션 종료 후 모달을 닫기 위한 이벤트 리스너
    modalContent.addEventListener('animationend', (e) => {
        if (e.animationName === 'slideUp') {
            loginModal.style.display = 'none';
        }
    });
});


// 페이지를 동적으로 불러오는 함수
function showSection(pageName) {
    const section = document.getElementById('main');

    // XMLHttpRequest 객체 생성
    const xhr = new XMLHttpRequest();

    // 비동기 요청 초기화
    xhr.open('GET', `${pageName}.html`, true);

    // 응답이 완료되면 실행될 콜백 함수
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // 응답 텍스트를 section에 삽입
                section.innerHTML = xhr.responseText;
            } else {
                // 에러 처리
                section.innerHTML = '<p>페이지를 불러올 수 없습니다.</p>';
            }
        }
    };

    // 요청 전송
    xhr.send();
}