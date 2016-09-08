/**
 * Created by danieldihardja on 03/09/16.
 */

class PImageEdit {

	constructor($state, $stateParams, SvHilfsprojektItemImage) {

		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvHilfsprojektItemImage = SvHilfsprojektItemImage;

		this.form = {};
		this.form = this.$stateParams.data;
	}

	save() {
		var target = {id: this.form.id};
		var _this = this;
		this.SvHilfsprojektItemImage.prototype$updateAttributes(target, this.form, function() {
			_this.goBack();
		});
	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}

PImageEdit.$inject = ['$state', '$stateParams', 'SvHilfsprojektItemImage'];
export default PImageEdit;