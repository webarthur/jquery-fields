###!
# jQuery Placeholder Plugin v1
# https://github.com/webarthur/jquery-fields
#
* Copyleft 2015 Arthur Araújo
# Released under the MIT license
###

(($) ->

  # Work with field values
  $.fn.fields = ->

    fields = {}

    @each (i, form) ->
      for el in form.elements when el.name isnt null
        fields[el.name] = $(el)
    fields

  # Work with field objects
  $.fn.fieldValues = ->

    fields = {}
    form_selector = @['selector']

    @each (i, form) ->
      for el in form.elements when el.name isnt null
        fields[el.name] = Function 'v', "
          var o=jQuery('#{ form_selector } [name=#{ el.name }]');
          return v? o.val(v) : o.val();
        "
    fields

  return

) jQuery
