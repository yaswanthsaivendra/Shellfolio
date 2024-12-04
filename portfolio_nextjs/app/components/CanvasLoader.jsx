import React from 'react';
import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  return (
    <Html
        as="div"
        center
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column'
        }}>
        <body>
          <progress value={useProgress().percentage} max="100" />
        </body>
    </Html>
  )
}

export default CanvasLoader