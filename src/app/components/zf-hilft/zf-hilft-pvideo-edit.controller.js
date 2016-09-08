/**
 * Created by danieldihardja on 03/09/16.
 */

class PVideoEdit {

	constructor($state, $stateParams, SvHilfsprojektItemVideo) {

		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvHilfsprojektItemVideo = SvHilfsprojektItemVideo;

		this.form = {};
		this.form = this.$stateParams.data;
	}

	save() {
		var target = {id: this.form.id};
		var _this = this;
		this.SvHilfsprojektItemVideo.prototype$updateAttributes(target, this.form, function() {
			_this.goBack();
		});
	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}

PVideoEdit.$inject = ['$state', '$stateParams', 'SvHilfsprojektItemVideo'];
export default PVideoEdit;