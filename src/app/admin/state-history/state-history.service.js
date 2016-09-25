/**
 * Created by danieldihardja on 25/09/16.
 */
class StateHistory {

	init($state, $rootScope) {
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.history = [];
		$rootScope.$on('$stateChangeSuccess', this.onStateChangeSuccess.bind(this))
	}

	onStateChangeSuccess(event, toState, toParams, fromState, fromParams, error) {
		this.history.push({
			state: toState,
			params: toParams
		});

		console.log(this.history);
	}

	back() {
		this.history.pop();
		var last = this.history[this.history.length - 1];
		this.$state.go(last.state.name, last.params);
	}
}
StateHistory.$inject = [];
export default StateHistory;