import React, {useEffect, useState} from "react";

// const studentData = [
//   { name: "Student 1" },{ name: "Student 2" },{ name: "Student 3" },{ name: "Student 4" },{ name: "Student 5" }];

const classData = [
  { 
    sectionData: [ 
        { name: "Ravi", rollNo: "1" },{ name: "Ram", rollNo: "2" },
        { name: "Lux", rollNo: "3" },{ name: "Bill", rollNo: "4" },
        { name: "Shell", rollNo: "5" }],
    sectionId: 1
  },
  { 
    sectionData: [ 
     { name: "Sonam", rollNo: "6" },{ name: "Saksham", rollNo: "7" },
     { name: "Sam", rollNo: "8" },{ name: "Samuel", rollNo: "9" },
     { name: "Pan", rollNo: "10" }],
     sectionId: 2
  },
  { 
  sectionData: [ 
   { name: "Robin", rollNo: "11" },{ name: "Peter", rollNo: "12" },
   { name: "Chris", rollNo: "13" },{ name: "Stewie", rollNo: "14" },
   { name: "Meg", rollNo: "15" }],
   sectionId: 3
  }
]

export default function App() {
  const [sections, setSections] = useState([]);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setSections(classData);
  }, []);

  useEffect(() => {
    setStudents(classData);
  }, []);


  const handleChange = (e) => {
    const { rollNo, checked } = e.target;
    
    if (rollNo === "allSelected") {
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
        section.sectionId === sectionId ? { ...section, isChecked: checked } : section
      );
      setSections(tempSection);
    }
  };

  return (
    <div className="container">
        <h3> <input
            type="checkbox"
            className="class-input"
            sectionId="allSectionSelected"
            
            checked={!sections.some((section) => section?.isChecked !== true)}
            onChange={handleChangeSection}
          />Class 9th</h3>
                  
        {sections.map((section, sectionId  ) => ( 
          
        <>
        <h4><div className="form-check" key={sectionId} >
          <input 
            type="checkbox"
            className="section-input"
            sectionId="allSelected"
            checked={(section?.isChecked || false) || !students.some((student) => student?.isChecked !== true)}

            // checked={!students.some((student) => student?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="section-label">Section {section.sectionId}</label>
        </div></h4>
        
        {students.map((student, rollNo) => {
          return(
          <div className="form-check" key={rollNo}>
            <input
              type="checkbox"
              className="student-input"
              name={student.sectionData[sectionId].name}
              checked={student?.isChecked || false}
              onChange={handleChange}
            />
            <label className="student-label">{student?.sectionData[sectionId]?.name }</label>
          </div>
          )
}
        )}
        </>
        ))}
    </div>
  );
}
