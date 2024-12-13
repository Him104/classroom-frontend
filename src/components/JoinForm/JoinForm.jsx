import { useState } from 'react';
import socket from '../../hooks/useSocket';

const JoinForm = ({ onJoin }) => {
    const [formData, setFormData] = useState({
        classroomId: '',
        name: '',
        role: 'Student'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('join_class', formData);
        onJoin(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Classroom ID"
                value={formData.classroomId}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    classroomId: e.target.value
                }))}
            />
            <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                }))}
            />
            <select
                value={formData.role}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    role: e.target.value
                }))}
            >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
            </select>
            <button type="submit">Join</button>
        </form>
    );
};

export default JoinForm;
