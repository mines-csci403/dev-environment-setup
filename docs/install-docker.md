# Install Docker

::: info
This page contains instructions for installing Docker, which is required to run the dev containers
used in this course.
:::

::: tip
If you already have Docker installed and verified it is working (`docker run hello-world`), you can
skip this step.
:::

First, you will need to install Docker on your computer. Follow the instructions for your operating
system below:

- **Windows**: [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
  - We recommend using the WSL 2 backend for Docker Desktop on Windows.
- **Mac**: [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- **Linux**: [Docker Engine for Linux](https://docs.docker.com/engine/install/)
  - We strongly **do not recommend** using the Docker snap package nor the Docker Desktop
    application on Linux.
  - Make sure to also complete the [post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/).

::: warning
If you are running Docker Engine on Linux, because the [Docker daemon runs as root by default](https://docs.docker.com/engine/security/rootless/),
you can cause damage to your system if you run commands in the dev container as root (i.e.: with
`sudo`) carelessly. As always, practice safe computing and only run commands you understand.
:::

Once this is complete, please open your system's terminal for your operating system below:

- **Windows**: Open CMD or PowerShell
  - Do not use Git Bash, WSL, Cygwin, MinGW, or any other terminal emulator.
- **Mac**: Open Terminal
- **Linux**: Open Terminal

_Note: when we refer to the **<u>system</u> terminal** in these instructions, we mean the terminal
for your operating system as described above._

Then, run the following command to verify that Docker is installed correctly:

```shell
docker run hello-world
```

You should see a message that says:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

If you see this message, Docker is installed correctly and you can proceed to the next step. If you
encounter any issues, please double-check you've read everything above and try again. If you still
have issues, please reach out to the course staff for help.

::: tip
Next, head over to the [Install VS Code](/install-vscode) page for instructions on installing your
code editor.
:::

_This page created with the help of Claude AI._
