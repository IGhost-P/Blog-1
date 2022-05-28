---
slug: 'rn-date-undefined'
title: 'react native Date:undefined 오류 해결'
description: 'react native에서 Date:undefined 오류를 해결하는 방법을 알아봅니다.'
image: 'rn-date-undefined.svg'
date: '2022-05-28'
min: '☕️ 5 min read'
isFeatured: true
---

## 1. 발생 개요

시차 계산 로직을 짜고 있는 와중에 앱을 지우고 다시 시작했더니 다음과 같이 `Date:undefined` 가 나오는 것을 볼 수 있었습니다.

![스크린샷 2022-05-28 오후 11.44.27.png](1.svg)

알아보니, new Date 객체로 변환하는 코드에서 에러가 발생하는 것을 볼 수 있었습니다.

```javascript
const [, time, meridiem] = new Date(targetTime).toLocaleString('en-US').split(' ');

// 여기에서 undefined를 반환하게 됩니다.
```

그래서 이것 저것 알아보다.. 우연히 Debug with chorme을 키게 되었고 이 이후부터는 값이 정상적으로 나오는 것을 볼 수 있었습니다.

![스크린샷 2022-05-28 오후 11.48.53.png](2.svg)

이 이후, Debug with chrome을 하니 깔끔하게 해결 되어 개발 할 때마다 Chrome을 키면서 개발하였고, 배포를 위해 테스를 하게 되었습니다.

하지만, 빌드된 앱은 Debug with chrome을 킬 수 없었기 때문에 앞서 겪었던 문제는 다시 원점으로 돌아오게 되었습니다..

## 2. 해결

“ **[Some code only works while chrome debugger is active](https://stackoverflow.com/questions/35660278/some-code-only-works-while-chrome-debugger-is-active) “**이 글이 정말 많이 도움되었습니다.

그 이유는 우리가 Debug with chrome을 사용했을 때와 아닐때, 사용하는 엔진의 종류가 다르다는 것을 알게 되었습니다.

일반적으로 애뮬레이터를 사용할 때 JavascriptCore 엔진을 사용한다고 합니다.

> [JavascriptCore](https://developer.apple.com/documentation/javascriptcore)

앱 내에서 JavaScript 프로그램을 평가하고 앱의 JavaScript 스크립팅을 지원합니다.

>

그런데, 우리가 Debug with chrome을 사용하게 되면 JavascriptCore엔진이 아닌 V8엔진을 사용하게 됩니다.

이 둘의 Date 객체의 경우 들어오는 값에 대에 지원하는 포멧이 조금 다른 것 같습니다.

예를 들어, `new Date(2022-05-27)` 의 경우 V8엔진은 잘 처리하지만, JavascriptCore의 경우 `-` 으로 구분된 포멧을 잘 읽지 못하는듯 보입니다.

따라서, JavascriptCore를 사용할 때는 `-` 가 아닌 `/` 로 구분하니 정확하게 잘 출력 되는 것을 확인할 수 있었습니다. → `new Date('2022/05/27')`

![284377353_2190394577806396_8467870873004723083_n.jpeg](3.svg)

이를 위해 정규표현식으로 `/` 로 변환해주게 되면 정상적으로 Date가 출력되었습니다.
