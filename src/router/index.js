import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "@/views/Blogs";
import ForgotPassword from "@/views/ForgotPassword";
import Login from "@/views/Login";
import Register from "@/views/Register";
import About from "@/views/About";
import Profile from "@/views/Profile";
import Admin from "@/views/Admin";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home"
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
        meta: {
            title: "Blogs"
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "A propos"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login"
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register"
        }
    },
    {
        path: "/forgotpassword",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "ForgotPassword"
        }
    },
    {
        path: "/profil",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profil"
        }
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            title: "Admin"
        }
    },
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | BlogBdj`;
    next();
})

export default router;