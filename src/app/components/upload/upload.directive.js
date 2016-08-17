/**
 * Created by danieldihardja on 17/08/16.
 */
class UploadDirective {

	constructor($parse) {
		this.restrict = 'A';
		this.parse = $parse;
	}

	link(scope, element, attrs) {
		var model = this.parse(attrs.fileModel);
		var modelSetter = model.assign;
		element.bind('change', function(){
			scope.$apply(function(){
				modelSetter(scope, element[0].files[0]);
			});
		});
	}

	static directiveFactory($parse) {
		return new UploadDirective($parse);
	}
}

UploadDirective.directiveFactory.$inject = ['$parse'];
export default UploadDirective.directiveFactory;