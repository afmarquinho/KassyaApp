import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    // setFormValues({...formValues, [name]: value });
  };

  const onReset = () => {
    setFormValues({});
  };

  return { formValues, onInputChange,onReset };
};

export default useForm;
