<script lang="ts">
  import * as THREE from "three";
  import { useFrame, T, useThrelte } from "@threlte/core";
  import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
  import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

  export let textHeight = 0.05;
  export let textSize = 0.4;
  export let text: string;
  export let wobble: boolean = false;
  export let lookAtCamera: boolean = false;

  const loader = new FontLoader();
  let textMesh: THREE.Mesh;

  let { camera } = useThrelte();

  $: if (text) {
    loader.load("/Roboto_Regular.json", (font) => {
      textMesh = new THREE.Mesh(
        new TextGeometry(text, {
          font,
          size: textSize,
          height: textHeight,
        }),
        [
          new THREE.MeshPhongMaterial({
            color: "white",
            // roughness: 0.5,
            // metalness: 0.5,
          }), //front
          new THREE.MeshPhongMaterial({
            color: "white",
            // roughness: 0.5,
            // metalness: 0.5,
          }),
        ] //side
      );
      let cent = new THREE.Vector3();
      let size = new THREE.Vector3();
      let boundingBox = new THREE.Box3().setFromObject(textMesh);
      boundingBox.getCenter(cent);
      boundingBox.getSize(size);
      var maxAxis = Math.max(size.x, size.y, size.z);
      textMesh.scale.multiplyScalar(1.0 / maxAxis);

      textMesh.position.x = -cent.x;
      textMesh.position.y = 0;
      textMesh.position.z = -cent.z;

      textMesh = textMesh;

      // planet.position.set(0, 0, -20);
    });
  }

  function oscillate(start, end, time) {
    // return start + (end - start) * Math.sin(time / 100);
    // Speed up occilation
    return start + (end - start) * Math.sin(time * 2);
  }

  if (lookAtCamera) {
    useFrame((state) => {
      if (!textMesh) return;
      textMesh.lookAt($camera.position);
    });
  }

  let textRotation = new THREE.Vector3(0, 0, 0);
  if (wobble) {
    useFrame((state) => {
      if (!textMesh) return;
      textRotation.y = oscillate(-0.05, 0.005, state.clock.elapsedTime);
      textRotation.z = oscillate(-0.05, 0.005, state.clock.elapsedTime);
      textRotation = textRotation;
    });
  }
</script>

{#if textMesh}
  <T.Group position={[0, 0, 0]} rotation={textRotation.toArray()}>
    <T.Mesh
      geometry={textMesh.geometry}
      material={textMesh.material}
      position={textMesh.position.toArray()}
    />
  </T.Group>
{/if}
