/**
 * Created by danieldihardja on 01/09/16.
 */
class DialogController {

	constructor($mdDialog, files, selectedFile) {
		this.$mdDialog = $mdDialog;
		this.files = files;
		this.selectedFile = selectedFile;
		console.log(this.selectedFile);
	}

	hide() {
		this.$mdDialog.hide();
	}

	cancel() {
		this.$mdDialog.cancel();
	}

	answer(a) {
		this.$mdDialog.hide(this.selectedFile);
	}
}

DialogController.$inject = ['$mdDialog', 'files', 'selectedFile'];
export default  DialogController;