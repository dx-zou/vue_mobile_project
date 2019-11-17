export default [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home")
  },
  {
    path: "/category",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "@/views/category")
  },
  {
    path: "/loan-apply",
    name: "loan",
    component: () => import(/* webpackChunkName: "loan" */ "@/views/loan")
  }
];
