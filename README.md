# markbind-reposense-demo

A demo site showing how to deploy your RepoSense report along with your MarkBind site.
- The deployed MarkBind Site is available at: https://tlylt.github.io/markbind-reposense-demo/
- The deployed RepoSense Report is available at: https://tlylt.github.io/markbind-reposense-demo/reposense-report/index.html

## Details

**By default, MarkBind will copy all the files as assets of the generated site.**

If the reposense report is in the same directory as the source files of a MarkBind site, you can just run `markbind build` to generate the site and have the report available at `/reposense-report/index.html`

- Suppose `reposense-report` is the name of the directory containing the report

To prevent MarkBind from doing any sorts of processing with the generated report, add the following into your `site.json`:

```json
  "pagesExclude": ["reposense-report/*"],
```

If you use the link to the reposense-report in your source files, you may receive a broken intralink warning if the report is not available yet (if you choose to generate it only in CI). To disable the warning you can either update the following in `site.json`:
```json
  "intrasiteLinkValidation": {
    "enabled": false
  }
```

Or, you can add `{no-convert}` to the link, like this:
```md
[Here](reposense-report/index.html){no-validation}
```
### Strategy 1: Generate locally and add to version control

1. Generate the report locally
   1. e.g. `java -jar RepoSense.jar --config ./configs`
      1. Assuming you have `RepoSense.jar` downloaded and configs files available in the `configs` folder
1. Add the report to your version control
1. Deploy locally via `markbind build` and `markbind deploy` or let it trigger in your CI scripts after the files have been committed and synced to your repository

### Strategy 2: Generate during continuous integration and deploy

1. Setup a CI script to generate the report
   1. e.g. see [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
      1. Assuming you have included `run.sh` and `get-reposense.py` just like this repository and configs files available in the `configs` folder
      1. Necessary adjustments can be made your CI scripts to suit your needs
1. Within the CI script, deploy the MarkBind Site after the report has been generated

In the `ci.yml`:

```yaml
name: CI

on: 
  push:
    branches:
      - main
  schedule:
    - cron:  '0 0 * * *'
```
Specifies that the CI script should run every day and also on push to the main branch.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-python@v4
      with:
        python-version: "3.8"
    - name: Install dependencies
      run: pip install requests
      shell: bash
    - name: Install Java
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'
    - name: Generate RepoSense
      run: bash ./run.sh
      shell: bash
```
The installation and generation of the RepoSense report.

```yaml
    - uses: actions/setup-node@v3
      with:
        node-version: '14'
    - run: npm i -g markbind-cli
    - run: markbind build
    - run: markbind deploy --ci
```
Finally, the deployment of the MarkBind site.

## Troubleshooting

1. You may need to ensure that the scripts are executable (something that may not be true when using a Windows machine)
   - By doing:
     - `git update-index --chmod=+x run.sh`
     - `git update-index --chmod=+x get-reposense.py`

1. You may need to ensure that the access is granted to the workflows for deployment
   - By going to `settings` in the GitHub UI and ensuring that the `Actions > General > Workflow permissions` are set to `Read and write permissions`

1. You may need to ensure that the GitHub Pages source is set
   - By going to `settings` in the GitHub UI and ensuring that the `Pages > Source` is set to `Branch: gh-pages`, `Folder:/(root)`
