import { useState } from "react";
import FileExplorer from "./pages/FileExplorer";
import TicTacToe from "./pages/TicTacToe";
import { data } from "./data/intialFolder";
import './App.css'
import TypeAhead from "./pages/TypeAhead";
import Form from "./pages/Form";
import OTPAutpfocus from "./pages/OTPAutofocus";
import FilterTodos from './pages/FilterTodos'
function App() {
  return (
    <div >
       {/* <FileExplorer  /> */}
       {/* <TicTacToe /> */}
       {/* <TypeAhead /> */}
       {/* <Form /> */}
       {/* <OTPAutpfocus /> */}
       <FilterTodos />
    </div>
  );
}



export default App;
