/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemVideoListController {

	constructor($state, $stateParams, $mdDialog, ZpItemVideo) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.ZpItemVideo = ZpItemVideo;
		this.entities = [];
		this.init();
	}

	init() {
		var q = {
			filter: {}
		};
		this.ZpItemVideo.find(q, function(res) {
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
			this.ZpItemVideo.deleteById({id: entity.id}, function() {
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
ZpItemVideoListController.$inject = ['$state', '$stateParams', '$mdDialog', 'ZpItemVideo'];
export default ZpItemVideoListController;