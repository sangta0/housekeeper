/*
 设置 token
 */
const setToken = () => {
}

/*
 获取 token
 */
const getToken = () => {
    return localStorage.token
}

/*
 是否已登陆
 */
const isLogin = () => {
    return false
}

/*
 登陆
 */
const login = (code,account,pwd) => {
    if (localStorage.token) {
        this.onChange(true)
        return
    }
    pretendRequest(code, account,pwd, (res) => {
        if (res.authenticated) {
            localStorage.token = res.token
            this.onChange(true)
        } else {
            this.onChange(false)
        }
    })
}

/*
 登出
 */
const logout = (cb) => {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
}

const onChange=() => {}

/**
 * 已登录
 */
const login =()=>{
    return !!localStorage.token
}

function pretendRequest(code, account, pwd) {
    setTimeout(() => {
        if (account === 'admin' && pwd === 'password1') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({ authenticated: false })
        }
    }, 0)
}

export default {
    setToken,
    getToken,
    isLogin,
    login,
    logout,
    onChange
}