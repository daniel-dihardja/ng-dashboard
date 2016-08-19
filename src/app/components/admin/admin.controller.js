/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor($state) {
		this.$state = $state;
	};

	gotoImages() {
		this.$state.go('admin.filelist', {container: 'images'});
	}

	gotoVideos() {
		this.$state.go('admin.filelist', {container: 'videos'});
	}
}

AppController.$inject = ['$state'];
export default AppController;