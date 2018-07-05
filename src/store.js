const STOREAGE_KEY = 'todo-vuejs'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STOREAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STOREAGE_KEY, JSON.stringify(items))
  }
}
