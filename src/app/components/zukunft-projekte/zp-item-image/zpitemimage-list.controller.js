/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemImageListController {

	constructor($state, $stateParams, $mdDialog, ZpItemImage) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.ZpItemImage = ZpItemImage;
		this.entities = [];
		this.init();
	}

	init() {
		var q = {
			filter: {}
		};
		this.ZpItemImage.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	newEntity() {
		// this.$state.go('', {});
	}

	editEntity(entity) {
		console.log('edit', entity);
		var params = {};
		// this.$state.go('', params);
	}

	deleteEntity(entity, ev) {
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
			this.ZpItemImage.deleteById({id: entity.id}, function() {
				this.init();
			}.bind(this))
		}.bind(this),
		function() {
			// cancel ...  do nothingh yet
		});
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
ZpItemImageListController.$inject = ['$state', '$stateParams', '$mdDialog', 'ZpItemImage'];
export default ZpItemImageListController;