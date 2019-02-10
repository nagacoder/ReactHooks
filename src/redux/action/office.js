export const CREATE_OFFICE = 'CREATE_OFFICE'
export const DELETE_OFFICE = 'DELETE_OFFICE'

export function createOffice (data){
    return {
        type:CREATE_OFFICE,
        payload:data
    }
}
export function deleteOffice (id){
    return {
        type:DELETE_OFFICE,
        payload:id
    }
}