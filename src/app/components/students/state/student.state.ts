import { StudentsRec } from '../model/students';

export interface IStudentState {
    students: StudentsRec[];
    selectedStudents: StudentsRec;
}

export const initialStudentState: IStudentState = {
    students: null,
    selectedStudents: null
};
