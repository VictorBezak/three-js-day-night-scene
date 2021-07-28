import * as THREE from 'three'

// Materials
const standardMaterial = new THREE.MeshStandardMaterial({ color: 'lightblue' })
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xf5f3ce })
const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true })

// Ground
const groundMaterial = new THREE.MeshStandardMaterial({ color: 'green', side: THREE.FrontSide })
const groundGeometry = new THREE.PlaneGeometry(3, 3, 8, 8)
groundGeometry.rotateX(Math.PI * 1.5)
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)


// Moon & Sun
const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xf5f3ce })
const moonGeometry = new THREE.SphereGeometry(0.5, 10, 10)
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial)
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF66 })
const sunGeometry = new THREE.SphereGeometry(0.25, 16, 16)
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial)

// House
const houseGeometry = new THREE.BoxGeometry(1, 1, 1)
const houseMesh = new THREE.Mesh(houseGeometry, standardMaterial)

// Mesh Manipulation
houseMesh.position.y = 0.5
houseMesh.castShadow = true
groundMesh.receiveShadow = true

// Mesh Exports
export default {
  ground: groundMesh,
  sun: sunMesh,
  moon: moonMesh,
  house: houseMesh
}