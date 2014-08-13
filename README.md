ionic-Select-Control
====================

Select Box created with Ionic modal and ionic-list

## Usage

Include as a dependency in your angular module

```javascript
angular.module('myApp', ['$selectBox'])
```

```HTML
  <select-box ng-Selected-Value="selectedValue" 
          		ng-Selected-Id="selectedId" 
          		ng-Item-Name="name" 
          		ng-Item-Id="id" 
          		ng-title="{{'SelectBoxTitle' | translate}} " 
          		ng-data="obj" 
          		ng-placeholder="{{ 'noPerson' | translate}}"></select-box>
 ```
 
 ## Parameter
 ng-Selected-Value      ->    Selected value
 ng-Selected-Id         ->    Index of selected value
 ng-data                ->    Object passed to SelectBox
 ng-Item-Name           ->    Variable name that contains the value of item
 ng-Item-Id             ->    Variable name that contains the id of item
 ng-placeholder         ->    Placholder when no value is selected
 ng-title               ->    Title of SelectBox
 
 
 **Example of object passed**
 ```javascript
var obj = [
  {name: "Value1", id="1"},
  {name: "Value2", id="2"},
  {name: "Value3", id="3"},
  {name: "Value4", id="4"},
]
 ```
