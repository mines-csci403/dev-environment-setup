# Install Docker

Docker and Docker Compose are required for both the VS Code and terminal-only
workflows. If both verification commands below already work, continue to the
next step.

## Install for your operating system

- **Windows:** Install [Docker Desktop for Windows](https://docs.docker.com/desktop/setup/install/windows-install/).
  Follow its WSL 2 setup instructions and use Linux containers for this environment.
- **macOS:** Install [Docker Desktop for Mac](https://docs.docker.com/desktop/setup/install/mac-install/).
  Choose the download matching your Mac's Apple silicon or Intel processor.
- **Linux:** Install [Docker Engine](https://docs.docker.com/engine/install/)
  and the [Docker Compose plugin](https://docs.docker.com/compose/install/linux/).
  Follow the [Linux post-installation instructions](https://docs.docker.com/engine/install/linux-postinstall/)
  to configure Docker access for your account. Membership in the `docker` group
  grants root-level privileges; review those instructions before adding yourself.

On Windows and macOS, start Docker Desktop and wait until its engine is running.
Keep it running while using the course environment. Docker Desktop includes Compose.

## Verify the installation

Open your **system terminal**: PowerShell on Windows, or Terminal on macOS/Linux.
Run these commands there, outside a container:

```shell
docker run --rm hello-world
docker compose version
```

The first command should print `Hello from Docker!`. The second should print a
Docker Compose version. This tutorial uses `docker compose` (with a space).

If Docker cannot connect to its daemon, check that Docker Desktop or the Linux
Docker service is running. If `compose` is not recognized on Linux, install the
Compose plugin linked above. Reopen your terminal after installation if the
`docker` command is not found.

Next: [Install VS Code](/install-vscode), or go to
[environment setup](/dev-container-setup) if you plan to use your own editor.
