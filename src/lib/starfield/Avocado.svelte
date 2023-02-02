<script lang="ts">
  import { useGltf } from "@threlte/extras";
  import * as THREE from "three";
  import {
    Group,
    Object3DInstance,
    T,
    useFrame,
    useThrelte,
  } from "@threlte/core";

  const { gltf } = useGltf<{
    nodes: {
      Avocado: THREE.Object3D;
    };
    materials: {
      "2256_Avocado_d": THREE.Material;
    };
  }>("/gltf/Avocado.gltf");
  // }>(import.meta.env.BASE_URL + "/gltf/Avocado.gltf");

  const { size } = useThrelte();

  $: $gltf?.materials &&
    Object.values($gltf.materials).forEach(
      (material) => (material.wireframe = true)
    );

  let rotation: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

  const { pointer } = useThrelte();

  useFrame((state) => {
    rotation.y += 0.01;
    rotation = rotation;
  });

  // Tilt based on mouse position
  useFrame((state) => {
    const { width, height } = $size;
    const tiltX = ($pointer.x / width) * 2 - 1;
    const tiltY = ($pointer.y / height) * 2 - 1;
    rotation.x = tiltX * 0.1;
  });

  $: avocado = $gltf?.nodes["Avocado"];
</script>

{#if avocado}
  <Group>
    <Object3DInstance
      {rotation}
      object={avocado}
      position={new THREE.Vector3(0.5, -0.3, 4)}
      scale={new THREE.Vector3(10, 10, 10)}
    />
  </Group>
{/if}
