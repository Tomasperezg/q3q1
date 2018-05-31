"use strict";
{
let nameTag = {

  bindings: {
    name: '<',
    color: '<'
  },
  template: `<div>
  <p>name:{{$ctrl.name.name}}</p>
  </div>`,

  controller: function () {
    const vm = this;


  }
}
  angular
    .module("app")
    .component("nameTag", nameTag);

}
