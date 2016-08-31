/**
 * Created by danieldihardja on 23/08/16.
 */

class ZFHilftController {

	constructor($zfHilft, $scope) {

		this.$zfHilft = $zfHilft;
		this.$scope = $scope;

		this.selectedImages = [];
		this.selectedItems = [];


		this.form = {};



		// set data
		this.init();
	}


	/**
	 * 	get ZF Hilft data
	 */

	init() {
		var _this = this;

		this.$zfHilft.getInstance().then(function(res) {
			console.log(_this.form);

			_this.form = res;
			_this.translation = res.translations[0];

			/*
			_this.images = res.images;
			_this.project = res.projects[0];
			_this.projectItems = res.projects[0].items;
			*/

		});
	}

	/**
	 * Save ZF Hilft and all its sub contents
	 */
	save() {
		//this.$zfHilft.saveDefault(this.form);
		this.$zfHilft.saveTranslation(this.form);
	}
};

ZFHilftController.$inject = ['$zfHilft', '$scope'];
export default ZFHilftController;
