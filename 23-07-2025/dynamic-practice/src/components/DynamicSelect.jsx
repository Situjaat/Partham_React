import { useState } from "react";

const DynamicSelect = (props) => {
  const { optionsList, selectLabel, setData, currentValue } = props;

  const [selectedValue, setSeletedValue] = useState(currentValue);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSeletedValue(value);
    setData(value);
    console.log("selectedValue", selectedValue);
  };
  // console.log(optionsList);

  return (
    <>
      <div>
        <label> {selectLabel}</label>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option key="" value="">
            Select
          </option>
          {optionsList?.map((subject) => (
            <option key={subject} value={subject.toLowerCase()}>
              {subject}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DynamicSelect;
