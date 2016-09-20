/**
 * Created by danieldihardja on 08/09/16.
 */
class EbCategoryListController {

	constructor($state, $stateParams, $mdDialog, EbCategory, EbCategoryTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.EbCategory = EbCategory;
		this.EbCategoryTranslation = EbCategoryTranslation;

		this.entities = [];
		this.init();
	}

	init() {

		var w = null;
		if(this.$stateParams.belongsToEntity) {
			var belongsTo = this.$stateParams.belongsToEntity;
			w = {zpArtikelId: belongsTo.id}
		}

		var q = {
			filter: {
				where: w,
				include: 'translations',
				order: 'ranking ASC'
			}
		};
		this.EbCategory.find(q, function(res) {
			this.entities = res;
		}.bind(this));
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
				return this.EbCategory.deleteById({id: entity.id}).$promise;
			}.bind(this))

			.then(function(res) {
				this.init();
			}.bind(this))

	}

	deleteEntityTranslation(translation) {
		translation = translation || {id: 0};
		return this.EbCategoryTranslation.deleteById({id: translation.id}).$promise;
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

	rankUp(entity) {
		console.log('rank up', entity.ranking);
		for(var i=0; i<this.entities.length; i++) {
			var item = this.entities[i];
			if(item.id == entity.id) continue;
			if(item.ranking == entity.ranking - 1) {
				item.ranking = entity.ranking;
				item.$save();
				break;
			}
		}
		entity.ranking -= 1;
		if(entity.ranking < 1) entity.ranking = 1;
		entity.$save(function() {
			this.init();
		}.bind(this))
	}

	rankDown(entity) {
		console.log('rank down', entity.ranking);
		for(var i=0; i<this.entities.length; i++) {
			var item = this.entities[i];
			if(item.id == entity.id) continue;
			if(item.ranking == entity.ranking + 1) {
				item.ranking = entity.ranking;
				item.$save();
				break;
			}
		}
		entity.ranking += 1;
		entity.$save(function() {
			this.init();
		}.bind(this))
	}
}
EbCategoryListController.$inject = ['$state', '$stateParams', '$mdDialog', 'EbCategory', 'EbCategoryTranslation'];
export default EbCategoryListController;