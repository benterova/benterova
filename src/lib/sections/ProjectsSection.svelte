<script lang="ts">
  import ChatSection from "../chat/ChatSection.svelte";
  import MinorContributions from "../projects/MinorContributions.svelte";
  import PdfServicesGem from "../projects/PdfServicesGem.svelte";
</script>

<section class="section" id="projects">
  <div class="block">
    <h1 class="title">Projects</h1>
    <h2 class="subtitle">Didn't make money, but it was fun!</h2>
  </div>
  <div class="is-divider" />
  <PdfServicesGem />
  <div class="is-divider" />
  <ChatSection />
  <div class="is-divider" />
  <MinorContributions />
</section>
