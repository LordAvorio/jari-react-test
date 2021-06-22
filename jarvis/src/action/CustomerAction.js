import Axios from 'axios'

export const getCustomer = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get('http://localhost:2000/customer/')

            dispatch({
                type: 'GET_CUSTOMER',
                payload: res.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const  getCustomerById = (id) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`http://localhost:2000/customer/findcustomer/${id}`)

            dispatch({
                type: 'GET_CUSTOMER_BY_ID',
                payload: res.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const  deleteCustomer = (id) => {
    return async(dispatch) => {
        try{
            const res = await Axios.delete(`http://localhost:2000/customer/${id}`)

            const res2 = await Axios.get('http://localhost:2000/customer/')

            dispatch({
                type: 'GET_CUSTOMER',
                payload: res2.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const addCustomer = (dataCustomer, data) => {
    return async(dispatch) => {
        try{

            const option = {
                headers: {'Content-Type' : 'multipart/form-data'}
            }

            const res = await Axios.post('http://localhost:2000/customer/', dataCustomer)

            const res2 = await Axios.get('http://localhost:2000/customer/getmaxid')

            let max_id = parseInt(res2.data.id_max)

            const res3 = await Axios.post(`http://localhost:2000/customer/gambar/${max_id}`, data, option)

            const res4 = await Axios.get('http://localhost:2000/customer/')

           
            dispatch({
                type: 'GET_CUSTOMER',
                payload: res4.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}