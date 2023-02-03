<script lang="ts">
  import * as THREE from "three";
  import {
    InstancedMesh,
    Instance,
    useFrame,
    useThrelte,
    Pass,
  } from "@threlte/core";

  const maxStars = 100;

  const starMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1),
    new THREE.MeshBasicMaterial({
      color: "white",
      wireframe: true,
    })
  );
  // const starMesh = new THREE.Mesh(
  //   new THREE.SphereGeometry(1),
  //   new THREE.MeshBasicMaterial({
  //     color: "white",
  //   })
  // );

  const setPosition = (star) => {
    // goes max, min
    const rangeX = new THREE.Vector2(-120, 120);
    const rangeY = new THREE.Vector2(-120, 120);
    const rangeZ = new THREE.Vector2(-350, 5);
    star.position.set(
      Math.floor(Math.random() * (rangeX.x - rangeX.y + 1) + rangeX.y),
      Math.floor(Math.random() * (rangeY.x - rangeY.y + 1) + rangeY.y),
      Math.floor(Math.random() * (rangeZ.x - rangeZ.y + 1) + rangeZ.y)
    );
  };

  const field: THREE.Mesh[] = [];
  // populate field array with stars and move them around every frame
  for (let i = 0; i < maxStars; i++) {
    const star = starMesh.clone();
    // Set position at a random point in the 3D space within a spherical radius
    setPosition(star);

    field.push(star);
  }

  const towardCameraSpeed = 0.3;
  useFrame((state) => {
    field.forEach((star, i) => {
      // Rotation
      star.rotation.x += 0.01;
      star.rotation.y += 0.005;
      star.rotation.z += 0.01;
      while (star.position.z > 1) {
        // Reset position
        setPosition(star);
        return;
      }

      star.position.z += towardCameraSpeed;

      // Out of bounds viewport reset
      field[i] = star;
    });
  });
</script>

<InstancedMesh
  geometry={starMesh.geometry}
  material={starMesh.material}
  position={new THREE.Vector3(5, 0, 0)}
>
  {#each field as star}
    <Instance
      position={star.position}
      rotation={star.rotation}
      scale={star.scale}
    />
  {/each}
</InstancedMesh>
