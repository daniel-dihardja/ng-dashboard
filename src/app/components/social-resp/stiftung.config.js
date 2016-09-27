/**
 * Created by danieldihardja on 27/09/16.
 */
/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var stiftung = $crudProvider.model('SvStiftung');

	stiftung.listView()
		.title('Stiftung')
		.field('title')

	stiftung.createView()
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('left')
		.field('top')
		.field('subText')
		.field('content')
		.field('thumbnail', 'file', {container: 'assets'})
		.field('videoSource', 'file', {container: 'assets'})
		.field('videoSlug')
		.field('videoComponent')
		.field('videoTitle');

	stiftung.editView()
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('left')
		.field('top')
		.field('subText')
		.field('content')
		.field('thumbnail', 'file', {container: 'assets'})
		.field('videoSource', 'file', {container: 'assets'})
		.field('videoSlug')
		.field('videoComponent')
		.field('videoTitle')

		.translationKey('svStiftungId')
		.translationField('title')
		.translationField('slug')
		.translationField('description', 'text')
		.translationField('image', 'file', {container: 'assets'})
		.translationField('subText')
		.translationField('content')
		.translationField('thumbnail', 'file', {container: 'assets'})
		.translationField('videoSource', 'file', {container: 'assets'})
		.translationField('videoSlug')
		.translationField('videoTitle')
}
export default config;