<script>
  export let isFirst;
  export let isLast;
  export let page;

  $: currentPage = Number(page);
</script>

<style lang="scss">
  .pagination-container {
    margin: 5px auto;
    text-align: center;
  }
  .pagination {
    display: inline-block;
    box-shadow: 0 4px 20px rgba(100, 100, 100, 0.15);
    border-radius: 10px;

    a {
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 10px;
      &:hover:not(.disabled) {
        background-color: #efefef;
      }
      &.disabled {
        cursor: not-allowed;
        color: #a9a9a9;
      }
    }
  }
</style>

<div class="pagination-container">
  <div class="pagination">
    <a
      class:disabled={isFirst}
      href="/{!isFirst ? (currentPage === 2 ? '' : currentPage - 1) : ''}">
      Previous Page
    </a>
    <a class:disabled={isLast} href="/{!isLast ? currentPage + 1 : ''}">
      Next Page
    </a>
  </div>
</div>
