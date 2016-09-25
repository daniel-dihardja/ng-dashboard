/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpMediaCreateController {

	constructor($state, $stateParams, ZpMedia) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpMedia = ZpMedia;
		this.entity = {};
	}

	save() {
		this.ZpMedia.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.ZpMedia-list');
	}
}

ZpMediaCreateController.$inject = ['$state', '$stateParams', 'ZpMedia'];
export default ZpMediaCreateController;