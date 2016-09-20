/**
 * Created by danieldihardja on 08/09/16.
 */
class EbCategoryCreateController {

	constructor($state, $stateParams, EbCategory) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.EbCategory = EbCategory;
		this.entity = {};
	}

	save() {
		this.EbCategory.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.EbCategory-list');
	}
}

EbCategoryCreateController.$inject = ['$state', '$stateParams', 'EbCategory'];
export default EbCategoryCreateController;