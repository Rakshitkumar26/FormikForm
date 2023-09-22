import React from "react";
import { Field, ErrorMessage, FormikValues } from "formik";

interface AdditionalFieldsProps {
  namePrefix: string;
  initialValues: FormikValues;
}

const AdditionalFields: React.FC<AdditionalFieldsProps> = ({
  namePrefix,
  initialValues,
}) => {
  const initialSectionValues = initialValues[namePrefix] || {};

  return (
    <div className="mt-4 border p-4 rounded">
      <h3>Additional Fields</h3>
      <div className="mb-4">
        <label htmlFor={`${namePrefix}.dropdown`}>Dropdown</label>
        <Field
          as="select"
          id={`${namePrefix}.dropdown`}
          name={`${namePrefix}.dropdown`}
          className="block w-full p-2 border rounded-md"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          <option value="option6">Option 6</option>
        </Field>
        <ErrorMessage
          name={`${namePrefix}.dropdown`}
          component="div"
          className="text-red-600"
        />
      </div>

      <div className="mb-4 flex justify-between">
        <div>
          <label htmlFor={`${namePrefix}.percentage`}>Percentage</label>
          <Field
            type="number"
            id={`${namePrefix}.percentage`}
            name={`${namePrefix}.percentage`}
            className="block w-1/2 p-2 border rounded-md"
            placeholder="Percentage"
          />
          <ErrorMessage
            name={`${namePrefix}.percentage`}
            component="div"
            className="text-red-600"
          />
        </div>
        <div>
          <label htmlFor={`${namePrefix}.dollars`}>Dollars</label>
          <Field
            type="number"
            id={`${namePrefix}.dollars`}
            name={`${namePrefix}.dollars`}
            className="block w-1/2 p-2 border rounded-md"
            placeholder="Dollars"
          />
          <ErrorMessage
            name={`${namePrefix}.dollars`}
            component="div"
            className="text-red-600"
          />
        </div>
      </div>

      <div className="mb-4">
        <label>Radio</label>
        <div>
          <label className="mr-4">
            <Field
              type="radio"
              name={`${namePrefix}.radio`}
              value="yes"
              className="mr-2"
            />
            Yes
          </label>
          <label className="mr-4">
            <Field
              type="radio"
              name={`${namePrefix}.radio`}
              value="no"
              className="mr-2"
            />
            No
          </label>
        </div>
        <ErrorMessage
          name={`${namePrefix}.radio`}
          component="div"
          className="text-red-600"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`${namePrefix}.number`}>Number</label>
        <Field
          type="number"
          id={`${namePrefix}.number`}
          name={`${namePrefix}.number`}
          className="block w-full p-2 border rounded-md"
          placeholder="Number"
        />
        <ErrorMessage
          name={`${namePrefix}.number`}
          component="div"
          className="text-red-600"
        />
      </div>
    </div>
  );
};

export default AdditionalFields;
