const state = {
    userInfo: {}, //用户信息
};

const mutations = {
    SET_USERINFO(state,{
        username,//用户姓名
        sex,//性别
        email,//邮箱
        idCardNumber,//用户唯一身份id
    }) {
        state.userInfo.username = username !== undefined ? username : state.userInfo.username;
        state.userInfo.sex = sex !== undefined ? sex : state.userInfo.sex;
        state.userInfo.email = email !== undefined ? email : state.userInfo.email;
        state.userInfo.idCardNumber = idCardNumber !== undefined ? idCardNumber : state.userInfo.idCardNumber;
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