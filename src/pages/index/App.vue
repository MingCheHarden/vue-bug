<template>
  <div class="index-wrapper">
    <Tab :selected="selected" />
    <SexRank />
  </div>
</template>

<script >
import Tab from './tab.vue';
import SexRank from './test.vue';

export default {
  name: 'App',

  components: {
    SexRank,
    Tab
  },

  data: function() {
    return {
      selected: 1
    };
  },

  created() {
    console.log('created');

    this.selected = 2;
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  }
};
</script>

<style lang="scss" scoped>
body{
  transition: 0.5s;
}
.index-wrapper{
  width: 100%;
  .banner{
    width: 100%;
    min-height: 500px;
  }
  .user{
    top: 398px;
  }
}

</style>
