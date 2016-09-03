/**
 * Created by danieldihardja on 03/09/16.
 */
class ImageEditController {

	constructor($state, $stateParams, SvZfhilftImage) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvZfhilftImage = SvZfhilftImage;

		this.entity = $stateParams.data.image;
		this.image = $stateParams.data.image.source;
		this.asLogo = $stateParams.data.image.type == 'logo' ? true : false;
 	}

 	save() {
		var _this = this;
 		var target = {id: this.entity.id};
 		var updates = {
 			source: _this.image,
			type: (_this.asLogo ? "logo" : "image")
		};

		this.SvZfhilftImage.prototype$updateAttributes(target, updates, function() {
			_this.$state.go('admin.zfhilft');
		})
	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}

ImageEditController.$inject = ['$state', '$stateParams', 'SvZfhilftImage'];
export default ImageEditController;