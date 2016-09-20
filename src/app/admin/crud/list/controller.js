/**
 * Created by danieldihardja on 19/09/16.
 */
class ListController {

	constructor($state, $stateParams, $injector, $crud, $mdDialog) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$injector = $injector;
		this.$crud = $crud;
		this.$mdDialog = $mdDialog;

		this.model = $injector.get($stateParams.model);
		this.modelTranslation = $injector.get($stateParams.model + 'Translation');
		this.fields = $crud.model($stateParams.model).listView().fields();

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
}

ListController.$inject = ['$state', '$stateParams', '$injector', '$crud', '$mdDialog'];
export default ListController;