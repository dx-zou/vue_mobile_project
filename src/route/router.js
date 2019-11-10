import layout from "@/layout";
export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/app",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/home")
      }
    ]
  },
  {
    path: "/loan-apply",
    name: "loan",
    component: () => import(/* webpackChunkName: "loan" */ "@/views/loan")
  }
];
