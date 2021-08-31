<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MVC Tech Blog</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <div class="wrapper">
    <header>
      <h1>
        <a href="/">MVC Tech Blog</a>
      </h1>
        <nav>
          <span><a href="/">home</a></span> 
          {{#if loggedIn}}
          <a href="/dashboard">dashboard</a>
          <button id="logout" class="btn-no-style">logout</button>
          {{else}}
          <a href="/login">login</a>
          {{/if}}
        </nav>
    </header>
    <main>
      {{{ body }}}
    </main>
    <footer>
      Thanks for visiting!
    </footer>
  </div>

  {{#if loggedIn}}
  <script src="/javascript/logout.js"></script>
  {{/if}}

</body>

</html>