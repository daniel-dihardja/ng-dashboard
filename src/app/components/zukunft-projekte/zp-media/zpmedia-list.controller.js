/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpMediaListController {

	constructor($state, $stateParams, $mdDialog, ZpMedia, ZpMediaTranslation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.ZpMedia = ZpMedia;
		this.ZpMediaTranslation = ZpMediaTranslation;

		this.entities = [];
		this.init();
	}

	init() {
		var q = {
			filter: {
				include: 'translations'
			}
		};
		this.ZpMedia.find(q, function(res) {
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
				return this.ZpMedia.deleteById({id: entity.id}).$promise;
			}.bind(this))

			.then(function(res) {
				this.init();
			}.bind(this))

	}

	deleteEntityTranslation(translation) {
		translation = translation || {id: 0};
		return this.ZpMediaTranslation.deleteById({id: translation.id}).$promise;
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
}
ZpMediaListController.$inject = ['$state', '$stateParams', '$mdDialog', 'ZpMedia', 'ZpMediaTranslation'];
export default ZpMediaListController;