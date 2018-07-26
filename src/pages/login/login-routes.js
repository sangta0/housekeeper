import Login from './Login';
export default [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/logout',
        onEnter: (nextState, replace) => replace('/login'),
    },
];