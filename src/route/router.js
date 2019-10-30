export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home")
  },
  {
    path: "/loan-apply",
    name: "loan",
    component: () => import(/* webpackChunkName: "loan" */ "@/views/loan")
  }
];
