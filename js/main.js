// Счётчик
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 2000)
  }
}
Vue.createApp(Counter).mount('#counter')
// Директива v-bind
const AttributeBinding = {
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')
// Директива v-on
const EventHandling = {
  data() {
    return {
      message: 'Привет, Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
Vue.createApp(EventHandling).mount('#event-handling')
// Директива v-model
const TwoWayBinding = {
  data() {
    return {
      message: 'Привет, World!'
    }
  }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')