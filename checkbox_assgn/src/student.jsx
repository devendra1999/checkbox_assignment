import React, {useEffect, useState} from "react";

const classData = [
  { 
    sectionData: [ 
        { name: "Ravi", rollNo: "1" },{ name: "Ram", rollNo: "2" },
        { name: "Lux", rollNo: "3" },{ name: "Bill", rollNo: "4" },
        { name: "Shell", rollNo: "5" }],
    sectionId: 'A'
  },
  { 
    sectionData: [ 
     { name: "Sonam", rollNo: "6" },{ name: "Saksham", rollNo: "7" },
     { name: "Sam", rollNo: "8" },{ name: "Samuel", rollNo: "9" },
     { name: "Pan", rollNo: "10" }],
     sectionId: 'B'
  },
  { 
  sectionData: [ 
   { name: "Robin", rollNo: "11" },{ name: "Peter", rollNo: "12" },
   { name: "Chris", rollNo: "13" },{ name: "Stewie", rollNo: "14" },
   { name: "Meg", rollNo: "15" }],
   sectionId: 'C'
  }
]



// const studentData = [ 
//   { name: "Student 1" },{ name: "Student 2" },{ name: "Student 3" },
//   { name: "Student 4" },{ name: "Student 5" }];

export default function App() {
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setSections(classData);
  }, []); 

  
  useEffect(() => {
    setStudents(sectionData);
  }, [setStudents]);

  const handlechangeStudent = (e) => {
    const { rollNo, checked } = e.target;
    
    if (rollNo === "allStudentSelected") {
      let tempStudent = students.map((student) => {  
        return { ...student, isChecked: checked };
      });
      setStudents(tempStudent);
    } else {
      let tempStudent = students.map((student) =>
        student.rollNo === rollNo ? { ...student, isChecked: checked } : student
      );
      setStudents(tempStudent);
    }
  };

  const handleChangeSection = (e) => {
    const { sectionId, checked } = e.target;
    
    if (sectionId === "allSectionSelected") {
      let tempSection = sections.map((section) => {  
        return { ...section, isChecked: checked };
      });
      setSections(tempSection);
    } else {
      let tempSection = sections.map((section) =>
        section.name === sectionId ? { ...section, isChecked: checked } : section
      );
      setSections(tempSection);
    }
  };

  return (
    <>
        <h3> <input
            type="checkbox"
            className="class-input"
            name="allSectionSelected"
    
             checked={!sections.some((section) => section?.isChecked !== true)}
             onChange={handleChangeSection}
            />Class 9th</h3>
        
        {/* {sections.map((section, index  ) => ( */}
        {sections.map((section, index  ) => (
          
        <div className="form-check" key={index}> 
        <h4>

          <input 
            type="checkbox"
            className="class-input" 
            name="allStudentsSelected"
            // name={section.sectionId}
            checked={section?.isChecked || false}

            // checked={!students.some((student) => student?.isChecked !== true)}
              onChange={handleChangeSection}
          />
          <label className="section-label">Section {section.sectionId}
          </label>  
        </h4>
          <>
          {sections.map((student, rollNo) => {
            return(
            <div className="form-check-students" key={x.rollNo}>
              <input
                type="checkbox"
                className="class-input" 
                name={student.name}
                checked={student?.isChecked || true}
                onChange={handlechangeStudent}
                
              />
              <label className="student-label">{student?.sectionData[rollNo]?.name}</label>
            </div>
          )
        })}
         </>
        </div>
        ))}   
    </>
  );
} 
