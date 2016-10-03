/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './led-preview.html!text';

class LedPreview {

	constructor() {
		this.restrict = 'E';
		this.template = template;
		this.scope = {
			label: '@',
			entity: '='
		};
	}

	link(scope) {
		console.log('link', scope);
	}

	static createInstance() {
		return new LedPreview();
	}
}

export default LedPreview.createInstance;
