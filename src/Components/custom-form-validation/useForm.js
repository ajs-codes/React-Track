import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    grid_name: "",
    status:1,
    image:[]
  }); 

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(Object.keys(errors));
    console.log(isSubmitting);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const addGrid = () => {
    setValues(values=>({...values,image:[...values.image,{title:'',column:1,link:'',image:{}}]}))
  }
  const deleteGrid = (data,index) => {
    let result = {...values};
    let image = result.image;
    image = image.slice(0, index).concat(image.slice(index + 1, image.length));
    result.image = image;
    setValues(result);
  }
  const hangleChangeGrid = (event,index) => {
    event.persist();
    let result = {...values};
    result.image[index] = {...result.image[index],[event.target.name]:event.target.value};
    setValues(result);

  }
  const setColumnValue = (event,index) =>{
    let result = {...values};
    result.image[index] = {...result.image[index],column:event.target.value};
    setValues(result);
  }
  const uploadGridImage = (event,index) => {
    let file = event.target.files[0];
    const body = new FormData();
    body.append('image', file);
    axios({
      method: 'post',
      url: '/upload',
      data: body,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          let result = {...values};
          result.image[index] = {...result.image[index],image:response.data};
          setValues(result);
      })
      .catch(function (response) {
          //handle error
      }); 
  }

  console.log(values);
  return {
    handleChange,
    handleSubmit,
    deleteGrid,
    addGrid,
    hangleChangeGrid,
    setValues,
    setColumnValue,
    uploadGridImage,
    values,
    errors,
  }
};

export default useForm;