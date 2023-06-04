import { nanoid } from "nanoid";

const InputGroup = ({
  label = "",
  type = "text",
  placeholder = "",
  required = false,
  value = "",
  onChange = (e) => {},
}) => {
  const id = nanoid();
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        defaultValue={value}
        type={type}
        id={id}
        className=" block w-full rounded-lg border bg-gray-50 p-2.5 focus:outline-amber-500 dark:bg-white   dark:text-black-900 dark:placeholder-gray-400 dark:focus:outline-gray-400  sm:text-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputGroup;
