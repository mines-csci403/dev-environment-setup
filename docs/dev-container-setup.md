# Set Up the Course Environment

Complete this setup once. Start with [Docker](/install-docker) installed and
running. For the editor workflow, also install [VS Code and Dev Containers](/install-vscode).

## 1. Download the environment

1. Open the [CSCI403 student environment v0.1 release](https://github.com/juliustnt/csci403_student_env/releases/tag/v0.1).
2. Under **Assets**, download the ZIP archive for the release.
3. Extract the archive to a folder you will keep for the course.
4. In VS Code, select **File → Open Folder** and open the extracted folder
   containing `Dockerfile` and `compose.yaml`.
   by the ZIP extraction.

The environment folder contains:

```text
.devcontainer/       VS Code container configuration
.env.example         Example database settings
compose.yaml         Container build, settings, and workspace mount
Dockerfile           Python, PostgreSQL client, and other tools
README.md            Quick command reference
```

Files beginning with a dot may be hidden in your system's file browser; VS Code's
Explorer shows them.

## 2. Configure your database connection

Before opening the container, copy `.env.example` to a new file named `.env` in
the **same folder as `compose.yaml`**. You can copy and paste the file in VS Code's
Explorer and rename the copy to `.env`. Make sure it is not named `.env.txt`.

Alternatively, from a system terminal in the environment folder:

::: code-group

```powershell [Windows PowerShell]
Copy-Item .env.example .env
```

```shell [macOS / Linux]
cp .env.example .env
```

:::

Edit `.env`. The supplied example contains these settings:

```dotenv
PGHOST=ada.mines.edu
PGPORT=5432
PGDATABASE=csci403
PGUSER=your-username
PGSSLMODE=require
EDITOR=vi
```

Replace `your-username` with your **database username** like `your-username`@mines.edu (excluding mines.edu). Confirm the host,
port, and database against the details provided.
You may set `EDITOR=nano` if you prefer nano to vi.

Save the file. Compose passes these settings into the container. The commands below prompt
for your database password. Keep `.env` private.

## 3. Open in the dev container

1. Open the environment folder in VS Code and keep Docker running.
2. Open the Command Palette with **Ctrl+Shift+P** (Windows/Linux) or
   **Cmd+Shift+P** (macOS).
3. Run **Dev Containers: Reopen in Container**. The first build downloads the base
   image and installs the course tools, so it can take several minutes.
4. Once connected, select **Terminal → New Terminal**.

This is the **container terminal**. Run the following commands there:

```shell
pwd
psql --version
python --version
python -c "import pg8000, dotenv; print('Python database libraries are ready')"
touch /workspace/setup-check.txt
```

`pwd` should print `/workspace`, the version commands should print installed
versions, and the import check should print its success message. Confirm that
`setup-check.txt` also appears in the environment folder on your computer. This
checks that your files are saved outside the container. You can delete the check
file afterward.

## 4. Test your database connection

In the **container terminal**, run:

```shell
psql -W
```

Enter your assigned database password when prompted. It is normal for nothing to
appear as you type. At the `psql` prompt, run:

```sql
SELECT current_database(), current_user;
```

Confirm the result shows your assigned database and username. Then exit back to
the shell:

```text
\q
```

You are ready to follow [Working on Assignments](/per-project-setup).

## Terminal-only option

Complete steps 1 and 2 above using your preferred editor. From your **system
terminal**, change to the environment folder containing `compose.yaml` and run:

```shell
docker compose build --pull
docker compose run --rm psql -W
```

Run the connection check in step 4 and use `\q` to exit. The service is named
`psql`, and its default entrypoint launches the PostgreSQL client. To open a Linux
shell instead:

```shell
docker compose run --rm --entrypoint bash psql
```

In that shell, run the tool and file checks from step 3. Type `exit` to leave it.
`--rm` removes the temporary container after it exits; files in `/workspace`
remain in your environment folder on your computer.

## Troubleshooting

### Container will not build or start

Check `docker run --rm hello-world` and `docker compose version` in your system
terminal. Make sure Docker is running and your internet connection can download
images and packages. In VS Code, use **Dev Containers: Show Container Log** to
inspect the failure. Share the error if it persists with instructors

### Reopen in Container is missing

Check that the Dev Containers extension is installed and that you opened the
folder containing `.devcontainer` and `compose.yaml`. Use the Command Palette
command even if no popup appears.

### Connection fails

- **Host name cannot be resolved or connection times out:** Check `PGHOST` and
  `PGPORT` in `.env` and your network connection. You may choose to connect through the
  [VPN](https://helpcenter.mines.edu/TDClient/1946/Portal/KB/Article/154280/How-to-Connect-to-Global-Protect-VPN-using-an-Unmanaged-or-Personal-Computer) if needed.
- **Connection attempts a local socket:** Check that `.env` exists beside
  `compose.yaml` and contains a nonempty `PGHOST`.

After changing `.env`, run **Dev Containers: Rebuild Container** in VS Code so the
container receives the updated settings. With the terminal-only workflow, exit
the current session and run a new `docker compose run` command.

### Files do not appear on your computer

Run `pwd` in the container and save files under `/workspace`. Check the original
extracted environment folder on your computer. Resolve the mount issue before
working on assignments; ask course staff if the file check still fails.
