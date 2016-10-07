/**
 * Created by danieldihardja on 19/09/16.
 */
class CreateController {

	constructor($state, $stateParams, $injector, $crud, $stateHistory) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$stateHistory = $stateHistory;

		this.model = $injector.get($stateParams.model);


		var crudView = $crud.model($stateParams.model).createView();
		this.fields = crudView.fields();
		var title = crudView.title() || $stateParams.title  || 'Neu';
		if($stateParams.prevTitle) {
			title = $stateParams.prevTitle + ' / ' + title;
		}
		this.title = title;
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

		this.init();

	}

	init() {
		this.model.count().$promise
			.then(function(res) {
				this.entity.ranking = res.count + 1;
			}.bind(this))
	}

	save() {
		this.entity.publish = 0;
		this.model.create(this.entity).$promise
			.then(function() {
				//this.back();
			}.bind(this))
	}

	back() {
		this.$stateHistory.back();
	}
}
CreateController.$inject = ['$state', '$stateParams', '$injector', '$crud', '$stateHistory'];
export default CreateController;