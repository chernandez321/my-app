import React from "react";

const authContext = React.createContext({ autenticated: false, login: ()=>{}}); 

export default authContext;