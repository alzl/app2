// 회원가입 페이지의 폼 검증을 담당하는 함수
function attachRegisterFormValidation() {
    // 'registerForm' ID를 가진 폼 요소에 'submit' 이벤트 리스너를 추가합니다.
    const formElement = document.getElementById('registerForm');
    
    if (!formElement) {
        console.error('registerForm 요소를 찾을 수 없습니다.');
        return;
    }

    formElement.addEventListener('submit', function(event) {
        // 유효성 검사를 위한 플래그 변수, 기본값을 true로 설정합니다.
        let isValid = true;

        // 이메일 입력 필드와 에러 메시지 요소를 가져옵니다.
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

        // 이메일 입력 필드가 비어 있는지 확인합니다.
        if (!emailInput.value) {
            // 이메일 입력 필드가 비어 있는 경우, 에러 메시지를 표시합니다.
            emailError.textContent = '아이디(이메일)를 입력해주세요.';
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
            passwordError.textContent = '비밀번호를 입력해주세요.';
            passwordError.style.display = 'block';
            // 유효성 검사 플래그를 false로 설정합니다.
            isValid = false;
        } else {
            // 비밀번호 입력 필드에 값이 있는 경우, 에러 메시지를 숨깁니다.
            passwordError.style.display = 'none';
        }

        // 비밀번호 확인 입력 필드와 에러 메시지 요소를 가져옵니다.
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        // 비밀번호 확인 입력 필드가 비어 있거나 비밀번호와 일치하지 않는지 확인합니다.
        if (!confirmPasswordInput.value) {
            // 비밀번호 확인 입력 필드가 비어 있는 경우, 에러 메시지를 표시합니다.
            confirmPasswordError.textContent = '비밀번호 확인을 입력해주세요.';
            confirmPasswordError.style.display = 'block';
            // 유효성 검사 플래그를 false로 설정합니다.
            isValid = false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            // 비밀번호와 비밀번호 확인 입력 필드의 값이 일치하지 않는 경우, 에러 메시지를 표시합니다.
            confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
            confirmPasswordError.style.display = 'block';
            // 유효성 검사 플래그를 false로 설정합니다.
            isValid = false;
        } else {
            // 비밀번호 확인 입력 필드의 값이 비밀번호와 일치하는 경우, 에러 메시지를 숨깁니다.
            confirmPasswordError.style.display = 'none';
        }

        // 유효성 검사 결과가 false인 경우, 폼 제출을 방지합니다.
        if (!isValid) {
            // 폼 제출 이벤트를 취소하여 폼이 서버로 제출되지 않도록 합니다.
            event.preventDefault();
        }
    });
}

// 페이지가 로드된 후 폼 검증을 설정하는 코드
document.addEventListener('DOMContentLoaded', function() {
    attachRegisterFormValidation();
});
