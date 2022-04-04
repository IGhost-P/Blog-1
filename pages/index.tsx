import { Blog } from 'components';
import { getAllPosts } from 'utils/handlePosts';
import { IPostProps } from 'types';

export default function BlogPage({ posts }: { posts: Array<IPostProps> }) {
  return <Blog posts={posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
