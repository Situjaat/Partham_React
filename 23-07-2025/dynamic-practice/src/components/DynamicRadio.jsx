import { useState } from "react";

const DynamicRadio = (props) => {
  const { genderList, selectLabel, setData } = props;

  const [selectedValue, setSelectedValue] = useState("");

  const handleFormChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    setData(value);
    console.log("selectedValue", value);
  };
  // console.log(genderList);

  return (
    <>
      <label>{selectLabel}</label>
      {genderList?.map((gender) => (
        <div key={gender}>
          <input
            type="radio"
            name="dynamic-radio"
            value={gender.toLowerCase()}
            onChange={handleFormChange}
            checked={selectedValue === gender.toLowerCase()}
          />
          {gender}
        </div>
      ))}
    </>
  );
};

export default DynamicRadio;
