"use client";
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import AdditionalFields from "../components/AdditionalFields"; 
import formData from "./formData.json";

const Login = () => {
  const initialValues = formData;

  // Handle form submission here
  const onSubmit = (values: any) => {
    console.log(values);
    localStorage.setItem("name", values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
            <h2 className="text-2xl mb-4">Dynamic Form</h2>
            <div className="mb-4">
              <label>Choose Role</label>
              <div>
                <label className="mr-4">
                  <Field
                    type="radio"
                    name="role"
                    value="admin"
                    className="mr-2"
                  />
                  Admin
                </label>
                <label className="mr-4">
                  <Field
                    type="radio"
                    name="role"
                    value="user"
                    className="mr-2"
                  />
                  User
                </label>
                <label className="mr-4">
                  <Field
                    type="radio"
                    name="role"
                    value="guest"
                    className="mr-2"
                  />
                  Guest
                </label>
              </div>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-600"
              />
            </div>
            {formik.values.role === "guest" && (
              <div className="mb-4">
                <label>Guest Options</label>
                <div>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="guestOptions.option1"
                      className="mr-2"
                    />
                    Option 1
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="guestOptions.option2"
                      className="mr-2"
                    />
                    Option 2
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="guestOptions.option3"
                      className="mr-2"
                    />
                    Option 3
                  </label>
                </div>
                {formik.values.guestOptions.option1 && (
                  <AdditionalFields
                    namePrefix="additionalFields.option1"
                    initialValues={formik.initialValues}
                  />
                )}
                {formik.values.guestOptions.option2 && (
                  <AdditionalFields
                    namePrefix="additionalFields.option2"
                    initialValues={formik.initialValues}
                  />
                )}
                {formik.values.guestOptions.option3 && (
                  <AdditionalFields
                    namePrefix="additionalFields.option3"
                    initialValues={formik.initialValues}
                  />
                )}
              </div>
            )}
            <div className="mb-4">
              {/* <h3>Drop Down Options</h3> */}
              <div className="mb-4">
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
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
                      <option value="">Select an option</option>
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
                      onClick={() => setIsModalOpen(false)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Close
                    </button>
                  </div>
                </Modal>
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions1"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 1</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions1.newDropDown1">
                          Percentage
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions1.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions1.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions1.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions1.newDropDown2">
                          Amount
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions1.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions1.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions1.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen1(true)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Add More
                    </button>
                  </div>
                )}
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions2"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 2</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions2.newDropDown1">
                          Percentage2
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions2.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions2.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions2.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions2.newDropDown2">
                          Amount2
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions2.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions2.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions2.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <button
                        onClick={() => setIsModalOpen1(true)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                      >
                        Add More
                      </button>
                    </div>
                  </div>
                )}
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions3"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 3</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions3.newDropDown1">
                          Percentage
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions3.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions3.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions3.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions3.newDropDown2">
                          Amount
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions3.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions3.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions3.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen1(true)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Add More
                    </button>
                  </div>
                )}
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions4"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 4</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions4.newDropDown1">
                          Percentage
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions4.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions4.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions4.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions4.newDropDown2">
                          Amount
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions4.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions4.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions4.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen1(true)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Add More
                    </button>
                  </div>
                )}
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions5"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 5</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions5.newDropDown1">
                          Percentage
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions5.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions5.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions5.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions5.newDropDown2">
                          Amount
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions5.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions5.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions5.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen1(true)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Add More
                    </button>
                  </div>
                )}
                {formik.values.dropdownOptions.find(
                  (e: any) => e == "dropdownOptions6"
                ) && (
                  <div className="mt-4 border p-4 rounded">
                    <h3 className="mb-4">Drop-down Option 6</h3>
                    <div className="mb-4 flex justify-between">
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions6.newDropDown1">
                          Percentage
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions6.newDropDown1"
                          name="dropdownSelectedOptions.dropdownOptions6.newDropDown1"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions6.newDropDown1"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="dropdownSelectedOptions.dropdownOptions6.newDropDown2">
                          Amount
                        </label>
                        <Field
                          type="number"
                          id="dropdownSelectedOptions.dropdownOptions6.newDropDown2"
                          name="dropdownSelectedOptions.dropdownOptions6.newDropDown2"
                          className="block w-1/2 p-2 border rounded-md"
                          placeholder="Percentage"
                        />
                        <ErrorMessage
                          name="dropdownSelectedOptions.dropdownOptions6.newDropDown2"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen1(true)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                      Add More
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
              >
                Open Dropdown Options
              </button>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <Modal
              isOpen={isModalOpen1}
              onRequestClose={() => setIsModalOpen1(false)}
              contentLabel="Dropdown Options Modal"
            >
              <label htmlFor="dropdownOptions">Drop Down Option</label>
              <Field
                as="select"
                id="dropdownOptions"
                name="dropdownOptions"
                className="block w-full p-2 border rounded-md"
                multiple={true}
              >
                <option value="">Select an option</option>
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
                onClick={() => setIsModalOpen1(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
              <div>
                <button
                  onClick={() => setIsModalOpen1(false)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
