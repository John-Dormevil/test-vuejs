Vue.component('modal', {
  props: ['body'],
  template: `
    <div class="modal" :class="isVisible" >
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            {{ body }}
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
    </div>
  `,
  methods: {
    hideModal: function () {
      this.isVisible = '';
    }
  },
  data: function () {
    return {
      isVisible: 'is-active'
    };
  }
});


var app = new Vue({
  el: '#root',
  data: {
    visible: false
  },
  methods: {
    showModal: function () {
      this.visible = true;
    }
  }
});