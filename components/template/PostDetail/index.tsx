import { PostHeader, PostContent } from 'components';
import { IPostProps } from 'types';
import * as S from './style';

export function PostDetail({ post }: { post: IPostProps }) {
  return (
    <S.Container>
      <PostHeader post={post} />
      <PostContent post={post} />
      <section
        ref={(elem) => {
          if (!elem) {
            return;
          }
          const scriptElem = document.createElement('script');
          scriptElem.src = 'https://utteranc.es/client.js';
          scriptElem.async = true;
          scriptElem.setAttribute('repo', 'Yummy-sk/Blog');
          scriptElem.setAttribute('issue-term', 'title');
          scriptElem.setAttribute('theme', 'github-light');
          scriptElem.setAttribute('label', 'blog-comment');
          scriptElem.crossOrigin = 'anonymous';
          elem.appendChild(scriptElem);
        }}
      />
    </S.Container>
  );
}
