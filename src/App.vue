<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--通过router-view控制路由页面展示-->
    <router-view/>
    <!--<h1>{{title}}</h1>-->
    <!--<input type="text" v-model="newItem" @keyup.enter="addNew">-->
    <!--<ul>-->
      <!--<li v-for="item in items" :class='{finish:item.isFinished}' v-on:click="toggleFinished(item)">-->
        <!--{{item.label}}-->
      <!--</li>-->
    <!--</ul>-->
    <!--<component-a msgFromFather="this msg is from father" v-on:child-tell-me="Listen"></component-a>-->
    <!--<p>{{childWords}}</p>-->
  </div>
</template>

<script>
  import Store from './store'
  import ComponentA from './components/component'
  export default {
    name: 'App',
    data() {
      return {
        title:'ToDo List',
        items: Store.fetch(),
        newItem : '',
        childWords: ''
      }
    },
    methods: {
        toggleFinished: function (item) {
          item.isFinished = !item.isFinished
        },
        addNew: function () {
          this.items.push({
            label: this.newItem,
            isFinished: false,
          })
          this.newItem = ''
        },
        Listen: function (msg) {
          this.childWords = msg
        }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    components: { ComponentA },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .finish {
    text-decoration: underline;
  }
</style>
·
