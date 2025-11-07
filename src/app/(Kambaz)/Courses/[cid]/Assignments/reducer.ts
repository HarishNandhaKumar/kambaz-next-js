import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../../Database/"

const initialState = {
    assignments: assignments
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: uuidv4(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                avail_date: assignment.avail_date,
                avail_time: assignment.avail_time,
                due_date: assignment.due_date,
                due_time: assignment.due_time,
                course: assignment.course,
                avail_until_date: assignment.avail_until_date,
                avail_until_time: assignment.avail_until_time,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== assignmentId
            );
        },
        
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;