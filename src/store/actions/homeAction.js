import HomeApi from '../../api/homeApi'
export const HOME_REQUEST = 'HOME_REQUEST';
export const HOME_RESPONSE = 'HOME_RESPONSE';
export const HOME_ERROR = 'HOME_ERROR';

export const homeRequest = ()=>({
    type:HOME_REQUEST
})
export  const homeResponse = (data)=> ({
    type:HOME_RESPONSE,
    data:data
})
export const homeError = (msg) => ({
    type:HOME_ERROR,
    payload:msg
})

export function getHomeDetail() {
    return async  (dispatch) => {
        try{
            dispatch(homeRequest())
            const res = await HomeApi.getHomeDetail()
            console.log(res)
            const data = res.result
            console.log(data)
            return dispatch(homeResponse(data))
        }catch (err){
            console.log("homeDetail is error")
            console.log(err)
            return dispatch(homeError(err.response))
        }
    }
}