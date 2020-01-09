<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<style lang="scss">
  main {
    position: relative;
    width: 100%;
    max-width: 1200px;
    background-color: white;
    padding: 1em 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .container {
    padding: 1em 0.5em;
    position: relative;
  }
</style>

<main>
  <Nav {segment} />
  <div class="container">
    <slot />
  </div>
  <Footer />
</main>
