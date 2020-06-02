<template>
  <section class="total-balance">
    <h2 class="visually-hidden">Total balance</h2>
    <p class="total-balance__value" :class="classObj">Balance: {{ total }}</p>
  </section>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classObj() {
      return {
          green: this.total > 0,
          red: this.total < 0,
          gray: !this.total,
      };
    },
  },
};
</script>

<style scoped>
.total-balance {
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px 0;
}

.gray {
  color: #7c7171;
}

.red {
  color: #df4242;
}

.green {
  color: #3fa53f;
}
</style>
