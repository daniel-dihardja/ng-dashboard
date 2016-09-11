/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor($state, AppUser) {
		this.$state = $state;
		this.AppUser = AppUser;
	};

	gotoImages() {
		this.$state.go('admin.filelist', {container: 'images'});
	}

	gotoVideos() {
		this.$state.go('admin.filelist', {container: 'videos'});
	}

	gotoZPArticles(stationId) {
		console.log('stationId', stationId);
		this.$state.go('admin.zukunft-projekte-station', {stationId: stationId});
	}

	logout() {
		this.AppUser.logout();
		this.$state.go('login');
	}
}

AppController.$inject = ['$state', 'AppUser'];
export default AppController;