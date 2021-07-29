import * as THREE from 'three'
import mesh from './mesh.js'
import listener from './events.js'
import * as dat from 'dat.gui'

let dayChanging = false;
let starsRotation = 0
const starPosition = {
  x: 2,
  y: 2,
  z: 0
}

// Cameras
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight)
camera.position.set(1, 1.5, 6)

// Lights
const ambientLight = new THREE.AmbientLight('#f5f3ce', 0.3)

const moonLight = new THREE.DirectionalLight('#f5f3ce', 1)
moonLight.castShadow = true
moonLight.intensity = 0.25;
moonLight.position.set(-starPosition.x, -starPosition.y, -starPosition.z)
mesh.moon.position.set(-starPosition.x, -starPosition.y, -starPosition.z)

const sunLight = new THREE.DirectionalLight('#fdfbd3', 1)
sunLight.castShadow = true
sunLight.intensity = 0.8;
sunLight.position.set(starPosition.x, starPosition.y, starPosition.z)
mesh.sun.position.set(starPosition.x, starPosition.y, starPosition.z)

// Groups
const starsGroup = new THREE.Group()
starsGroup.add(mesh.moon, mesh.sun, moonLight, sunLight)

// Scene
const scene = new THREE.Scene()
scene.add(
  camera,
  ambientLight,
  mesh.ground,
  mesh.house,
  starsGroup
)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

// Animation
const keyframeTrack = new THREE.NumberKeyframeTrack(
  ".rotateZ",
  [0, 3, 6, 9],
  [ 0,
    Math.PI/4,
    Math.PI/2,
    Math.PI
  ]
)
// const keyframeTrack = new THREE.NumberKeyframeTrack(
//   ".rotation",
//   [0, 1, 2, 3],
//   [0, Math.PI/4, Math.PI/2, Math.PI]
// )

const starsClip = new THREE.AnimationClip("starsRotate", -1, [
  keyframeTrack
])
// const starsMixer = new THREE.AnimationMixer(starsGroup)
const starsMixer = new THREE.AnimationMixer(mesh.house)
const starsAction = starsMixer.clipAction(starsClip)
starsAction.play()
console.log(keyframeTrack)

// console.log(starsClip)

function rotateStars() {
  console.log(starsAction)
  starsAction.play();
}

const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getDelta()
  starsMixer.update(elapsedTime)
  // rotateStars()
  
  // camera.position.x = Math.cos(elapsedTime / 2) * 4
  // camera.position.z = Math.sin(elapsedTime / 2) * 4
  camera.lookAt(mesh.house.position)

  // if (dayChanging) {
  //   if (starsRotation < Math.PI) {
  //     rotateStars()
  //   } else {
  //     starsRotation = 0
  //     dayChanging = false
  //   }
  // }

  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}


document.getElementById('day-night-btn')
  .addEventListener('click', rotateStars)

tick()

// Event Listeners
listener.resize(camera, renderer)
// listener.dblclick(canvas)

// const gui = new dat.GUI()

// gui.add(MOON_POSITION, 'x')
// gui.add(MOON_POSITION, 'y')
// gui.add(MOON_POSITION, 'z')