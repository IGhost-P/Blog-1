import Image from 'next/image';

export function PostHeader({ title, src }: { title: string; src: string }) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={src} width={300} height={200} />
    </header>
  );
}
