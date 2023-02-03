<script lang="ts">
  // For now, a box that can move around when "i,j,k,l" are pressed
  import { T, useFrame, useThrelte } from "@threlte/core";
  import * as THREE from "three";

  import Keydown from "svelte-keydown";

  let position = new THREE.Vector3(0, 0, 0);

  let ship: THREE.Mesh;
  let upHeld: boolean = false;
  let downHeld: boolean = false;
  let leftHeld: boolean = false;
  let rightHeld: boolean = false;

  function handleKeyDown(event) {
    switch (event.key) {
      case "i":
        upHeld = true;
        break;
      case "k":
        downHeld = true;
        break;
      case "j":
        leftHeld = true;
        break;
      case "l":
        rightHeld = true;
        break;
    }
  }

  const handleKeyUp = (event) => {
    switch (event.key) {
      case "i":
        upHeld = false;
        break;
      case "k":
        downHeld = false;
        break;
      case "j":
        leftHeld = false;
        break;
      case "l":
        rightHeld = false;
        break;
    }
  };

  const { size } = useThrelte();

  const atMaxPosition = () => {
    const maxXY = new THREE.Vector2(-1, 1);
    // Return moveSpeed if the position plus moveSpeed is within bounds, else return 0
    return maxXY.x < position.x + moveSpeed && position.x + moveSpeed < maxXY.y
      ? moveSpeed
      : 0;
  };

  const move = () => {
    while (upHeld) {
      position.y += atMaxPosition();
      break;
    }
    while (downHeld) {
      position.y -= atMaxPosition();
      break;
    }
    while (leftHeld) {
      position.x -= atMaxPosition();
      break;
    }
    while (rightHeld) {
      position.x += atMaxPosition();
      break;
    }
  };

  const moveSpeed = 0.05;
  useFrame(() => {
    while (upHeld) {
      position.y += moveSpeed;
      break;
    }
    while (downHeld) {
      position.y -= moveSpeed;
      break;
    }
    while (leftHeld) {
      position.x -= moveSpeed;
      break;
    }
    while (rightHeld) {
      position.x += moveSpeed;
      break;
    }
    position = position;
  });

  const onPointerMove = (event) => {
    console.log("pointermove", event);
  };
</script>

<Keydown on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

<T.Mesh position={position.toArray()}>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshBasicMaterial color={"white"} />
</T.Mesh>
