import * as React from "react";
import { Chip } from "./components/Chip/Chip";
import { Card } from "./components/Card/Card";
import { Balloon } from "./components/Balloon/Balloon";
import { DropDown } from "./components/Dropdown/Dropdown";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="section">
        <div className="textBox">
          <span className="title">Chip:</span>
          <Chip />
        </div>
      </div>

      <div className="section">
        <div className="textBox">
          <span className="title">Card:</span>
          <Card />
        </div>
      </div>

      <div className="section">
        <div className="textBox">
          <span className="title">Balloon:</span>
          <Balloon />
        </div>
      </div>

      <div className="section">
        <div className="textBox">
          <span className="title">DropDown:</span>
          <DropDown
            options={[
              { label: "one", value: 1 },
              { label: "two", value: 2 },
              { label: "three", value: 3 }
            ]}
            label={"label"}
          />
        </div>
      </div>
    </div>
  );
}
