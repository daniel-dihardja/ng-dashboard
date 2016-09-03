/**
 * Created by danieldihardja on 23/08/16.
 */

import appSettings from '../../app.settings';

class ZFHilftController {

	constructor($scope, $zfHilft, $state, $mdDialog, SvZfhilftImage) {
		var _this = this;

		_this.$scope = $scope;
		_this.$zfHilft = $zfHilft;
		_this.$state = $state;
		_this.$mdDialog = $mdDialog;
		_this.SvZfhilftImage = SvZfhilftImage;

		_this.selectedImages = [];
		_this.selectedItems = [];
		_this.form = {};

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
		console.log(img);
		this.$state.go('admin.zfhilft-image-edit', {data: {image: img}});
	}

	createImage() {
		this.$state.go('admin.zfhilft-image-create', {zfhilftId: this.form.id});
	}

	deleteImage(img, ev) {
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(img.source)
			.ariaLabel('Lucky day')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');

		var _this = this;
		this.$mdDialog.show(confirm).then(function() {
			_this.SvZfhilftImage.deleteById({id: img.id}, function() {
				_this.init();
			})
		}, function() {
			//$scope.status = 'You decided to keep your debt.';
		});

		console.log(img);
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

ZFHilftController.$inject = ['$scope', '$zfHilft', '$state', '$mdDialog', 'SvZfhilftImage'];
export default ZFHilftController;
