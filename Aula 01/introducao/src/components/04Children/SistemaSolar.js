//import Planeta from "./Planeta";
import {React , Children} from "react";

const SistemaSolar = ({children,galaxia}) => {
    return(
        <div>
            <h2>Sistema Solar</h2>
            <hr/>
            {Children.map(
                children,
                (x) => {
                    return React.cloneElemente(x,{galaxia})
                }
            )}
        </div>
    )
}

export default SistemaSolar;