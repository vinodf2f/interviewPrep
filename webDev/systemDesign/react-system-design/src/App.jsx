import { useState } from "react";
import FileExplorer from "./pages/FileExplorer";
import TicTacToe from "./pages/TicTacToe";
import { data } from "./data/intialFolder";
function App() {
  // const [filesData, setfilesData] = useState(data);

  return (
    <div >
       {/* <FileExplorer filesData={filesData} /> */}
       <TicTacToe />
    </div>
  );
}



export default App;
