


export default  {
    namespaced: true,
    state: {
        userInfo: {
            username: "未登录",
            nickname: "未登录"
        }
    },
    mutations: {
        updateUserInfo(state, payload){
            state.userInfo.username = payload.username;
            state.userInfo.nickname = payload.nickname;
        }
    },
    actions: {

    }
}
