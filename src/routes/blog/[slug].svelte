<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  $: readingTime = `${Math.ceil(post.timeToRead.minutes)} minute${
    Math.ceil(post.timeToRead.minutes) > 1 ? "(s)" : ""
  } read`;
</script>

<style lang="scss">
  h1 {
    font-weight: 600;
    margin-top: 2rem;
  }

  img {
    object-fit: cover;
    margin: 0 auto;
    max-width: 100%;
    display: block;
    height: auto;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
    -webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
    transition: 250ms ease-in all;
    margin-bottom: 15px;
  }

  .post-meta {
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 2px;
  }

  .content {
    :global(h2) {
      font-size: 1.4em;
      font-weight: 500;
    }

    :global(pre) {
      background-color: #f9f9f9;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
      padding: 0.5em;
      border-radius: 2px;
      overflow-x: auto;
      :global(code) {
        background-color: transparent;
        padding: 0;
      }
    }

    :global(ul) {
      line-height: 1.5;
      :global(li) {
        margin: 0 0 0.5em 0;
      }
    }
  }
</style>

<svelte:head>
  <title>{post.frontmatter.title}</title>
</svelte:head>

<h1>{post.frontmatter.title}</h1>
<p class="post-meta">{new Date(post.frontmatter.date).toDateString()} ﹒ {readingTime}</p>
<img src={post.frontmatter.preview} alt={post.frontmatter.title} />

<div class="content">
  {@html post.contentHtml}
</div>
