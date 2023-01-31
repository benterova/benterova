<script lang="ts">
  import * as THREE from "three";
  import { useFrame, T } from "@threlte/core";
  // Planet mesh
  let planet = new THREE.Mesh(
    new THREE.SphereGeometry(9, 32, 32),
    new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      roughness: 0.5,
      metalness: 0.5,
    })
  );

  //   Place planet in background and slowly spinning using useFrame
  planet.position.z = -10;
//   useFrame((state) => {
//     planet.rotation.y += 0.01;
//     planet = planet;
//   });
</script>

<T.Mesh
  mesh={planet}
  position={planet.position}
  scale={planet.scale}
  rotation={planet.rotation}
/>
