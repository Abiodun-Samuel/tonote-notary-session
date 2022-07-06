<template>
  <div id="app">
    <TabNav
      :tabs="['Upload', 'Picture', 'Select']"
      :selected="selected"
      @selected="setSelected"
    >
      <TabComponent :isSelected="selected === 'Upload'">
        <testComp />
      </TabComponent>
      <TabComponent :isSelected="selected === 'Picture'">
        <h1>More test text</h1>
      </TabComponent>
      <TabComponent :isSelected="selected === 'Select'">
        <ul>
          <li>List test 1</li>
          <li>List test 2</li>
          <li>List test 3</li>
        </ul>
      </TabComponent>
    </TabNav>
  </div>
</template>

<script>
import { useToast } from "vue-toast-notification";
import testComp from "./testComp";
import TabNav from "./TabNav.vue";
import TabComponent from "./TabComponent.vue";

export default {
  components: { TabNav, TabComponent, testComp },
  data() {
    return {
      selected: "Upload",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
  setup() {
    const toast = useToast();
    let instance = toast.success("Lorem ipsum", {
      duration: 3000,
      queue: false,
      position: "top-right",
      dismissible: true,
      pauseOnHover: true,
    });
    return {
      instance,
    };
  },
};
</script>

<style lang="css" scoped>
#app {
  margin-top: 5rem;
}
</style>
