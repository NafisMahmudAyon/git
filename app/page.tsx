'use client'
import Image from "next/image";

export default function Home() {
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
              <p className="text-sm text-normal mb-2">
                To initialize a new Git repository in the current directory, you can use the following command:
              </p>
              <div className="text-sm text-normal flex flex-col gap-1">
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git init</span>
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
                <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">git push -u origin branch-name</span>
              </div>
            </div>

            {/* Git pull */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Git Pull</h3>
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
