import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCard: [
            {blogTitle: "Blog Card 1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021"},
            {blogTitle: "Blog Card 2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021"},
            {blogTitle: "Blog Card 3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021"},
            {blogTitle: "Blog Card 4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021"}
        ],
        editPost: null,
        user: null,
        profileAdmin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUsername: null,
        profileId: null,
        profileInitials: null,


    },
    mutations: {
        toogleEditPost (state, payload) {
            state.editPost = payload;
        },
        setProfileInfo(state, doc){
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileFirstName = doc.data().firstName;
            state.profileLastName = doc.data().lastName;
            state.profileUserName = doc.data().username;
        },
        setProfileInitials(state) {
            state.profileInitials =
                state.profileFirstName.match(/(\b\S)?/g).join("") +
                state.profileLastName.match(/(\b\S)?/g).join("");
           },
        updateUser(state, payload) {
            state.user = payload;
        },

    },
    actions: {
        async getCurrentUser({commit}) {
            const database = await db.collection('users').doc(firebase.auth().currentUser.uid);
            const dbResult = await database.get();
            commit("setProfileInfo", dbResult);
            commit("setProfileInitials");

        }
    },
    modules: {
    }
})
