//CLIENT
const ALL_CLIENT     = '@client/ALL'
const ADD_CLIENT     = '@client/ADD'
const FILTER_CLIENT  = '@client/FILTER'
const UPDATE_CLIENT  = '@client/UPDATE'
const UNLINK_CLIENT  = '@client/UNLINK'

const REFRESH_CLIENT = '@client/REFRESH'
const RESET_CLIENT   = '@client/RESET'

//COLLABORATOR
const ALL_COLLABORATOR     = '@collaborator/ALL'
const ADD_COLLABORATOR     = '@collaborator/ADD'
const FILTER_COLLABORATOR  = '@collaborator/FILTER'
const UPDATE_COLLABORATOR  = '@collaborator/UPDATE'
const UNLINK_COLLABORATOR  = '@collaborator/UNLINK'
const ALL_SERVICES_COLLAB  = '@collaborator/SERVICES'

const REFRESH_COLLABORATOR = '@collaborator/REFRESH'
const RESET_COLLABORATOR   = '@collaborator/RESET'

//SALON

//SCHEDULE

//SCHEDULING
const ALL_SCHEDULING    = '@scheduling/ALL'
const FILTER_SCHEDULING = '@scheduling/FILTER'
const UPDATE_SCHEDULING = '@scheduling/UPDATE'

//SERVICE
const ALL_SERVICE     = '@service/ALL'
const ADD_SERVICE     = '@service/ADD'
const UPDATE_SERVICE  = '@service/UPDATE'
const UNLINK_SERVICE  = '@service/UNLINK'
const DELETEFILE_SERVICE  = '@service/DELETE_FILE'

const REFRESH_SERVICE = '@service/REFRESH'
const RESET_SERVICE   = '@service/RESET'


export {

    // API
    ALL_SCHEDULING,
    FILTER_SCHEDULING,
    UPDATE_SCHEDULING,

    ALL_CLIENT,
    ADD_CLIENT,
    FILTER_CLIENT,
    UPDATE_CLIENT,
    UNLINK_CLIENT,
    
    ALL_COLLABORATOR,
    ADD_COLLABORATOR,
    FILTER_COLLABORATOR,
    UPDATE_COLLABORATOR,
    UNLINK_COLLABORATOR,
    ALL_SERVICES_COLLAB,    

    ALL_SERVICE,
    ADD_SERVICE,
    UPDATE_SERVICE,
    UNLINK_SERVICE,  
    DELETEFILE_SERVICE,

    // STATE LOCAL
    REFRESH_CLIENT,
    RESET_CLIENT,
    
    REFRESH_COLLABORATOR,
    RESET_COLLABORATOR,

    REFRESH_SERVICE,
    RESET_SERVICE,
    
}
