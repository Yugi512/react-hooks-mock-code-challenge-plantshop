import React,{useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]) 


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => {
      setPlantList(data)
    })
  },[])

  function handlePlantFormSubmit(newPlant){
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
    .then((r) => r.json())
    .then((newitem) => setPlantList([...plantList,newitem]))

  }
  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} onPlantSubmit={handlePlantFormSubmit}/>
    </div>
  );
}

export default App;
