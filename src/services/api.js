import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const classroomService = {
    createClassroom: (data) => axios.post(`${API_URL}/classroom`, data),
    joinClassroom: (data) => axios.post(`${API_URL}/classroom/join`, data),
    startClass: (classroomId, teacherName) => 
        axios.post(`${API_URL}/classroom/${classroomId}/start`, { teacherName }),
    endClass: (classroomId, teacherName) => 
        axios.post(`${API_URL}/classroom/${classroomId}/end`, { teacherName }),
    getClassroom: (classroomId) => 
        axios.get(`${API_URL}/classroom/${classroomId}`)
};
