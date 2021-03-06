import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Blog from '../pages/Blog'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/blog', component: Blog }
]

export default routes