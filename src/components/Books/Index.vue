<template>
    <div>
      <h1>All Books</h1>
      <div>จํานวนหนังสือในหน้านี้ {{ books.length }}</div>
      <div v-for="book in books" v-bind:key="book.id">
        <div>BookID : {{ book.id }}</div>
        <div>title : {{ book.title }}</div>
        <div>author : {{ book.author }}</div>
        <div>total_page : {{ book.total_page }}</div>
        <div>publisher : {{ book.publisher }}</div>
        <div>category : {{ book.category }}</div>
        <div>price : {{ book.price }}</div>
        <p>
          <button v-on:click="navigateTo('/book/' + book.id)">
            ดูข้อมูลหนังสือ
          </button>
          <button v-on:click="navigateTo('/book/edit/' + book.id)">
            แก้ไขข้อมูลหนังสือ
          </button>
          <button v-on:click="deleteUser(book)">ลบข้อมูลหนังสือ</button>
        </p>
        <hr />
      </div>
    </div>
  </template>
  <script>
  import BookServices from "@/services/BookService";
  export default {
    data() {
      return {
        books: []
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deleteUser(book) {
        let result = confirm("Want to delete?");
        if (result) {
          try {
            await BookServices.delete(book);
            this.refreshData()
          } catch (err) {
            console.log(err);
          }
        }
      },
      async refreshData() {
        this.books = (await BookServices.index()).data;
      }
    },
    async created() {
      this.books = (await BookServices.index()).data;
    }
  };
  </script>
  <style scoped></style>
  