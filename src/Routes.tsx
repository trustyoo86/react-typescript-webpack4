import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('components/home/Home'),
  loading: () => null,
});

const About = Loadable({
  loader: () => import('components/about/About'),
  loading: () => null,
});

export default {
  Home,
  About
};