# Creating Your Project Repository

::: info
This page contains instructions for creating your own personal repository for a project in this
course, starting from the project's starter template on GitHub. You will need to complete these
steps **once per project**, before following the [Per-Project Setup](/per-project-setup)
instructions to clone and start working on it.
:::

## What is a GitHub Template Repository?

A template repository is a special kind of GitHub repository that lets you generate a brand new
repository with the same starter files, folder structure, and history-free commit as the
template, but under your own account. For each project in this course, course staff provide a
template repository (e.g.: `project-1-starter`) containing the starter code, instructions, and
configuration you'll need. Using the template feature ensures you get your own independent,
private copy to work in, rather than modifying the shared template directly.

## Setup Instructions

### Create a Repository From the Template

::: warning
Make sure you are signed in to [GitHub](https://github.com/) with your own personal account before
starting these steps.
:::

::: danger
When you get to the `Visibility` setting below, do **not** select `Public`! Making your repository
public exposes your work to other students (and the internet), which is an academic integrity
violation. If you accidentally create a public repository, see the
[Common Issues](#common-issues) section below to fix it immediately.
:::

1. Navigate to the starter template repository for the project you are starting (e.g.:
   `https://github.com/CSCI-442-Mines/PROJECT_NAME-starter`, where `PROJECT_NAME` is the name of
   the project, such as `project-1`).
2. Click the green `Use this template` button near the top right of the page, then select
   `Create a new repository` from the dropdown menu.
3. On the `Create a new repository` page, fill out the following fields:
   - **Owner**: select your own personal GitHub account (**not** the `CSCI-442-Mines`
     organization). You will not have permission to create repositories directly under the
     organization.
   - **Repository name**: name your repository `PROJECT_NAME-USERNAME`, where `PROJECT_NAME` is
     the name of the project (e.g.: `project-1`) and `USERNAME` is your GitHub username (e.g.:
     `ghost`). For example: `project-1-ghost`.
   - **Visibility**: select `Private`.
4. Leave the remaining options (such as `Include all branches`) at their default (unchecked)
   values.
5. Click the green `Create repository` button and wait for GitHub to finish generating your new
   repository from the template.

### Find Your Repository URL

Once your repository has been created, you'll land on its main page. Click the green `Code`
button, and copy either the HTTPS or SSH URL, depending on which authentication method you set up
in the [Setup Git Inside the Dev Container](/student-environment#setup-git-inside-the-dev-container)
section.

::: tip
Keep this URL handy! You'll use it as `PROJECT_REPOSITORY_URL` when you head over to the
[Per-Project Setup](/per-project-setup) page for instructions on cloning your repository inside
your dev container and getting it ready to work on.
:::

## Common Issues

### Accidentally Created a Public Repository

- Symptom: you selected `Public` instead of `Private` when creating your repository (or forgot to
  check the visibility setting).
- Solution: immediately go to your repository's `Settings` tab, scroll to the bottom `Danger Zone`
  section, and click `Change visibility` to switch it to `Private`.

### Created the Repository Under the Wrong Owner

- Symptom: you selected the `CSCI-442-Mines` organization (or some other account) as the `Owner`
  instead of your personal account, and the creation failed or the repository ended up somewhere
  unexpected.
- Solution: delete the incorrectly created repository (`Settings > Danger Zone > Delete this
  repository`) and repeat the [Create a Repository From the Template](#create-a-repository-from-the-template)
  steps, making sure to select your personal account as the `Owner`.

### Cloned or Forked the Template Instead of Using It

- Symptom: you ran `git clone` directly on the template repository's URL, or used GitHub's `Fork`
  button instead of `Use this template`, and now your repository is linked to (or a fork of) the
  shared template repository instead of being an independent copy.
- Solution: delete the repository you created and repeat the
  [Create a Repository From the Template](#create-a-repository-from-the-template) steps, making
  sure to click the green `Use this template` button (**not** `Fork` or the template repository's
  own `Code` button).
