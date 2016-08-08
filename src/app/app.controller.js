/**
 * Created by danieldihardja on 03/08/16.
 */
class AppController {

	constructor() {
		this.name = 'app';
		this.countLeft = 0;
	};

	toggleLeft() {
		console.log('toggle left ', this.countLeft);
		this.countLeft ++;
	}
}


export default AppController;