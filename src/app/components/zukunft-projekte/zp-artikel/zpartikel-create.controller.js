/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelCreateController {

	constructor($state, $stateParams, ZpArtikel) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikel = ZpArtikel;
		this.entity = {};
	}

	save() {
		this.ZpArtikel.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.ZpArtikel-list');
	}
}

ZpArtikelCreateController.$inject = ['$state', '$stateParams', 'ZpArtikel'];
export default ZpArtikelCreateController;