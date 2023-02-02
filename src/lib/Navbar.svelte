<script lang="ts">
  // Toggle for hamburger menu
  const toggleMenu = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("is-active");
  };
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />
    </a> -->

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      on:click={toggleMenu}
      href="#"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#work"> Work </a>

      <a class="navbar-item" href="#projects"> Side-Projects </a>

      <!-- <a class="navbar-item"> Contact </a> -->
    </div>
  </div>
</nav>
