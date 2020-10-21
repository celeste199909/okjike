


export default  {
    namespaced: true,
    state: {
        isLogin: false,
        userInfo: {
            username: "未登录",
            slogan: "这个人很帅，什么都没有写"
        },
        allMyFollowing: []
    },
    mutations: {
        updateLoginStatus(state, payload){
            state.isLogin = payload.isLogin
        },
        updateUserInfo(state, payload){
            state.userInfo.username = payload.username;
            state.userInfo.slogan = payload.slogan;
        },
        getAllMyFollowing(state, payload){
            state.allMyFollowing = payload.allMyFollowing;
        }
    },
    actions: {

    }
}
