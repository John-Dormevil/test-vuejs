Vue.component('modal', {
  props: ['body'],
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <slot name="body"></slot>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `
});


var app = new Vue({
  el: '#root',
  data: {
    visible: false
  },
  methods: {
    showModal: function () {
      this.visible = true;
    },
    closeModal: function () {
      this.visible = false;
    }
  }
});