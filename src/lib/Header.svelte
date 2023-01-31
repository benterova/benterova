<script lang="ts">
  export let showBackground: boolean = false;
</script>

<section class="hero is-large">
  <div class="hero-body">
    <p class="title">Ben Terova</p>
    <p class="subtitle">Software Engineer | Full Stack Developer</p>
    {#if showBackground}
      <div class="hero-background">
        <slot />
      </div>
    {/if}
  </div>
</section>

<style>
  .subtitle {
    font-style: italic;
  }
  .hero-background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    top: 0;
    left: 0;
  }
</style>
