let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');

let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 360;
let leftBtn = document.querySelector('.left_arrow');
let rightBtn = document.querySelector('.right_arrow');

// 오른쪽 버튼을 클릭했을 때 슬라이드를 이동시키는 이벤트 리스너를 추가
rightBtn.addEventListener('click', function () {
  moveSlide(currentIdx + 1);
});

// 왼쪽 버튼을 클릭했을 때 슬라이드를 이동시키는 이벤트 리스너를 추가
leftBtn.addEventListener('click', function () {
  moveSlide(currentIdx - 1);
});

makeClone();

// 슬라이드 복제
function makeClone() {
  // 각 슬라이드를 복제한 후 'clone' 클래스를 추가하고 컨테이너에 추가
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  // 슬라이드를 역순으로 복제한 후 'clone' 클래스를 추가하고 컨테이너의 맨 앞에 추가
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPosition();

  // 슬라이드 애니메이션을 위해 0.5초 후에 'animated' 클래스를 추가
  setTimeout(function () {
    slides.classList.add('animated');
  }, 500);
}

// 슬라이드 컨테이너의 너비를 업데이트
function updateWidth() {
  // 현재 슬라이드의 개수
  var currentSlide = document.querySelectorAll('.slides li');
  var newSlideCount = currentSlide.length;

  // 새로운 너비를 계산하여 슬라이드 컨테이너의 스타일에 적용
  var newWidth = slideWidth * newSlideCount + 'px';
  slides.style.width = newWidth;
}

function setInitialPosition() {
  // 초기 슬라이드 이동 값을 계산하여 슬라이드 컨테이너의 스타일에 적용
  var initialTransValue = -slideWidth * slideCount;
  slides.style.transform = `translateX(${initialTransValue}px)`;
}

function moveSlide(num) {
  // 슬라이드를 이동시키기 위해 left 값 변경
  slides.style.left = -num * slideWidth + 'px';
  currentIdx = num;

  // 마지막 슬라이드나 첫 번째 슬라이드에 도달하면 애니메이션을 제거하고 위치 조정
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);

    setTimeout(function () {
      slides.classList.add('animated');
    }, 600);
  }
}
