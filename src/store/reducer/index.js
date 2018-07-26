import getHomeDetail from './homeReducer'

function reducer(state={},action){
    return{
        getHomeDetail:getHomeDetail(state.getHomeDetail,action)
    }
}
export default reducer