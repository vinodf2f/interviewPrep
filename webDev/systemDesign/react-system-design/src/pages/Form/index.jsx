import { useForm } from "./useForm";

export default () => {
  const onSubmit = ()=>{
    alert(JSON.stringify(fields))
  }
  const [fields, handleChange, handleSubmit] = useForm({intialFormData:{
    name: { value: "", error: "" },
    age: { value: "", error: "" },
  },onSubmit});


  return (
    <div>
      <div style={{ margin: 5 }}>
        <label htmlFor="name">Name: </label>
        
        <input id="name" name="name" onChange={handleChange} style={{border:fields.name.error ? "1 px solid red":"1 px solid black"}} />
       
      </div>
      <div style={{ margin: 5 }}>
        <label htmlFor="age">Age: </label>
        <input id="age" name="age" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
