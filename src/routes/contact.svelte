<style lang="scss">
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  h1 {
    font-weight: 600;
    margin-top: 2rem;
    text-align: center;
  }
  label {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  input,
  textarea {
    padding: 10px 5px;
    font-size: 16px;
    border: 2px solid #dedede;
    border-radius: 5px;
    max-width: 100%;
  }
  .button-container {
    text-align: right;
    button {
      padding: 8px 20px;
      background: #dedede;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        background: #cdcdcd;
      }
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="container">
  <h1>Contact Page</h1>

  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>
        Your Name:
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email:
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Message:
        <textarea name="message" rows="8" />
      </label>
    </p>
    <p class="button-container">
      <button type="submit">Contact Us</button>
    </p>
  </form>
</div>
