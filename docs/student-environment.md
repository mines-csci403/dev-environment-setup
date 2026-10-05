# Student Environment

Set up the CSCI403 Database Management environment once, then reuse it for your
SQL and Python assignments.

## Setup checklist

1. [Install Docker](/install-docker) and verify Docker Compose works.
2. [Install VS Code](/install-vscode) and its Dev Containers extension.
3. [Set up the course environment](/dev-container-setup), configure your database
   connection, and run the verification commands.
4. Follow [Working on Assignments](/per-project-setup) to run SQL files and Python scripts.

If you prefer your own editor, follow the
[terminal-only setup](/dev-container-setup#terminal-only-option) after installing
Docker and configuring the environment folder. VS Code is optional for that path.

## Where your work lives

The environment folder on your computer is mounted at `/workspace` in the
container. Files saved there remain on your computer when the container stops or
is removed. Keep assignment files in that folder and back them up regularly.
Files elsewhere in the container can be lost when it is removed or rebuilt.
