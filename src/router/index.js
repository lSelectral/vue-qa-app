import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes : [
        {
            path : "/",
            name : "HomePage",
            component : () => import("@/views/HomePage"),
            meta : {
                authRequired : false
            }
        },
        {
            path : "/account",
            name : "AccountPage",
            component : () => import("@/views/AccountPage"),
            meta : {
                translationKey : "account_page",
                authRequired : true
            }
        },
        {
            path : "/categories",
            name : "CategoriesPage",
            component : () => import("@/views/CategoriesPage"),
            meta : {
                translationKey : "categories_page",
                authRequired : true
            }
        },
        {
            path : "/favorites",
            name : "FavoritesPage",
            component : () => import("@/views/FavoritesPage"),
            meta : {
                translationKey : "favorites_page",
                authRequired : true
            }
        },
        {
            path : "/question/:userID",
            name : "MyQuestionsPage",
            component : () => import("@/views/MyQuestionsPage"),
            meta : {
                translationKey : "my_questions_page",
                authRequired : true
            }
        },
        {
            path : "/new-question",
            name : "NewQuestionPage",
            component : () => import("@/views/NewQuestionPage"),
            meta : {
                translationKey : "new_question_page",
                authRequired : true
            }
        },
        {
            path : "/question/:contentID/",
            name : "QuestionDetailPage",
            component : () => import("@/views/QuestionDetailPage"),
            meta : {
                translationKey : "question_detail_page",
                authRequired : true
            }
        },
        {
            path : "/login",
            name : "LoginPage",
            component : () => import("@/views/LoginPage"),
            meta : {
                authRequired : false
            }
        },
        {
            path : "/register",
            name : "RegisterPage",
            component : () => import("@/views/RegisterPage"),
            meta : {
                authRequired : false
            }
        },

        { path: '/:pathMatch(.*)*', name: 'NotFound', component : () => import("@/views/NotFound")},
    ],
    history : createWebHistory(),
    // mode : "hash | history"
})


router.beforeEach((to, from,next) => {
    // console.log(`${from.name} => ${to.name}`)
    // console.log("authRequired", to.meta.authRequired)
    next();
    const isAuthenticated = false;
    const authRequiredForRoute = to.meta.authRequired

    if(authRequiredForRoute){
        if(isAuthenticated){
            next()
        } else {
            next({ name : "LoginPage"})
        }
    } else {
        next();
    }
})

export default router;
