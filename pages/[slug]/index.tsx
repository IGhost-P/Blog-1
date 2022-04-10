import { PostDetail } from 'components';
import { getPostData, getPostsFiles } from 'utils/handlePosts';
import { IPostProps } from 'types';

export default function PostDetailPage({ post }: { post: IPostProps }) {
  return (
    <>
      <PostDetail post={post} />
      <section
        ref={(elem) => {
          if (!elem) {
            return;
          }
          const scriptElem = document.createElement('script');
          scriptElem.src = 'https://utteranc.es/client.js';
          scriptElem.async = true;
          scriptElem.setAttribute('repo', 'Yummy-sk/Blog');
          scriptElem.setAttribute('issue-term', 'pathname');
          scriptElem.setAttribute('theme', 'github-light');
          scriptElem.setAttribute('label', 'blog-comment');
          scriptElem.crossOrigin = 'anonymous';
          elem.appendChild(scriptElem);
        }}
      />
    </>
  );
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName: string) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}
