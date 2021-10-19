<template>
   <div class="home">
     <BlogPost :post="welcomeScreen" v-if="!user"/>
     <BlogPost :post="post" v-for="(post, i) in blogPostsFeed" :key="i" />
     <div class="blog-card-wrap">
       <div class="container">
         <h3>Plus d'articles récent</h3>
         <div class="blog-cards">
            <BlogCard :post="post" v-for="(post, i) in blogPostCard" :key="i"/>
         </div>
       </div>
     </div>
     <div class="updates" v-if="!user">
       <div class="container">
         <h2>Ne manquer plus aucun articles. Inscrivez-vous gratuitement</h2>
         <router-link class="router-button" to="#">
            Inscription Gratuite <Arrow class="arrow arrow-light" />
         </router-link>

       </div>
     </div>
   </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: "Home",
  components: {BlogCard, BlogPost, Arrow },
  data() {
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
            "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "This is very awesome",
          blogHTML: "This is a filter title",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "This is very awesome",
          blogHTML: "This is a filter title",
          blogCoverPhoto: "designed-for-everyone"
        },
      ],
    }
  },
  computed: {
    blogPostCard() {
      return this.$store.getters.blogPostsCards;
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    user() {
      return this.$store.state.user;
    }
  }

}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>