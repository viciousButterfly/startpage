<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let newTask = '';
    const tasks = writable([]);

    function addTask() {
        tasks.update(oldTasks => [...oldTasks, { id: Date.now(), title: newTask, completed: false }]);
        newTask = '';
    }

    function deleteTask(id) {
        tasks.update(oldTasks => oldTasks.filter(task => task.id !== id));
    }

    function toggleTask(id) {
        tasks.update(oldTasks => oldTasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
        }));
    }

    onMount(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
        tasks.set(storedTasks);
        }
    });

    $: {
        localStorage.setItem('tasks', JSON.stringify($tasks));
    }
</script>
  
<div class="todo-wrapper">
    <div class="todo-input">
        <input type="text" placeholder="Create a new todo" bind:value={newTask} />
        <button on:click={addTask}>+</button>
    </div>
    <ul class="todo-list">
        {#each $tasks as task (task.id)}
        <li class="todo-item">
            <label>
            <input type="checkbox" />
            <span>{task.title}</span>
            </label>
            <button on:click={() => deleteTask(task.id)}>-</button>
        </li>
        {/each}
    </ul>
</div>

<style>
  :root {
    --primary-color: #007bff;
    --secondary-color: #7fb4e8;
    --font-color: #000000;
    --border-color: #0a121a;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::placeholder { 
    color: #343131;
    opacity: 0.5; 
  }

  .todo-wrapper {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--secondary-color);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  }

  .todo-input {
    border: 1px;
    border-color: #000000;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  .todo-input input[type="text"] {
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 0.5rem;
    border-color: #000000;
    border-radius: 4px;
    margin-right: 0.5rem;
    flex-grow: 1;
    background-color: var(--secondary-color);
    color: var(--font-color);
    border-radius: 0.5rem;
  }

  .todo-input button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: var(--primary-color);
    color: var(--font-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .todo-input button:hover {
    background-color: #0062cc;
  }

  .todo-list {
    display: block;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
  }


  .todo-item {
    font-size: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: var(--primary-color);
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .todo-item input {
    background-color: green;;
  }

  .todo-item span {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .todo-item button {
    font-size: 1.5rem;
    background-color: transparent;
    color: var(--font-color);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: 4rem;
  }

  .todo-item button:hover {
    transform: scale(1.1);
  }

  @media (max-width: 576px) {
    .todo-wrapper {
      padding: 0.5rem;
    }
  }
</style>
