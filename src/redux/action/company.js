export const CREATE_COMPANY = 'CREATE_COMPANY'
export const DELETE_COMPANY = 'DELETE_COMPANY'

export function createCompany (data){
    return {
        type:CREATE_COMPANY,
        payload:data
    }
}
export function deleteCompany (id){
    return {
        type:DELETE_COMPANY,
        payload:id
    }
}