/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelMediaCreateController {

	constructor($state, $stateParams, ZpArtikelMedia) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikelMedia = ZpArtikelMedia;
		this.entity = {};
	}

	save() {
		this.ZpArtikelMedia.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.ZpArtikelMedia-list');
	}
}

ZpArtikelMediaCreateController.$inject = ['$state', '$stateParams', 'ZpArtikelMedia'];
export default ZpArtikelMediaCreateController;