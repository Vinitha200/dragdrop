import React, { useState } from "react";
import { Card } from "antd";
import "./core.css";
function Dragcore({ coreSkill, setCoreSkill, backgroundColor, title }) {

  console.log("coreSkill", coreSkill)

  const onDragStart = (e, skill, skillColor, index,id) => {

    console.log("skillColor", skillColor)
    const data = {
      skill: skill,
      color: skillColor
    };
    e.dataTransfer.setData("text/plain", JSON.stringify(data));
    e.dataTransfer.setData("text/index", index);
    e.dataTransfer.setData("backgroundColor", backgroundColor);

  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("text/index");
    
    const newItems = [...coreSkill];
    const draggedItem = newItems[dragIndex];
    console.log("draggedItem",draggedItem)
   
    // Removing the item from its previous position
    newItems.splice(dragIndex, 1);

    // Adding the item to the new position
    newItems.splice(dropIndex, 0, draggedItem);

    setCoreSkill(newItems);
  };
  return (
    <>
      <div className="core-title">{title}</div>
      <div className="core-main-div">
        <Card bodyStyle={{ padding: "4px" }}>
          <div className="core-items-container">
            {coreSkill?.map((item, index) => {
              return (
                <>
                  <div
                    // key={item.id}
                    draggable="true"
                    className="core-item"
                    style={{ background: `${backgroundColor}` }}
                    onDragStart={(e) => onDragStart(e, item.skill, item?.skillColor,index,item?.id)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    {item && item.skill}
                  </div>
                </>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}

export default Dragcore;
