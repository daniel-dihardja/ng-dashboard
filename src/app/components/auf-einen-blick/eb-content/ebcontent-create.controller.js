/**
 * Created by danieldihardja on 08/09/16.
 */
class EbContentCreateController {

	constructor($state, $stateParams, EbContent) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.EbContent = EbContent;
		this.entity = {};
	}

	save() {
		this.EbContent.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.EbContent-list');
	}
}

EbContentCreateController.$inject = ['$state', '$stateParams', 'EbContent'];
export default EbContentCreateController;