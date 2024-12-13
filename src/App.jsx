import { useState, useEffect } from 'react';
import socket from './hooks/useSocket';
import TeacherView from './components/classroom/TeacherView';
import StudentView from './components/classroom/StudentView';
import JoinForm from './components/JoinForm/JoinForm';

function App() {
    const [classroom, setClassroom] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        socket.on('class_update', (updatedClassroom) => {
            setClassroom(updatedClassroom);
        });

        socket.on('join_error', (error) => {
            alert(error.message);
        });

        return () => {
            socket.off('class_update');
            socket.off('join_error');
        };
    }, []);

    const handleJoin = (joinData) => {
        setUser({
            name: joinData.name,
            role: joinData.role
        });
    };

    const handleClassroomUpdate = (updatedClassroom) => {
        setClassroom(updatedClassroom);
    };

    if (!user) {
        return <JoinForm onJoin={handleJoin} />;
    }

    return (
        <div className="app">
            {user.role === 'Teacher' ? (
                <TeacherView 
                    classroom={classroom} 
                    onClassroomUpdate={handleClassroomUpdate}
                />
            ) : (
                <StudentView 
                    classroom={classroom}
                    studentName={user.name}
                />
            )}
        </div>
    );
}

export default App;
