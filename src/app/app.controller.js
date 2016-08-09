/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor() {
		this.name = 'app';
		this.countLeft = 0;
	};

	toggleLeft() {
		this.countLeft ++;
		console.log('toggle left ', this.countLeft);
	};

	menuClick(state) {
		console.log('menu click', state);
	};
}

export default AppController;