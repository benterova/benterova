<script lang="ts">
  import * as THREE from "three";
  import { InstancedMesh, Instance, useFrame, useThrelte, Pass } from "@threlte/core";

  const maxStars = 150;


  const starMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshBasicMaterial({
      color: "white",
    })
  );

  const setPosition = (star) => {
    star.position.set(
      Math.random() * 1000 - 500,
      Math.random() * 1000 - 500,
      Math.random() * 1000 - 500
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
  

  useFrame((state) => {
    
    field.forEach((star, i) => {
      // Rotation
      star.rotation.x += 0.01;
      star.rotation.y += 0.005;
      star.rotation.z += 0.01;
      // Move them towards camera
      star.position.z += 1;
      
      if (star.position.z > 300) {
        // Reset position
        setPosition(star);
      }

      // Out of bounds viewport reset
      field[i] = star;
    });
  });
</script>

<InstancedMesh geometry={starMesh.geometry} material={starMesh.material}>
  {#each field as star}
    <Instance
      position={star.position}
      rotation={star.rotation}
      scale={star.scale}
    />
  {/each}
</InstancedMesh>
