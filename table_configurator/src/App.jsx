import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [4, 4, 10], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface/>
    </>
  );
}

export default App;
