<script lang="ts">
  import * as THREE from "three";
  import { T, Canvas, InstancedMesh, Instance } from "@threlte/core";

  const maxStars = 300;

  const stars = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshBasicMaterial({
      color: "red",
    })
  );
</script>

<div class="starfield">
  <Canvas>
    <T.PerspectiveCamera />
    <T.AmbientLight color={0xffffff} />
    <InstancedMesh geometry={stars.geometry} material={stars.material}>
      {#each Array.from({ length: maxStars }) as _, i}
        console.log(i);
        <Instance
          scale={new THREE.Vector3(
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10
          )}
          position={new THREE.Vector3(
            Math.random() * 1000 - 500,
            Math.random() * 1000 - 500,
            Math.random() * 1000 - 500
          )}
        />
      {/each}
    </InstancedMesh>
  </Canvas>
</div>

<style>
  .starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* z-index: -1; */
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
