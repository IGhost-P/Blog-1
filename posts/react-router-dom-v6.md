---
slug: 'react-router-dom-v6'
title: 'React Router v6'
description: 'React Router v6 사용법을 알아봅니다.'
image: 'react-router-dom-v6.svg'
date: '2022-06-01'
min: '☕️ 10 min read'
isFeatured: true
---

라우팅이란 페이지를 이동하는 것을 말한다.

원래 SSR 같은 경우에는 페이지를 이동할 때마다 새로운 요청을 받아와야 하지만,

SPA 경우에는 앱을 로드할 때 한 페이지에서 애플리케이션을 바꾸기만 하면 된다.

따라서, SPA의 경우에는 앱을 시작할 때 모든 페이지를 받아오면 한 애플리케이션에서 페이지를 변경하기만 하면 된다.

## 1. 사용

먼저 `<BrowserRouter>` 를 사용해야 한다.

이는 화면 이동시, `<BrowserRouter>` 는 화면이 깜빡이지 않고 이동할 수 있도록 한다.

```jsx
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
```

다음과 같이 `<App>`에 감싸준다.

## 2. Route, Routes

```jsx
<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
```

그리고, `Route` 컴포넌트는 `Routes` 컴포넌트 내부에서 사용되어야 한다.

`App` 컴포넌트를 다음과 같이 `Route` 컴포넌트를 사용하여 라우트 설정은 다음과 같이 한다.

```jsx
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
```

## 3. 다른 페이지로 이동하는 버튼 만들기 → Link

```jsx
<Link to="경로">링크 이름</Link>
```

```jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

## 4. 특정 Link에 스타일 지정하기 → NavLink

`NavLink` 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우

특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트이다.

NavLink는 일반적인 링크와 동일 → a를 생성하고 페이지가 다시 랜더링 되는 것을 막아준다.

추가적으로 활성화 되었을 때 클래스를 지정하면 특정 css를 반영할 수 있도록 해준다.

```jsx
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="welcome"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

```jsx
<NavLink to="welcome" className={({ isActive }) => (isActive ? classes.active : undefined)}>
  Welcome
</NavLink>
```

즉, Active일 때 클래스를 다음과 같이 반환하도록 하면 된다.

![스크린샷 2022-03-10 오후 8.50.02.png](1.svg)

## 5. 동적 라우팅 처리하기

```jsx
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
```

URL 파라미터는 `/profiles/:username` 과 같이 경로에 `:` 를 사용하여 설정한다.

만약 URL 파라미터가 여러개인 경우엔 `/profiles/:username/:field` 와 같은 형태로 설정할 수 있습니다.

그리고 예제와 같이 `/products/1` 과 같이 접근하면 동적라우팅이 되는 것을 볼 수 있다.

![스크린샷 2022-03-10 오후 9.10.48.png](2.svg)

그러면, 그림과 같이 우리가 입력한 path를 가져오는 방법에는 무엇이 있을까?

- **useParam** → 말 그대로 path를 가져오기가 편하다.
  ![스크린샷 2022-03-10 오후 9.12.14.png](3.svg)
- **useLocation** → 쿼리스트링을 가져올 때 편하다.
  ![스크린샷 2022-03-10 오후 9.12.31.png](4.svg)

보기와 같이 용도에 맞게 사용하면 되나, 일단 우리는 동적 path를 가져오는 것이 좋기 때문에 useParam을 사용해보겠다.

## 6. Redirect

```jsx
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}
```

`‘/’` 로 접근했을 때 빈 페이지만 뜬다.

원래 같았으면 해당 라우트를 위한 페이지를 만들어주겠지만, 굳이 그럴 필요 없다.

해당 페이지에 접근했을 때, 리다이렉트를 해주면 된다.

`<Redirect/>`컴포넌트가 v6버전에서부터는 지원을 하지 않는다.

그렇기 때문에 이 부분을 수정해줘야 한다.

여기서 중요한 점은 공식문서에서 v6버전으로 업데이트하기 전 v5.1 버전으로 업데이트 하는 과정에서는 이런식으로 수정하라고 권유한다.

```jsx
// v5.1 전 사용방법
<Rediect from="/freetime" to="/free/freetime" />// v5.1 업데이트 시 수정
<Route path="/freetime" render={() => <Redirect to="/free/freetime" />} />
```

먼저 v6업데이트 하기전에는 이런식으로 수정을 해주자.

그리고 이런식으로 모두 마이그레이션이 됬다면 v6에서 지원하는 `Navigate` 컴포넌트를 사용하여 마이그레이션을 진행시켜주자.

```jsx
<Route path="/" element={<Navigate replace to="/welcome" />} />
```

즉, 다음과 같이 처리하면 된다.

```jsx
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}
```

## 7. 중첩라우팅 사용하기

```jsx
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes />} />

      <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
        <Route path="comments" element={<Comments />} />
      </Route>

      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
}
```

원래는 해당 컴포넌트에 또 다른 라우터를 만들어서 사용했다.

하지만, V6에서는 `<Routes>` 는 앱 내에서 한 개만 존재해야 한다는 특징이 지켜져야 한다.

따라서, App.js안에서 처리를 해주도록 해야한다.

감싸고 있는 경로의 Element는 아래에 들어올 컴포넌트들의 공통된 레이아웃을 뜻한다.

### 그럼, 안에 존재하는 컴포넌트는 어떻게 처리해야 할까?

처음에는 `Children` 으로 처리했다.

하지만, v6에서는 이를 위한 `<Outlet/>` 이라는 컴포넌트를 지원한다.

이 컴포넌트는 `Route` 의 `children` 으로 들어가는 JSX 엘리먼트를 보여주는 역할을 합니다.

지금의 경우엔 다음 내용이 `Outlet` 컴포넌트를 통해서 보여지게 되는 것.

```jsx
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>

      <Outlet />
    </>
  );
}
```

그리고 하위에 있는 경로들은 루트 경로에 맞게 생락할 수 있다.

```jsx
<Route path="/quotes/:quoteId" element={<QuoteDetail />}>
  <Route path="comments" element={<Comments />} />
</Route>
```

## 8. 404 처리하기

```jsx
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
```

React router dom은 위에서 부터 아래까지 순차적으로 훑어가면서, 해당 경로에 맞은 경로에 매칭 시켜나간다.

404라는 말은 모든 루트가 일치하지 않아, 보여줄 페이지가 없다는 말이다.

즉, 이는 `<Route path="*" element={<NotFound/>}/>` 로 처리해주면 된다.

참고로 `path=”*”` 는 모든 페이지를 처리한다는 말이다.

## 9. 동적 페이지 이동

이를 위해서는 `useNavigate()` 를 사용하면 된다.

```jsx
const navigate = useNavigate();

navigate(-1); // 뒤로 가기
navigate(-2); // 두번 뒤로가기

navigate(1); // 앞으로 가기
navigate(2); // 두번 앞으로 가기

navigate('/quotes'); // 특정 경로로 이동

navigate('/quotes', { replace: true }); // 브라우저 스택에 쌓지않고 이동하기 replace
```

## 10. Prompt

prompt는 페이지를 벗어나려고 할 때, 정말 이 페이지를 벗어날것인지를 물어보는 기능이다.

기존에는 그냥 `Prompt` 를 사용하면 되었지만, v6로 오게 되면서 이게 사라져버렸다..

따라서, 다음과 같이 커스텀 하면 된다.

```jsx
import { useRef, useState, useContext, useEffect, useCallback } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

function useBlocker(blocker, when = true) {
	const { navigator } = useContext(NavigationContext);

	useEffect(() => {
		if(!when) return;

		const unblock = navigator.block((tx) => {
			const autoUnblockingTx = {
				...tx,
				retry() {
					unblock();
					tx.retry();
				},
			};
			blocker(autoUnblockingTx);
		});
		return unblock;
	}, [navigator, blocker, when]);
}

function usePrompt(message, when = true) {
	const blocker = useCallback((tx) => {
		//   eslint-disable-next-line no-alert
		if(window.confirm(message)) tx.retry();
	}, [message]);

	useBlocker(blocker, when);
}

...

const QuoteForm = (props) => {
	const [isEntering, setIsEntering] = useState(false);

	...

  usePrompt('Are you sure you want to leave? All your entered data will be lost!!', isEntering);

  return (
	...
  );
};

export default QuoteForm;
```
