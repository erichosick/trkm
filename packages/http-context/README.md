# **@trkm/http-context**

`http-context` is a small package that pulls values from different sources on a webpage (cookies, heading, web page parameters, etc. and place them in a json object for later processing.

## Features

* Easily get the context of a webpage including cookies, headers, http parameters in an easily consumable object.

## Usage

### Converting Cookies to an Object

```html
<head>
  <script src="../dist/bundle.js"></script>
</head>

<body>
  <script>
    const cookieObj = trkm.http.cookiesToObj(document.cookie);
    console.log(cookieObj);
  </script>
  <h1>Checkout the console.</h1>
</body>
```
