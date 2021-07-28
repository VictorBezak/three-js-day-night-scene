import * as THREE from 'three'
import mesh from './mesh.js'
import listener from './events.js'
import * as dat from 'dat.gui'

// Cameras
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight)
camera.position.set(1, 1.5, 6)

// Lights
const ambientLight = new THREE.AmbientLight('#f5f3ce', 0.3)
const moonLight = new THREE.DirectionalLight('#f5f3ce', 1)
moonLight.castShadow = true
const sunLight = new THREE.DirectionalLight('#fdfbd3', 1)
sunLight.castShadow = true

// Groups
const stars = new THREE.Group()
stars.add(mesh.moon, mesh.sun)

// Scene
const scene = new THREE.Scene()
scene.add(
  camera,
  ambientLight,
  moonLight,
  sunLight,
  mesh.ground,
  mesh.house,
  stars
)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

// Animation
const clock = new THREE.Clock()

function rotateStars(elapsed) {
  const x = Math.sin(elapsed) * 3
  const y = Math.cos(elapsed) * 3
  const z = Math.cos(elapsed)

  sunLight.intensity = 0.8;
  sunLight.position.set(x, y, z)
  mesh.sun.position.set(x, y, z)
  
  moonLight.intensity = 0.25;
  moonLight.position.set(-x, -y, -z)
  mesh.moon.position.set(-x, -y, -z)
}

function tick() {
  const elapsedTime = clock.getElapsedTime()
  rotateStars(elapsedTime)
  // camera.position.x = Math.cos(elapsedTime / 2) * 3
  // camera.position.z = Math.sin(elapsedTime / 2) * 3
  camera.lookAt(mesh.house.position)

  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()

// Event Listeners
listener.resize(camera, renderer)
// listener.dblclick(canvas)

// const gui = new dat.GUI()

// gui.add(MOON_POSITION, 'x')
// gui.add(MOON_POSITION, 'y')
// gui.add(MOON_POSITION, 'z')