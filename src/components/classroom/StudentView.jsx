import ParticipantList from './ParticipantList';


const StudentView = ({ classroom, studentName  }) => {
    return (
        <div className="student-view">
            <h2>Classroom: {classroom?.classroomId}</h2>
            <p>Welcome, {studentName}</p>
            <p>Status: {classroom?.isClassStarted ? 'Class in session' : 'Waiting for teacher'}</p>
            <ParticipantList participants={classroom?.participants || []} />
        </div>

    );
};

export default StudentView;
