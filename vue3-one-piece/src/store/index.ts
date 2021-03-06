import { createStore } from 'vuex'
import {
  ColumnProps,
  PostProps,
  testData as testDataDatail,
  testPosts
} from '../mock/testData'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testDataDatail,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: '123', columnId: 1 }
    },
    loginout (state) {
      state.user = { isLogin: false }
    },
    createPost (state, post) {
      state.posts.push(post)
    }
  }
})

export default store
