import { Post, Introduce } from 'components';
import { nanoid } from 'nanoid';
import { IPostProps } from 'types';
import * as S from './style';

export function Blog({ posts }: { posts: Array<IPostProps> }) {
  return (
    <S.Container>
      <Introduce />
      {posts.map((post) => (
        <Post key={nanoid()} post={post} />
      ))}
    </S.Container>
  );
}
