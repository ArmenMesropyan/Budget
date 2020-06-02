<template>
  <li class="budget-list__item" :class="item.type.toLowerCase()">
    <h3 class="budget-list__title">{{ item.comment }}</h3>
    <div class="budget-list__wrap">
      <i :class="item.type === 'INCOME' ? 'el-icon-top' : 'el-icon-bottom'"></i>
      <span class="budget-list__value">{{ item.value }}</span>
      <ElButton
        type="danger"
        class="budget-list__btn"
        @click="deleteItem(item.id)"
        >Delete</ElButton
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list__item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.budget-list__title {
  font-weight: 300;
  font-size: 15px;
}

.budget-list__value {
  margin-right: 20px;
  font-weight: 700;
}

.el-icon-top {
  color: #3fa53f;
  margin-right: 5px;
}

.el-icon-bottom {
  color: #df4242;
  margin-right: 5px;
}
</style>
