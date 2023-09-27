<h1>Task API Documentation</h1>
<p>This documentation provides information about the RESTful API endpoints available in the Task API.</p>

<h2>Base URL</h2>

```
http://localhost:3000/tasks
```

<h3>Endpoints</h3>

<h4>1. Retrieve All Tasks</h4>
<ul>
  <li>URL: /tasks</li>
  <li>Method: GET</li>
  <li>Description: Retrieves a list of all tasks.</li>
  <li>Response: <br>
Status: 200 OK <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "results": <number_of_results>,
  "data": {
    "rows": [
      {
        "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
      },
    ]
  }
}
```

<br><br>

<h4>2. Retrieve a Specific task</h4>
<ul>
  <li>URL: /tasks/:id</li>
  <li>Method: GET</li>
  <li>Description:  Retrieves information about a specific task based on its ID.</li>
  <li> Parameters:
    <ul>
    <li>id (required): The ID of the task.</li>
      </ul>
  </li>
  <li>Response: <br>
Status: 200 OK <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "results": <number_of_results>,
  "data": {
    "rows": [
      {
        "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
      },
    ]
  }
}
```
<br><br>

<h4>3. Add a new task</h4>
<ul>
  <li>URL: /tasks</li>
  <li>Method: POST</li>
  <li>Description:  Adds a new task to the database.</li>
  <li>Request Body:

  ```
  {
     "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
  }
  ```
  
  </li>
  <li>Response: <br>
Status: 201 Created <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "results": <number_of_results>,
  "data": {
    "rows": [
      {
        "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
      },
    ]
  }
}
```

<br><br>

<h4>4. Update a task</h4>
<ul>
  <li>URL: /tasks</li>
  <li>Method: PATCH</li>
  <li>Description:  Updates an existing task in the database.</li>
  <li>Request Body:

  ```
  {
     "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
  }
  ```
  
  </li>
  <li>Response: <br>
Status: 201 Created <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "results": <number_of_results>,
  "data": {
    "rows": [
      {
        "id": <task_id>,
        "title": <task_title>,
        "description": <description>,
        "status": <taskstatus>
      },
    ]
  }
}
```

<br><br>

<h4>5. Delete a task</h4>
<ul>
  <li>URL: /tasks/:id</li>
  <li>Method: PATCH</li>
  <li>Description:  Updates an existing task in the database.</li>
  <li> Parameters:
    <ul>
    <li>id (required): The ID of the task.</li>
      </ul>
  </li>
  <li>Response: 
    <ul>
      <li>Status: 204 No Content</li>
    </ul>
  </li>
