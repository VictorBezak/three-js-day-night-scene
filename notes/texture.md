# Texture

- **color**
  - only takes the pixels of the texture and applies them to the geometry
- **alpha**
  - grayscale image
  - white will be visible, and black won't
- **height** / **displacement**
  - grayscale image
  - will move the vertices, so you do need to add subdivision if you want to see it
- **normal**
  -  won't move the vertices, so you don't need to subdivide the geometry
  - lures the light into thinking that the face is oriented differently
  - very useful to add details with good performance since you don't need to subdivide the geometry
- **ambient occlusion**
  - adds "fake shadows" in crevices
  - while not physically accurate, it helps to create contrast and see details
- **metalness**
  - grayscale image
  - specify which part are metallic (white) and which are non-metallic (black)
  - helps create reflection on metallic surfaces
- **roughness**
  - grayscale image that comes with metalness
  - specifies which parts are rough (white) and which are smooth (black)
  - helps to dissapate the light on rougher surfaces

There are many other types -- you can even create your own -- but these are the main ones.

---

## PBR

Those textures (especially the metalness and the roughness) follow what we call PBR principles. PBR stands for Physically Based Rendering. It regroups many techniques that tend to follow real-life directions to get realistic results.

While there are many other techniques, PBR is becoming the standard for realistic renders, and many software, engines, and libraries are using it.

---

## Loading and Using Textures

get the url of the image

```javascript
const image = new Image()
image.onload = () =>
```

---

## Transformations and Optimizations