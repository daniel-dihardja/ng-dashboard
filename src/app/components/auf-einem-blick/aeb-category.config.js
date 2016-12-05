/**
 * Created by danieldihardja on 25/09/16.
 */

import settings from '../../app.settings';

function config($cp) {

	var aebCat = $cp.model('EbCategory');

	var imgConfig = {
		container: 'aeb',
		maxWidth: settings.ipadProMaxWidth,
		maxHeight: settings.ipadProMaxHeight
	};

	aebCat.listView()
		.field('title')
		.field('publish');

	aebCat.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.translationKey('ebCategoryId')
		.translationField('title')
		.translationField('text', 'text')
		.hasManyLink('EbContent', 'ebCategoryId', {label: 'Zu den Beiträgen'})

	aebCat.createView()
		.field('title')
		.field('text', 'text')
}
export default config;