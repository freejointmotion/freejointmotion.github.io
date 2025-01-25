import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FloatingParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const parent = mountRef.current;
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0, 0, 200);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    parent.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 300;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/circle.png');

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff, // Techy cyan color
      size: 1.5, // Smaller size for techy look
      map: sprite, // Rounded particle texture
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const pointCloud = new THREE.Points(particles, particleMaterial);
    scene.add(pointCloud);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      pointCloud.rotation.y += 0.002;
      pointCloud.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      parent.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}
    />
  );
};

export default FloatingParticles;