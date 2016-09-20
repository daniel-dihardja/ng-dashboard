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

		var filterKey;
		var filterValue;
		var filterPair;


		if($stateParams.filter) {
			filterPair = $stateParams.filter.split('=');
			// hardcode for now. refactore later !!!
			if(filterPair && filterPair.length == 2) {
				filterKey = filterPair[0];
				filterValue = filterPair[1];
				this.entity[filterKey] = filterValue;
			}
		}

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