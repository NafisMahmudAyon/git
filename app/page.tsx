'use client'
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  type DataSet = {
    title: string;
    description: string;
    id: string;
    command: string;
    commandItems: {
      title: string;
      description: string;
      command: string;
      note: React.ReactNode;
    }[];
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
      ],
    }
  ]
  console.log(GitCommands)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-medium">Git Helper Command</h1>

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
          <div className="flex flex-col gap-20">
            <h2 className="text-2xl font-medium mb-2">Git Commands</h2>

            {GitCommands.map((command) => (
              <Section key={command.id} command={command} />
            ))}

            {/* Git login */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Login</h3>
              <p className="text-sm text-normal mb-2">
                To set up Git with your user name and email, you can use the following commands:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git config --global user.name &quot;Your Name&quot;</span>
                <br />
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git config --global user.email &quot;youremail@example.com&quot;</span>
              </div>
            </div>

            {/* Git init */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Init</h3>
              <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
                {/* Initialize a New Repository in the Current Directory: */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Initialize a New Repository in the Current Directory</h4>
                  <p className="text-sm text-normal mb-2">
                    To initialize a new Git repository in the current directory, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git init</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Git set default branch */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Set Default Branch</h3>
              <p className="text-sm text-normal mb-2">
                To set the default branch name, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git config --global init.defaultBranch &quot;main&quot;</span>
              </div>
            </div>

            {/* Git clone */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Clone</h3>
              <p className="text-sm text-normal mb-2">
                To clone a remote repository into a new directory, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git clone https://github.com/username/repository.git</span>
              </div>
            </div>

            {/* Git status */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Status</h3>
              <p className="text-sm text-normal mb-2">
                To check the status of your repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git status</span>
              </div>
            </div>

            {/* Git add */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Add</h3>
              <p className="text-sm text-normal mb-2">
                To add changes to your repository, you can use the following command:
              </p>

              <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
                {/* single file */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Add Single File</h4>
                  <p className="text-sm text-normal mb-2">
                    To add a single file to your repository, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git add filename</span>
                  </div>
                </div>

                {/* all files */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Add All Files</h4>
                  <p className="text-sm text-normal mb-2">
                    To add all files to your repository, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git add .</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Git commit */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Commit</h3>
              <p className="text-sm text-normal mb-2">
                To commit changes to your repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git commit -m &quot;Commit message&quot;</span>
              </div>
            </div>

            {/* Git log */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Log</h3>
              <p className="text-sm text-normal mb-2">
                To view the commit history, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git log</span>
              </div>
            </div>

            {/* Git branch */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Branch</h3>
              <p className="text-sm text-normal mb-2">
                To manage branches, you can use the following commands:
              </p>
              <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
                {/* list all branches */}
                <div>
                  <h4 className="text-base font-medium mb-2 text-inner">List All Branches</h4>
                  <p className="text-sm text-normal mb-2">
                    To list all branches, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git branch</span>
                  </div>
                </div>
                {/* create a branch */}
                <div>
                  <h4 className="text-base font-medium mb-2 text-inner">Create a Branch</h4>
                  <p className="text-sm text-normal mb-2">
                    To create a new branch, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git branch branch-name</span>
                  </div>
                </div>

                {/* create and checkout */}
                <div>
                  <h4 className="text-base font-medium mb-2 text-inner">Create and Checkout</h4>
                  <p className="text-sm text-normal mb-2">
                    To create a new branch and switch to it, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git checkout -b branch-name</span>
                  </div>
                </div>

                {/* delete a branch */}
                <div>
                  <h4 className="text-base font-medium mb-2 text-inner">Delete a Branch</h4>
                  <p className="text-sm text-normal mb-2">
                    To delete a branch, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git branch -d branch-name</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Git checkout */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Checkout</h3>
              <p className="text-sm text-normal mb-2">
                To switch to a different branch or commit, you can use the following command:
              </p>
              <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
                {/* Checkout to Branch */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium mb-2 text-inner">Git Checkout Branch</h3>
                  <p className="text-sm text-normal mb-2">
                    To switch to a different branch, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git checkout branch-name</span>
                  </div>
                </div>
                {/* Checkout to Commit */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium mb-2 text-inner">Git Checkout Commit</h3>
                  <p className="text-sm text-normal mb-2">
                    To switch to a different commit, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git checkout commit-hash</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Git add remote repository */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Remote</h3>
              <p className="text-sm text-normal mb-2">
                To add a remote repository to your project, you can use the following commands:
              </p>

              <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
                {/* add one remote repository */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Add One Remote Repository</h4>
                  <p className="text-sm text-normal mb-2">
                    To add a remote repository, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git remote add origin https://github.com/username/repository.git</span>
                  </div>
                </div>
                {/* add multiple remote repository */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Add Multiple Remote Repository</h4>
                  <p className="text-sm text-normal mb-2">
                    To add multiple remote repositories to your project, you can use the following commands:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git remote add repo1 https://github.com/username/repository1.git</span>
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git remote add repo2 https://github.com/username/repository2.git</span>
                  </div>
                </div>

                {/* change remote repository */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-medium mb-2 text-inner">Change Remote Repository</h4>
                  <p className="text-sm text-normal mb-2">
                    To change the remote repository, you can use the following command:
                  </p>
                  <div className="text-sm text-normal flex flex-col gap-1">
                    <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git remote set-url origin https://github.com/username/new-repository.git</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Git push */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Push</h3>
              <p className="text-sm text-normal mb-2">
                To push changes to a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md"><span>git push --set-upstream origin branch-name</span><br /><br /><span className="text-normal">or</span><br /><br /><span>git push -u origin branch-name</span></span>
              </div>
              <p className="text-sm text-normal my-2">
                After set upstream, you can use the following command to push changes to a remote repository:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git push</span>
              </div>
            </div>

            {/* Git pull */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Pull</h3>

              <p className="text-sm text-normal mb-2">
                To pull changes from a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git pull {`<remote>`} {`<branch>`}</span>
              </div>
              <p className="text-xs text-comment  mb-2 pl-6 border-l-2 border-comment py-2">
                <span className="text-normal font-bold bg-comment rounded-full size-5 inline-flex items-center justify-center mr-4">i</span> Replace {`<remote>`} with the name of the remote repository (e.g., origin) and {`<branch>`} with the branch name you want to pull.
              </p>

              <p className="text-sm text-normal mb-2">
                To pull changes from a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git pull</span>
              </div>
            </div>

            {/* Git merge */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Merge</h3>
              <p className="text-sm text-normal mb-2">
                To merge a branch into the current branch, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git merge branch-name</span>
              </div>
            </div>

            {/* Git log */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Log</h3>
              <p className="text-sm text-normal mb-2">
                To view the commit history, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git log</span>
              </div>
            </div>

            {/* Git reset */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Reset</h3>
              <p className="text-sm text-normal mb-2">
                To reset your repository to a previous commit, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git reset --hard commit-hash</span>
              </div>
            </div>

            {/* Git revert */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Revert</h3>
              <p className="text-sm text-normal mb-2">
                To undo a commit without changing history, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git revert commit-hash</span>
              </div>
            </div>

            {/* Git stash */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Stash</h3>
              <p className="text-sm text-normal mb-2">
                To temporarily save changes without committing, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git stash</span>
              </div>
            </div>

            {/* Git tag */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Tag</h3>
              <p className="text-sm text-normal mb-2">
                To create a new tag, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git tag -a tag-name -m &quot;Tag message&quot;</span>
              </div>
            </div>

            {/* Git remote */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Remote</h3>
              <p className="text-sm text-normal mb-2">
                To add a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git remote add origin https://github.com/username/repository.git</span>
              </div>
            </div>

            {/* Git fetch */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Fetch</h3>
              <p className="text-sm text-normal mb-2">
                To fetch the latest changes from a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git fetch</span>
              </div>
            </div>

            {/* Git merge */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Merge</h3>
              <p className="text-sm text-normal mb-2">
                To merge a branch into the current branch, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git merge branch-name</span>
              </div>
            </div>

            {/* Git pull */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Pull</h3>
              <p className="text-sm text-normal mb-2">
                To pull the latest changes from a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git pull</span>
              </div>
            </div>

            {/* Git push */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Push</h3>
              <p className="text-sm text-normal mb-2">
                To push changes to a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git push</span>
              </div>
            </div>

            {/* Git pull */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Pull</h3>
              <p className="text-sm text-normal mb-2">
                To pull the latest changes from a remote repository, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git pull</span>
              </div>
            </div>







          </div>

        </div>
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
