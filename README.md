Simple Task Manager with Astro, Svelte, Prisma and Node.js.

1. Install node modules:
npm install

2. Build project:
npm run build

3. Run project:
npm run preview

4. Open browser localhost:4321.
4.1. Press button 'Add new task' to add new task in Manager.
4.2. Hover mouse to a row and find icon 'Pencil' in the end of the row.
     Press icon 'Pencil' to edit current task in Manager.
     Press icon 'Pencil' once more to save your local updates in the database.
4.3. Hover mouse to a row and find icon 'Trash' in the end of the row.
     Press icon 'Trash' to delete current task from Manager.
4.4. Press button 'Filter tasks' to show task filters 
     in the first row of Manager.
4.5. Type a word in filter 'Title' or 'Description' to show a task 
     which includes your filter word in title or 
     description, respectively. Clear all characters from filter
     'Title' or 'Description' to show all tasks again.
4.6. Select priority in filter 'Priority' to show a task with
     such a priority level.
4.7. Select a date in filter 'Due date' to show a task with
     such a due date.
4.8. Press checkbox 'Completed' to show a completed or not completed task.
     Pressed checkbox state means only completed tasks are shown in Manager.
     Indeterminate checkbox state means only not completed tasks are shown.
     Not pressed checkbox state means all tasks are shown in Manager.
4.9. Press button 'Filter tasks' once more to hide task filters.
4.10. Press button 'Clear tasks' to delete all tasks from Manager.

5. Run tests:
npm run test
