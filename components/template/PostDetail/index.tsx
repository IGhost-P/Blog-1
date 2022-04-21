import { PostHeader, PostContent, Utterances } from 'components';
import { IPostProps } from 'types';
import * as S from './style';

export function PostDetail({ post }: { post: IPostProps }) {
  return (
    <S.Container>
      <PostHeader post={post} />
      <PostContent post={post} />
    </S.Container>
  );
}
