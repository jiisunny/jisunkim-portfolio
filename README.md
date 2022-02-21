[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://app.netlify.com/sites/infallible-heisenberg-75d4ab/deploys)

# Jisun Kim's Portfolio 📚


## OVERVIEW

포트폴리오 메인페이지는 남미여행 중 볼리비아에서 보았던 우유니사막의 일출 사진이다. 일출 사진에서 보이는 컬러를 포트폴리오 메인 컬러로 정하고 로고와 배경색상으로 적용했다.

<br />

<b>김지선의 포트폴리오로 Go Go!</b>

[포트폴리오 메인페이지로 이동](https://infallible-heisenberg-75d4ab.netlify.app/)

메인페이지 -

![김지선의 포트폴리오 메인페이지](https://raw.githubusercontent.com/jiisunny/jisunkim-portfolio/master/_assets/main_screenshot.png)

프로젝트 서브페이지 -

![김지선의 포트폴리오 서브페이지](https://raw.githubusercontent.com/jiisunny/jisunkim-portfolio/master/_assets/sub_screenshot.png)

## 문자 인코딩(Character Encoding) 설정

문자가 인코딩 되는 방식을 설정한다.

```html
<meta charset="UTF-8"/>
```
- `UTF-8` : 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
- `EUC-KR` : 하나의 완성된 글자를 인식

## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정한다.<br />
모바일 환경에서 적용 된다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0` : 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no` : 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1` : 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북, 카카오톡 등)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/jiisunny/jisunkim-portfolio/master/_assets/kakao_opengraph_example.png)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Jisun's Portfolio" />
<meta property="og:title" content="Jisun's Portfolio" />
<meta property="og:description" content="안녕하세요. 감각적인 디자이너 김지선입니다." />
<meta property="og:image" content="./images/portfolio_seo.jpg" />
<meta property="og:url" content="#" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Jisun's Portfolio" />
<meta property="twitter:title" content="Jisun's Portfolio" />
<meta property="twitter:description" content="안녕하세요. 감각적인 디자이너 김지선입니다." />
<meta property="twitter:image" content="./images/portfolio_seo.jpg" />
<meta property="twitter:url" content="#" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정한다.<br/>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />`를 작성할 필요가 없다. `favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성해야한다.

> 파비콘 이미지는 루트 경로에 있어야 한다

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/jiisunny/jisunkim-portfolio/master/favicon.png" alt="jisunkim_favicon" width="16" /><br />
<img src="https://raw.githubusercontent.com/jiisunny/jisunkim-portfolio/master/favicon.png" alt="jisunkim_favicon" width="200" />

### .ico 파일 제작

이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있다.

[iconifier.net](https://iconifier.net/)

## Google Material Icons

[구글에서 제공하는 Material Icons](https://material.io/resources/icons/?style=baseline)을 무료로 사용할 수 있습니다.

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

다음과 같이 사용할 수 있다.

```html
<div class="material-icons">upload</div>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리이다.<br />
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스코롤 애니메이션을 지원하는 GSAP 플러그인이다.

> 쉽게 사용할 수 있다는 장점이 있다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to())<br />
[GSAP Easing](https://greensock.com/docs/v2/Easing)

```js
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
```

```js
gsap.to(window, .7, {
  scrollTo: 0
});
```

## Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리이다.

[Getting Started With Swiper](https://swiperjs.com/get-started)

> Swiper 6버전을 사용해 작업함.

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(옵션)을 확인 할 수 있다.

```js
new Swiper(요소, 옵션);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리이다.<br />
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용한다.

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

## Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리이다.

[Lodash API](https://lodash.com/docs/4.17.15) <br />
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

## JS Strict Mode

JavaScript를 '엄격 모드'로 사용한다.<br />
파일 혹은 함수의 최상단에 작성해야 한다.

```javascript
'use strict';
```

> 'Strict Mode'는 ECMAScript 5 버전에 있는 새로운 기능으로, 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게 한다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 해며, 좀 더 많은 예외를 발생시킨다.

### 엄격 모드의 장점

- 일반적인 코딩 실수에서 예외 처리
- 안전하지 않은 액션에 대한 예외 처리 (ex: 전역 객체로 접근)
- 혼란스럽거나 제대로 고려되지 않는 기능들을 비활성화