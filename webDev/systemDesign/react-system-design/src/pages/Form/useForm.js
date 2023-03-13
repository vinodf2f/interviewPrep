import { useState } from "react";

export const useForm = ({ intialFormData, onSubmit }) => {
  const [fields, setFields] = useState(intialFormData);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newFields = { ...fields };
    newFields[name] = {
      ...newFields[name],
      value,
    };

    setFields(newFields);
  };
  const handleSubmit = () => {
    onSubmit();
  };

  return [fields, handleChange, handleSubmit];
};
