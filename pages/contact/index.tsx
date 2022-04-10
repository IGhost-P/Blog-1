import Head from 'next/head';
import { Contact } from 'components';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="블로그가 마음에 드셨다면 연락주세요!" />
      </Head>
      <Contact />;
    </>
  );
}
