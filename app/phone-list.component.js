angular.
module('phonecatApp').
component('phoneList', {
    template: '<div class="row">' +
                '<div  ng-repeat="phone in $ctrl.phones" class="phone-item col-xs-12 col-md-3">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">{{phone.name}}</h5>' +
                            '<div class="card-text">{{phone.snippet}}</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
               '</div>',
    controller: function PhoneListController() {
        this.phones = [{
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }];
    }
});