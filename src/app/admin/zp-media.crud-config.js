/**
 * Created by danieldihardja on 20/09/16.
 */
function config($crudProvider) {

	var zpMedia = $crudProvider.model('ZpMedia');
	zpMedia.listView()
		.addField('title')
		.addField('publish')
}
export default config;