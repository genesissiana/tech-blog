<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nothing But Tech</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
  <header>
    <nav>
      <a href="/" class="nav-link">Home</a>
      <a href="/dashboard" class="nav-link">Dashboard</a>
      {{#if loggedIn}}
      <button id="logout" class="nav-link">Logout</button>
      {{else}}
      <a href="/login" class="nav-link">Login</a>
      {{/if}}
    </nav>
    <h1>Nothing But Tech</h1>
  </header>
  <main>
    {{{ body }}}
  </main>
{{#if loggedIn}}
<script src="/javascript/logout.js"></script>
{{/if}}
</body>
</html>