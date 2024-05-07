import React,{useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, onPlantSubmit}) {
  const [input, setInput] = useState("")

  const search = plantList.filter((plant) => {
    const lowerCase = plant.name.toLowerCase()
    if(input === "") return true;
    if(lowerCase.includes(input.toLowerCase())){
      return plant
    }
  })

  return (
    <main>
      <NewPlantForm onPlantSubmit={onPlantSubmit}/>
      <Search input={input} setInput={setInput}/>
      <PlantList search={search} />
    </main>
  );
}

export default PlantPage;
