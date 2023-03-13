import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const filters = {
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED",
  ALL: "ALL"
};

const List = ({ userId, id, title, completed }) => {
  return (
    <div className="listItem">
      <p>{title}</p>
      <p>-{completed ? "COMPLETED" : "not completed"}</p>
    </div>
  );
};

const FilterChip = ({ isSelected, name, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div
      style={{
        minWidth: 100,
        margin: 5,
        padding: 5,
        border: "1px solid black",
        textAlign: "center",
        backgroundColor: isSelected ? "gray" : ""
      }}
      onClick={handleClick}
    >
      <p>{name}</p>
    </div>
  );
};

export default function FilterTodos() {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(filters.ALL);

  const fetchData = async () => {
    try {
      const response = await fetch(TODOS_URL);
      const responseJson = await response.json();

      if (Array.isArray(responseJson)) {
        setTodos(responseJson);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const filteredData = useMemo(() => {
    if (currentFilter === filters.ALL) return todos;
    return todos.filter((todo) => {
      if (currentFilter === filters.COMPLETED) {
        return todo.completed;
      } else if (currentFilter === filters.NOT_COMPLETED) {
        return !todo.completed;
      }
    });
  }, [todos, currentFilter]);

  const handleFilter = (name) => {
    setCurrentFilter(name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {Object.keys(filters).map((filter) => (
          <FilterChip
            name={filter}
            key={filter}
            onClick={handleFilter}
            isSelected={currentFilter === filter}
          />
        ))}
      </div>
      <div style={{height:400, overflow:'scroll'}}>
        {filteredData.map((item) => (
          <List {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
