import { useState } from "react";

export default function Banks() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getLabelClass = (optionValue) => {
    if (selectedOption === optionValue) {
      return "border border-amber-500 rounded-lg";
    } else {
      return "";
    }
  };

  return (
    <div className="flex space-y-2 gap-12 mt-2 justify-center">
      <label className={`flex items-center ${getLabelClass("option1")}`}>
        <input
          type="radio"
          className="hidden"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <img
          src="https://www.khanbank.com/uploaded/media/2022/Oct/LogoText.svg?imwidth=640"
          alt="Khan bank"
          className="w-36 p-1"
        />
      </label>
      <label className={`flex items-center ${getLabelClass("option2")}`}>
        <input
          type="radio"
          className="hidden"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <img
          src="https://play-lh.googleusercontent.com/9tUBesUsI4UIkpgO1MPIMLFvhDa_4vZE75TrVAUHFA7a0bJ7IIgeyh2r1QXs9VlmXmkX"
          alt="Golomt Bank"
          className="w-14 p-1"
        />
      </label>
      <label className={`flex items-center ${getLabelClass("option3")}`}>
        <input
          type="radio"
          className="hidden"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <img
          src="https://www.xacbank.mn/img/xacbank_en.png"
          alt="XAC Bank"
          className="w-28 p-1"
        />
      </label>
      <label className={`flex items-center ${getLabelClass("option4")}`}>
        <input
          type="radio"
          className="hidden"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        <img
          src="https://tdbm.mn/bundles/tdbm/img/logo.png"
          alt="Golomt Bank"
          className="w-20 p-1"
        />
      </label>
    </div>
  );
}
