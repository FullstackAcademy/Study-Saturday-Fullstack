import React from 'react';
import { connect } from 'react-redux';
import { studentDetailsThunk } from '../store';

const StudentList = (props) => {
    return (
        <tbody>
            {
                props.students
                    .map(student =>
                        (
                            <tr key={student.id}>
                                <td>
                                    {student.fullName}
                                </td>
                                <td onClick={() => props.studentDetails(student)}>
                                    Details
                        </td>
                            </tr>
                        )
                    )
            }
        </tbody>
    )
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        studentDetails: (student) => dispatch(studentDetailsThunk(student)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
