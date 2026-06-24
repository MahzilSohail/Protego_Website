"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import { useRef } from "react";

function ProductModel({ images }) {
  const texture = useTexture(images);
  const meshRef = useRef();
  const { scrollYProgress } = useScroll();

  // Scroll animation mapping
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 3]); // 1080° Smooth Spin
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);            // Slight Zoom
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -1.5]);            // Lift Up
  
  return (
    <motion.mesh ref={meshRef} rotation-y={rotationY} scale={scale} position-y={yPos}>
      <boxGeometry attach="geometry" args={[2, 3.2, 0.28]} />
      {texture.map((t, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={t}
          roughness={0.26}
          metalness={0.35}
        />
      ))}
    </motion.mesh>
  );
}

export default function Product3DShowcase() {
  const images = [
    "/image/problue.jpg",
    "/image/problue2.jpg",
    "/image/problue3.jpg",
    "/image/problue4.jpg",
  ];

  return (
    <div className="w-full h-[90vh]">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        {/* Lights for premium look */}
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 4, 2]} intensity={1.4} />
        <directionalLight position={[-3, -2, 1]} intensity={1.1} />

        <ProductModel images={images} />

        {/* Mouse Movement Control */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
