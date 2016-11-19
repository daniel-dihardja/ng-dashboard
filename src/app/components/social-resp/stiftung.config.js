/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		maxWidth: settings.surfaceWidth,
		maxHeight: settings.surfaceHeight
	};

	var stiftung = $crudProvider.model('SvStiftung');

	stiftung.listView()
		.title('Stiftung')
		.field('title');

	stiftung.createView()
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text')
		.field('image', 'file', imgOptions)
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('subText')
		.field('content')
		.field('thumbnail', 'file', imgOptions)
		.field('videoSource', 'file', imgOptions)
		.field('videoSlug', null, {showOnly: 'admin'})
		.field('videoComponent', null, {showOnly: 'admin'})
		.field('videoTitle');

	stiftung.editView()
		.title('Stiftung')
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text')
		.field('image', 'file', imgOptions)
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('subText')
		.field('content')
		.field('thumbnail', 'file', imgOptions)
		.field('videoSource', 'file', imgOptions)
		.field('videoSlug', null, {showOnly: 'admin'})
		.field('videoComponent', null, {showOnly: 'admin'})
		.field('videoTitle')

		.translationKey('svStiftungId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('image', 'file', imgOptions)
		.translationField('subText')
		.translationField('content')
		.translationField('thumbnail', 'file', imgOptions)
		.translationField('videoSource', 'file', imgOptions)
		.translationField('videoTitle')
}
export default config;