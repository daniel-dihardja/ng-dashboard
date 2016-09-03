/**
 * Created by danieldihardja on 03/09/16.
 */
class ImageCreateController {

	constructor($state, $stateParams, SvZfhilftImage) {

		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvZfhilftImage = SvZfhilftImage;

		this.zfhilftId = $stateParams.zfhilftId;
		this.title = "Neues Bild";
		this.image = "";
		this.asLogo = false;

		console.log('$stateParams', $stateParams);
	}

	save() {
		var type = this.asLogo ? "logo" : "image";
		var params = {
			svZfhilftId: this.zfhilftId,
			source: this.image,
			type: type
		};

		var _this = this;
		this.SvZfhilftImage.create(params, function(res) {
			console.log("created", res);
			_this.goBack();
		});

		console.log('save');
	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}
ImageCreateController.$inject = ['$state', '$stateParams', 'SvZfhilftImage'];
export default ImageCreateController;