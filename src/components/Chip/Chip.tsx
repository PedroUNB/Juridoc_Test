import React from "react";
import "./chip-style.css";

export function Chip() {
  return (
    <a href="https://www.oficinamarcodiesel.com.br/" target="blank">
      <div className="chip">
        <img
          className="avatar"
          src="https://www.oficinamarcodiesel.com.br/themes/marcodiesel/img/logo.png"
          alt="Oficina Mecânica Marcodiesel"
        />
        <span className="label">Oficina Mecânica Marcodiesel</span>
      </div>
    </a>
  );
}
