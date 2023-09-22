import React from "react";
import { Field, ErrorMessage, FormikValues } from "formik";


interface DropdownOptionsProps {
  initialValues: FormikValues;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const DropdownOptions: React.FC<DropdownOptionsProps> = ({
  initialValues,
  setFieldValue,
}) => {
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.selectedOptions).map(
      (option) => option.value
    );

    setFieldValue("dropdownOptions", selectedOptions);
  };

  return (
    <div className="mb-4">
      <label htmlFor="dropdownOptions">Dropdown Options</label>
      <Field
        as="select"
        id="dropdownOptions"
        name="dropdownOptions"
        className="block w-full p-2 border rounded-md"
        multiple={true}
        onChange={handleDropdownChange}
        value={initialValues.dropdownOptions}
      >
        <option value="dropdownOptions1">Option 1</option>
        <option value="dropdownOptions2">Option 2</option>
        <option value="dropdownOptions3">Option 3</option>
        <option value="dropdownOptions4">Option 4</option>
        <option value="dropdownOptions5">Option 5</option>
        <option value="dropdownOptions6">Option 6</option>
      </Field>
      <ErrorMessage
        name="dropdownOptions"
        component="div"
        className="text-red-600"
      />
    </div>
  );
};

export default DropdownOptions;
