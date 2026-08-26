# Per-Project Setup

::: info
This page contains instructions for cloning a project's repository and getting it set up inside
your dev container. You will need to complete these steps **once per project** in this course,
after completing the [Student Environment](/student-environment) setup and
[creating your own repository](/github-repository-setup) from the project's starter template.
:::

::: warning
Failure to follow the instructions on this page **exactly** as presented may result in corrupting
your source code!
:::

For each project in this course, you will first need to create your own private repository from
the project's starter template by following the
[Creating Your Project Repository](/github-repository-setup) instructions. Once you have your
repository, you will need to clone it. This will create a copy of the starter code and
instructions on your local machine. For best results clone the repository from inside the dev
container using **one** of the following methods:

1. (Recommended) Open VS Code, select `File > Open Recent`: ![Open recent dropdown](./student-environment/vscode-open-recent-dropdown.png) and
   then select the `PATH_TO_DIRECTORY/student-env [Dev Container]` (Where `PATH_TO_DIRECTORY` is the
   actual path to the directory). Note that you **must select the `[Dev Container]` entry**!
2. Open VS Code, select `File > Open Folder...`, navigate to the directory where you extracted the
   course dev container, and click on `Reopen in Container` popup (the same way you did for
   [setting up the course dev container](/student-environment#setup-the-course-dev-container)).

Now that you've opened the dev container, open the top level of the workspace directory in the dev
container by selecting `File > Open Folder...`, navigate to the `/workspace/` directory, and click
`Ok`:

![Open folder prompt for the `/workspace/` directory](./student-environment/vscode-open-folder-prompt-workspace.png)

::: warning
If you skip this step (which must be done each time you set up a new project), you may end up
cloning repositories inside of each other, which will cause issues when committing and pushing
changes to GitHub.
:::

Once VS Code has opened/changed to the `/workspace/` directory, open the integrated terminal, and
run the following command to clone your project repository:

```shell
git clone PROJECT_REPOSITORY_URL
```

Where `PROJECT_REPOSITORY_URL` is the URL of **your own** project repository (e.g.:
`https://github.com/USERNAME/project-1-USERNAME.git` if using HTTPS, or
`git@github.com:USERNAME/project-1-USERNAME.git` if using SSH, where `USERNAME` is your GitHub
username). You can find this URL by following the
[Find Your Repository URL](/github-repository-setup#find-your-repository-url) step of the
[Creating Your Project Repository](/github-repository-setup) instructions.

Once the repository is cloned, open the project-specific `*.code-workspace` file (e.g.:
`project-1.code-workspace`) by clicking on it in the file explorer. You should see a popup
notification, typically on the bottom right of the window, that says `Open Workspace`:

![Open Workspace popup](./student-environment/vscode-open-workspace-popup.png)

Click on `Open Workspace` to open the project-specific workspace (This will change VS Code's working
directory to the project directory and load the project-specific settings). Once the workspace is
open, you may get yet another notification asking if you would like to install the recommended
extensions for the workspace:

![Install recommended extensions popup](./student-environment/vscode-recommended-extensions-popup.png)

Click on `Install` to install the recommended extensions. Alternatively, you can install the
recommended workspace extensions by pressing `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) to open the
command palette:

![Command palette](./student-environment/vscode-command-palette.png)

Then, type `Extensions: Show Recommended Extensions`, and press `Enter`. Then, click on the cloud
icon with a down arrow to install all recommended extensions:

![Extensions sidebar with recommended extensions](./student-environment/vscode-recommended-extensions-sidebar.png)

Once the extensions are installed, you can now start working on your project! Note that the
`*.code-workspace` file (e.g.: `project-1.code-workspace`) we provide is pre-configured with
everything you need for one-click building/debugging. You can find more information on how to use
the workspace file in the each project's `README.md` file.

::: tip
As you work on the project, remember to periodically commit and push your changes (e.g.:
`git add`, `git commit`, and `git push`). Committing and pushing often protects your work in case
something happens to your dev container, and gives you a history of checkpoints you can go back to
if you need to.
:::

## Common Issues

### Cloning Using HTTPS Instead of SSH

- Symptom: you receive an error message when cloning a repository similar to:

```
fatal: could not read Username for 'https://github.com': terminal prompts disabled
remote: Repository not found.
```

- Solution: clone using the SSH URL (e.g.: `git@github.com:USERNAME/project-1-USERNAME.git`)
  instead of the HTTPS URL (e.g.: `https://github.com/USERNAME/project-1-USERNAME.git`).

### Cloning Using SSH Instead of HTTPS/SSH Key Not Set Up Correctly

- Symptom: you receive an error message when cloning a repository similar to:

```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

- Solution: if you are intending on using HTTPS, use the HTTPS URL (e.g.:
  `https://github.com/USERNAME/project-1-USERNAME.git`). If you are intending on using SSH, make
  sure you set up your SSH key correctly by following the instructions in the
  [Setup Git Inside the Dev Container](/student-environment#setup-git-inside-the-dev-container)
  section.

### Can't Find The Project-Specific `*.code-workspace` File (e.g.: `project-1.code-workspace`)

- Symptom: you can't find the project-specific `*.code-workspace` file (e.g.:
  `project-1.code-workspace`) in VS Code's file explorer.
- Solution: make sure you have opened the top level of the workspace directory in the dev container
  (See the instructions above for more details).

### Missing Debug Configurations/Tools

- Symptom: the VS Code debug configurations and/or build/debug tools (e.g.: `clang`,
  `cmake`, `gcc`, `g++`, `make`, etc.) are missing.
- Solution: double check you have opened the course dev container **first**, and then opened the
  project-specific `*.code-workspace` file (e.g.: `project-1.code-workspace`) **second**. If you
  open the project-specific `*.code-workspace` file (e.g.: `project-1.code-workspace`) without
  first opening the course dev container (or in different dev container), the debug configurations
  and/or tools will be missing.
####
This page was created with the help of Claude Code
