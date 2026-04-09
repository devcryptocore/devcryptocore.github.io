/**
 * CRYPTOCORE PORTFOLIO - Three.js Model
 * Renderizado 3D optimizado para la esfera del hero
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// ============================================
// CONFIGURACIÓN INICIAL
// ============================================

const canvas = document.getElementById('canvas');
if (!canvas) {
    console.error('Canvas no encontrado');
}

// Detectar si es móvil para ajustar calidad
const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 640;
const isLowPower = navigator.hardwareConcurrency <= 4;

// Calcular dimensiones responsivas
function getCanvasDimensions() {
    const width = window.innerWidth;
    let size;

    if (width <= 640) {
        size = Math.min(width * 0.6, 280);
    } else if (width <= 1024) {
        size = Math.min(width * 0.35, 400);
    } else {
        size = Math.min(width * 0.3, 500);
    }

    return { width: size, height: size };
}

let dimensions = getCanvasDimensions();

// ============================================
// RENDERER CONFIGURACIÓN
// ============================================

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile, // Desactivar antialiasing en móviles
    alpha: true,
    powerPreference: isLowPower ? 'low-power' : 'high-performance'
});

renderer.setSize(dimensions.width, dimensions.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
renderer.shadowMap.enabled = !isMobile;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// ============================================
// ESCENA Y CÁMARA
// ============================================

const scene = new THREE.Scene();

// Niebla sutil (deshabilitar en móviles por rendimiento)
if (!isMobile) {
    scene.fog = new THREE.Fog(0x000000, 200, 2000);
}

const camera = new THREE.PerspectiveCamera(
    75,
    dimensions.width / dimensions.height,
    0.1,
    1000
);
camera.position.z = 110;
camera.position.y = 190;

// ============================================
// ILUMINACIÓN
// ============================================

// Luz hemisférica
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 3);
hemiLight.position.set(1000, 300, 300);
scene.add(hemiLight);

// Luz direccional con sombras
const dirLight = new THREE.DirectionalLight(0xffffff, 3);
dirLight.position.set(100, 100, 200);

if (!isMobile) {
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = -100;
    dirLight.shadow.camera.left = -160;
    dirLight.shadow.camera.right = 160;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
}

scene.add(dirLight);

// Luz ambiental adicional
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// ============================================
// CONTROLES
// ============================================

const controls = new OrbitControls(camera, canvas);
controls.enablePan = false;
controls.enableZoom = false;
controls.enableRotate = !isMobile; // Solo rotar en desktop
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// ============================================
// CARGA DEL MODELO 3D
// ============================================

let modelo3D;
const loader = new FBXLoader();

// Función para crear un fallback si el modelo no carga
function createFallbackSphere() {
    const geometry = new THREE.SphereGeometry(50, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: 0xcef951,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x1a2a00,
        emissiveIntensity: 0.2
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = 0;
    return sphere;
}

// Intentar cargar el modelo FBX
loader.load(
    './resources/assets/models/sphereTX/sphere.fbx',
    (object) => {
        const textureLoader = new THREE.TextureLoader();

        // Cargar textura con manejo de errores
        textureLoader.load(
            './resources/assets/models/sphereTX/sphere.jpg',
            (textura) => {
                textura.anisotropy = renderer.capabilities.getMaxAnisotropy();

                setTimeout(() => {
                    const canvasCont = document.querySelector("#canvas-cont");
                    if (canvasCont) {
                        canvasCont.style.opacity = "1";
                    }

                    object.traverse((child) => {
                        if (child.isMesh) {
                            child.material.map = textura;
                            child.material.metalness = 0.7;
                            child.material.roughness = 0.3;
                            child.castShadow = !isMobile;
                            child.receiveShadow = !isMobile;
                        }
                    });

                    // Centrar el modelo
                    const box = new THREE.Box3().setFromObject(object);
                    const center = box.getCenter(new THREE.Vector3());
                    object.position.sub(center);
                    object.position.y += 50;

                    modelo3D = object;
                    scene.add(modelo3D);

                    console.log('Modelo 3D cargado exitosamente');
                }, 100);
            },
            undefined, // onProgress
            (error) => {
                console.warn('Error cargando textura, usando fallback:', error);
                useFallbackModel();
            }
        );
    },
    (xhr) => {
        // Progreso de carga
        const percent = (xhr.loaded / xhr.total * 100);
        console.log(`Cargando modelo: ${Math.round(percent)}%`);
    },
    (error) => {
        console.warn('Error cargando modelo FBX:', error);
        useFallbackModel();
    }
);

function useFallbackModel() {
    modelo3D = createFallbackSphere();
    scene.add(modelo3D);

    const canvasCont = document.querySelector("#canvas-cont");
    if (canvasCont) {
        canvasCont.style.opacity = "1";
    }
}

// ============================================
// LOOP DE ANIMACIÓN
// ============================================

let isVisible = true;
let animationId;

function animar() {
    if (!isVisible) {
        animationId = requestAnimationFrame(animar);
        return;
    }

    controls.update();
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animar);
}

// Iniciar animación
animar();

// ============================================
// SCROLLTRIGGER INTEGRACIÓN
// ============================================

gsap.registerPlugin(ScrollTrigger);

// Rotación del modelo basada en scroll
ScrollTrigger.create({
    trigger: ".container",
    start: "top center",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
        if (modelo3D) {
            const progress = self.progress;
            modelo3D.rotation.y = progress * Math.PI * 8;
            modelo3D.rotation.x = progress * Math.PI * 4;
            modelo3D.rotation.z = progress * Math.PI * 0.7;
        }
    }
});

// Animación del canvas (movimiento y escala)
const thirdSection = document.querySelectorAll('.page_section')[2];
if (thirdSection) {
    gsap.to("#canvas", {
        scrollTrigger: {
            trigger: ".container",
            start: "top center",
            endTrigger: thirdSection,
            end: "bottom bottom",
            scrub: 1,
            markers: false
        },
        x: isMobile ? 0 : 300,
        y: isMobile ? 400 : 1600,
        scale: isMobile ? 0.8 : 1.8,
        duration: 3,
        ease: "power2.inOut"
    });
}

// ============================================
// RESPONSIVE
// ============================================

function onWindowResize() {
    dimensions = getCanvasDimensions();

    camera.aspect = dimensions.width / dimensions.height;
    camera.updateProjectionMatrix();

    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
}

// Debounce para el resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(onWindowResize, 100);
}, { passive: true });

// ============================================
// VISIBILITY API (Optimización de rendimiento)
// ============================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isVisible = entry.isIntersecting;
    });
}, { threshold: 0.1 });

if (canvas) {
    observer.observe(canvas);
}

// Pausar cuando la pestaña no está visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        isVisible = false;
    } else {
        isVisible = true;
    }
});

// ============================================
// LIMPIEZA AL SALIR
// ============================================

window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
    observer.disconnect();
    controls.dispose();
    renderer.dispose();
});
