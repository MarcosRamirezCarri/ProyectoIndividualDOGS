function validationDog(input) {
    
    let errors = {};
    if(!input.name) {
      errors.name = 'You must put him a name'
    } else if(!/[A-Z]+$/i.test(input.name)) {
      errors.name = 'Can only contain letters'
    } else if(parseInt(input.name.length) >= 25) {
      errors.name= 'Must contain less than 25 characters'
    };

    //Altura max
    if(!input.height_max) {
      errors.height_max = "Max height required"
    } else if(parseInt(input.height_max) > 85) {
      errors.height_max = 'Must be less than 85CM' 
    } else if(!/^[0-9]+$/.test(input.height_max)) {
      errors.height_max = 'Can only contain numbers'
    };

    //altura min
  
    if(!input.height_min) {
      errors.height_min = 'Min height required'
    } else if(parseInt(input.height_min) >= parseInt(input.height_max)) {
      errors.height_min = 'Must be less than max'
    } else if(!/^[0-9]+$/.test(input.height_min)) {
      errors.height_min = 'Can only contain numbers'
    };
    // peso max

    if(!input.weight_max) {
        errors.weight_max = "Max weight required"
      } else if(parseInt(input.weight_max) > 90) {
        errors.weight_max = 'Must be less than 90KG'
      } else if(!/^[0-9]+$/.test(input.weight_max)) {
        errors.weight_max = 'Can only contain numbers'
      };
      // peso min
      if(!input.weight_min) {
        errors.weight_min = 'Min weight required'
      } else if(parseInt(input.weight_min) >= parseInt(input.weight_max)) {
        errors.weight_min= 'Must be less than max'
      };
    
    
      //life_span
      if(parseInt(input.life_span_max) > 20) {
        errors.life_span_max = 'Must be less than 20 years old'
      } else if(!/^[0-9]+$/.test(input.life_span_max)) {
        errors.life_span_max = 'Can only contain numbers'
      };
      
      if(parseInt(input.life_span_min) >= parseInt(input.life_span_max)) {
        errors.life_span_min = 'Must be less than max'
      } else if(!/^[0-9]+$/.test(input.life_span_min)) {
        errors.life_span_min = 'Can only contain numbers'
      };
    
      return errors;
};

module.exports={
    validationDog
}
