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

const AttributeBinding = {
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')