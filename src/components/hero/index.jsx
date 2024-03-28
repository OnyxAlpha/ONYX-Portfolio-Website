import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { ReactTyped } from "react-typed";

export default function HeroSection (){
  return (
    <>
    <div className="relative">
      <Canvas
        camera={{
          position: [7, -7.5, -5],
        }}
        style={{ height: "90vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      

      <div>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
      We are
      </h1>
       <i class="fa-brands fa-linkedin absolute top-[30%] left-[44%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-4xl md:text-5xl lg:text-7xl pointer-events-none"></i>  

       <i class="fa-brands fa-github absolute top-[30%] left-[57%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-4xl md:text-5xl lg:text-7xl pointer-events-none"></i>
      <ReactTyped
              className="absolute top-[65%] left-[50%] -translate-x-[40%] -translate-y-[50%] text-slate-200 font-medium text-xl md:text-4xl pointer-events-none "
              strings={["Frontend Developers", "Backend Developers", "Full Stack Developers"]}
              typeSpeed={20}
              backSpeed={10}
              loop
            />
      </div>
            
    </div>
    </>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

