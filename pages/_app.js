import React, { useState, useEffect } from "react";
import '../styles/normalize.css'
import '../styles/globals.css'
import App from 'next/app'
function MyApp({ Component, pageProps }) {
  const [log, setLog] = useState(false);
  const [id, setId] = useState();
  return ( <Component 
    {...pageProps}
    log={log}
    setLog={setLog}
    id={id}
    setId={setId}
    /> )

}

export default MyApp
