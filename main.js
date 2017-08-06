Vue.component('tabs', {
  template:
  `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class= "{'is-active' : tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class='tabs-details'>
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return { 
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectTab.name ? true : false;
      });
    }
  }
});

Vue.component('tab', {
  template: `<div v-show="isActive"><slot></slot></div>`,
  data() {
    return {
      isActive: this.selected,
      href: "#"+this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      default: 'title name'
    },
    selected: {
      default: false
    }
  }
});

new Vue({
  el: '#root'
});