---
title: Set-up of CI/CD for GitHub Repository

sidebar_label: CI/CD Setup
---

This guide will walk through the steps to set-up and create a CI/CD pipeline for your GitHub Repository

## Steps
### Branch Policy
1. On the GitHub repo, create a new branch from 'master' called 'develop'
2. Go to Settings > Branches, select 'develop' from the drop down list to make it the default branch, click update
3. Under 'Branch protection rules', click 'Add rule'
4. Add 'master' for 'Branch name pattern', check 'Restrict who can push to matching branches' and save.
5. Add new branch protection rule for 'develop', with the following settings:
    - Require pull request reviews before merging
    - Require status checks to pass before merging
    - Require branches to be up to date before merging
### Repo Security
Next we need to add in the 'Glasswall-Github' user as an Admin of the repo so that we can perform branch merges from the actions, and use submodules.
1. On the GitHub repo, go to Settings > Manage access > Invite teams or people
2. Search for 'Glasswall-Github' and select the Admin role.
3. Go to to Settings > Secrets > Add a new secret
4. Name the secret 'TOKEN_GITHUB' and use the Personal Access Token which can be given to you by IT Support, as the value.
### Gated Build
Next step is to set-up a Gated build which will build our code and run tests on pull requests
1. On the GitHub repo, go to Actions > New workflow > set up a workflow yourself
2. Name the file 'gated.yml'
3. Copy the Gated file code from the Rebuild repo into the new file
4. Make any changes specific to your project (build steps, tests used)
5. Start commit > create new branch and start a pull request
### CI Build
Next step is to set-up a CI build which will deploy our code to a QA environment, run tests, and merge to the master branch if successful.
1. On the GitHub repo, go to Actions > New workflow > set up a workflow yourself
2. Name the file 'ci.yml'
3. Copy the CI file template code into the new file
4. Make any changes specific to your project (deployment, environment, build steps, tests used)
5. Add any needed secrets (Access Ids and key) to the repo settings.
6. Start commit > create new branch and start a pull request
### Deploy Build
Next step is to set-up a Deploy build which will deploy our code to a Stage environment, run tests, and deploy to product if successful.
1. On the GitHub repo, go to Actions > New workflow > set up a workflow yourself
2. Name the file 'deploy.yml'
3. Copy the Deploy file template code into the new file
4. Make any changes specific to your project (deployment, environment, build steps, tests used)
5. Add any needed secrets (Access Ids and key) to the repo settings.
6. Start commit > create new branch and start a pull request