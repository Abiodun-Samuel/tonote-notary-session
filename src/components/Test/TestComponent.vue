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

  <SkeletonLoader :loading="true" />

  <div class="cont">
    <div class="uploaded__images gap-2">
      <!-- <div class="title">Choose a pricing plan</div> -->
      <label class="uploaded__image" for="basic">
        <button
          class="btn text-danger bg-transparent delete__btn"
          @click="deleted"
        >
          <span class="iconify" data-icon="clarity:edit-solid"></span>
        </button>
        <input checked type="radio" name="plan" id="basic" />
        <div class="plan-content" @click="select">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
            alt=""
          />
        </div>
      </label>
      <label class="uploaded__image" for="basi">
        <button
          class="btn text-danger bg-transparent delete__btn"
          @click="deleted"
        >
          <span class="iconify" data-icon="clarity:edit-solid"></span>
        </button>
        <input checked type="radio" name="plan" id="basi" />
        <div class="plan-content" @click="select">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
            alt=""
          />
        </div>
      </label>

      <!-- <label class="uploaded__image" for="complete">
        <input type="radio" id="complete" name="plan" />
        <div class="plan-content">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg"
            alt=""
          />
        </div>
      </label> -->
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toast-notification";
import testComp from "./testComp";
import TabNav from "./TabNav.vue";
import TabComponent from "./TabComponent.vue";
import SkeletonLoader from "../Loader/SkeletonLoader.vue";

export default {
  components: { TabNav, TabComponent, testComp, SkeletonLoader },
  data() {
    return {
      selected: "Upload",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    deleted() {
      console.log("deleted");
    },
    select() {
      console.log("selected");
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

.uploaded__images {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
}

.uploaded__images .uploaded__image input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.uploaded__images .uploaded__image {
  cursor: pointer;
  /* width: 50%; */
  position: relative;
}

.uploaded__images .uploaded__image .plan-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1px;
  border: 2px solid #efefef;
  border-radius: 5px;
  -webkit-transition: -webkit-box-shadow 0.4s;
  transition: -webkit-box-shadow 0.4s;
  -o-transition: box-shadow 0.4s;
  transition: box-shadow 0.4s;
  transition: box-shadow 0.4s, -webkit-box-shadow 0.4s;
  position: relative;
  width: 120px;
  height: 120px;
}
.delete__btn {
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 2px;
  z-index: 1;
}
.uploaded__images .uploaded__image .plan-content img {
  max-width: 100%;
  margin: 0 auto;
}

.uploaded__images .uploaded__image .plan-content:hover {
  -webkit-box-shadow: 0px 3px 5px 0px #e8e8e8;
  box-shadow: 0px 3px 5px 0px #e8e8e8;
}

.uploaded__images .uploaded__image input[type="radio"]:checked + .plan-content {
  border: 2px solid #216ee0;
  background: #eaf1fe;
  -webkit-transition: ease-in 0.3s;
  -o-transition: ease-in 0.3s;
  transition: ease-in 0.3s;
}
</style>
