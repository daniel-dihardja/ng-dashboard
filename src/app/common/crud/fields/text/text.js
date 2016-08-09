/**
 * Created by danieldihardja on 09/08/16.
 */
import template from './text.html!text';
//import controller from './text.controller';

class TextDSirective {

	constructor() {
		//this.controller = controller;
		this.template = template;
		this.restrict = 'E';
		this.scope = {};
		console.log('text directive');
	}

	compile(elem) {

	}

	link(scope, element) {

	}
}

export default TextDSirective;