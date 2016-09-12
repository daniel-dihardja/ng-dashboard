/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelListController {

	constructor($state, $stateParams, $mdDialog, ZpArtikel) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.ZpArtikel = ZpArtikel;
		this.entities = [];
		this.stationId = $stateParams.stationId;
		this.init();
	}

	init() {
		var q = {
			filter: {}
		};
		this.ZpArtikel.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	confirmDialog(text, ev) {
		text = text || '';
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(text)
			.ariaLabel('Lucky day')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');
		return confirm;
	}

	newEntity(stationId) {
		this.$state.go('admin.zukunft-projekte-create-article', {stationId: stationId});
	}

	editEntity(entity) {
		this.$state.go('admin.zukunft-projekte-edit-article', {
			stationId: entity.zpStationId,
			articleId: entity.id
		});
	}

	deleteEntity(entity, ev) {
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
			this.ZpArtikel.deleteById({id: entity.id}, function() {
				this.init();
			}.bind(this))
		}.bind(this),
		function() {

		});

	}
}
ZpArtikelListController.$inject = ['$state', '$stateParams', '$mdDialog', 'ZpArtikel'];
export default ZpArtikelListController;