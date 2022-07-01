<template>
  <div class="document__details p-2">
    <h5>Meeting Info</h5>
    <hr />
    <p><b>Request:</b>Notarising document</p>
    <p><b>Uploaded Document</b></p>
  </div>

  <!-- <div class="wrapper">
      <div>
         <input type="text" size="50" placeholder="Name">
         <input type="text" size="50" placeholder="Email">
         <div v-for="key in count" :key="key">
            <input type="text" v-model="values['dynamic-field-'+key]" size="50" placeholder="Another Field" :id="key">
         </div>

      </div>
      <div class="controls">
         <a href="#" id="add_more_fields" @click="add"><i class="fa fa-plus"></i> Add More</a>
         <a href="#" id="remove_fields" @click="remove"><i class="fa fa-plus"></i> Remove Field</a>
      </div>
   </div> -->
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      count: 1,
      values: {},
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    remove: function () {
      this.count--;
    },
    // submit: function () {
    //    for (var key of Object.keys(this.values)) {
    //       console.log(key + " -> " + this.values[key])
    //    }
    // }
  },
};
</script>
