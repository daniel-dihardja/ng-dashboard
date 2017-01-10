/**
 * Created by danieldihardja on 10/01/17.
 */
function config($crudProvider) {

    var story = $crudProvider.model('MotorsportStory');

    var imgConfig = {
        container: 'assets',
        maxWidth: 1920,
        maxHeight: 1080
    };

    story.listView()
        .title('Motorsport')
        .field('headline')
        .field('publish');

    story.editView()
        .backButton(true)
        .title('#ENTITY_HEADLINE#')
        .field('publish', 'checkbox')
        .field('headline')
        .field('content', 'text')
        .field('image', 'file', imgConfig)

        .translationKey('motorsportStoryId')
        .translationField('headline')
        .translationField('content', 'text')
        .translationField('image', 'file', imgConfig)

        .hasManyLink('MotorsportFact', 'motorsportStoryId', {label: 'Zu den Fakten'});

    story.createView()
        .field('headline')
        .field('content', 'text')
        .field('image', 'file', imgConfig)
}