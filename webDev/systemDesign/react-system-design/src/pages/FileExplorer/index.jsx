import { useState } from "react";
import { explorer } from "./data";


const Folder = ({ id, name, isFolder, children, onExplorerChange }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  const toggleInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddFolder = () => {
    onExplorerChange({ id, inputValue, isFolder: true });
    setExpanded(true);
  };

  return (
    <div style={{ paddingLeft: 15, margin: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 200,
          flex: 1,
          height: 30,
          border: "1px solid black",
          padding: 2,
          marginBottom: 10
        }}
      >
        <p onClick={handleClick}>
          {isFolder ? "📁" : "📄"} {name}
        </p>

        {isFolder && <p onClick={toggleInput}>+📁</p>}
      </div>
      {inputVisible && (
        <div>
          <input value={inputValue} onChange={handleInputChange} />
          <button onClick={onAddFolder}>add</button>
        </div>
      )}
      {isExpanded &&
        children &&
        children.map((item) => (
          <Folder {...item} key={item.id} onExplorerChange={onExplorerChange} />
        ))}
    </div>
  );
};

const getUpdatedExplorer = ({
  action = "add",
  parentId,
  name,
  fileData,
  isFolder
}) => {
  console.log({ fileData });
  if (fileData.id === parentId) {
    return {
      ...fileData,
      children: [
        ...fileData.children,
        {
          id: new Date().getTime(),
          name,
          isFolder,
          children: []
        }
      ]
    };
  } else {
    const child =
      fileData.isFolder &&
      fileData.children.map((item) => {
        return getUpdatedExplorer({
          action,
          parentId,
          name,
          fileData: item,
          isFolder
        });
      });
    return {
      ...fileData,
      children: child
    };
  }
};

export default function FileExplorer() {
  const [fileData, setFileData] = useState(explorer);
  console.log({ fileData });
  const onExplorerChange = ({ id, inputValue, isFolder }) => {
    const updatedFileExplorer = getUpdatedExplorer({
      parentId: id,
      name: inputValue,
      isFolder,
      fileData
    });
    setFileData(updatedFileExplorer);
  };
  return (
    <div>
      <Folder {...fileData} onExplorerChange={onExplorerChange} />
    </div>
  );
}
