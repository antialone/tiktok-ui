//Layout
import { HeaderOnly } from '~/components/Layouts';
//import page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Feedback from '~/pages/Feedback';
//Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
  { path: '/feedback', component: Feedback },
];
//Private Routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
