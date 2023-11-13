const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}
const TodoList = {
  data() {
    return {
      groceryList: [
        { text: 'Овощи'},
        { text: 'Сыр'},
        { text: 'Мясо'},
        { text: 'Фрукты'},
        { text: 'Что еще люди должны есть'}
      ]
    }
  },
  components: {
    TodoItem // Регистрируем новый компонент
  }
}

// Создаём Vue-приложение
const app = Vue.createApp(TodoList)
// Монтируем приложение Vue
app.mount('#todo-list-app')