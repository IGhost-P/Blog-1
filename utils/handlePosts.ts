import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPostProps, IDataProps } from 'types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): IPostProps {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const meta = data as IDataProps;

  return {
    slug: postSlug,
    ...meta,
    content,
  };
}

export function getAllPosts() {
  // 해당 폴더에 있는 모든 마크다운 파일을 읽어온다.
  const postFiles = fs.readdirSync(postsDirectory);
  // 모든 파일은 배열로 가져온다.
  return postFiles
    .map((postFile: string) => getPostData(postFile)) // 순회하면서 postFile 데이터를 가져온다.
    .sort((a: IPostProps, b: IPostProps) => (a.date > b.date ? -1 : 1));
}

// // export function getFeaturedPosts() {
// //   const allPosts = getAllPosts();

// //   return allPosts.filter((post) => post.isFeatured);
// // }
