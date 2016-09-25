/**
 * Created by danieldihardja on 25/09/16.
 */
class StateHistory {

	init($state, $rootScope) {
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.history = [];
		$rootScope.$on('$stateChangeSuccess', this.onStateChangeSuccess.bind(this));

		this.addToHistory = true;
	}

	onStateChangeSuccess(event, toState, toParams, fromState, fromParams, error) {
		if(! this.addToHistory) {
			// reset the history lock
			this.addToHistory = true;
			return;
		}

		this.history.push({
			state: toState,
			params: toParams
		});
	}

	back() {
		this.history.pop();
		var last = this.history[this.history.length - 1];

		// do not track states from history
		this.addToHistory = false;


		this.$state.go(last.state.name, last.params);
	}
}
StateHistory.$inject = [];
export default StateHistory;