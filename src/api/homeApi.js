import Axios from '../utils/Axios'

//获取首页详情
 const  getHomeDetail = async () => {
    return await  Axios.post('v2/sys/resources_adjust/get',
        {userid: "3FE65691ADDE084D8F6AECCDF770CEC97B8D", token: "2784b1c4-f14c-45e8-931b-f44f3f7d77e4"}

        )
}

export default {
     getHomeDetail
}