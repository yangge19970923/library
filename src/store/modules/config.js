const state = {
    showHeader: true, //是否展示头部组件
    mobileFlag: true, //判断是移动端打开还是pc端,true是pc端，false移动端
};

const mutations = {
    SET_SHOWHEADER(state, showHeader) {
        state.showHeader = showHeader;
    },
    SET_MOBILEFLAG(state, mobileFlag) {
        state.mobileFlag = mobileFlag;
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