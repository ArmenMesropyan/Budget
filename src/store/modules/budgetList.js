import Vue from "vue";

const budgetListStore = {
    namespaced: true,
    state: {
        list: JSON.parse(localStorage.getItem("list")) || {}
    },
    getters: {
        allList: ({ list }) => list
    },
    mutations: {
        ADD_ITEM({ list }, item) {
            Vue.set(list, item.id, item);
            localStorage.setItem("list", JSON.stringify(list));
        },
        REMOVE_ITEM({ list }, id) {
            Vue.delete(list, id);
            localStorage.setItem("list", JSON.stringify(list));
        }
    },
    actions: {
        addNewItem({ commit }, item) {
            const newItem = {
                ...item,
                id: String(Math.random()),
            };
            commit("ADD_ITEM", newItem);
        },
        removeItem({ commit }, id) {
            commit("REMOVE_ITEM", id);
        }
    }
}

export default budgetListStore;