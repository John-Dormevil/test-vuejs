var app = new Vue({
  el: '#root',
  data:{
    names: ['joe', 'marie', 'jane', 'jack'],
    newName: ''
  },
  methods: {
    addName: function () {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
});