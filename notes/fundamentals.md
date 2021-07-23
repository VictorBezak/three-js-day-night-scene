# Three.js Notes

You need 4 basic things:

1. A ***scene*** that will contain objects
1. The ***objects***
1. A ***camera***
1. A ***renderer***

---

## Scene

```javascript
const scene = new THREE.Scene()
```

---

## Objects

You need to create a ***Mesh***.

A mesh is a combination of a ***geometry*** (the shape) and a ***material*** (how it looks).

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)
```

Once you have your mesh, you can add it to your scene!

```javascript
scene.add(mesh)
```

---

## Camera

There are different types of cameras. The one we'll look at first comes from the **PerspectiveCamera** class, which makes close objects look more prominent than far objects. This class requires two parameters:

1. field of view
1. aspect ratio

```javascript
const aspect = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height)

scene.add(camera)
```

## Renderer

To create the renderer, we use the **WebGLRenderer** class with one parameter: an object containing all of the options.

```javascript
// Create a canvas
const canvas = document.createElement('canvas')

// Create Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```
