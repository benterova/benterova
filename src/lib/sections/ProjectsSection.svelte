<script lang="ts">
  import ChatSection from "../chat/ChatSection.svelte";
  import MinorContributions from "../projects/MinorContributions.svelte";
  import PdfServicesGem from "../projects/PdfServicesGem.svelte";
</script>

<section class="section" id="projects">
  <div class="block">
    <h1 class="title has-text-centered m-6">code i had fun with</h1>
    <h2 class="subtitle has-text-centered">Besides the header.</h2>
  </div>
  <div class="is-divider" />
  <PdfServicesGem />
  <div class="is-divider" />
  <ChatSection />
  <div class="is-divider" />
  <MinorContributions />
</section>
