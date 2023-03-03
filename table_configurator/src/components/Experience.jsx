import{OrbitControls, Stage} from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Shelving } from "./Shelving";
import { Table } from "./Table";

export const Experience = () =>{
    // const {legs} = useConfigurator();
    return (
        <>
        <Stage intensity={2.0} environment="dawn" shadows = {{type: 'accumulative', color: "#d9afd9", colorBlen: 2, opacity: 2}} adjustCamera={2}>
           <Shelving/>
            </Stage>
            <OrbitControls makeDefault
            minPolarAngle = {0}
            maxPolarAngle = {Math.PI/2}/>
            </>
    );
};
 
 