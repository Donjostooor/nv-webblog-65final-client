import Vue from 'vue'
import Router from 'vue-router'
//Book
import BookIndex from '@/components/Books/Index'
import BookEdit from '@/components/Books/EditBook'
import BookShow from '@/components/Books/ShowBook'
import BookCreate from '@/components/Books/CreateBook'
//Users
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    //book
    {
      path: '/books',
      name: 'book',
      component: BookIndex
    },
    {
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: 'book-create',
      component: BookShow
    },
    {
      path: '/book',
      name: 'book-create',
      component: BookCreate 
    },
    //users
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
  ]
})
