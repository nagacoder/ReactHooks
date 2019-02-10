
import { companyReducer } from "./module/companyReducer";
import {officeReducer} from './module/officeReducer'
export const initialState = {
  company: [
    
  ]
};

export const reducer = ({ companyData ,officeData}, action) => ({
  companyData: companyReducer(companyData, action),
  officeData: officeReducer(officeData, action)
});
