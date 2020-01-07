<script context="module">
  export async function preload({ params }) {
    const page = +params.page;

    const res = await this.fetch(`${page}.json`);
    const response = await res.json();

    return {
      page,
      ...response
    };
  }
</script>

<script>
  import Posts from "../components/Posts.svelte";
  import Breadcrumb from "../components/Breadcrumb.svelte";

  export let posts;
  export let isFirst;
  export let isLast;
  export let page;
</script>

<style lang="scss">

</style>

<svelte:head>
  <title>Stunning Theme - Page {page}</title>
</svelte:head>

<Posts {posts} limit={4} />

<Breadcrumb {isFirst} {isLast} {page} />
