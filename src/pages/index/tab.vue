<template>
  <div class="tab-wrapper"></div>
</template>

<script >
export default {
  name: 'Tab',

  props: ['selected'],

  data() {
    return {
      tab: 1
    };
  },

  watch: {
    selected: {
      handler: function(val) {
        if (val && val !== this.tab) {
          this.tab = val;
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
