const state = {
    showHeader: true, //是否展示头部组件
};

const mutations = {
    SET_SHOWHEADER(state, showHeader) {
        state.showHeader = showHeader;
    }
};

const getters = {};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}