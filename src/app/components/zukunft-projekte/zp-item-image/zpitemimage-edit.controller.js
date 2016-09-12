/**
 * Created by danieldihardja on 08/09/16.
 */
class ZpItemImageEditController {

	constructor($state, $stateParams, ZpItemImage) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.ZpItemImage = ZpItemImage;
		this.entity = $stateParams.entity;
	}

	save() {
		var target = {id: this.entity.id};
		this.ZpItemImage.prototype$updateAttributes(target, this.entity, function(res) {
			this.goBack();
		}.bind(this))
	}

	goBack() {
		this.$state.go('admin.zukunft-projekte-edit-article', this.$stateParams);
	}
}
ZpItemImageEditController.$inject = ['$state', '$stateParams', 'ZpItemImage'];
export default ZpItemImageEditController;