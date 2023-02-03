<script lang="ts">
  import { T, Canvas, useThrelte, Pass } from "@threlte/core";
  import Starfield from "./Starfield.svelte";
  import Text from "./Text.svelte";
  import Ship from "./Ship.svelte";
  import * as THREE from "three";

  import words from "./words.json";

  import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
  import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
  import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass";

  const { renderer, scene, camera } = useThrelte();

  let text =
    words[Math.floor(Math.random() * words.length)]["phrase"].toLowerCase();

  // Flicker a | at the end of the text
  setInterval(() => {
    text = text.endsWith("|") ? text.slice(0, -1) : text + "|";
  }, 1000);

  // Slowly bob the text up and down
  let bob = 0;
  setInterval(() => {
    bob = bob === 0 ? 0.1 : 0;
  }, 300);

  // Rotate text side to side
  let rotation;

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
  <Pass pass={new AfterimagePass(2)} />
  <Pass pass={new RenderPixelatedPass(1.5, scene, $camera)} />

  <T.Mesh
    scale={backgroundBoxScale.toArray()}
    position={backgroundBoxPos.toArray()}
    rotation={backgroundBoxRotation.toArray()}
  >
    <T.SphereGeometry args={[1, 6, 6]} />
    <T.MeshBasicMaterial wireframe color="#1f1f1f" />
  </T.Mesh>

  <T.PerspectiveCamera fov={50} primary />
  <T.AmbientLight color={0xffffff} />
  <T.Group position={[0, 0, 0]}>
    <Text {text} />
  </T.Group>
  <T.Group position={[0, -2 + bob, 0]}>
    <Text
      text={"scroll for portfolio"}
      lookAtCamera
      textHeight={0.05}
      textSize={0.3}
    />
    <T.Group position={[0, -0.75, 0]} lookAt={$camera.position}>
      <Text text={"V"} lookAtCamera textHeight={0.03} textSize={0.2} />
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
