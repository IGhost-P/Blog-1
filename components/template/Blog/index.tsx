import { Post } from 'components';
import * as S from './style';

interface IDataProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  min: string;
}

export function Blog({ posts }: { posts: Array<IDataProps> }) {
  return (
    <S.Container>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </S.Container>
  );
}
