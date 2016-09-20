/**
 * Created by danieldihardja on 08/09/16.
 */
class EbMediaCreateController {

	constructor($state, $stateParams, EbMedia) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.EbMedia = EbMedia;
		this.entity = {};
	}

	save() {
		this.EbMedia.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.EbMedia-list');
	}
}

EbMediaCreateController.$inject = ['$state', '$stateParams', 'EbMedia'];
export default EbMediaCreateController;