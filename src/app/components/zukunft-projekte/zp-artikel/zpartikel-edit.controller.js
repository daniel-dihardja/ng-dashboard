/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelEditController {

	constructor($state, $stateParams, ZpArtikel) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikel = ZpArtikel;
		this.entity = $stateParams.entity;
		console.log(this.entity);
	}

	save() {
		var target = {id: this.entity.id};
		this.ZpArtikel.prototype$updateAttributes(target, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-station', {stationId: this.stationId});
	}
}
ZpArtikelEditController.$inject = ['$state', '$stateParams', 'ZpArtikel'];
export default ZpArtikelEditController;