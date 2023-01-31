<script lang="ts">
  import * as THREE from "three";
  import { T, Canvas, MeshInstance, Instance } from "@threlte/core";

  const resizeRendererToDisplaySize = (renderer: THREE.Renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    // resize only when necessary
    if (needResize) {
      //3rd parameter `false` to change the internal canvas size
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  const maxStars = 300;

  requestAnimationFrame(() => {});

  const stars = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({
      color: 0x888888,
    })
  );
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera />
    <T.AmbientLight color={0xffffff} />
    <T.MeshInstance mesh={stars}>
      <T.Instance position={[0, 0, 0]} />
    </T.MeshInstance>
  </Canvas>
</div>

<style>
  #starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* z-index: -1; */
  }
</style>
