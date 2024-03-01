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
  homeData, 
  setHomeData
  
}) {
  //const [] = useState([]);
  const [background, setBackGround] = useState("")

  const onDragStart = (e, skill) => {
    console.log("homedrag",e, skill)
    e.dataTransfer.setData("text/plain", JSON.stringify(skill));
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("dragging over");
  };


  const dragDropped = (e) => {
    const skill_str = e.dataTransfer.getData("text/plain");
    const skill = JSON.parse(skill_str);
    console.log("Dropped Skill:", skill);

    

    setHomeData((prevSkills) => [...prevSkills, skill]);

    const color = e.dataTransfer.getData("backgroundColor");
    setBackGround(color);

    const updatedSkills = coreSkill.filter((item) => item.skill !== skill?.skill);
    setCoreSkill(updatedSkills);

    const updatedSkills1 = specialSkill.filter((item) => item.skill !== skill?.skill);
    setSpecialSkill(updatedSkills1);

    const updatedSkills2 = creativeSkill.filter((item) => item.skill !== skill?.skill);
    setCreativeSkill(updatedSkills2);

    console.log("Dropped Skill:", skill);
  };



  const handleremove = (skillToRemove) => {
    const updatedSkills = homeData.filter(skill => skill !== skillToRemove);
    setHomeData(updatedSkills);
  };

  console.log("homeData", homeData)
  console.log("coreSkill",coreSkill)
  return (
    <>
      <div>{title}</div>
      <Card
        className="drop-card"
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e) => dragDropped(e)}>
        {homeData?.map((item) => {
          console.log("indivual", item)
          return <>
            <div
              draggable
              onDragStart={(e) => onDragStart(e, item,true)}
              style={{
                background: `${item?.color}`,
                margin: "2px",
                border: `1px solid ${background}`
              }}>{item?.skill}
              <Button className="remove-button" onClick={() => handleremove(item)} size="small">x</Button>
            </div>
          </>
        })}
      </Card>
    </>
  );
}

export default HomeDrop;
