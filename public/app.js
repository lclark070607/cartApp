(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('GameApp', []);

// controllers
app.controller('StatsListController', function ($scope, IngredientService) {
    $scope.stats = IngredientService.getStats();
});

app.controller('IngredientsListController', function ($scope, IngredientService) {
    $scope.ingredients = IngredientService.getIngredients();

});

app.controller('BuyButtonController', function ($scope, IngredientService) {
    $scope.buy = function (what) {
        console.log(`Buying ${what.name}`);
        if (what.count > 0) {
            what.count--;
        }
    };

});

/* Defining a component */
app.component('statsList', {
    controller: 'StatsListController',
    templateUrl: 'templates/stats.html',
});

app.component('ingredientsList', {
    controller: 'IngredientsListController',
    templateUrl: 'templates/ingredients.html',
    // bindings: {
    //     subtract: '<',
    //     clickedOn: '&',
    // },
});

app.component('buyButton', {
    controller: 'BuyButtonController',
    templateUrl: 'templates/ingredients.html',
    bindings: {
        subtract: '<',
        clickedOn: '&',
    },
});

//service data
app.factory('IngredientService', function () {
    const ingredients = [
        { id: 0, name: 'Sugar', count: 18, price: 1.25, placeholder: "$1.25/ bag" },
        { id: 1, name: 'Lemons', count: 13, price: 2, placeholder: "$2.00/ lemon" },
        { id: 2, name: 'Ice', count: 25, price: 0.50, placeholder: "$0.50/ chunk" },
        { id: 3, name: 'Cups', count: 40, price: 0.10, placeholder: "$0.10/ cup" },
    ];

    return {
        getIngredients() {
            return ingredients;
        },

        getIngredient(id) { // id is a number like 0, 1, 2
            for (let i = 0; i < ingredients.length; i++) {
                if (ingredients[i].id === id) {
                    return ingredients[i];
                }
            }
        },
    };

    const stats = [
        { name: 'Day', count: 1 },
        { name: 'Money', count: 20 },
        { name: 'Visitors (yesterday)', count: 0 },
        { name: 'Customers (yesterday)', count: 0 },
    ];

    return {
        getStats() {
            return stats;
        },
    }
});

},{}]},{},[1]);
