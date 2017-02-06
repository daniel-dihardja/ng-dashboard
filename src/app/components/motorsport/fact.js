/**
 * Created by danieldihardja on 10/01/17.
 */

function config($crudProvider) {

    var fact = $crudProvider.model('MotorsportFact');

    fact.listView()
        .title('/Fakten')
        .backButton(true)
        .field('headline')
        .field('publish');

    fact.editView()
        .backButton(true)
        .title('#ENTITY_HEADLINE#')
        .field('publish', 'checkbox')
        .field('preview', 'mspreview', {type: 'fact'})
        .field('headline', 'text')

        .translationKey('motorsportFactId')
        .translationField('preview', 'mspreview', {type: 'fact'})
        .translationField('headline', 'text');

    fact.createView()
        .backButton(true)
        .field('headline');
}