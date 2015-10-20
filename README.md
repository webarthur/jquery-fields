# Form Fields jQuery Plugin

## jQuery Comparison

```js
# normal ways
$('form#id_form').find('input[name=age]').val(29);

# or
$('form#id_form input[name=age]').val(29);

# with plugin
form.age(29);


```

## Usage

Use the plugin as follows:

```js
var form = $('form#id_form').fieldValues();

form.name('Arthur');
form.age(29);
form.description('Web developer.');

var name = form.name();
```

## Get fields as objects

Use the plugin as follows:

```js
var form = $('form#id_form').fields();

form.name.val('Arthur');
form.age.hide();
form.description.css('height', 200);

```

