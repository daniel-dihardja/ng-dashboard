/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor($state, AppUser, $rootScope, $stateHistory) {
		this.$state = $state;
		this.AppUser = AppUser;
		this.$rootScope = $rootScope;
		this.$stateHistory = $stateHistory;

		// start the state history navigator.
		// this ensure that the state params
		// are also being set whlie navigating
		// back to a previous state.
		this.$stateHistory.init($state, $rootScope);
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

	gotoZPMedia() {
		console.log('media');
	}

	logout() {
		this.AppUser.logout();
		this.$state.go('login');
	}
}

AppController.$inject = ['$state', 'AppUser', '$rootScope', '$stateHistory'];
export default AppController;