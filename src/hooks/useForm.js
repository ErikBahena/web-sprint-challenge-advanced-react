import { useState } from "react";

const useForm = (initialValues, initShowSuccessMessage) => {
  const [values, setValues] = useState(initialValues);

  const [showSuccessMessage, setShowSuccessMessage] = useState(
    initShowSuccessMessage
  );

  const handleChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, showSuccessMessage, handleSubmit];
};

export default useForm;
