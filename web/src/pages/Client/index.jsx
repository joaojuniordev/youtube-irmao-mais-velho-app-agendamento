import { 
    // useDispatch, 
    useSelector,
} from 'react-redux'

import useEffectDispatch from '../../hooks/UseEffect'
import { allClient } from '../../store/modules/client/actions'

import './Client.css'
import Table from '../../components/Table'
import TableOneRow from '../../components/TableOneRow'
import Modal from '../../components/Modal'

import clientTable from '../../data/componentTest/clientTable.json' 


const Client = (props)=>{
    const { style } = props
    // console.log('Client', clientTable)

    const clients  = useSelector((state)=>state.client.payload)
    console.log('clients[]', clients)
    
    useEffectDispatch(allClient)

    return(
        <div className="content clientContent h-100">
            <div className="clientHeader">
                <h1>Clientes</h1>
                <button className="btn btn-primary btn-lg">
                    <span className="mdi mdi-account-plus"></span>
                </button>
            </div>
            <div className="clientBody" style={style}>
                <Table data={clients} config={clientTable.config} onRowClick={onRowClick} actions={actions} style={{}}/>
            </div>
        </div>   
    )
}

const onRowClick = (rowData) => {
    console.log('Client ...',rowData)
    return 
}

const actions = (rowData) => {
    return(
        <div style={{display:"flex"}}>
            <a href={"/"} onClick={() => alert(`id:${rowData.id||rowData._id}`)} style={{color:'var(--rs-text-link-hover)', marginRight:"5px"}}>
                <span className="mdi mdi-account-edit" style={{fontSize:"21px"}}> </span>
            </a>
            <Modal content={ <TableOneRow objData={rowData}/> }/>
        </div>
        
    )
}


export default Client