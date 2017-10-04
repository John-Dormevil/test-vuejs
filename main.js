Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
    <ul>
      <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
        <a @click="selectedTab(tab)" :href="tab.href">{{ tab.name }}</a>
      </li>
    </ul>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
  `,
  data(){
    return {
      tabs: []
    };
  },
  created(){
    this.tabs = this.$children;
  },
  methods: {
    selectedTab(tabselected){
      this.tabs.forEach(function(tab) {
        if(tab.name == tabselected.name){
          tab.isActive = true;
        }else {
          tab.isActive =false;
        }
      });
    }
  }
});

Vue.component('tab',{
  props: {
    name: {required: true},
    selected: {default: false}
  },
  template: `
    <div>
      <slot v-if="isActive"></slot>
    </div>
  `,
  data(){
    return {
      isActive: false
    }
  },
  mounted(){
    this.isActive = this.selected;
  },
  computed: {
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
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
    },
    closeModal: function () {
      this.visible = false;
    }
  }
});