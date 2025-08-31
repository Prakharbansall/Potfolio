import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FloatingThree({ className = "", style = {} }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(240, 240, false);

    // Torus Knot Geometry
    const geometry = new THREE.SphereGeometry( 1, 32, 6 ); 
    const material = new THREE.MeshBasicMaterial({
      color: 0x00e0ff,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse Interaction (rotation)
    let targetRotation = { x: 0, y: 0 };
    let currentRotation = { x: 0, y: 0 };

    function onMouseMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotation.y = x * Math.PI * 0.5;
      targetRotation.x = y * Math.PI * 0.3;
    }

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    let frameId;
    function animate() {
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

      mesh.rotation.x =
        currentRotation.x + Math.sin(Date.now() * 0.0007) * 0.15;
      mesh.rotation.y = currentRotation.y + Date.now() * 0.0004;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    // Mount
    mountRef.current.appendChild(renderer.domElement);

    // Resize Handling
    function handleResize() {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const width =
        rect.width > 0 ? rect.width : mountRef.current.clientWidth || 240;
      const height =
        rect.height > 0 ? rect.height : mountRef.current.clientHeight || width || 240;
      const size = Math.max(160, Math.min(width, height));
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        width: "200px",   // ✅ make sure it has dimensions
        height: "200px",  // ✅
        pointerEvents: "none",
        userSelect: "none",
        filter: "drop-shadow(0 8px 32px #00e0ff88)",
        background: "transparent",
        ...style,
      }}
      aria-hidden="true"
    />
  );
  
}
