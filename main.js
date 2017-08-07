Vue.component('modal', {
  /*
  <slot></slot> balise call the content html inside the curent template,
  need to be specified before set your own template
  */
  template: 
  `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button class="delete"></button>
    </header>
    <section class="modal-card-body">
      Temporary for noww
    </section> 
    <footer class="modal-card-foot">
      <slot name="footer">
        <a class="button is-success">Save changes</a>
        <a class="button">Cancel</a>
      </slot>
    </footer>
  </div>
</div>`
});

new Vue({
  el: '#root',

});