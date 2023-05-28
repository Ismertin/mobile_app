import Auth from "../components/layout/screen/Auth/Auth";
import Home from "../components/layout/screen/Home/Home";
import NewWorkout from "../components/layout/screen/NewWorkout/NewWorkout.jsx";
import Profile from "../components/layout/screen/Profile/Profile";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: "auth",
    exact: false,
    component: Auth,
    auth: false,
  },
  {
    path: "/new-workout",
    exact: false,
    component: NewWorkout,
    auth: true,
  },
  {
    path: "/profile",
    exact: false,
    component: Profile,
    auth: true,
  },
];
