/**
 * Created by danieldihardja on 25/09/16.
 */
class StateHistory {

	init($state, $rootScope) {
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.history = [];
		this.addToHistory = true;
		$rootScope.$on('$stateChangeSuccess', this.onStateChangeSuccess.bind(this));
		console.log('init');
	}

	onStateChangeSuccess(event, toState, toParams, fromState, fromParams, error) {
		if(! this.addToHistory) {
			this.addToHistory = true;
			return;
		}

		var history = localStorage.getItem('stateHistory');
		if(history) history = JSON.parse(history);
		else history = [];

		history.push({
			state: toState,
			params: toParams
		});

		console.log('history', history);
		localStorage.setItem('stateHistory', JSON.stringify(history));
	}

	back() {
		var history = JSON.parse(localStorage.getItem('stateHistory'));

		history.pop();

		console.log('history', history);
		var last = history[history.length - 1];

		// do not track states from history
		this.addToHistory = false;
		this.$state.go(last.state.name, last.params);

		localStorage.setItem('stateHistory', JSON.stringify(history));
	}
}
StateHistory.$inject = [];
export default StateHistory;