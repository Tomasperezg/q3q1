"use strict";
{
  const tags = {
    template: `
    <name-tag ng-repeat="name in $ctrl.name" name="name" add-name="$ctrl.addName(name);"></name-tag>
    `,
    controller: function(){
      const vm = this;
      vm.name = [
        {name: "grant"},
        {name: "tommy"},
        {name: "pearl"}
      ];
      vm.addName = function(name){
      }

    }
  }

  angular
  .module("app")
  .component("tags", tags);
}
