class Cs142TemplateProcessor{
	constructor(template){
		this.template=template;

	}
	fillIn(dictionary){
		var txt = this.template;
		var x =txt.match(/{{[^{}]*}}/g);
		
		
		 for (var key in dictionary) {	
            var re = new RegExp('\\{\\{' + key + '\\}\\}');
            txt = txt.replace(re, dictionary[key]);
        }
        txt = txt.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
        console.log(txt);
        return txt;

	}
}