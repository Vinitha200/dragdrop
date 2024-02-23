import React, { useEffect, useState } from "react";
import Dragcore from "./skillselected/dragcore";
import HomeDrop from "./skillprority/home";
import { CoreData, SpecialData, CreativeData } from "./data";
import "./index.css";
import { Card } from "antd";


function Main() {
  const [coreSkill, setCoreSkill] = useState([]);
  const [specialSkill, setSpecialSkill] = useState([]);
  const [creativeSkill, setCreativeSkill] = useState([]);

  useEffect(() => {
    setCoreSkill(CoreData);
    setSpecialSkill(SpecialData);
    setCreativeSkill(CreativeData);
  }, []);

  
  return (
    <>
      <div className="main-div">
        <div className="drag-box">

          <Card
            title="Skills Selected"
            bodyStyle={{ padding: "4px" }}
            style={{ background: "#eef4f7", height: "573px" }}
            size="small"
          >
            <div className="card-content">
              Level 0
            </div>
          </Card>
        </div>

        <div className="drag-box">
          <Card
            title="Skills Selected"
            bodyStyle={{ padding: "4px" }}
            style={{ background: "#eef4f7" }}
            size="small"
          >
            <Dragcore 
            coreSkill={coreSkill} 
            setCoreSkill={setCoreSkill} 
            backgroundColor="#EDFED7"
            title="Core" />

            <Dragcore
              coreSkill={specialSkill}
              setCoreSkill={setSpecialSkill}
              backgroundColor="#feebeb"
              title="Special" 
            />

            <Dragcore
              coreSkill={creativeSkill}
              setCoreSkill={setCreativeSkill}
              backgroundColor="pink"
              title="Creative" 
            />
          </Card>
        </div>

        <div className="drop-box">
          <Card
            title="Skills Prority"
            bodyStyle={{ padding: "4px" }}
            style={{ background: "#eef4f7", height: "575px" }}
            size="small"
          >
            <HomeDrop
              coreSkill={coreSkill}
              setCoreSkill={setCoreSkill}
              specialSkill={specialSkill}
              setSpecialSkill={setSpecialSkill}
              creativeSkill={creativeSkill}
              setCreativeSkill={setCreativeSkill}
              title="School Priority"
            />
            <HomeDrop
              coreSkill={coreSkill}
              setCoreSkill={setCoreSkill}
              specialSkill={specialSkill}
              setSpecialSkill={setSpecialSkill}
              creativeSkill={creativeSkill}
              setCreativeSkill={setCreativeSkill}
              title="Home Priority"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Main;
