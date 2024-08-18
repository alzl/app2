// 로그인 페이지의 폼 검증을 담당하는 함수
function attachLoginFormValidation() {
    // 'loginForm' ID를 가진 폼 요소에 'submit' 이벤트 리스너를 추가합니다.
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // 유효성 검사를 위한 플래그 변수, 기본값을 true로 설정합니다.
        let isValid = true;

        // 이메일 입력 필드와 에러 메시지 요소를 가져옵니다.
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

        // 이메일 입력 필드가 비어 있는지 확인합니다.
        if (!emailInput.value) {
            // 이메일 입력 필드가 비어 있는 경우, 에러 메시지를 표시합니다.
            emailError.style.display = 'block';
            // 유효성 검사 플래그를 false로 설정합니다.
            isValid = false;
        } else {
            // 이메일 입력 필드에 값이 있는 경우, 에러 메시지를 숨깁니다.
            emailError.style.display = 'none';
        }

        // 비밀번호 입력 필드와 에러 메시지 요소를 가져옵니다.
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');

        // 비밀번호 입력 필드가 비어 있는지 확인합니다.
        if (!passwordInput.value) {
            // 비밀번호 입력 필드가 비어 있는 경우, 에러 메시지를 표시합니다.
            passwordError.style.display = 'block';
            // 유효성 검사 플래그를 false로 설정합니다.
            isValid = false;
        } else {
            // 비밀번호 입력 필드에 값이 있는 경우, 에러 메시지를 숨깁니다.
            passwordError.style.display = 'none';
        }

        // 유효성 검사 결과가 false인 경우, 폼 제출을 방지합니다.
        if (!isValid) {
            // 폼 제출 이벤트를 취소하여 폼이 서버로 제출되지 않도록 합니다.
            event.preventDefault();
        }
    });
}