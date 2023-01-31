<script lang="ts">
    export let peerId: string;

    export let small: boolean = false;

    // Apply is-size-7 class to the label if small is true
    const labelClass = small ? "is-small" : "";
    
</script>


<div class="field">
  <label class="label {labelClass}">Your Peer ID</label>
  <div class="control">
    <input type="text" class="input {labelClass}" value={peerId} readonly />
  </div>
</div>
