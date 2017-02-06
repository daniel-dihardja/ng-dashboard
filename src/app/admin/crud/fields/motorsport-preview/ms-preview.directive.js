/**
 * Created by danieldihardja on 31/01/17.
 */
/**
 * Created by danieldihardja on 02/12/16.
 */

import template from './ms-preview.html!text';

class MsPreview {

    constructor($sce) {
        this.$sce = $sce;
        this.restrict = 'E';
        this.template = template;
        this.scope = {
            label: '@',
            entity: '=',
            options: '='
        };
    }

    link(scope, element, attrs) {
        scope.options = scope.options || {};
        scope.type = scope.options.type || 'story';

        console.log('type', scope.type);

        if(scope.type == 'story') {
            // wait a tick. somehow the data is not instantly available
            setTimeout(function() {
                scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
                scope.content = this.$sce.trustAsHtml(scope.entity.content);

                scope.$watch('entity.headline', function(newValue, oldValue) {
                    scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
                }.bind(this), true);

                scope.$watch('entity.content', function(newValue, oldValue) {
                    scope.content = this.$sce.trustAsHtml(scope.entity.content);
                }.bind(this), true);

            }.bind(this), 1);
        }
        else if(scope.type == 'fact') {
            setTimeout(function() {
                scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
                scope.$watch('entity.headline', function(newValue, oldValue) {
                    scope.headline = this.$sce.trustAsHtml(scope.entity.headline);
                }.bind(this), true);
            }.bind(this));
        }
    }

    static createInstance($sce) {
        return new MsPreview($sce);
    }
}
MsPreview.createInstance.$inject = ['$sce'];
export default MsPreview.createInstance;