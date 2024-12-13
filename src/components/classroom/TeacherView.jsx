import { useEffect } from 'react';
import socket from '../../hooks/useSocket';
import ParticipantList from './ParticipantList';

const TeacherView = ({ classroom, onClassroomUpdate }) => {
    useEffect(() => {
        socket.on('class_update', onClassroomUpdate);
        return () => socket.off('class_update');
    }, [onClassroomUpdate]);

    // Add null check
    if (!classroom) {
        return <div>Loading classroom...</div>;
    }

    const handleStartClass = () => {
        const teacher = classroom.participants.find(p => p.role === 'Teacher');
        socket.emit('start_class', { 
            classroomId: classroom.classroomId,
            teacherName: teacher.name 
        });
    };

    const handleEndClass = () => {
        const teacher = classroom.participants.find(p => p.role === 'Teacher');
        socket.emit('end_class', { 
            classroomId: classroom.classroomId,
            teacherName: teacher.name 
        });
    };

    return (
        <div className="teacher-view">
            <h2>Classroom: {classroom.classroomId}</h2>
            <div className="controls">
                <button 
                    onClick={handleStartClass}
                    disabled={classroom.isClassStarted}
                >
                    Start Class
                </button>
                <button 
                    onClick={handleEndClass}
                    disabled={!classroom.isClassStarted}
                >
                    End Class
                </button>
            </div>
            <ParticipantList participants={classroom.participants} />
        </div>
    );
};

export default TeacherView;

