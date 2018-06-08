"use strict";
{
let nameTag = {

  bindings: {
    names: '<',
    color: '<'
  },
  template: `<div>
  <p style = "border: 2px solid {{$ctrl.names.color}}">name:{{$ctrl.names.name}}</p>
  </div>`,

  controller: function () {
    const vm = this;


  }
}
  angular
    .module("app")
    .component("nameTag", nameTag);

}
