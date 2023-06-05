import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Lista = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <ul className="list-group m-5">
      <li className="list-group-item">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setTareas([...tareas, inputValue]);
              setInputValue("");
            }
          }}
          type="text"
          className="form-control"
          placeholder="¿Qué nueva tarea tengo que  hacer?"
        />
      </li>
      {tareas.map((item, index) => {
        return (
          <li className="list-group-item" key={index}>
            {item}
            <FontAwesomeIcon
              className="float-end"
              icon={faTrashCan}
              onClick={() =>
                setTareas(
                  tareas.filter((_, currentIndex) => index !== currentIndex)
                )
              }
            />
          </li>
        );
      })}
      <li className="list-group-item disabled text-center" aria-disabled="true">
        {tareas.length} Tareas por hacer.
      </li>
    </ul>
  );
};

export { Lista };
