# Contributing

This is an experimental repo, but the idea is to build a tool for generating React components with a cli.

# Repo structure

## Master

- Master branch contains code that has been deployed, or is being deployed. 
- All other branches must be up to date with master.
- Master is never worked in directly

## Release Branches

- The Release branch naming must follow the following pattern.
  - Release-1.0.0 (for an official build)
  - Release-1.0.0-rc1 (for a release candidate)
  
## Feature Branches

- Feature branches are where work is done
- If you are working on a bug, you branch should be called **bug/<description of bug>**
- If you are working on a new feature, you branch should be called **feature/<description of feature>**
- If you are working on a chore, you branch should be called **chore/<description of chore>**

When a feature branch is done, it must be pull requested into the current release branch. Once there is enough work in a specific release branch, that branch is pull requested into master and deployed.
