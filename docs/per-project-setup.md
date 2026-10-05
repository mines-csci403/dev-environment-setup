# Working on Assignments

Reuse the [course environment](/dev-container-setup) for SQL and Python work.
Follow each assignment's instructions for starter files, database objects, and
submission requirements.

## Resume your environment

Start Docker. In VS Code, open the environment folder and run **Dev Containers:
Reopen in Container**, then select **Terminal → New Terminal**. Keep the environment
root open so you can access all your assignment folders under `/workspace`.

The commands below labeled **container terminal** run inside that VS Code terminal.
Commands labeled **system terminal** run on your computer from the environment
folder containing `compose.yaml`.

## Organize your files

Create a folder for each assignment inside the environment folder. For example:

```text
your-environment-folder/
  .devcontainer/
  .env
  compose.yaml
  Dockerfile
  assignments/
    assignment-1/
      queries.sql
    assignment-2/
      main.py
```

Inside the container, `queries.sql` in this example is at
`/workspace/assignments/assignment-1/queries.sql`. Save and back up your files;
closing a container does not submit an assignment.

If an assignment requires Git, use Git on your computer and follow that
assignment's repository instructions. Git is not installed in this container.

## Run SQL

Create `assignments/assignment-1/queries.sql` with a simple connection check:

```sql
SELECT current_database(), current_user;
```

Save it, then run it from the **container terminal**:

```shell
psql -W -v ON_ERROR_STOP=1 -f /workspace/assignments/assignment-1/queries.sql
```

Or from the **system terminal**, using the terminal-only workflow:

```shell
docker compose run --rm psql -W -v ON_ERROR_STOP=1 -f /workspace/assignments/assignment-1/queries.sql
```

`-f` runs the saved file. `ON_ERROR_STOP=1` stops on the first SQL error; it does
not undo statements that already succeeded. Check your assignment's directions
before rerunning scripts that create or change data.

For interactive SQL, run `psql -W` in the container or
`docker compose run --rm psql -W` from your system terminal. Useful commands at the
`psql` prompt include:

| Command                                              | Purpose                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| `\conninfo`                                          | Show the current connection.                               |
| `\d`                                                 | List tables visible in the current search path.            |
| `\i /workspace/assignments/assignment-1/queries.sql` | Run a saved SQL file.                                      |
| `\e`                                                 | Edit the query buffer using the editor selected in `.env`. |
| `\q`                                                 | Exit to the shell.                                         |

End SQL statements with a semicolon. These backslash commands do not need one.
See the [psql reference](https://www.postgresql.org/docs/current/app-psql.html)
for more commands.

## Run Python

Python and `pg8000` are already installed. To check the interpreter and driver,
create `assignments/assignment-2/main.py` with:

```python
import pg8000

print("Python and pg8000 are ready")
```

Run it from the **container terminal**:

```shell
python /workspace/assignments/assignment-2/main.py
```

Or from the **system terminal**:

```shell
docker compose run --rm --entrypoint python psql /workspace/assignments/assignment-2/main.py
```

The example verifies that the driver imports; it does not connect to the database.
Use the connection code provided for your Python assignment. Compose makes
`PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, and `PGSSLMODE` available as environment
variables, but your Python code must explicitly configure its driver connection,
including SSL and password handling. `psql` connection settings do not automatically
configure a `pg8000` connection. Do not hard-code your database password in scripts
or include it in submissions.

## Finish a session

Exit `psql` with `\q`, or a terminal-only shell with `exit`. Closing the VS Code
dev container window stops its Compose service under the supplied configuration.
Your files under `/workspace` remain on your computer, and committed database
changes remain on the remote server.

## Refresh the tools

Update when course staff request it. The image tracks Python 3 rather than a
fixed minor version, so rebuilding with fresh dependencies can change versions.
For the terminal-only workflow, run from your system terminal:

```shell
docker compose build --pull --no-cache
```

For VS Code, close the dev container window, run that command in the environment
folder on your computer, then reopen the folder in VS Code and run **Dev Containers:
Rebuild Container**. Keep assignment files under `/workspace` before rebuilding.
