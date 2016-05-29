import State from '../helpers/initial_state'

export default function(state = State.posts, action) {
  // 设置文章列表
  if (action.type === 'list_post') {
    return {
      ...state,
      datasource: action.payload
    }
  }

  // 写文章
  if (action.type === 'create_post') {
    return {
      ...state,
      datasource: [
        action.payload,
        ...state.datasource
      ]
    }
  }

  // 选中文章
  if (action.type === 'select_post') {
    return {
      ...state,
      selected: action.payload
    }
  }

  // 更新文章
  if (action.type === 'update_post') {
    let posts = [...state.datasource]
    let post = posts.filter((item) => item.id === action.payload.id)[0]
    post.title = action.payload.title
    post.content = action.payload.content
    return {
      ...state,
      datasource: posts
    }
  }

  return state
}
