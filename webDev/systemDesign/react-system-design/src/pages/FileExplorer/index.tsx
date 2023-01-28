import React, { useState } from "react";

interface Folder {
  name: string;
  isFolder: boolean;
  children: Folder[];
  id: number;
}

export default function Folder({ filesData }: { filesData: Folder }) {
  const [isOpen, setOpen] = useState(false);
  const toggleFolderClick = () => {
    setOpen(!isOpen);
  };

  if (filesData.isFolder) {
    return (
      <div   style={{ margin: 5 }}>
        <div
          style={{ margin: 10 }}
          onClick={toggleFolderClick}
          key={filesData.id}
        >
          {filesData.name}
        </div>
        <div style={{ margin: 10 }}>
          {filesData.isFolder &&
            isOpen &&
            filesData.children.map((item) => (
              <Folder filesData={item} key={item.id} />
            ))}
        </div>
      </div>
    );
  } else
    return (
      <div style={{ margin: 10 }} key={filesData.id}>
        {filesData.name}
      </div>
    );
}
