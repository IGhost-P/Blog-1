import { Blog } from 'components';

interface IDataProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  min: string;
}

const DUMMY_POST: Array<IDataProps> = [
  {
    slug: 'about-react',
    title: 'About React',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-11',
    min: '20min',
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next JS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-10',
    min: '5min',
  },
  {
    slug: 'vladimir-putin-has-already-won',
    title: 'Vladimir Putin Has Already Won, but Nobody Wants to Admit It',
    description: 'Russia is too big to fail.',
    date: '2022-03-10',
    min: '6min',
  },
  {
    slug: 'cornerstone-of-early-2000s-la-rotations',
    title: 'Cornerstone of early 2000s LA rotations, Odalis Perez passes away',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-04-10',
    min: '10min',
  },
  {
    slug: 'what-tommy-lasorda-lived-and-loved-by',
    title: 'What Tommy Lasorda lived and loved by',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-10',
    min: '11min',
  },
  {
    slug: 'what-tommy-lasorda-lived-and-loved-by',
    title: 'What Tommy Lasorda lived and loved by',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-10',
    min: '11min',
  },
  {
    slug: 'what-tommy-lasorda-lived-and-loved-by',
    title: 'What Tommy Lasorda lived and loved by',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-10',
    min: '11min',
  },
  {
    slug: 'what-tommy-lasorda-lived-and-loved-by',
    title: 'What Tommy Lasorda lived and loved by',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-02-10',
    min: '11min',
  },
];

export default function BlogPage() {
  return <Blog posts={DUMMY_POST} />;
}
