/**
 * Created by danieldihardja on 23/08/16.
 */

import appSettings from '../../app.settings';

class ZFHilftController {

	constructor($scope, $zfHilft, $state, $mdDialog, SvZfhilftImage, SvHilfsprojektItem, SvHilfsprojektItemImage, SvHilfsprojektItemVideo) {
		var _this = this;

		_this.$scope = $scope;
		_this.$zfHilft = $zfHilft;
		_this.$state = $state;
		_this.$mdDialog = $mdDialog;
		_this.SvZfhilftImage = SvZfhilftImage;
		_this.SvHilfsprojektItem = SvHilfsprojektItem;
		_this.SvHilfsprojektItemImage = SvHilfsprojektItemImage;
		_this.SvHilfsprojektItemVideo = SvHilfsprojektItemVideo;

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

	confirmDialog(text, ev) {
		text = text || '';
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(text)
			.ariaLabel('Lucky day')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');
		return confirm;
	}

	deleteImage(img, ev) {
		var _this = this;
		this.$mdDialog.show(this.confirmDialog(img.source, ev)).then(function() {
			_this.SvZfhilftImage.deleteById({id: img.id}, function() {
				_this.init();
			})
		}, function() {
			//$scope.status = 'You decided to keep your debt.';
		});

		console.log(img);
	}

	createPItem(type) {
		var params = {
			type: type,
			zfhilftId: this.form.id,
			zfHilfsprojektId: this.form.projects[0].id
		};

		if(type == 'image') this.$state.go('admin.zfhilft-pimage-create', params);
		else if(type == 'video') this.$state.go('admin.zfhilft-pvideo-create', params);
	}

	editPItem(item) {
		if(item.type == 'image') this.editProjectImage(item);
	}

	deletePItem(item) {
		if(item.type == 'image') this.deleteProjectImage(item);
		else if(item.type == 'video') this.deleteProjectVideo(item);
	}

	editProjectImage(image) {
		var params = {
			zfhilftId: this.form.id,
			zfHilfsprojektId: image.svHilfsprojektItemId,
			type: 'image',
			id: image.id,
			data: image
		};
		this.$state.go('admin.zfhilft-pimage-edit', params);
	}

	deleteProjectImage(img, ev) {
		var _this = this;
		this.$mdDialog.show(this.confirmDialog(img.image, ev)).then(function() {
			_this.SvHilfsprojektItemImage.deleteById({id: img.id}, function() {
				_this.SvHilfsprojektItem.deleteById({id: img.svHilfsprojektItemId}, function() {
					_this.init();
				})
			})
		}, function() {
			//$scope.status = 'You decided to keep your debt.';
		});

		console.log(img);
	}

	deleteProjectVideo(video, ev) {
		var _this = this;
		this.$mdDialog.show(this.confirmDialog(video.video, ev)).then(function() {
			_this.SvHilfsprojektItemVideo.deleteById({id: video.id}, function() {
				_this.SvHilfsprojektItem.deleteById({id: video.svHilfsprojektItemId}, function() {
					_this.init();
				})
			})
		}, function() {
			//$scope.status = 'You decided to keep your debt.';
		});

		console.log(video);
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

ZFHilftController.$inject = ['$scope', '$zfHilft', '$state', '$mdDialog', 'SvZfhilftImage', 'SvHilfsprojektItem', 'SvHilfsprojektItemImage', 'SvHilfsprojektItemVideo'];
export default ZFHilftController;
