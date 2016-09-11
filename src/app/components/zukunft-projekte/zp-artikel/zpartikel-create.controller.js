/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpArtikelCreateController {

	constructor($state, $stateParams, ZpArtikel) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpArtikel = ZpArtikel;
		this.entity = {};
		this.entity.zpStationId = $stateParams.stationId;
	}

	save() {
		this.ZpArtikel.create(this.entity, function(res) {
			console.log('new entity created');
			this.goBack();

		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-station', {stationId: this.entity.zpStationId});
	}
}

ZpArtikelCreateController.$inject = ['$state', '$stateParams', 'ZpArtikel'];
export default ZpArtikelCreateController;