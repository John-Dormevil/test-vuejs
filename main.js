Vue.component('message', {
  props: ['title', 'body'],
  template: `
    <article class="message" v-show="isVisible">
      <div class="message-header">
        {{ title }}

        <button @click="hideModal">X</button>
      </div>
      <div class="message-body">
        {{  body  }}
      </div>
    </article>
  `,
  methods: {
    hideModal: function () {
      this.isVisible = false;
    }
  },
  data: function () {
    return {
      isVisible: true
    };
    
  }
});


var app = new Vue({
  el: '#root'
});