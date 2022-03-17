import { Post } from 'components';
import { nanoid } from 'nanoid';
import { IPostProps } from 'types';
import * as S from './style';

export function Blog({ posts }: { posts: Array<IPostProps> }) {
  return (
    <S.Container>
      {posts.map((post) => (
        <Post key={nanoid()} post={post} />
      ))}
    </S.Container>
  );
}
