(function() {
  'user scrict';

  var vm = new Vue({
    el: "#app",
    data: {
      newItem: '',
      todos: []
    },
    watch: {
      todos:  {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          hoge = JSON.stringify(this.todos)
          console.log(hoge)
        },
        deep: true
      }
    },
    mounted: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item)
        this.newItem = ""
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1)
        }
      },
      purge: function () {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter( function (todo) {
          return !todo.isDone;
        });
      }
    }
  })

  
})();