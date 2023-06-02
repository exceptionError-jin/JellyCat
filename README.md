# JellyCat

<h1> 1. 기획 의도</h1> <br>
  첫 퍼블리싱 프로젝트로 여러가지 자바스크립트를 경험할 수 있을 것 같은 사이트를 선정했습니다.
  
<h1> 2. 프로젝트 사용 툴</h1> <br>
- Html<br>
- Css<br>
- Java Script<br>
- Visual Studio Code
  
<h1> 3. 담당 업무</h1> <br>
  5-1 퍼블리싱
  
  <p align="center">
  <img src="https://github.com/web-jsp-project-joongshin/joongshin/assets/129862445/71b2b2de-3c68-4cb4-99d5-48bc10c3ebbc">
  </p>
  <p align="center">
    <img src="https://github.com/web-jsp-project-joongshin/joongshin/assets/129862445/ad3e98dc-130b-4af0-8ba3-8aab0edac53d">
  </p>
  <p align="center">
    <img src="https://github.com/web-jsp-project-joongshin/joongshin/assets/129862445/5718d0af-8402-4ceb-b15b-42b7b88955fe">
  </p>
  
  ▶ 헤더<br>
  downdrop menu<br>
  
  ▶ 동영상<br>
  재생&멈춤<br>
  소리재생&음소거<br>
  
  ▶ 이미지<br>
  무한 슬라이드<br>
  
  ▶ 리뷰 이미지<br>
  + 버튼 클릭으로 보이기 & 숨기기<br>
  
 
<h1> 4. 느낀점</h1> <br>
6-1. 어려웠던 부분<br>
📌처음 도전해보는 퍼블리싱 작업이다 보니깐 java script부분의 응용이 어려웠다. <br>
✔ java script가 익숙하지 않아 인터넷에 검색을 하면서 응용방법을 익혔다. 덕분에 다른사람의 코드를 보고 내 코드로 만드는 법을 배웠다.


6-2. 문제를 해결했던 부분<br>
📌무한슬라이드 문제<br>
🌩문제 상황🌩<br>
무한 슬라이드를 구현하였으나 끝지점에서 처음지점으로 티 안나게 자연스럽게 넘어가야하는데 끊기면서 다시 되돌아가는 현상이 발생했다.

🚨문제 원인🚨<br>
기능 구현에는 문제가 없었으나, setTimeOut에서 마지막 슬라이드나 첫 번째 슬라이드에 도달하면 애니메이션을 제거하고 위치 조정하는 시간을 슬라이드 시간하고 똑같이해서 겹침으로 인해 끊김문제가 발생했던 것이다.

🚀해결 방법🚀<br>
슬라이드 setTimeOut을 0.5초로 하고 마지막 슬라이드나 첫 번째 슬라이드의 setTimeOut을 0.6초로 주어서 시간이 겹치지않고 슬라이드 후 애니메이션 제거로 무한슬라이드 끊김문제를 해결하였다.


5-4. 총평
🌟 미래: 내일이 궁금한 개발자!
이번 프로젝트에서는 막연히 상상만 하던 사이트를 직접 구현해보았다. 

특히나, 글자를 인식하는 구글 클라우드 비전 api를 사용해본 것이 매우 신기하고 재밌었다. 물론 시작은 어려웠지만, 주변의 도움과 혼자만의 코드 연구를 통하여 기능을 구현할 수 있었다. 하나하나 완성될 때마다 뿌듯함을 느낄 수 있었다. 이후 다음 프로젝트를 기획하면서 내가 구현했던 기능 뿐만 아니라 다른 api도 사용해보고 싶다는 갈증이 생겼다. 예를 들어 게시글 네이버 공유하기 api를 진행해보고 싶다.
