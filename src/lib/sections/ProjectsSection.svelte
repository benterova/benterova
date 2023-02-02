<script lang="ts">
  import ChatSection from "../chat/ChatSection.svelte";
  import TodoSection from "../todo/TodoSection.svelte";
</script>

<section class="section">
  <div class="block">
    <h1 class="title has-text-centered m-6">Example Projects</h1>
    <p class="subtitle has-text-centered">Stuff I did for fun.</p>
  </div>
  <div class="is-divider" />
  <ChatSection />
  <div class="is-divider" />
  <TodoSection />
</section>
