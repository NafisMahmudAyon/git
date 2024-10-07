'use client'
import InnerSection from "@/components/InnerSection";
import Section from "@/components/Section";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  type Item = {
    title: string;
    description: string;
    command: string;
    note?: React.ReactNode;
  }
  type DataSet = {
    title: string;
    description: string;
    id: string;
    command: string;
    commandItems: Item[];
  }
  const GitCommands: DataSet[] = [
    {
      title: "Git Login",
      description: "To set up Git with your user name and email, you can use the following commands:",
      id: "git-login",
      command: '',
      commandItems: [
        {
          title: "Git Login",
          description: "To set up Git with your user name and email, you can use the following commands:",
          command: 'git config --global user.name <Your Name>',
          note: 'Replace <Your Name> with your actual name.',
        },
        {
          title: "Git Login",
          description: "To set up Git with your user name and email, you can use the following commands:",
          command: 'git config --global user.email <Your Email>',
          note: 'Replace <Your Email> with your actual email.',
        },
      ],
    },
    {
      title: "Git Init",
      description: "To initialize a new Git repository in the current directory, you can use the following command:",
      id: "git-init",
      command: '',
      commandItems: [
        {
          title: "Git Init",
          description: "To initialize a new Git repository in the current directory, you can use the following command:",
          command: 'git init',
          note: 'This will create a new .git directory in the current directory.',
        },
        {
          title: "Initialize a New Repository in a Specific Directory",
          description: "To initialize a new Git repository in a specific directory, you can use the following command:",
          command: 'git init <directory>',
          note: 'Replace <directory> with the path to the directory where you want to initialize the repository.',
        },
        {
          title: "Initialize with a Specific Initial Branch Name",
          description: "To initialize a new Git repository with a specific initial branch name, you can use the following command:",
          command: 'git init -b <branch-name>',
          note: 'Replace <branch-name> with the name of the initial branch.',
        },
      ],
    },
    {
      title: "Git Set Default Branch",
      description: "To set the default branch name, you can use the following command:",
      id: "git-set-default-branch",
      command: 'git config --global init.defaultBranch <branch-name>',
      commandItems: []
    },
    {
      title: "Git Clone",
      description: "To clone a remote repository into a new directory, you can use the following command:",
      id: "git-clone",
      command: '',
      commandItems: [
        {
          title: "Git Clone",
          description: "To clone a remote repository into a new directory, you can use the following command:",
          command: 'git clone <repository-url>',
          note: 'Replace <repository-url> with the URL of the remote repository.',
        },
        {
          title: "Clone a Repository into a Specific Directory",
          description: "To clone a repository into a specific directory, you can use the following command:",
          command: 'git clone <repository-url> <directory>',
          note: 'Replace <repository-url> with the URL of the remote repository and <directory> with the path to the directory where you want to clone the repository.',
        },
        {
          title: "Clone a Repository with a Specific Branch",
          description: "To clone a repository with a specific branch, you can use the following command:",
          command: 'git clone -b <branch-name> <repository-url>',
          note: 'Replace <branch-name> with the name of the branch you want to clone and <repository-url> with the URL of the remote repository.',
        },
      ],
    },
    {
      title: "Git Status",
      description: "To check the status of your repository, you can use the following command:",
      id: "git-status",
      command: 'git status',
      commandItems: []
    },
    {
      title: "Git Add",
      description: "To add changes to your repository, you can use the following command:",
      id: "git-add",
      command: '',
      commandItems: [
        {
          title: "Add a specific file",
          description: "To add a specific file to your repository, you can use the following command:",
          command: 'git add <file-name>',
          note: 'Replace <file-name> with the name of the file you want to add.',
        },
        {
          title: "Add all changes in the current directory",
          description: "To stage all changes in the current directory for commit, you can use the following command:",
          command: 'git add .',
          note: 'This will add all files in the current directory and its subdirectories.',
        },
        {
          title: "Add all changes in the entire repository",
          description: "To add all changes in the entire repository, you can use the following command:",
          command: 'git add -A',
          note: 'This will add all files in the entire repository.',
        }
      ],
    },
    {
      title: "Git Commit",
      description: "To commit changes to your repository, you can use the following command:",
      id: "git-commit",
      command: '',
      commandItems: [
        {
          title: "Basic Commit",
          description: "To commit changes to your repository, you can use the following command:",
          command: 'git commit -m "Commit message"',
          note: 'Replace "Commit message" with the message you want to commit.',
        },
        {
          title: "Amend a Commit",
          description: "To modify the most recent commit, including its message or changes, you can use the following command:",
          command: 'git commit --amend -m "Commit message"',
          note: 'Replace "Commit message" with the message you want to amend.',
        },
        {
          title: "Commit All Changes",
          description: "To commit all changes in the current directory, you can use the following command:",
          command: 'git commit -a -m "Commit message"',
          note: 'Replace "Commit message" with the message you want to commit. This stages all tracked files and commits them in one step. Note that it does not include new untracked files.',
        },
        {
          title: "Include Untracked Files",
          description: "To commit all changes including untracked files, you can use the following command:",
          command: 'git commit -am "Commit message"',
          note: 'Replace "Commit message" with the message you want to commit. This stages all changes and commits them in one step, including new untracked files.',
        },
      ],
    },
    {
      title: "Git Log",
      description: "To view the commit history, you can use the following command:",
      id: "git-log",
      command: 'git log',
      commandItems: []
    },
    {
      title: "Git Branch",
      description: "To manage branches, you can use the following commands:",
      id: "git-branch",
      command: '',
      commandItems: [
        {
          title: "List All Branches",
          description: "To list all branches, you can use the following command:",
          command: 'git branch',
          note: 'This will list all branches in the repository.',
        },
        {
          title: "Create a New Branch",
          description: "To create a new branch, you can use the following command:",
          command: 'git branch <branch-name>',
          note: 'Replace <branch-name> with the name of the new branch.',
        },
        // {
        //   title: "Switch to a Branch",
        //   description: "To switch to a branch, you can use the following command:",
        //   command: 'git checkout <branch-name>',
        //   note: 'Replace <branch-name> with the name of the branch you want to switch to.',
        // },
        // {
        //   title: "Create and Switch to a New Branch",
        //   description: "To create a new branch and switch to it in one step, you can use the following command:",
        //   command: 'git checkout -b <branch-name>',
        //   note: 'Replace <branch-name> with the name of the new branch.',
        // },
        {
          title: "Delete a Branch",
          description: "To delete a branch, you can use the following command:",
          command: 'git branch -d <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to delete.',
        },
        {
          title: "Delete a Branch Forcefully",
          description: "To delete a branch forcefully (even if it has unmerged changes), you can use the following command:",
          command: 'git branch -D <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to delete forcefully.',
        },
        {
          title: "Rename a Branch",
          description: "To rename a branch, you can use the following command:",
          command: 'git branch -m <old-branch-name> <new-branch-name>',
          note: 'Replace <old-branch-name> with the name of the branch you want to rename and <new-branch-name> with the new name for the branch.',
        },
        {
          title: "Show the last commit on each branch",
          description: "To show the last commit on each branch, you can use the following command:",
          command: 'git branch -v',
          note: 'This will display the last commit message for each branch.',
        },
        {
          title: "List all remote branches",
          description: "To list all remote branches, you can use the following command:",
          command: 'git branch -r',
          note: 'This will display the remote branches in the repository.',
        },
        {
          title: "List all branches (local and remote)",
          description: "To list all branches (local and remote), you can use the following command:",
          command: 'git branch -a',
          note: 'This will display both local and remote branches in the repository.',
        }
      ],
    },
    {
      title: "Git Checkout",
      description: "To switch to a different branch or commit, you can use the following command:",
      id: "git-checkout",
      command: '',
      commandItems: [
        {
          title: "Checkout to Branch",
          description: "To switch to a different branch, you can use the following command:",
          command: 'git checkout <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to switch to.',
        },
        {
          title: "Checkout to Commit",
          description: "To switch to a different commit, you can use the following command:",
          command: 'git checkout <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to switch to.',
        },
        // {
        //   title: "Checkout to Remote Branch",
        //   description: "To switch to a different remote branch, you can use the following command:",
        //   command: 'git checkout <remote>/<branch-name>',
        //   note: 'Replace <remote> with the name of the remote (e.g., origin) and <branch-name> with the name of the branch you want to switch to.',
        // },
        {
          title: "Create a New Branch and Check it Out",
          description: "To create a new branch and switch to it in one step, you can use the following command:",
          command: 'git checkout -b <branch-name>',
          note: 'Replace <branch-name> with the name of the new branch.',
        },
        {
          title: "Checkout to a Specific File",
          description: "To switch to a specific file, you can use the following command:",
          command: 'git checkout <commit-hash> -- <file-path>',
          note: 'Replace <commit-hash> with the hash of the commit you want to switch to and <file-path> with the path to the file you want to switch to.',
        },
        // {
        //   title: "Checkout to a Specific File in a New Branch",
        //   description: "To switch to a specific file in a new branch, you can use the following command:",
        //   command: 'git checkout --track <remote>/<branch-name> -- <file-path>',
        //   note: 'Replace <remote> with the name of the remote (e.g., origin), <branch-name> with the name of the new branch, and <file-path> with the path to the file you want to switch to.',
        // },
      ],
    },
    {
      title: "Git Switch",
      description: "To switch to a different branch, you can use the following command:",
      id: "git-switch",
      command: '',
      commandItems: [
        {
          title: "Switch to a Branch",
          description: "To switch to a different branch, use the command below:",
          command: 'git switch <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to switch to.',
        },
        {
          title: "Create a New Branch and Switch to It",
          description: "To create a new branch and switch to it in one step, you can use the following command:",
          command: 'git switch -c <branch-name>',
          note: 'Replace <branch-name> with the name of the new branch.',
        },
      ],
    },
    {
      title: "Git Restore",
      description: "To restore a file to a specific commit, you can use the following command:",
      id: "git-restore",
      command: '',
      commandItems: [
        {
          title: "Restore a File from a Specific Commit",
          description: "To restore a file from a specific commit, you can use the following command:",
          command: 'git restore --source <commit-hash> -- <file-path>',
          note: 'Replace <commit-hash> with the hash of the commit you want to restore from and <file-path> with the path to the file you want to restore.',
        },
        {
          title: "Restore a File to the Latest Commit",
          description: "To restore a file to the latest commit, you can use the following command:",
          command: 'git restore <file-path>',
          note: 'Replace <file-path> with the path to the file you want to restore.',
        },
      ],
    },
    {
      title: "Git Pull",
      description: "To pull the latest changes from a remote repository, you can use the following command:",
      id: "git-pull",
      command: '',
      commandItems: [
        {
          title: "Pull Latest Changes",
          description: "To pull the latest changes from a remote repository, you can use the following command:",
          command: 'git pull',
          note: 'This will pull the latest changes from a remote repository and merge them into the current branch.',
        },
        {
          title: "Pull a Specific Branch",
          description: "To pull a specific branch from a remote repository, you can use the following command:",
          command: 'git pull <remote-repository> <branch-name>',
          note: 'Replace <remote-repository> with the name of the remote repository and <branch-name> with the name of the branch you want to pull.',
        },
        {
          title: "Pull with Rebase",
          description: "To pull the latest changes from a remote repository and rebase the current branch, you can use the following command:",
          command: 'git pull --rebase',
          note: 'This will pull the latest changes from a remote repository and rebase the current branch.',
        },
        {
          title: "Pull with Fast-Forward Only",
          description: "To pull the latest changes from a remote repository and fast-forward the current branch, you can use the following command:",
          command: 'git pull --ff-only',
          note: 'This will pull the latest changes from a remote repository and fast-forward the current branch.',
        },
        {
          title: "Pull with No Commit",
          description: "To pull the latest changes from a remote repository and not commit, you can use the following command:",
          command: 'git pull --no-commit',
          note: 'This will pull the latest changes from a remote repository and not commit.',
        },
        {
          title: "Pull with No Fast-Forward",
          description: "To pull the latest changes from a remote repository and not fast-forward, you can use the following command:",
          command: 'git pull --no-ff',
          note: 'This will pull the latest changes from a remote repository and not fast-forward.',
        },
        {
          title: "Pull with No Commit",
          description: "To pull the latest changes from a remote repository and not commit, you can use the following command:",
          command: 'git pull --no-commit',
          note: 'This will pull the latest changes from a remote repository and not commit.',
        }
      ],
    },
    {
      title: "Git Push",
      description: "To push the current branch to a remote repository, you can use the following command:",
      id: "git-push",
      command: '',
      commandItems: [
        {
          title: "Push to Remote Repository",
          description: "To push the current branch to a remote repository, you can use the following command:",
          command: 'git push',
          note: 'This will push the current branch to a remote repository.',
        },
        {
          title: "Push to a Specific Remote Repository",
          description: "To push the current branch to a specific remote repository, you can use the following command:",
          command: 'git push <remote-repository> <branch-name>',
          note: 'Replace <remote-repository> with the name of the remote repository and <branch-name> with the name of the branch you want to push.',
        },
        {
          title: "Push with Force",
          description: "To push the current branch to a remote repository with force, you can use the following command:",
          command: 'git push --force',
          note: 'This will push the current branch to a remote repository with force.',
        },
        {
          title: "Push with No Fast-Forward",
          description: "To push the current branch to a remote repository with no fast-forward, you can use the following command:",
          command: 'git push --no-ff',
          note: 'This will push the current branch to a remote repository with no fast-forward.',
        },
        {
          title: "Push with No Commit",
          description: "To push the current branch to a remote repository with no commit, you can use the following command:",
          command: 'git push --no-commit',
          note: 'This will push the current branch to a remote repository with no commit.',
        },
        {
          title: "Push All Branches",
          description: "To push all branches to a remote repository, you can use the following command:",
          command: 'git push --all',
          note: 'This will push all branches to a remote repository.',
        },
        {
          title: "Set Upstream",
          description: "To set the upstream branch for the current branch, you can use the following command:",
          command: 'git push --set-upstream <remote-repository> <branch-name>',
          note: 'Replace <remote-repository> with the name of the remote repository and <branch-name> with the name of the branch you want to set the upstream branch for.',
        },
      ],
    },
    {
      title: "Git Merge",
      description: "To merge a branch into the current branch, you can use the following command:",
      id: "git-merge",
      command: '',
      commandItems: [
        {
          title: "Merge a Branch into the Current Branch",
          description: "To merge a branch into the current branch, you can use the following command:",
          command: 'git merge <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to merge.',
        },
        {
          title: "No Fast-Forward Merge",
          description: "To merge a branch into the current branch without a fast-forward, you can use the following command:",
          command: 'git merge --no-ff <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to merge.',
        },
        {
          title: "Merge with a Commit Message",
          description: "To merge a branch into the current branch with a commit message, you can use the following command:",
          command: 'git merge -m "Commit message" <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to merge and "Commit message" with the message for the commit.',
        },
        {
          title: "Abort a Merge",
          description: "To abort a merge, you can use the following command:",
          command: 'git merge --abort',
          note: 'This will abort the merge process and return to the previous branch.',
        },
        {
          title: "Allow Unrelated Histories",
          description: "To allow merging branches with unrelated histories, you can use the following command:",
          command: 'git merge --allow-unrelated-histories <branch-name>',
          note: 'Replace <branch-name> with the name of the branch you want to merge.',
        },
      ],
    },
    {
      title: "Git Log",
      description: "To view the commit history, you can use the following command:",
      id: "git-log",
      command: '',
      commandItems: [
        {
          title: "View Commit History",
          description: "To view the commit history, you can use the following command:",
          command: 'git log',
          note: 'This will display the commit history for the repository.',
        },
        {
          title: "Limit the Number of Commits",
          description: "To limit the number of commits to view, you can use the following command:",
          command: 'git log -n <number>',
          note: 'Replace <number> with the number of commits you want to view.',
        },
        {
          title: "One-line Format",
          description: "To view the commit history in one-line format, you can use the following command:",
          command: 'git log --oneline',
          note: 'This will display the commit history in a single line format.',
        },
        {
          title: "Graphical Format",
          description: "To view the commit history in a graphical format, you can use the following command:",
          command: 'git log --graph',
          note: 'This will display the commit history in a graphical format.',
        },
        {
          title: "Show Commit Details",
          description: "To show commit details, you can use the following command:",
          command: 'git log --stat',
          note: 'This will display the commit details for each commit.',
        },
        {
          title: "Filter by Author",
          description: "To filter commits by author, you can use the following command:",
          command: 'git log --author=<author-name>',
          note: 'Replace <author-name> with the name of the author you want to filter by.',
        },
        {
          title: "Show Commit Details with Author",
          description: "To show commit details with author, you can use the following command:",
          command: 'git log --pretty=format:"%h - %an, %ar : %s"',
          note: 'This will display the commit details with author for each commit.',
        },
        {
          title: "Filter by Date",
          description: "To filter commits by date, you can use the following command:",
          command: 'git log --since=<date> --until=<date>',
          note: 'Replace <date> with the date you want to filter by.',
        },
        {
          title: "Filter by Commit Message",
          description: "To filter commits by commit message, you can use the following command:",
          command: 'git log --grep=<commit-message>',
          note: 'Replace <commit-message> with the message of the commit you want to filter by.',
        },
        {
          title: "Show Specific File History",
          description: "To show the history of a specific file, you can use the following command:",
          command: 'git log -- <file-path>',
          note: 'Replace <file-path> with the path to the file you want to show the history of.',
        },
      ]
    },
    {
      title: "Git Reset",
      description: "To reset the current branch to a specific commit, you can use the following command:",
      id: "git-reset",
      command: '',
      commandItems: [
        {
          title: "Reset to a Specific Commit",
          description: "To reset the current branch to a specific commit, you can use the following command:",
          command: 'git reset --hard <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to reset to.',
        },
        {
          title: "Reset to a Specific Commit and Keep Changes",
          description: "To reset the current branch to a specific commit and keep changes, you can use the following command:",
          command: 'git reset --soft <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to reset to.',
        },
        {
          title: "Mixed Reset",
          description: "To reset the current branch to a specific commit and keep changes, you can use the following command:",
          command: 'git reset --mixed <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to reset to.',
        },
        {
          title: "Reset a Specific File",
          description: "To reset a specific file to a specific commit, you can use the following command:",
          command: 'git reset <commit-hash> -- <file-path>',
          note: 'Replace <commit-hash> with the hash of the commit you want to reset to and <file-path> with the path to the file you want to reset.',
        },
        {
          title: "Reset to HEAD",
          description: "To reset the current branch to the latest commit, you can use the following command:",
          command: 'git reset --hard HEAD',
          note: 'This will reset the current branch to the latest commit and delete any changes made after the latest commit.',
        },
      ]
    },
    {
      title: "Git Revert",
      description: "To revert a commit, you can use the following command:",
      id: "git-revert",
      command: '',
      commandItems: [
        {
          title: "Revert a Single Commit",
          description: "To revert a single commit, you can use the following command:",
          command: 'git revert <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to revert.',
        },
        {
          title: "Revert Multiple Commits",
          description: "To revert multiple commits, you can use the following command:",
          command: 'git revert <commit-hash>..<commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to revert.',
        },
        {
          title: "Revert a Commit Without Committing",
          description: "To revert a commit without committing, you can use the following command:",
          command: 'git revert -n <commit-hash>',
          note: 'You can use "-n" or "--no-commit" option to revert a commit without committing. Replace <commit-hash> with the hash of the commit you want to revert.',
        },
      ]
    },
    {
      title: "Git Stash",
      description: "To save changes and switch to another branch, you can use the following command:",
      id: "git-stash",
      command: '',
      commandItems: [
        {
          title: "Save Changes",
          description: "To save changes and switch to another branch, you can use the following command:",
          command: 'git stash',
          note: 'This will save the changes and switch to another branch.',
        },
        {
          title: "Save Changes with Message",
          description: "To save changes with a message, you can use the following command:",
          command: 'git stash save "Stash message"',
          note: 'Replace "Stash message" with the message you want to save.',
        },
        {
          title: "List Stashes",
          description: "To list all stashes, you can use the following command:",
          command: 'git stash list',
          note: 'This will list all stashes.',
        },
        {
          title: "Apply a Stash",
          description: "To apply a stash, you can use the following command:",
          command: 'git stash apply <stash-hash>',
          note: 'Replace <stash-hash> with the hash of the stash you want to apply.',
        },
        {
          title: "Drop a Stash",
          description: "To drop a stash, you can use the following command:",
          command: 'git stash drop <stash-hash>',
          note: 'Replace <stash-hash> with the hash of the stash you want to drop.',
        },
        {
          title: "Drop a Specific Stash",
          description: "To drop a specific stash, you can use the following command:",
          command: 'git stash drop stash@{<stash-index>}',
          note: 'Replace <stash-index> with the index of the stash you want to drop.',
        },
        {
          title: "Pop Stash",
          description: "To pop a stash, you can use the following command:",
          command: 'git stash pop',
          note: 'This will pop the latest stash and apply it.',
        },
        {
          title: "Drop All Stashes",
          description: "To drop all stashes, you can use the following command:",
          command: 'git stash clear',
          note: 'This will drop all stashes.',
        },
        {
          title: "Stash Untracked Files",
          description: "To stash untracked files, you can use the following command:",
          command: 'git stash --include-untracked',
          note: 'This will stash untracked files.',
        },
      ]
    },
    {
      title: "Git Fetch",
      description: "To fetch the latest changes from a remote repository, you can use the following command:",
      id: "git-fetch",
      command: '',
      commandItems: [
        {
          title: "Fetch Latest Changes",
          description: "To fetch the latest changes from a remote repository, you can use the following command:",
          command: 'git fetch',
          note: 'This will fetch the latest changes from a remote repository.',
        },
        {
          title: "Fetch from a Specific Remote",
          description: "To fetch the latest changes from a specific remote repository, you can use the following command:",
          command: 'git fetch <remote-repository>',
          note: 'Replace <remote-repository> with the name of the remote repository you want to fetch from.',
        },
        {
          title: "Fetch Specific Branch",
          description: "To fetch the latest changes from a specific branch, you can use the following command:",
          command: 'git fetch <remote-repository> <branch-name>',
          note: 'Replace <remote-repository> with the name of the remote repository and <branch-name> with the name of the branch you want to fetch.',
        },
        {
          title: "Fetch All Branches",
          description: "To fetch all branches from a remote repository, you can use the following command:",
          command: 'git fetch --all',
          note: 'This will fetch all branches from a remote repository.',
        },
      ]
    },
    {
      title: "Git Rebase",
      description: "To rebase the current branch onto a specific commit, you can use the following command:",
      id: "git-rebase",
      command: '',
      commandItems: [
        {
          title: "Rebase to a Specific Commit",
          description: "To rebase the current branch onto a specific commit, you can use the following command:",
          command: 'git rebase <commit-hash>',
          note: 'Replace <commit-hash> with the hash of the commit you want to rebase onto.',
        },
        {
          title: "Continue Rebase",
          description: "To continue a rebase after resolving conflicts, you can use the following command:",
          command: 'git rebase --continue',
          note: 'This will continue the rebase process.',
        },
      ]

    }
  ]

  const GitUsefulFlags: Item[] = [
    {
      title: "-m",
      description: "Allows you to provide a commit message directly in the command line.",
      command: 'git commit -m "Commit message"',
    },
    {
      title: "-a",
      description: "Tells Git to automatically stage files that have been modified and deleted before committing.",
      command: 'git commit -a -m "Commit message"',
    },
    {
      title: "-v",
      description: "Displays the commit message editor for you to edit the commit message before committing.",
      command: 'git commit -v',
    },
    {
      title: "-b",
      description: "Creates a new branch and switches to it.",
      command: 'git checkout -b <branch-name>',
    },
    {
      title: "-d",
      description: "Deletes the specified branch.",
      command: 'git branch -d branch-name',
    },
    {
      title: "-u",
      description: "Sets the upstream branch for the current branch.",
      command: 'git push -u origin <branch-name>',
    },
    {
      title: "-f",
      description: "Forces the push even if it results in a non-fast-forward merge.",
      command: 'git push --force',
    },
    {
      title: "-m",
      description: "Allows you to provide a commit message directly in the command line.",
      command: 'git commit -m "Commit message"',
    },

  ]

  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="grid min-h-screen pt-8 px-4 lg:px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira)]">

      <main className="w-full lg:w-3/4">
        <div className="flex flex-col gap-8 row-start-2  sm:items-start">
          <h1 className="text-4xl font-medium">Git Helper Command</h1>
          <button className={`fixed top-4 right-4 z-50 backdrop-blur-sm rounded-md p-2 fill-white ${showSidebar ? 'hidden' : ''} lg:hidden`} onClick={() => setShowSidebar(!showSidebar)}><svg viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg></button>

          <div className="flex flex-col gap-6">
            {/* what is git and used for */}
            <div className="mb-6">
              <h2 className="text-2xl font-medium mb-2">What is Git?</h2>
              <p className="text-sm text-[var(--font-normal)] text-pretty ">
                Git is a distributed version control system used for tracking changes in source code during software development.
                It allows multiple developers to work on the same project simultaneously, manage different versions,
                and collaborate efficiently. Git is essential for code management, backup, and team collaboration in software projects.
              </p>
            </div>

            {/* Git Commands */}
            <div className="flex flex-col gap-20 mb-20">
              <h2 className="text-2xl font-medium mb-2">Git Commands</h2>
              {GitCommands.map((command) => (
                <Section key={command.id} command={command} />
              ))}
            </div>

            {/* Git Useful Flags */}
            <div className="flex flex-col gap-12 mb-20">
              <h2 className="text-2xl font-medium mb-2">Git Useful Flags</h2>
              {GitUsefulFlags.map((command, index) => (
                <InnerSection key={index} command={command} className="border-l-2 border-inner pl-4" />
              ))}
            </div>

          </div>
        </div>
        <aside className={`w-full lg:w-1/4 fixed lg:right-0 top-0 h-screen overflow-y-auto bg-background pt-10 px-4 ${showSidebar ? 'right-0' : '-right-full'}`}>

          <button className="absolute top-4 right-4 lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>Close Sidebar</button>
          <h2 className="text-2xl font-medium mb-2">Commands</h2>
          <div className="flex flex-col gap-2">
            {GitCommands.map((command) => (
              <a href={`#${command.id}`} key={command.id} onClick={() => setShowSidebar(false)}>{command.title}</a>
            ))}
          </div>
        </aside>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
