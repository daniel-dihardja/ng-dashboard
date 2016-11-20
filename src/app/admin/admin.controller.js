/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor($state, AppUser, $rootScope, $stateHistory, $mdToast, $filter) {
		this.$state = $state;
		this.AppUser = AppUser;
		this.$rootScope = $rootScope;
		this.$stateHistory = $stateHistory;
		this.$mdToast = $mdToast;
		this.$filter = $filter;

		// start the state history navigator.
		// this ensure that the state params
		// are also being set whlie navigating
		// back to a previous state.
		this.$stateHistory.init($state, $rootScope);

		this.$rootScope.$on('toast', this.showToast.bind(this));
	};

	logout() {
		localStorage.setItem('stateHistory', []);
		this.AppUser.logout();
		this.$state.go('login');
	}

	showToast(evt, data) {
		this.$mdToast.show(
			this.$mdToast.simple()
				.textContent(data)
				.position('top right')
				.hideDelay(1000)
		)
	}
}

AppController.$inject = ['$state', 'AppUser', '$rootScope', '$stateHistory', '$mdToast', '$filter'];
export default AppController;