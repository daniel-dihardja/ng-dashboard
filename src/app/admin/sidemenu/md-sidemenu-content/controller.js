/**
 * Created by danieldihardja on 21/08/16.
 */
export default function() {

	this.visible = false;

	this.changeState = function() {
		this.visible = !this.visible;
	};

}