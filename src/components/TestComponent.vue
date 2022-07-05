<template lang="">
  <div></div>
</template>

<script>
import { useToast } from "vue-toast-notification";
export default {
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
