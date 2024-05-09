import { createContext, useState } from "react";

export const SideBarContext = createContext(true);

export const SidebarContextProvider = (props) => {
  const [isClose, setIsClose] = useState(true);
  const handleClose = () => {
    setIsClose((prevState) => !prevState);
  };
  return (
    <div>
      <SideBarContext value={{isClose, handleClose}}>{props.children}</SideBarContext>
    </div>
  );
};
