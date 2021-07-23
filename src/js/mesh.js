import * as THREE from 'three'

// Geometries
const planeGeometry = new THREE.PlaneGeometry(4, 4, 8, 8)
planeGeometry.rotateX(Math.PI / 2)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const sphereGeometry = new THREE.SphereGeometry(0.5, 12, 12)

// Materials
const basicMaterial = new THREE.MeshBasicMaterial({ color: 'lightblue' })
const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true })

// Meshes
const planeMesh = new THREE.Mesh(planeGeometry, wireframeMaterial)
const boxMesh = new THREE.Mesh(boxGeometry, basicMaterial)
boxMesh.position.y = 0.5
const sphereMesh = new THREE.Mesh(sphereGeometry, basicMaterial)
sphereMesh.position.set(6, 2, 0)

// Export
export {
  planeMesh,
  boxMesh,
  sphereMesh
}