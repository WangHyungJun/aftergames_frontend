import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LogIn from "./views/login";
import SignUp from "./views/signup";
import game from "./views/game";
import blog from "./views/blog";
import game_rep from "./views/game_rep";
import blogarticle from "./views/blogarticle";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  props: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/game/:id/:page",
      name: "game",
      component: game
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: blog
    },
    {
      path: "/game/:id",
      name: "game_rep",
      component: game_rep
    },
    {
      path: "/article/:id",
      name: "blogarticle",
      component: blogarticle
    }
  ]
});
