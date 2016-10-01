# jsRemember
The **jsRemember** plugin saves form entries to local storage preventing loss of data on browser crashing. It will work with most common form elements such as `Text`, `Textarea`, `Password`, `Select (Combobox)`, `Radio`, and `Checkbox`.

Supported browsers include IE6+, FF2+, Safari4+, Chrome4+, Android 2+, and Opera 10.5+.

In short, if you fill in a form and close the browser, when you come back again, your data will be still there. But when the page is submitted, all stored data is cleared.

It requires [jStorage](http://www.jstorage.info/) by Andris Reinman to work (included along with the download package).

Using the Code
--------------

Using **jsRemember** is quite easy! Just call it like any other JavaScript code like this:

```html
<head>
...
<script src="js/json2.js"></script>
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/jstorage.js"></script>
<script src="js/jsRemember.js"></script>
... 
</head>
```

And then, all you need to do is get free writing your HTML forms because **jsRemember** doesn't depend on an element's name, ID, or CSS class to work. Just call it and you are done!

```html
...
<form>
    Text field: <input type="text" size="30">
</form>
...
```

See the online demo [here](http://celsojr.com/demos/jsremember/index.html).

That's it! Hope this saves your time dealing with cookies, view state, or something. Enjoy!

Thanks for your time reading this.

History
-------

* 07-26-2013: Original publishing date
