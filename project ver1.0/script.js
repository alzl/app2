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
