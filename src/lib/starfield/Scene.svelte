<script lang="ts">
  import { T, Canvas, useThrelte } from "@threlte/core";
  import Starfield from "./Starfield.svelte";
  import { Vector2 } from "three";
  import { Pass } from "@threlte/core";
  import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
  import Planet from "./Planet.svelte";
  import Avocado from "./Avocado.svelte";
</script>

<Canvas>
  <!-- <Pass pass={new UnrealBloomPass(new Vector2(256, 256), 1, 2.25, 0.75)} /> -->

  <T.PerspectiveCamera fov={50} primary />
  <T.AmbientLight color={0xffffff} />
  <Avocado />
  <Starfield />
  <Planet />
</Canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
    background-color: wheat;
  }
</style>
