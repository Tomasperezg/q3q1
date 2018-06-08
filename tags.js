"use strict";
{
  const tags = {
    template: `
    <name-tag ng-repeat="names in $ctrl.name" names="names"></name-tag>
    `,
    controller: function(){
      const vm = this;
      vm.name = [
        {name: "grant", color: "red"},
        {name: "tommy", color: "blue"},
        {name: "pearl", color: "green"}
      ];
      vm.addName = function(name){
      }

    }
  }

  angular
  .module("app")
  .component("tags", tags);
}
