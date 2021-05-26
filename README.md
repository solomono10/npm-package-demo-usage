# How to add public bitbucket repo in package.json or bower.json
## Substitute `library-name` with `repo_name`

# Resources
https://stackoverflow.com/questions/50173339/how-to-add-public-bitbucket-repo-in-package-json-or-bower-json
https://community.atlassian.com/t5/Bitbucket-questions/How-can-I-install-an-npm-package-from-my-bitbucket-repository/qaq-p/752908

## Double-check that these certainly work
"library-name": "git+https://github.com/user/library-name.git"

"library-name": "git+https://bitbucket.org/user/library-name.git"

<!-- Using a specific branch -->
"library_name": "bitbucket@bitbucket.com:username/repo_name.git#master

E.g.

```
  "dependencies": {
    "npm-package-demo": "git+https://github.com/solomono10/npm-package-demo.git"
  }
```

This current project calls the `npm-package-demo` github repo as a dependency.
