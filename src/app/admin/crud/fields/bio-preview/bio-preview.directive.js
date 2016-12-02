/**
 * Created by danieldihardja on 02/12/16.
 */

import template from './bio-preview.html!text';

class BioPreview {

	constructor($sce) {
		this.$sce = $sce;
		this.restrict = 'E';
		this.template = template;
		this.scope = {
			label: '@',
			entity: '='
		};
	}

	link(scope, element, attrs) {
		setTimeout(function() {
			scope.bioHtml = this.$sce.trustAsHtml(scope.entity.bio);
		}.bind(this), 100);

		scope.$watch('entity.bio', function(newValue, oldValue) {
			scope.bioHtml = this.$sce.trustAsHtml(scope.entity.bio);
		}.bind(this), true);
	}

	static createInstance($sce) {
		return new BioPreview($sce);
	}
}
BioPreview.createInstance.$inject = ['$sce'];
export default BioPreview.createInstance;