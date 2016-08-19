/**
 * Created by danieldihardja on 18/08/16.
 */
class LoginController {

	constructor($q, $auth, $state) {
		this.$q = $q;
		this.$auth = $auth;
		this.$state = $state;
		console.log('Login ...');
	}

	login() {
		console.log('submit ...', this.username, this.password);
		var defer = this.$q.defer();
		var _this = this;
		this.$auth.login(this.username, this.password)
			.then(function(res) {
				defer.resolve();
				_this.$state.go('admin');
			})
			.catch(function(err) {
				throw err
			});
		return defer.promise;
	}
}

LoginController.$inject = ['$q', '$auth', '$state'];
export default LoginController;