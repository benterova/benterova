<script lang="ts">
  import TodoComponent from "./components/TodoComponent.svelte";
</script>

<div class="columns">
  <div class="column">
    <h1 class="title">Todo List</h1>
    <p>
      An example of a todo list application that uses local storage to store the
      todo list. The todo list is also sortable, and the user can filter the
      list by completed or uncompleted tasks.
    </p>
    <a
      href="https://github.com/benterova/benterova/tree/master/src/lib/todo"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 button">View on GitHub</a
    >
  </div>
  <div class="is-divider-vertical" />
  <div class="column">
    <div id="todo-section" class="box">
      <TodoComponent />
    </div>
  </div>
</div>
