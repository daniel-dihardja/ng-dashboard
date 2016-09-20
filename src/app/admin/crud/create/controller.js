/**
 * Created by danieldihardja on 19/09/16.
 */
class CreateController {

	constructor($state, $stateParams, $injector, $crud, $window) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$window = $window;

		this.model = $injector.get($stateParams.model);
		this.fields = $crud.model($stateParams.model).createView().fields();
		this.entity = {};
	}

	save() {
		this.model.create(this.entity).$promise
			.then(function() {
				this.back();
			}.bind(this))
	}

	back() {
		this.$window.history.back();
	}
}
CreateController.$inject = ['$state', '$stateParams', '$injector', '$crud', '$window'];
export default CreateController;