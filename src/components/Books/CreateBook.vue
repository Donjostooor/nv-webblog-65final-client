<template>
    <div>
        <h1>Create Book</h1>
        <form v-on:submit.prevent="createBook">
            <p>title :<input type="text" v-model="book.title" /></p>
            <p>author :<input type="text" v-model="book.author " /></p>
            <p>total_page :<input type="text" v-model="book.total_page" /></p>
            <p>publisher :<input type="text" v-model="book.publisher" /></p>
            <p>category :<input type="text" v-model="book.category" /></p>
            <p>price :<input type="text" v-model="book.price" /></p>
            <p><button type="submit">Create Book</button></p>
        </form>
        <hr>
        <div>
            <p>title : {{ book.title }}</p>
            <p>author : {{ book.author }}</p>
            <p>total_page : {{ book.total_page }}</p>
            <p>publisher : {{ book.publisher }}</p>
            <p>category : {{ book.category }}</p>
            <p>price : {{ book.price }}</p>
        </div>
    </div>
  <!--
    <div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent="createUser">
      <p>name: <input type="text" v-model="user.name" /></p>
      <p>lastname: <input type="text" v-model="user.lastname" /></p>
      <p>email: <input type="text" v-model="user.email" /></p>
      <p>password: <input type="text" v-model="user.password" /></p>
      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ user.name }}</p>
      <p>lastname: {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>
    </div>
  </div>
  -->
</template>
<script>
import BooksService from "@/services/BookService";

export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        total_page: "",
        publisher: "",
        category: "",
        price: "",
      }
    };
  },
  methods: {
    async createBook() {
      try {
        await BooksService.post(this.book);
        this.$router.push({
          name: "books"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
