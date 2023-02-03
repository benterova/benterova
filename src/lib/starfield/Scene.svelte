<script lang="ts">
  import { T, Canvas, useThrelte, Pass } from "@threlte/core";
  import Starfield from "./Starfield.svelte";
  import Text from "./Text.svelte";
  import * as THREE from "three";

  import words from "./words.json";

  import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
  import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
  import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass";

  const { renderer, scene, camera } = useThrelte();

  let text =
    words[Math.floor(Math.random() * words.length)]["phrase"].toLowerCase();

  // Slowly bob the text up and down
  let bob = 0;
  setInterval(() => {
    bob = bob === 0 ? 0.05 : 0;
  }, 300);

  // Rotate text side to side
  let rotation;

  let { size } = useThrelte();

  // Scale and position for spinning background box
  let backgroundBoxScale = new THREE.Vector3(75, 75, 50);
  let backgroundBoxPos = new THREE.Vector3(0, 0, 0);
  let backgroundBoxRotation = new THREE.Vector3(0, 0, 0);
  // Spin the box around
  setInterval(() => {
    backgroundBoxRotation.x += 0.001;
    backgroundBoxRotation.y += 0.001;
    backgroundBoxRotation.z += 0.001;
  }, 1000 / 60);
</script>

<T.Scene>
  <!-- <Pass pass={new GlitchPass(57)} /> -->
  <Pass pass={new RenderPixelatedPass(1.3, scene, $camera)} />

  <Pass pass={new AfterimagePass(0.5)} />
  <T.AmbientLight color={0xffffff} />

  <!-- Sphere for background -->
  <T.Mesh
    scale={backgroundBoxScale.toArray()}
    position={backgroundBoxPos.toArray()}
    rotation={backgroundBoxRotation.toArray()}
  >
    <T.SphereGeometry args={[1, 6, 6]} />
    <T.MeshBasicMaterial wireframe color="#1f1f1f" />
  </T.Mesh>
  <T.Group position={[0, Math.min(1, $size.height / (3 / 1000)), 0]}>
    <!-- Header text -->
    <T.Group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Text {text} textSize={Math.min(0.3, $size.width / (2 * 1000))} wobble showBar />
    </T.Group>
    <!-- Scroll text
    <T.Group position={[0, 2.7 + bob - $size.height / 1000, 0]}>
      <T.Group
      position={[0, $size.height / (3 * 1000), 0]}
      lookAt={$camera.position}
    >
      <Text
        text={"^"}
        lookAtCamera
        textHeight={0.03}
        textSize={Math.min(0.3, $size.width / (5 * 1000))}
      />
    </T.Group>
      <Text
        text={"refresh for new text"}
        lookAtCamera
        textHeight={0.05}
        textSize={Math.min(0.17, $size.width / (4 * 1000))}
      />

    </T.Group>
  </T.Group>
  <T.Group position={[0, Math.min(1, $size.height / (3 / 1000)), 0]}>
    <!-- Header text -->
    <T.Group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Text {text} textSize={Math.min(0.3, $size.width / (2 * 1000))} wobble showBar />
    </T.Group> -->
    <!-- Scroll text -->
    <T.Group position={[0, -1 + bob - $size.height / 1000, 0]}>
      <Text
        text={"see more please :)"}
        lookAtCamera
        textHeight={0.05}
        textSize={Math.min(0.17, $size.width / (4 * 1000))}
      />
      <T.Group
        position={[0, -$size.height / (3 * 1000), 0]}
        lookAt={$camera.position}
      >
        <Text
          text={"V"}
          lookAtCamera
          textHeight={0.03}
          textSize={Math.min(0.1, $size.width / (5 * 1000))}
        />
      </T.Group>
    </T.Group>
  </T.Group>
  <!-- <Ship /> -->
  <Starfield />
</T.Scene>

<style>
  /* canvas {
    width: 100%;
    height: 100%;
    background-color: wheat;
  } */
</style>
