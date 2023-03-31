import{OrbitControls, Stage} from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
// import { Shelving } from "./Shelving";
// import { Table } from "./Table";
import { TuQuanAo } from "./Tu_quan_ao";

export const Experience = () =>{
    // const {legs} = useConfigurator();
    return (
        <>
        <Stage intensity={1.0} shadows = {{type: 'contact', color: "#000000", colorBlen: 0, opacity: 2}} adjustCamera={1}>
           <TuQuanAo/>
            </Stage>
            <OrbitControls makeDefault
            minPolarAngle = {0}
            maxPolarAngle = {Math.PI/2}/>
            </>
    );
};
 
 