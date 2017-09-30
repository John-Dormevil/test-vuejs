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
  },
  computed: {
    reverseString: function () {
      return 'ednom el tuot tulas'.split('').reverse().join('');
    }
  }
});