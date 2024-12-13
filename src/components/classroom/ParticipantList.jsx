import React from 'react';

const ParticipantList = ({ participants }) => {
    const teachers = participants.filter(p => p.role === 'Teacher' && p.active);
    const students = participants.filter(p => p.role === 'Student' && p.active);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Teachers</h3>
                <div className="bg-white shadow rounded-lg p-4">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="flex items-center space-x-3 py-2">
                            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium">
                                    {teacher.name[0].toUpperCase()}
                                </span>
                            </div>
                            <span className="text-gray-900">{teacher.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Students</h3>
                <div className="bg-white shadow rounded-lg p-4">
                    {students.map((student, index) => (
                        <div key={index} className="flex items-center space-x-3 py-2">
                            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium">
                                    {student.name[0].toUpperCase()}
                                </span>
                            </div>
                            <span className="text-gray-900">{student.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParticipantList;
