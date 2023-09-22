import React from "react";
import Modal from "react-modal";
import { Field, ErrorMessage } from "formik";

interface AddMoreModalProps {
  isOpen: boolean;
  closeModal: () => void;
  initialValues: FormikValues;
}

const AddMoreModal: React.FC<AddMoreModalProps> = ({
  isOpen,
  closeModal,
  initialValues,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Dropdown Options Modal"
      >
        <div>
          <label htmlFor="dropdownOptions">Drop Down Option</label>
          <Field
            as="select"
            id="dropdownOptions"
            name="dropdownOptions"
            className="block w-full p-2 border rounded-md"
            multiple={true}
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
          <button
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddMoreModal;
