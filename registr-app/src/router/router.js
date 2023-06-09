import Registrationform from "../pages/registrationform";
import Login from "../pages/loginform";
import Loginform from "../pages/loginform";
import Userslist from "../pages/userlist";

export const RouterNames = {
  HOME: '/',
  USERS_LIST: '/users-list',
  LOGIN: '/login',
  USER_DETAILS:'/user-details'
}


export const  PublicRoutes = [
  {
    path: RouterNames.HOME,
    component: <Registrationform/>,
    linkName: 'Registration'
  },
  {
    path: RouterNames.LOGIN,
    component: <Loginform/>,
    linkName: 'Login'
  },
  {
    path: RouterNames.USERS_LIST,
    component: <Userlist/>,
    linkName: 'Users List'
  }

]
export const PrivateRoutes = []




