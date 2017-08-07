Vue.component('coupon', {
  /*
  <slot></slot> balise call the content html inside the curent template,
  need to be specified before set your own template
  */
  template: 
  `
  <div>
    <div class="child">
      <p>The child component</p>
      <slot></slot>
      <input placeholder="enter code" v-model="inputValue">
      <button @click="go">Go</button>
      <p>Your code is {{ inputValue }}</p>
    </div>
  </div>
  `,
  data: () => {
    return {
      inputValue: ''
    };
  },
  methods: {
    go() {
      console.log('Input value is '+ this.inputValue);
      this.$emit('emit-coupon', this.inputValue);
    }
  }
});

new Vue({
  el: '#root',
  methods: {
    greeter(args) {
      this.code = args;
    }
  },
  data() {
    return {code: 0};
  },
  //template: "<div>go</div>" inject the template in the component and erase everything in.
});