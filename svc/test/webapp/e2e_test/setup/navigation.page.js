"use strict";

module.exports = (function () {
    function Navigation() {
        this.engagementLink = $('[data-ng-click="u.navigateToEngagements()"]');
        this.searchLink = $('[data-ng-click="u.navigateToSearch()"]');

        this.engagementInList = element.all(by.css('.panel-heading.heading')).last();
        this.lessonsLink = this.engagementInList.element(by.css('[data-ng-click="e.showLessons(engagement)"]'));
    }

    Navigation.prototype.toEngagement = function () {
        return this.engagementLink.click();
    };

    Navigation.prototype.toLessons = function () {
        return this.lessonsLink.click();
    };

    Navigation.prototype.toSearch = function () {
        return this.searchLink.click();
    };

    return Navigation;
})();
