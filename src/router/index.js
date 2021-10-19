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
import CreatePost from "@/views/CreatePost";
import BlogPreview from "@/views/BlogPreview";
import ViewBlog from "@/views/ViewBlog";
import EditBlog from "@/views/EditBlog";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
            requiresAuth: false,
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
        meta: {
            title: "Blogs",
            requiresAuth: false,
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "A propos",
            requiresAuth: false,
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
            requiresAuth: false,
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register",
            requiresAuth: false,
        }
    },
    {
        path: "/forgotpassword",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "ForgotPassword",
            requiresAuth: false,
        }
    },
    {
        path: "/profil",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profil",
            requiresAuth: true,
        }
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            title: "Admin",
            requiresAuth: true,
            requiresAdmin: true,
        }
    },
    {
        path: "/nouveau",
        name: "Nouveau",
        component: CreatePost,
        meta: {
            title: "Nouveau",
            requiresAuth: true,
            requiresAdmin: false,
        }
    },
    {
        path: "/post-preview",
        name: "BlogPreview",
        component: BlogPreview,
        meta: {
            title: "Aperçu",
            requiresAuth: true,
            requiresAdmin: false,
        }
    },
    {
        path: "/view-blog/:blogid",
        name: "ViewBlog",
        component: ViewBlog,
        meta: {
            title: "Article ",
            requiresAuth: false
        }
    },
    {
        path: "/edit-blog/:blogid",
        name: "EditBlog",
        component: EditBlog,
        meta: {
            title: "Modifier Article ",
            requiresAuth: true,
            requiresAdmin: false,
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

router.beforeEach(async (to, from, next) => {
    let user = firebase.auth().currentUser;
    let admin = null;
    if (user) {
        let token = await user.getIdTokenResult();
        admin = token.claims.admin;
    }
    if (to.matched.some((res) => res.meta.requiresAuth)) {
        if (user) {
            if (to.matched.some((res) => res.meta.requiresAdmin)) {
                if (admin) {
                    return next();
                }
                return next({ name: "Home" });
            }
            return next();
        }
        return next({ name: "Home" });
    }
    return next();
});

export default router;