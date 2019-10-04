var app=angular.module("myApp",[]);
app.controller('myCtrl',function($scope,$http){
  $scope.webList = ["Amazon","Airbnb","Aliexpersse","Alibaba","Abdellatif boukernine","Booking","Boukernine abdellatif","DockDockGo","dropbox","Github","google","gmail","googleCloud","youtube","twitter","facebook"];
  $scope.complete=function(string){

    var output=[];
    angular.forEach($scope.webList,function(siteweb){
      if(siteweb.toLowerCase().indexOf(string.toLowerCase())>=0){
        output.push(siteweb);
      }
    });
    $scope.filterweb=output;
  }
  $scope.fillTextbox=function(string){
    $scope.siteweb=string;
    $scope.filterweb=null;
  }
});
