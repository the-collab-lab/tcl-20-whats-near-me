import React, { createContext, useEffect, useState } from 'react';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  return (
    <ListContext.Provider value={{}}>{props.children}</ListContext.Provider>
  );
};

export default ListContextProvider;
