var app = angular.module('app', ['firebase']);

app.controller('TarefaController', function ($scope, $firebaseArray) {
    var firebaseRef = new Firebase("https://todounip.firebaseio.com/");

    $scope.tarefas = $firebaseArray(firebaseRef);
    $scope.tarefa = {};

    $scope.adicionarTarefa = function () {
        $scope.tarefas.$add({
            titulo: $scope.tarefa.titulo,
            completa: false
        });
        $scope.tarefa = {};
    };

    $scope.completarTarefa = function (tarefa) {
        $scope.tarefas.$save(tarefa);
    };

    $scope.removerTarefa = function (tarefa) {
        $scope.tarefas.$remove(tarefa);
    };

});