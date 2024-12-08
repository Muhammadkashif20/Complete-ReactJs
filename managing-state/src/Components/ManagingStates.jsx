import React , {useState} from "react";

const ManageStates = () => {
    const [name,setName]=useState("Muhammad")
    const [color,setColor]=useState("orange")
    // states for sale car:
    const [brand,setBrand]=useState("Toyota")
    const [model,setModel]=useState("Toyota Land Cruiser")
    const [year,setYear]=useState(2023)
    // states for sale car with object easy way:
        const [car,setCar]=useState({
            brand:"Toyota",
            model:"Toyota Land Cruiser",
            year:2023,
            color:"white"
        })
        const ubdatedColor=()=>{
            setCar(CarState=>{
                return{...CarState,color:'Black'}
            })
        }   
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5">Managing Hook UseState with {name}</h1>
      <p className="text-center text-gray-500  my-5">UseState Hook with Changing Color {color}</p>
      <div className="flex items-center justify-center gap-5">
      <button
            className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105`}
            style={{backgroundColor:color}}
            onClick={() => setColor("pink")}>
                {color}
            </button>
            <button
                className="px-6 py-2  text-white font-semibold rounded-lg shadow-md  transition-transform transform hover:scale-105"
                style={{ backgroundColor:name==="Kashif"?"teal":"green"}}
                onClick={() => setName("Kashif")}
                >
                {name}
            </button>
                    </div>
                    
                    {/* <div className="flex flex-col my-5 items-center justify-center"> 
                    <h1 className="font-bold my-2 text-2xl">My {brand}</h1>  
                    <p className="text-gray-500">
                It is a {color} {model} from {year}.
      </p>                    
                    </div> */}
                    {/* simple way to work states for our example  */}
                    <div className="flex flex-col my-5 items-center justify-center"> 
                    <h1 className="font-bold my-2 text-2xl">My {car.brand}</h1>  
                    <p className="text-gray-500 mb-2">
                It is a {car.color} {car.model} from {car.year}.
      </p>                
      <button 
      className={`px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105`}
      onClick={ubdatedColor}
    >   
    Car Color {car.color}
        </button>    
                    </div>
    </div>
  );
};
export default ManageStates;
