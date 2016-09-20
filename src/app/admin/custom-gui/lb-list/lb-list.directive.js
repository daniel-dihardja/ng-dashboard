/**
 * Created by danieldihardja on 19/09/16.
 */

import template from './lb-list.html!text';

class LBServiceDirective {

	constructor() {
		this.restrict = "E";
		this.template = template;
		this.scope = {
			entity: '@',
			filter: '@',
			fields: '@'
		}
	}

	link(scope, element, attrs) {
		scope.rankUp = this.rankUp.bind(this);
		scope.rankDown = this.rankDown.bind(this);
		scope.fields = scope.fields.split(',');
	}

	rankUp() {

	}

	rankDown() {

	}

	static directiveFactory() {
		return new LBServiceDirective();
	}
}

LBServiceDirective.directiveFactory.$inject = [];
export default LBServiceDirective.directiveFactory