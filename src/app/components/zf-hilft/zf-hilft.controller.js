/**
 * Created by danieldihardja on 23/08/16.
 */

import appSettings from '../../app.settings';

class ZFHilftController {

	constructor($zfHilft, $files, $state) {
		var _this = this;

		_this.$state = $state;

		_this.$zfHilft = $zfHilft;
		_this.selectedImages = [];
		_this.selectedItems = [];
		_this.form = {};


		_this.baseUrl = appSettings.baseUrl + 'assets';


		// set data
		_this.init();
	}


	/**
	 * 	get ZF Hilft data
	 */

	init() {
		var _this = this;

		this.$zfHilft.getInstance().then(function(res) {
			console.log(res);

			_this.form = res;
			_this.translation = res.translations[0];
			_this.project = res.projects[0];
			_this.images = res.images;
			_this.projectItems = res.projects[0].items;

		});
	}

	editImage(img) {
		console.log('img', img);
		//this.$state.go('admin.image.create');
	}

	createImage() {
		this.$state.go('admin.zfhilft-image-create');
	}

	/**
	 * Save ZF Hilft and all its sub contents
	 */
	save() {

		this.$zfHilft.saveDefault(this.form);
		this.$zfHilft.saveTranslation(this.form);
		this.$zfHilft.saveProject(this.form);

		console.log(this.form);
	}
};

ZFHilftController.$inject = ['$zfHilft', '$files', '$state'];
export default ZFHilftController;
