import { writable } from 'svelte/store';


export const tasks = writable(JSON.parse(localStorage.getItem('tasks')) || []);

tasks.subscribe((value) => {
    localStorage.setItem('tasks', JSON.stringify(value));
});