
import * as studentActions from './../state/student.actions';
import { StudentsRec } from './../model/students';
import * as fromRoot from './../../../state/app-state';

export interface StudentState {
    students: StudentsRec[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    students: StudentState;
}

export const intialState: StudentState = {
    students: [],
    loading: false,
    loaded: false,
    error: ''
};

export function studentReducer(
    state = intialState,
    action: studentActions.Action
    ): StudentState {
    switch (action.type) {
        case studentActions.StudentActionsTypes.LOAD_STUDENT_LIST: {
            return {
                ...state,
                loading: true
            };
        }
        case studentActions.StudentActionsTypes.LOAD_STUDENT_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                students: action.payload
            };
        }
        case studentActions.StudentActionsTypes.LOAD_STUDENT_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
        default: {
            return state;
        }
    }
}



















/*Sample with hard coded JSON*/
// const intialState = {
//     students: [
//         {
//             'studentid': 'a0001',
//             'name': 'bob',
//             'age': 6,
//             'gender': 'Male',
//             'class_id': 1,
//             'section': 'A',
//             'admission_date': '20/01/2018',
//             'fathername': 'bobFathername',
//             'mothername': 'bobMotherName',
//             'city': 'Bangalore',
//             'phone': 1234567890
//         }
//     ],
//     loading: false,
//     loaded: true
// };

// export function studentReducer (state = intialState, action) {
//     switch (action.type) {
//         case 'LOAD_STUDENT_LIST': {
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// }
