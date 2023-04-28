import * as THREE from "three";

const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

camera.position.z = 5;

const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

scene.add(sphere);

const technologies = [
  "React",
  "Vue",
  "Angular",
  "Ember",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
  "Sass",
  "Webpack",
];

const objectGroup = new THREE.Group();

for (let i = 0; i < technologies.length; i++) {
  const technology = technologies[i];

  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  const phi = Math.acos(-1 + (2 * i) / technologies.length);
  const theta = Math.sqrt(technologies.length * Math.PI) * phi;

  cube.position.x = 2 * Math.cos(theta) * Math.sin(phi);
  cube.position.y = 2 * Math.sin(theta) * Math.sin(phi);
  cube.position.z = 2 * Math.cos(phi);

  cube.lookAt(sphere.position);

  objectGroup.add(cube);
}

scene.add(objectGroup);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
