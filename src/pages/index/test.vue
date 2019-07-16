<template>
  <div class="a"></div>
</template>

<script >
export default {
  name: 'Test',

  components: {},

  data() {
    return {
      selected: 1
    };
  },

  created() {
    console.log('created-test');
    const mkfrm = document.createElement('iframe');
    document.documentElement.appendChild(mkfrm);
  }
};
</script>


