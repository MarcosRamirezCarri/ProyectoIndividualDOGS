import React from "react";
import Nav from "../nav/Nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postDog } from "../../Redux/actions";
import { getTemperament } from "../../Redux/actions";
import { validationDog } from "./ValidadorDedogs";
import { useState, useEffect } from "react";
import style from './DbDog.module.css';


function DbDog () {
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(getTemperament())
}, [dispatch]);

const temperamentos = useSelector(state => state.temperaments);

const [errors, setErrors] = useState({});

const [input, setInput] = useState({
  image:"",
  name: "",
  height_min: "",
  height_max: "",
  weight_min: "",
  weight_max: "",
  life_span_min: "",
  life_span_max: "",
  temperament: [],
});

const [selectNameState, setSelectNameState] = useState([])


function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
  setErrors(validationDog({
    ...input,
    [e.target.name]: e.target.value
  }))
};//Con este handle change voy validando todos los valores ingresados y seteandolos en el estado local antes de mandarlo al back

function handleSelect(e){

  if(input.temperament.includes(e.target.value)) return //Con esto pregunta si el temperamento a añadir ya esta en el perro a crear

  setInput({
    ...input,
    temperament: [...input.temperament, e.target.value]
  })//Seteo el temperamento del perro a crear

  const selectName = e.target.value;
  if(selectName === "default") return;
  setInput({...input , temperament:[...input.temperament, selectName]}) //Yo con este estado de selectName hago que los tempremanetos seleccionados se me muestren en el formulario 
  setSelectNameState([...selectNameState, temperamentos.find(e => e.id === parseInt(selectName))])
};

const handleDelete = (e) =>{
  setInput({...input, temperament : input.temperament.filter(t => t !== e.target.value)})
  setSelectNameState(selectNameState.filter(t => t.id !== parseInt(e.target.value)))
};//Con esta funcion puedo eliminar los temperamentos seleccionados con filter

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!errors.name && !errors.height_min && !errors.height_max &&!errors.weight_min && !errors.weight_max) {
    try {
      dispatch(postDog(input))
      setInput({
        image:"",
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperament: []
      }) //Por ultimo con este Try Catch hago el llamado a la accion de post para subir el perro creado, sin antes verificar los datos obligatorios 
      setSelectNameState([])
    } catch (error) {
      console.log(error)
    }
  } 
};

//
//https://img.freepik.com/fotos-premium/borzoi-blanco_870072-5360.jpg?w=826

return(                    
  <div>
  <Nav/>
  <div className={style.Form_container}>
  <h2 className={style.form_title}> CREATE A NEW <span className='form_title_naranja'>DOG!</span></h2>
  <p className={style.datos_obligatorios}>Enter the data</p>

  <form className={style.form} action="" onSubmit={handleSubmit}>
    
    <div>
      <div>
        <label>Name *</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Example: firulais' onChange={handleChange} name="name" value={input.name}/>
        </div>
        {errors.name && (<span className={style.dato_incorrecto}>{errors.name}</span>)}
      </div>
    </div>

   
    <div>
      <label>Image</label>
      <div className= {style.div_input}>
        <input className={style.form_input} placeholder='Image url' onChange={handleChange} name="image" value={input.image}/>
      </div>
    </div>

   
    <div className={style.div_inputs_dobles}>
      <div className={style.max}>
        <label>Height</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Max' onChange={handleChange} name="height_max" value={input.height_max}/>
          <span className={style.unidad}>CM</span>
        </div>
        {errors.height_max && (<span className={style.dato_incorrecto}>{errors.height_max}</span>)}
      </div>

      <div className={style.min}>
        <label className={style.label_min}>Height</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Min' onChange={handleChange} name="height_min" value={input.height_min}/>
          <span className={style.unidad}>CM</span>
        </div>
        {errors.height_min && (<span className={style.dato_incorrecto}>{errors.height_min}</span>)}
      </div>
    </div>

   
    <div className={style.div_inputs_dobles}>
      <div className={style.max}>
        <label>Weight</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Max' onChange={handleChange} name="weight_max" value={input.weight_max}/>
          <span className={style.unidad}>KG</span>
        </div>
        {errors.weight_max && (<span className={style.dato_incorrecto}>{errors.weight_max}</span>)}
      </div>

      <div className={style.min}>
        <label className={style.label_min}>Weight</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Min' onChange={handleChange} name="weight_min" value={input.weight_min}/>
          <span className={style.unidad}>KG</span>
        </div>
        {errors.weight_min && (<span className={style.dato_incorrecto}>{errors.weight_min}</span>)}
      </div>
    </div>

  
    <div className={style.div_inputs_dobles}>
      <div className={style.max}>
        <label>Life Span</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Max' onChange={handleChange} name="life_span_max" value={input.life_span_max}/>
          <span className={style.unidad}>Years</span>
        </div>
        {errors.life_span_max && (<span className={style.dato_incorrecto}>{errors.life_span_max}</span>)}
      </div>

      <div className={style.min}>
        <label className={style.label_min}>Weight</label>
        <div className={style.div_input}>
          <input className={style.form_input} placeholder='Min' onChange={handleChange} name="life_span_min" value={input.life_span_min}/>
          <span className={style.unidad}>Years</span>
        </div>
        {errors.life_span_min && (<span className={style.dato_incorrecto}>{errors.life_span_min}</span>)}
      </div>
    </div>
    
  
    <div>
      <label>Temperaments</label>
      <div className={style.div_input}>
        <select className={style.select_form} name="temperamentos" onChange={handleSelect}>
          {temperamentos.map((t, i) => {
            return(
              <option className={style.option_form} key={i} value={t.id}>{t.name}</option>
            )
          })}
        </select>
      </div>
      <div className={style.div_form_final_temps}>
        <ul className={style.ul_temp}>
          {selectNameState.map((e, i) => {
            return(
            <li className={style.li_temp} key={i}>
              {e.name}
              <button className={style.delete_temp} type='button' value={e.id} onClick={handleDelete}>x</button>
            </li>
            )
          })}
        </ul>
      </div>
    </div>

    <input className={style.submit} type="submit" value="Create"/>

  </form>
</div>
</div>
)
}
export default DbDog;



