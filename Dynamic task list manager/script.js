angular.module('taskManagerApp', [])
.controller('TaskController', function() {
    var vm = this;

    vm.tasks = [
        { title: 'Task 1', completed: false },
        { title: 'Task 2', completed: false },
        { title: 'Task 3', completed: true }
    ];

    vm.addTask = function() {
        if (vm.newTask.trim() !== '') {
            vm.tasks.push({
                title: vm.newTask,
                completed: false
            });
            vm.newTask = '';
        }
    };

    vm.editTask = function(task) {
        var newTitle = prompt('Edit task', task.title);
        if (newTitle !== null) {
            task.title = newTitle;
        }
    };

    vm.deleteTask = function(task) {
        var index = vm.tasks.indexOf(task);
        if (index !== -1) {
            vm.tasks.splice(index, 1);
        }
    };
});
