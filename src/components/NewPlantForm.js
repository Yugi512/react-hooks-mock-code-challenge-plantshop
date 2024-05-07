import React,{useState} from "react";

function NewPlantForm({onPlantSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })


  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    onPlantSubmit(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="name" value={formData.name} placeholder="Plant name" onChange={(e) => handleChange(e)}/>
        <input type="text" id="image" value={formData.image} placeholder="Image URL" onChange={(e) => handleChange(e)}/>
        <input type="number" id="price" value={formData.price} step="0.01" placeholder="Price" onChange={(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
