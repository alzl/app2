document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 에러 메시지 초기화
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // 입력값 가져오기
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // 이메일 유효성 검사
    if (!email) {
        document.getElementById('emailError').textContent = '아이디(이메일)를 입력해주세요.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = '유효한 이메일 주소를 입력해주세요.';
        valid = false;
    }

    // 비밀번호 유효성 검사
    if (!password) {
        document.getElementById('passwordError').textContent = '비밀번호를 입력해주세요.';
        valid = false;
    }

    // 비밀번호 확인 유효성 검사
    if (password && confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = '비밀번호가 일치하지 않습니다.';
        valid = false;
    }

    // 유효성 검사를 모두 통과한 경우 폼 제출
    if (valid) {
        this.submit();
    }
});
