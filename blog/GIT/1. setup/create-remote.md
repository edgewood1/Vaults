Open a terminal window and navigate to the directory where you want to create the local repository.
Use the git init command to initialize a new Git repository in the current directory.
Use the git add command to add the files and directories you want to track in the repository. For example, you can use git add . to add all the files and directories in the current directory.
Use the git commit command to commit your changes to the local repository. For example, you can use git commit -m "Initial commit" to commit your changes with a commit message.
Create a new repository on GitHub by clicking the "New" button on the GitHub website and filling out the necessary information (such as the repository name and description).
Copy the URL of the new repository, which should look like https://github.com/username/repository.git.
Use the git remote add command to add the new repository as a remote destination for your local repository. For example, you can use git remote add origin https://github.com/username/repository.git.
Use the git push command to push your local changes to the remote repository on GitHub. For example, you can use git push -u origin master to push your changes to the master branch of the remote repository.