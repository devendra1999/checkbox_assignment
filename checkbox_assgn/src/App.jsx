import React, {useEffect, useState} from "react";

const studentData = [
  { name: "Student 1" },{ name: "Student 2" },{ name: "Student 3" },{ name: "Student 4" },{ name: "Student 5" }];


export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    
    if (name === "allSelected") {
      let tempStudent = students.map((student) => {  
        return { ...student, isChecked: checked };
      });
      setStudents(tempStudent);
    } else {
      let tempStudent = students.map((student) =>
        student.name === name ? { ...student, isChecked: checked } : student
      );
      setStudents(tempStudent);
    }
  };

  return (
    <div className="container">
        <h3> <input
            type="checkbox"
            className="class-input"
            name="allSelected"
            
            checked={!students.some((student) => student?.isChecked !== true)}
            onChange={handleChange}
          />Class 9th</h3>
        <h4><div className="form-check">
          <input 
            type="checkbox"
            className="section-input"
            name="allSelected"
            
            checked={!students.some((student) => student?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="section-label">Section A</label>
        </div></h4>
        
        {students.map((student, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="student-input"
              name={student.name}
              checked={student?.isChecked || false}
              onChange={handleChange}
            />
            <label className="student-label">{student.name}</label>
          </div>
        ))}
    </div>
  );
}
