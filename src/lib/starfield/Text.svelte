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
  export let showBar = false;

  const loader = new FontLoader();
  let textMesh: THREE.Mesh;

  let meshes: THREE.Mesh[] = [];

  let { camera } = useThrelte();

  if (text) {
    loader.load("/Roboto_Regular.json", (font) => {
      for (let i = 0; i < (showBar ? 2 : 1); i++) {
        let newMesh: THREE.Mesh;
        let barText = text + "|";
        newMesh = new THREE.Mesh(
          new TextGeometry(i == 1 ? barText : text, {
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
        let boundingBox = new THREE.Box3().setFromObject(newMesh);
        boundingBox.getCenter(cent);
        boundingBox.getSize(size);
        var maxAxis = Math.max(size.x, size.y, size.z);
        newMesh.scale.multiplyScalar(1.0 / maxAxis);

        newMesh.position.x = -cent.x;
        newMesh.position.y = 0;
        newMesh.position.z = -cent.z;

        meshes = [...meshes, newMesh];
        console.log("meshes", meshes);
      }

      // planet.position.set(0, 0, -20);
    });
  }

  let barVisible = false;
  if (showBar) {
    setInterval(() => {
      barVisible = !barVisible;
    }, 1000);
  }

  function oscillate(start, end, time) {
    // return   // let barVisible = false;
    // if (showBar) {
    //   setInterval(() => {
    //     barVisible = !barVisible;
    //   }, 1000);
    // }start + (end - start) * Math.sin(time / 100);
    // Speed up occilation
    return start + (end - start) * Math.sin(time * 2);
  }

  let textRotation = new THREE.Vector3(0, 0, 0);
  if (wobble) {
    useFrame((state) => {
      if (!meshes) return;
      textRotation.y = oscillate(-0.05, 0.005, state.clock.elapsedTime);
      textRotation.z = oscillate(-0.05, 0.005, state.clock.elapsedTime);
      textRotation = textRotation;
    });
  }
</script>

{#if meshes}
  <T.Group position={[0, 0, 0]} rotation={textRotation.toArray()}>
    {#each meshes as textMesh, i}
      <T.Mesh
        geometry={textMesh.geometry}
        material={textMesh.material}
        position={textMesh.position.toArray()}
        rotation={textRotation.toArray()}
        visible={i == 1 ? barVisible : !barVisible}
      />
    {/each}
  </T.Group>
{/if}
