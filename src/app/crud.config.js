/**
 * Created by danieldihardja on 19/09/16.
 */


class View {
	constructor(fields) {
		this.fields = fields;
	}
}

class ListView extends View{
	constructor() {
		super();
	}
}

class EditView extends View {
	constructor() {
		super();
	}
}

class CreationView extends View {
	constructor() {
		super();
	}
}

class Field {
	constructor(config) {

	}
}



var $crudProvider = {};
$crudProvider.setBaseURL('http://123.456.789:3000/api/v1/');

var ebCategory = $crudProvider.entity('EbCategory');


var listView = ebCategory.listView(filter);
listView.fields([
	new Field({}),
	new Field({})
])