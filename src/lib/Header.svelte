<script lang="ts">
  export let showBackground: boolean = false;

  const toggleBackground = () => {
    showBackground = !showBackground;
  };
</script>

<section class="section main-hero">
  <div class="hero is-large">
    <div class="hero-body">
      <!-- <p class="title">Ben Terova</p>
      <p class="subtitle">Software Engineer | Full Stack Developer</p> -->
      {#if showBackground}
        <div class="hero-background">
          <slot />
        </div>
      {/if}
      <!-- <div class="threlte-toggle">
        <div class="field">
          <div class="control">
            <a class="button is-primary" on:click={toggleBackground}
              >Toggle 3D</a
            >
          </div>
        </div>
      </div> -->
    </div>
  </div>
</section>

<style>
  .subtitle {
    font-style: italic;
  }
  .main-hero {
    position: relative;
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
  .threlte-toggle {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
  }
</style>
