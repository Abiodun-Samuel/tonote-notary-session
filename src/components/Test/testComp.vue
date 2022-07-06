<template lang="">
  <div ref="el">upload</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const el = ref();
onMounted(() => {
  console.log("upload");
  el.value.innerHtml = "sam";
});
</script>
