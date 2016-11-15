/**
 * Created by danieldihardja on 12/10/16.
 */
class FroalaTestController {
	constructor() {
		$('#froala-edit').froalaEditor({
			toolbarButtons: ['paragraphFormat', 'bold', 'italic', 'formatUL', 'html']
		});
	}
}
export default FroalaTestController;