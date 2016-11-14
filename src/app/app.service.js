/**
 * Created by danieldihardja on 14/11/16.
 */
class AppService {
	constructor() {
		this._username;
	}

	username(name) {
		if(! name) return this._username;
		this._username = name;
	}
}
export default AppService;