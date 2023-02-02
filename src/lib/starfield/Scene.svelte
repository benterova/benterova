<script lang="ts">
  import { T, Canvas, useThrelte } from "@threlte/core";
  import Starfield from "./Starfield.svelte";
  import Planet from "./Planet.svelte";
  import Avocado from "./Avocado.svelte";
    import Ship from "./Ship.svelte";
</script>

<Canvas>
  <T.PerspectiveCamera fov={50} primary />
  <T.AmbientLight color={0xffffff} />
  <!-- <Avocado /> -->
  <Ship />
  <Starfield />
  <Planet />
</Canvas>

<style>
  /* canvas {
    width: 100%;
    height: 100%;
    background-color: wheat;
  } */
</style>
