/**
 * Created by danieldihardja on 08/09/16.
 */
class PVideoCreate {

	constructor($state, $stateParams, SvHilfsprojektItem, SvHilfsprojektItemVideo) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.SvHilfsprojektItem = SvHilfsprojektItem;
		this.SvHilfsprojektItemVideo = SvHilfsprojektItemVideo;
		this.form = {};

		console.log(this.$stateParams);
	}

	save() {
		var _this = this;
		this.SvHilfsprojektItem.create({zfHilfsprojektId: this.$stateParams.zfHilfsprojektId}, function(res) {
			var _params = {
				svHilfsprojektItemId: res.id,
				dateString: _this.form.dateString,
				info: _this.form.info,
				image: _this.form.image,
				video: _this.form.video,
				type: 'video'
			};

			console.log('create', _params);

			_this.SvHilfsprojektItemVideo.create(_params, function() {
				_this.goBack();
			});
		});

	}

	goBack() {
		this.$state.go('admin.zfhilft');
	}
}
PVideoCreate.$inject = ['$state', '$stateParams', 'SvHilfsprojektItem', 'SvHilfsprojektItemVideo'];
export default PVideoCreate;
