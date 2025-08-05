import { useState } from "react";
import DynamicSelect from "./DynamicSelect";
import DynamicRadio from "./DynamicRadio";
import Wraper from "./childrenProp";


const INITIAL_SUBJECT_LIST = ["MATHS", "HINDI", "ENGLISH", "SOCIAL"];
const INITIAL_HOBBIES_LIST = ["GYM", "MUSIC", "RUNNING", "DANCE"];
const INITIAL_GENDER_LIST = ["MALE", "FEMALE", "OTHERS"]
const Form = () => {
     const [subjects, setSubjects] = useState(INITIAL_SUBJECT_LIST);
     const [hobbies, setHobbies] = useState(INITIAL_HOBBIES_LIST);
     const [gender, setGender] = useState(INITIAL_GENDER_LIST)

     const [formData, setFormData] = useState({
        subject:"",
        hobby:"",
        gender:""
     })
     console.log("formData", formData);
     

 
    return (
        <>
 <Wraper>
      <DynamicSelect
      currentValue = {formData.subject}
      optionsList={subjects}
      selectLabel={"Subject"}
      setData={(updatedSubject) => 
        setFormData({...formData, subject: updatedSubject})
      }
      />
      <DynamicSelect
       currentValue = {formData.hobby}
      optionsList={hobbies}
      selectLabel={"Hobbies"}
      setData={(updatedHobby) => 
        setFormData({...formData, hobby: updatedHobby})
      }
      />

      <DynamicRadio genderList ={gender}
      selectLabel={"Gender"}
      setData={(updatedGender) => 
        setFormData({...formData, gender: updatedGender})
        
      }
      />
      </Wraper>
        </>
    )
}

export default Form;