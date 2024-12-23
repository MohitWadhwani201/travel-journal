import react from "react"
import Nav from "./components/Nav"
import Main from "./components/main"
import datacomponent from "./components/data"
import data from "./components/data"
export default function App(){
  const datas=datacomponent.map((data)=>{
    return (
      <Main
      key={data.id}
      {...data}
      />
    )
  })
  return (
    <div>    
    <Nav/>
    <main>{datas}</main>
     
    
   
  </div>
)
}