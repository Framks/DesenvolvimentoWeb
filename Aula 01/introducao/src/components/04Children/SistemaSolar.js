//import Planeta from "./Planeta";
import React from "react";

const SistemaSolar = ({children,galaxia}) => {
    return(
        <div>
            <h2>Sistema Solar</h2>
            <hr/>
            {children.map(
                children,
                (x) => {
                    return React.cloneElemente(x,{galaxia})
                }
            )}
        </div>
    )
}

export default SistemaSolar;