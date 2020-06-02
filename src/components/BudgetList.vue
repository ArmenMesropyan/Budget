<template>
  <section class="budget-list card">
    <h2 class="visually-hidden">Budget list</h2>
    <template v-if="!isEmpty">
      <ElCard :header="header">
        <ElSelect
          placeholder="Choose type..."
          class="main-form__select"
          v-model="filterValue"
          @change="filterData"
        >
          <ElOption label="ALL" value="ALL"></ElOption>
          <ElOption label="INCOME" value="INCOME"></ElOption>
          <ElOption label="OUTCOME" value="OUTCOME"></ElOption>
        </ElSelect>
        <ul class="budget-list__list">
          <BudgetListItem
            @deleteItem="deleteItem"
            v-for="(item, props) in list"
            :key="props"
            :item="item"
          />
        </ul>
      </ElCard>
    </template>
    <ElAlert :title="emptyMsg" type="info" :closable="false" v-else></ElAlert>
  </section>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    emptyMsg: "Empty List",
    filterValue: "All",
  }),
  methods: {
    deleteItem(id) {
      const confirmDelete = confirm("Do you really want to delete?");
      if (!confirmDelete) return;
      this.$emit("deleteItem", id);
    },
    filterData() {
      this.$emit("filterData", this.filterValue);
    },
  },
  computed: {
    isEmpty() {
      return !Object.values(this.list).length;
    },
  },
};
</script>

<style scoped>
ul,
.budget-list__item {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
