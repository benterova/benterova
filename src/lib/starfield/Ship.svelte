<script lang="ts">
    // For now, a box that can move around when "i,j,k,l" are pressed
    import { T, useFrame, useThrelte } from "@threlte/core";
    import { writable } from "svelte/store";
    import * as THREE from 'three';

    let x = 0;
    let y = 0;
    let z = 0;
    let box: THREE.Mesh;

    const store = writable({ x, y, z });

    const { subscribe, set, update } = store;

    const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        box = new THREE.Mesh(geometry, material);

    // useFrame((state) => {
    //     let elapsed = state.clock.getElapsedTime();
    //     // Position with elapsed time
    //     box.position.x = Math.sin(elapsed);
    //     box.position.y = Math.cos(elapsed);
    //     box.position.z = Math.sin(elapsed);

    // });

    function handleKeyDown(event) {
        switch (event.key) {
            case "i":
                x += 1;
                break;
            case "k":
                x -= 1;
                break;
            case "j":
                y += 1;
                break;
            case "l":
                y -= 1;
                break;
        }
    }
    </script>

    <T.Mesh {box} on:handleKeyDown />