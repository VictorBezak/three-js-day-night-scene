import * as THREE from 'three'
import { planeMesh, boxMesh, sphereMesh } from './mesh.js'
import listener from './events.js'
import * as dat from 'dat.gui'

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight)
camera.position.y = 2

// Scene
const scene = new THREE.Scene()
scene.add(camera, planeMesh, boxMesh, sphereMesh)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animation
const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()
  camera.position.x = Math.cos(elapsedTime / 2) * 3
  camera.position.z = Math.sin(elapsedTime / 2) * 3
  camera.lookAt(boxMesh.position)

  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()

// Event Listeners
listener.resize(camera, renderer)
listener.dblclick(canvas)