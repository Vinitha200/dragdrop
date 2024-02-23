import React, { useState } from "react";
import { Button, Card } from "antd";
import "./home.css"
function HomeDrop({
  coreSkill,
  setCoreSkill,
  specialSkill,
  setSpecialSkill,
  creativeSkill,
  setCreativeSkill,
  title,
}) {
  const [homeData, setHomeData] = useState([]);
  const [background,setBackGround] = useState("")
  
  const onDragStart = (e,skill) => {
    console.log(e,skill)
    e.dataTransfer.setData("text/plain", skill);
    
   
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("dragging over");
  };

 
  const dragDropped = (e) => {
    const skill = e.dataTransfer.getData("text/plain");
    console.log("Dropped Skill:", skill);
   
    if (homeData.includes(skill)) {
     return
    }
  
    setHomeData((prevSkills) => [...prevSkills, skill]);
  
    const color = e.dataTransfer.getData("backgroundColor");
    setBackGround(color);
  
    const updatedSkills = coreSkill.filter((item) => item.skill !== skill);
    setCoreSkill(updatedSkills);
  
    const updatedSkills1 = specialSkill.filter((item) => item.skill !== skill);
    setSpecialSkill(updatedSkills1);
  
    const updatedSkills2 = creativeSkill.filter((item) => item.skill !== skill);
    setCreativeSkill(updatedSkills2);

    
  
    console.log("Dropped Skill:", skill);
  };
  


  const handleremove = (skillToRemove) => {
    const updatedSkills = homeData.filter(skill => skill !== skillToRemove);
    setHomeData(updatedSkills);
  };

  console.log("homeData",homeData)
  return (
    <>
      <div>{title}</div>
      <Card
      className="drop-card"
       onDragOver={(e) => draggingOver(e)}
       onDrop={(e) => dragDropped(e)}>
          {homeData?.map((item) => {
            return <>
              <div 
               draggable
                onDragStart={(e)=> onDragStart(e,item)}
              style={{
                background:`${background}`,
                margin:"2px",
                border:`1px solid ${background}`}}>{item}
                <Button className="remove-button" onClick={()=>handleremove(item)} size="small">x</Button>
            </div>
            </>
          })}
      </Card>
    </>
  );
}

export default HomeDrop;
