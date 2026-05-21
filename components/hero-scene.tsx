"use client";

import { Float, Html, Line, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { iconCloud } from "@/lib/data";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function Workspace() {
  const group = useRef<Group>(null);
  const screen = useRef<Mesh>(null);

  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    if (screen.current) screen.current.position.y = 0.25 + Math.sin(state.clock.elapsedTime * 1.3) * 0.035;
  });

  return (
    <group ref={group} position={[0, -0.25, 0]}>
      <Float speed={1.5} rotationIntensity={0.14} floatIntensity={0.28}>
        <mesh ref={screen} position={[0, 0.38, 0]} castShadow>
          <boxGeometry args={[2.3, 1.35, 0.08]} />
          <meshStandardMaterial color="#14213d" metalness={0.45} roughness={0.24} />
        </mesh>
        <mesh position={[0, 0.38, 0.052]}>
          <planeGeometry args={[2.05, 1.1]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.28} />
        </mesh>
        <mesh position={[0, -0.38, 0.05]}>
          <boxGeometry args={[1.58, 0.08, 0.7]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.38} />
        </mesh>
        <mesh position={[0, -0.55, 0.16]}>
          <boxGeometry args={[2.45, 0.16, 1.02]} />
          <meshStandardMaterial color="#0f766e" metalness={0.26} roughness={0.36} />
        </mesh>
      </Float>
      {iconCloud.map((label, index) => {
        const angle = (index / iconCloud.length) * Math.PI * 2;
        const radius = 2.05 + (index % 2) * 0.25;
        return (
          <Float key={label} speed={1.2 + index * 0.06} floatIntensity={0.45} rotationIntensity={0.25}>
            <Html
              transform
              distanceFactor={8}
              position={[Math.cos(angle) * radius, Math.sin(angle) * 0.7 + 0.35, Math.sin(angle) * radius]}
              className="pointer-events-none"
            >
              <div className="rounded-full border border-white/25 bg-white/12 px-2 py-1 text-[10px] font-semibold text-white shadow-xl backdrop-blur-md">
                {label}
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
}

function NetworkGlobe() {
  const points = useMemo(() => {
    return Array.from({ length: 34 }, (_, index) => {
      const phi = Math.acos(-1 + (2 * index) / 34);
      const theta = Math.sqrt(34 * Math.PI) * phi;
      return new THREE.Vector3(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)).multiplyScalar(1.1);
    });
  }, []);
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} position={[2.65, 0.7, -1.25]} scale={0.78}>
      <mesh>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshStandardMaterial color="#2563eb" wireframe transparent opacity={0.22} />
      </mesh>
      {points.slice(0, 18).map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.025, 10, 10]} />
          <meshBasicMaterial color={index % 2 ? "#fb923c" : "#22d3ee"} />
        </mesh>
      ))}
      {points.slice(0, 12).map((point, index) => (
        <Line
          key={`line-${index}`}
          points={[point, points[(index * 3 + 7) % points.length]]}
          color={index % 2 ? "#fb923c" : "#22d3ee"}
          transparent
          opacity={0.34}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(450 * 3);
    for (let i = 0; i < 450; i++) {
      values[i * 3] = (Math.random() - 0.5) * 8;
      values[i * 3 + 1] = (Math.random() - 0.5) * 5;
      values[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.025;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#67e8f9" size={0.014} transparent opacity={0.62} />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 min-h-[560px] overflow-hidden rounded-[2rem]">
      <Canvas
        camera={{ position: [0, 0.8, 5.2], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050b18"]} />
        <fog attach="fog" args={["#050b18", 6, 11]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[-3, 3, 4]} intensity={2.4} color="#22d3ee" />
        <pointLight position={[3, 2, 2]} intensity={1.4} color="#fb923c" />
        <Suspense fallback={null}>
          <Particles />
          <Workspace />
          <NetworkGlobe />
          <Stars radius={8} depth={5} count={600} factor={2.6} fade speed={0.3} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} maxPolarAngle={Math.PI / 1.9} minPolarAngle={Math.PI / 3.2} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent,rgba(5,11,24,.72)_72%)]" />
    </div>
  );
}
