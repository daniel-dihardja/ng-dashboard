/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemVideoEditController {

	constructor($state, $stateParams, ZpItemVideo) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpItemVideo = ZpItemVideo;
		this.entity = $stateParams.entity;
	}

	save() {
		var target = {id: this.entity.id};
		this.ZpItemVideo.prototype$updateAttributes(target, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-edit-article', this.$stateParams);
	}
}
ZpItemVideoEditController.$inject = ['$state', '$stateParams', 'ZpItemVideo'];
export default ZpItemVideoEditController;