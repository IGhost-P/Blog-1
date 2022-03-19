---
slug: 'about-react'
title: 'About React'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
image: 'React.png'
date: '2022-02-11'
min: '☕️☕️☕️ 20 min read'
isFeatured: true
---

NextJS is a **framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this article, we'll dive into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Much More

### File-based Routing

```javascript
function solution(N, stages) {
  const result = [];
  const orderedStages = stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    let [staging, staged] = [0, 0];
    for (let j = 0, length = orderedStages.length; j < length; j++) {
      if (i <= orderedStages[j]) {
        staged += 1;
        if (i === orderedStages[j]) staging += 1;
      }
    }
    result.push([i, staging / staged]);
  }

  return result
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    })
    .map((res) => res[0]);
}
```

![Create routes via your file + folder structure](Next.png)

안녕하세요 `hello`

모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다.

신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.

> 안녕하새요
> 반가워요
