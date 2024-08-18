let slideIndex = 0; // 현재 슬라이드 인덱스 초기화
const slides = document.getElementsByClassName("slide"); // 모든 슬라이드 요소 가져오기
const indicators = document.getElementsByClassName("indicator"); // 모든 인디케이터 요소 가져오기
let slideInterval; // 슬라이드 자동 전환을 위한 변수

function startSlideShow() {
    showSlides(); // 슬라이드 쇼 시작
    slideInterval = setInterval(function() {
        moveSlide(1); // 5초마다 슬라이드 전환
    }, 7000); // 7초
}

function moveSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length; // 슬라이드 인덱스 계산
    showSlides(); // 슬라이드 업데이트
}

function currentSlide(n) {
    slideIndex = n - 1; // 특정 슬라이드로 이동
    showSlides(); // 슬라이드 업데이트
}

function showSlides() {
    // 모든 슬라이드를 숨김
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // 현재 슬라이드만 보이도록 설정
    slides[slideIndex].style.display = "block";

    // 모든 인디케이터의 active 클래스 제거
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    
    // 현재 슬라이드에 해당하는 인디케이터에 active 클래스 추가
    indicators[slideIndex].className += " active";
}

window.onload = function() {
    startSlideShow(); // 페이지 로드 시 슬라이드 쇼 시작
};
