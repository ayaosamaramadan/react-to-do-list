import React from "react";
import { useAppContext } from "./AppContext";

function Erro() {
  const { title, descriptio } = useAppContext();
  const iserror = title === "" || descriptio === "";

  return (
    <>
      {iserror && (
        <div className="bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-md">
          {title === "" && descriptio === "" ? (
            <p>Title and Description cannot be empty</p>
          ) : title === "" ? (
            <p>Title cannot be empty</p>
          ) : descriptio === "" ? (
            <p>Description cannot be empty</p>
          ) : null}
        </div>
      )}
      
    </>
  );
}

export default Erro;
