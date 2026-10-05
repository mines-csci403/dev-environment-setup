# Install VS Code

[Download Visual Studio Code](https://code.visualstudio.com/) for your operating
system and install it. Visual Studio Code and Visual Studio are different products;
these instructions use **Visual Studio Code**.

## Install the Dev Containers extension

1. Open VS Code and select the **Extensions** icon in the left sidebar.
2. Search for **Dev Containers**, published by Microsoft
   (`ms-vscode-remote.remote-containers`).
3. Click **Install**.

You can also open its [Marketplace page](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
The extension lets VS Code use the tools installed inside the course container.
See the [VS Code dev container documentation](https://code.visualstudio.com/docs/devcontainers/containers)
for more about this workflow.

The course configuration installs Microsoft's Python extension inside the dev
container and selects `/usr/local/bin/python`. You do not need a separate local
Python installation for these instructions.

Next: [Set Up the Course Environment](/dev-container-setup).
