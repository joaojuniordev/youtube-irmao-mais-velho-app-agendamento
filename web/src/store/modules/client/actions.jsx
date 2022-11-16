import { 
    ALL_CLIENT,
    FILTER_CLIENT,
    UPDATE_CLIENT,
} from '../actionTypes'


const allClient = () =>{
    // console.log('ACTIONS allClient', )
    return {
        type:ALL_CLIENT 
    }
}

const filterClient = (payload) =>{
    // console.log('ACTIONS filterClient', payload,  )
    return {
        type:FILTER_CLIENT, 
        payload 
    }
}

const updateClient = (payload) =>{
    // console.log('ACTIONS updateClient', payload)
    return { 
        type:UPDATE_CLIENT, 
        payload,
    }
}


export {

    allClient,
    filterClient,
    updateClient,

}