/**
 * Created by danieldihardja on 09/08/16.
 */
import CrudEntity from './crud-entity';

class CrudFactory {

	constructor() {
		this.baseApiUrl = "http://localhost";
		this.entities = {};
	}

	baseApiUrl(url) {
		this.baseApiUrl = url;
	}

	addEntity(name) {
		return new CrudEntity();
	}

	getEntity(name) {
		return this.entities[name];
	}

	$get() {
		return {
			hello: () => {}
		}
	}
}

export default CrudFactory;