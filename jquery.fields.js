/*!
 * jQuery Placeholder Plugin v1
 * https://github.com/webarthur/jquery-fields
 *
* Copyleft 2015 Arthur Araújo
 * Released under the MIT license
 */
 
(function($) {
		
	$.fn.fields=function(){
		
		var obj = {};
		
		this.each(function(i, form) {
			
			for ( var i = 0; i < form.elements.length; i++ ) {
				
				var e = form.elements[i];
				
				if( e.name ) obj[e.name] = $(e);
				
			}
			
		});
		
		return obj;
		
	};
	
	$.fn.fieldValues=function(){
		
		var obj = {};
		var form_selector = this['selector'];
		
		this.each(function(i, form) {
			
			for ( var i = 0; i < form.elements.length; i++ ) {
				
				var e = form.elements[i];
				
				if( e.name )
					obj[e.name] = Function('v', 'jQuery("'+form_selector+' [name='+e.name+']").val(v);');
				
			}
			
		});
		
		return obj;
		
	};
	
})(jQuery);
