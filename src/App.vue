<template>
  <div id="app">
    <Form @onFormSubmit="onFormSubmit" />
    <TotalBalance :total="getTotalBalance" />
    <BudgetList
      :list="allList"
      @deleteItem="onDeleteItem"
      @filterData="onFilterChange"
      :class="filter"
    />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import TotalBalance from "./components/TotalBalance.vue";
import BudgetList from "./components/BudgetList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    filter: "all",
  }),
  computed: {
    ...mapGetters("budgetList", ["allList"]),
    getTotalBalance() {
      return Object.values(this.allList).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    ...mapActions("budgetList", ["addNewItem","removeItem"]),
    onDeleteItem(id) {
      this.removeItem(id);
    },
    onFormSubmit(data) {
      this.addNewItem(data);
    },
    onFilterChange(type) {
      this.filter = type.toLowerCase();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card {
  max-width: 500px;
  margin: 0 auto;
}
.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}
</style>
