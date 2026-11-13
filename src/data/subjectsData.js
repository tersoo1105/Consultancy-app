const scienceCombo = ["Biology", "Chemistry", "Physics"]; 
const engineeringCombo = ["Mathematics", "Physics", "Chemistry"];
const socialCombo = ["Mathematics", "Economics", "Any other Social Science subject"];
const subjectCombinations = [   
  { course: "Medicine and Surgery", subjects: scienceCombo },
  { course: "Dentistry", subjects: scienceCombo },
  { course: "Pharmacy", subjects: scienceCombo },
  { course: "Nursing / Nursing Science", subjects: scienceCombo },
  { course: "Medical Laboratory Science", subjects: scienceCombo },
  { course: "Physiotherapy", subjects: scienceCombo },
  { course: "Radiography", subjects: scienceCombo },
  { course: "Anatomy", subjects: scienceCombo },
  { course: "Physiology", subjects: scienceCombo },
  { course: "Veterinary Medicine", subjects: scienceCombo },
  { course: "Biochemistry", subjects: scienceCombo },
  { course: "Microbiology", subjects: scienceCombo },
  { course: "Civil Engineering", subjects: engineeringCombo },
  { course: "Mechanical Engineering", subjects: engineeringCombo },
  { course: "Electrical Engineering", subjects: engineeringCombo },
  { course: "Chemical Engineering", subjects: engineeringCombo },   { course: "Computer Engineering", subjects: engineeringCombo },
  {     course: "Computer Science",     subjects: ["Mathematics", "Physics", "Chemistry or Biology"],   },
  { course: "Accounting", subjects: socialCombo },
  { course: "Business Administration", subjects: socialCombo },
  {     course: "Law",     subjects: [       "Literature in English",
      "Government",
      "Any other Arts or Social Science subject",
    ],
  },   {     course: "Mass Communication",     subjects: [       "Literature in English",
      "Government or Economics",
      "Any other Arts or Social Science subject",
    ],
  }, ];

  export default subjectCombinations;
