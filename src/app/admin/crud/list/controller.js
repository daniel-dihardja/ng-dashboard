/**
 * Created by danieldihardja on 19/09/16.
 */
class ListController {

	constructor($state, $stateParams, $injector, $crud, $mdDialog, $stateHistory) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$mdDialog = $mdDialog;
		this.$stateHistory = $stateHistory;

		this.model = $injector.get($stateParams.model);
		this.modelTranslation = $injector.get($stateParams.model + 'Translation');


		var crudView = $crud.model($stateParams.model).listView();

		this.fields = crudView.fields();
		this.useBackButton = crudView.useBackButton();

		this.filterKey
		this.filterValue;
		var filterPair;

		if($stateParams.filter) {
			filterPair = $stateParams.filter.split('=');

			// hardcode for now. refactore later !!!
			if(filterPair && filterPair.length == 2) {
				this.filterKey = filterPair[0];
				this.filterValue = filterPair[1];
			}

		}

		console.log($stateParams);

		this.init();
	}

	init() {
		this.filter = this.filter || null;
		var q = {
			filter: {
				where: {},
				include: 'translations',
				order: 'ranking ASC'
			}
		};
		this.model.find(q).$promise
			.then(function(res) {
				this.entities = res;
			}.bind(this));
	}

	confirmDialog(text, ev) {
		text = text || '';
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(text)
			.ariaLabel('Delete')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');
		return confirm;
	}

	editItem(entity) {
		var id = entity.id;
		var model = this.$stateParams.model;
		this.$state.go('admin.crud-edit', {model: model, id: id});
	}

	deleteItem(entity, ev) {
		entity = entity.toJSON();
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
				this.deleteEntity(entity);
			}.bind(this),
			function() {
				// cancel ...  do nothingh yet
			}.bind(this));
	}

	deleteEntity(entity) {
		this.deleteEntityTranslation(entity.translations[0])
			.then(function(res) {
				return this.model.deleteById({id: entity.id}).$promise;
			}.bind(this))

			.then(function(res) {
				this.init();
			}.bind(this))
	}

	deleteEntityTranslation(translation) {
		translation = translation || {id: 0};
		return this.modelTranslation.deleteById({id: translation.id}).$promise;
	}

	rankUp(entity) {
		for(var i=0; i<this.entities.length; i++) {
			var item = this.entities[i];
			if(item.id == entity.id) continue;
			if(item.ranking == entity.ranking - 1) {
				item.ranking = entity.ranking;
				item.$save();
			}
		}
		entity.ranking -= 1;
		if(entity.ranking < 1) entity.ranking = 1;
		entity.$save(function() {
			this.init();
		}.bind(this))
	}

	rankDown(entity) {
		for(var i=0; i<this.entities.length; i++) {
			var item = this.entities[i];
			if(item.id == entity.id) continue;
			if(item.ranking == entity.ranking + 1) {
				item.ranking = entity.ranking;
				item.$save();
			}
		}

		entity.ranking += 1;
		entity.$save(function() {
			this.init();
		}.bind(this))
	}

	newEntity() {
		this.$state.go('admin.crud-create', {model: this.$stateParams.model, filter: this.$stateParams.filter});
	}

	back() {
		this.$stateHistory.back();
	}
}

ListController.$inject = ['$state', '$stateParams', '$injector', '$crud', '$mdDialog', '$stateHistory'];
export default ListController;