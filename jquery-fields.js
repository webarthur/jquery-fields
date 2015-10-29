
/*!
 * jQuery Placeholder Plugin v1
 * https://github.com/webarthur/jquery-fields
 *
* Copyleft 2015 Arthur Araújo
 * Released under the MIT license
 */
(function($) {
  $.fn.fields = function() {
    var fields;
    fields = {};
    this.each(function(i, form) {
      var el, j, len, ref, results;
      ref = form.elements;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        el = ref[j];
        if (el.name !== null) {
          results.push(fields[el.name] = $(el));
        }
      }
      return results;
    });
    return fields;
  };
  $.fn.fieldValues = function() {
    var fields, form_selector;
    fields = {};
    form_selector = this['selector'];
    this.each(function(i, form) {
      var el, j, len, ref, results;
      ref = form.elements;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        el = ref[j];
        if (el.name !== null) {
          results.push(fields[el.name] = Function('v', "var o=jQuery('" + form_selector + " [name=" + el.name + "]'); return v? o.val(v) : o.val();"));
        }
      }
      return results;
    });
    return fields;
  };
})(jQuery);
