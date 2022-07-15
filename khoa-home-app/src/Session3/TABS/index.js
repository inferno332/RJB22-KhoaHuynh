import React from "react";
import { useState } from "react";
import "./index.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState();
  let items = ['HISTORY', 'APPROACH', 'CULTURE', 'METHOD'];
  return (
    <div className="Tabs col-md-8">
      <ul className="nav">
        {items.map((item,index) => {
            index +=1;
            return (
              <li 
                key ={index}
                className={activeTab === (`Tab${index}`) ? "active" : ""}
                onClick={() => setActiveTab(`Tab${index}`)}
              >
              {item}
              </li>
            );
        })
        }
      </ul>
      <div className="content col-12">
          {(activeTab === 'Tab1') && 
            <Tab1/>
          }
          {(activeTab === 'Tab2') && 
            <Tab2/>
          }
          {(activeTab === 'Tab3') && 
            <Tab3/>
          }
          {(activeTab === 'Tab4') && 
            <Tab4/>
          }
          
      </div>
    </div>
  );
}
