export default function validate(values) {
  let errors = {};
  if(!values.banner_name){
    errors.banner_name = 'Banner name is required';
  }

  if(values.no_of_slides<=0) {
    errors.no_of_slides = 'Please enter a valid slides count';
  }

  if(values.length===0) {
    errors.image = 'Banner image is required';
  }
  if(Object.keys(errors).length !== 0 && errors.constructor === Object){
    errors.message = 'Form validation failed';
  }

  return errors;
};