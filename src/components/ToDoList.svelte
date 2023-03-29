<script>
    let newTask = '';
    let tasks = [];

    function addTask() {
        tasks = [...tasks, { id: Date.now(), title: newTask, completed: false }];
        newTask = '';
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
    }

    function toggleTaskCompleted(id) {
        tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
}
</script>

<todolist>
    <input class="todo-input" type="text" bind:value={newTask} placeholder="Create a new todo" />
    <button class="todo-submit" id="todo-submit" on:click={addTask}>
        <svg style="width:24px; height:24px" viewBox="0 0 24 24">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#666666"/>
        </svg>
    </button>

    <ul>
    {#each tasks as task (task.id)}
        <li>
            <!-- <label>
                <input type="checkbox" bind:checked={task.completed} on:change={() => toggleTaskCompleted(task.id)} />
            </label> -->
            {task.title}
            <button class="todo-delete" id="todo-delete" on:click={() => deleteTask(task.id)}>
                <svg style="width:24px; height:24px" viewBox="0 0 24 24">
                    <path d="M5 12H19V10H5V12Z" fill="#728292"/>
                </svg>
            </button>
        </li>
    {/each}
    </ul>
</todolist>

<style>
    todolist {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

    .todo-input {
        width: 400px;
        height: 60px;
        background: #334567; 
        color: #ffffff; 
        border-radius: 0.5rem;
    }

    .todo-submit {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .todo-delete {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    li {
        text-align: center;
        width: 400px;
        height: 60px;
        background: #334567; 
        color: #ffffff;
    }

</style>
