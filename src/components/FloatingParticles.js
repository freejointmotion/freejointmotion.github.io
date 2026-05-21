import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import * as styles from "./FloatingParticles.module.scss";

const FloatingParticles = ({ subtle = false, hero = false, className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const parent = mountRef.current;
    if (!parent) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0, 0, 200);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    parent.appendChild(renderer.domElement);

    const isHero = hero && !subtle;
    const particleCount = isHero ? 200 : subtle ? 80 : 300;
    const spread = isHero ? 280 : subtle ? 120 : 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * spread;
    }
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: isHero || subtle ? 0x5eb8e8 : 0x00ffff,
      size: isHero ? 2.2 : subtle ? 1.2 : 1.5,
      transparent: true,
      opacity: isHero ? 0.55 : subtle ? 0.35 : 0.8,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const pointCloud = new THREE.Points(particles, particleMaterial);
    scene.add(pointCloud);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const speed = isHero ? 0.0007 : subtle ? 0.0004 : 0.002;
      pointCloud.rotation.y += speed;
      pointCloud.rotation.x += speed * 0.5;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      if (parent.contains(renderer.domElement)) {
        parent.removeChild(renderer.domElement);
      }
    };
  }, [subtle, hero]);

  const variantClass = hero ? styles.heroCanvas : subtle ? styles.subtle : "";

  return (
    <div
      ref={mountRef}
      className={`${styles.canvas} ${variantClass} ${className}`}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
