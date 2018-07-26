import {HOME_REQUEST,HOME_RESPONSE,HOME_ERROR} from "../actions/homeAction";

function getHomeDetail(state ={
    isReq: false,
    data:{},
    errMsg:''
},action){
    switch (action.type){
        case HOME_REQUEST:
            return {
                ...state,
                isReq:true
            }
        case HOME_RESPONSE:
            console.log(action)
            let {data} = action
            console.log({data})
            return Object.assign({},state,{
                isReq:false,
                errMsg:'',
                data:data
            })
        case HOME_ERROR:
            return {
                ...state,
                isReq:false,
                errMsg:action.msg
            }
        default:
            return state
    }
}
export  default getHomeDetail