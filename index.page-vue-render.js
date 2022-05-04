
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/markbind-reposense-demo/index.html","title":"Home"}},[_v("markbind-reposense-demo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])})],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/markbind-reposense-demo/index.html"}},[_v("Home 🏠")])])])])],1)],1)]),_v(" "),_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#reposense-report"}},[_v("Reposense report‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#markbind-reposense-demo"}},[_v("markbind-reposense-demo‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#details"}},[_v("Details‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#strategy-1-generate-locally-and-add-to-version-control"}},[_v("Strategy 1: Generate locally and add to version control‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#strategy-2-generate-during-continuous-integration-and-deploy"}},[_v("Strategy 2: Generate during continuous integration and deploy‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#troubleshooting"}},[_v("Troubleshooting‎")])])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('br'),_v(" "),_c('h1',{attrs:{"id":"reposense-report"}},[_c('span',{staticClass:"anchor",attrs:{"id":"reposense-report"}}),_v("Reposense report"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reposense-report","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/markbind-reposense-demo/reposense-report/index.html","no-validation":""}},[_v("Here")])]),_v(" "),_c('hr'),_v(" "),_c('div',[_c('h1',{attrs:{"id":"markbind-reposense-demo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"markbind-reposense-demo"}}),_v("markbind-reposense-demo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-reposense-demo","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A demo site showing how to deploy your RepoSense report along with your MarkBind site.")]),_v(" "),_c('ul',[_c('li',[_v("The deployed MarkBind Site is available at: "),_c('a',{attrs:{"href":"https://tlylt.github.io/markbind-reposense-demo/"}},[_v("https://tlylt.github.io/markbind-reposense-demo/")])]),_v(" "),_c('li',[_v("The deployed RepoSense Report is available at: "),_c('a',{attrs:{"href":"https://tlylt.github.io/markbind-reposense-demo/reposense-report/index.html"}},[_v("https://tlylt.github.io/markbind-reposense-demo/reposense-report/index.html")])])]),_v(" "),_c('h2',{attrs:{"id":"details"}},[_c('span',{staticClass:"anchor",attrs:{"id":"details"}}),_v("Details"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#details","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("By default, MarkBind will copy all the files as assets of the generated site.")])]),_v(" "),_c('p',[_v("If the reposense report is in the same directory as the source files of a MarkBind site, you can just run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind build")]),_v(" to generate the site and have the report available at "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/reposense-report/index.html")])]),_v(" "),_c('ul',[_c('li',[_v("Suppose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reposense-report")]),_v(" is the name of the directory containing the report")])]),_v(" "),_c('p',[_v("To prevent MarkBind from doing any sorts of processing with the generated report, add the following into your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs json"}},[_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"pagesExclude\"")]),_v(": ["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"reposense-report/*\"")]),_v("],\n")])])]),_c('p',[_v("If you use the link to the reposense-report in your source files, you may receive a broken intralink warning if the report is not available yet (if you choose to generate it only in CI). To disable the warning you can either update the following in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs json"}},[_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"intrasiteLinkValidation\"")]),_v(": {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"enabled\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("false")]),_v("\n")]),_c('span',[_v("  }\n")])])]),_c('p',[_v("Or, you can add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{no-convert}")]),_v(" to the link, like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs md"}},[_c('span',[_v("["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("Here")]),_v("]("),_c('span',{pre:true,attrs:{"class":"hljs-link"}},[_v("reposense-report/index.html")]),_v("){no-validation}\n")])])]),_c('h3',{attrs:{"id":"strategy-1-generate-locally-and-add-to-version-control"}},[_c('span',{staticClass:"anchor",attrs:{"id":"strategy-1-generate-locally-and-add-to-version-control"}}),_v("Strategy 1: Generate locally and add to version control"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#strategy-1-generate-locally-and-add-to-version-control","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Generate the report locally\n"),_c('ol',[_c('li',[_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar RepoSense.jar --config ./configs")]),_v(" "),_c('ol',[_c('li',[_v("Assuming you have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RepoSense.jar")]),_v(" downloaded and configs files available in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("configs")]),_v(" folder")])])])])]),_v(" "),_c('li',[_v("Add the report to your version control")]),_v(" "),_c('li',[_v("Deploy locally via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind build")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind deploy")]),_v(" or let it trigger in your CI scripts after the files have been committed and synced to your repository")])]),_v(" "),_c('h3',{attrs:{"id":"strategy-2-generate-during-continuous-integration-and-deploy"}},[_c('span',{staticClass:"anchor",attrs:{"id":"strategy-2-generate-during-continuous-integration-and-deploy"}}),_v("Strategy 2: Generate during continuous integration and deploy"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#strategy-2-generate-during-continuous-integration-and-deploy","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Setup a CI script to generate the report\n"),_c('ol',[_c('li',[_v("e.g. see "),_c('a',{attrs:{"href":"/markbind-reposense-demo/.github/workflows/ci.yml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".github/workflows/ci.yml")])]),_v(" "),_c('ol',[_c('li',[_v("Assuming you have included "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("run.sh")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("get-reposense.py")]),_v(" just like this repository and configs files available in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("configs")]),_v(" folder")]),_v(" "),_c('li',[_v("Necessary adjustments can be made your CI scripts to suit your needs")])])])])]),_v(" "),_c('li',[_v("Within the CI script, deploy the MarkBind Site after the report has been generated")])]),_v(" "),_c('p',[_v("In the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ci.yml")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs yaml"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("CI")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("on:")]),_v(" \n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("push:")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("branches:")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("main")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("schedule:")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("cron:")]),_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'0 0 * * *'")]),_v("\n")])])]),_c('p',[_v("Specifies that the CI script should run every day and also on push to the main branch.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs yaml"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("jobs:")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("deploy:")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("runs-on:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("ubuntu-latest")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("env:")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("GITHUB_TOKEN:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("$")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("steps:")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("uses:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("actions/checkout@v3")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("uses:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("actions/setup-python@v3")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("with:")]),_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("python-version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"3.8\"")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("Install")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("dependencies")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("run:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("pip")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("install")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("requests")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("shell:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("bash")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("Install")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("Java")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("uses:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("actions/setup-java@v3")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("with:")]),_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("java-version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'11'")]),_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("distribution:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'temurin'")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("Generate")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("RepoSense")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("run:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("bash")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("./run.sh")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("shell:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("bash")]),_v("\n")])])]),_c('p',[_v("The installation and generation of the RepoSense report.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs yaml"}},[_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("uses:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("actions/setup-node@v2")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("with:")]),_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("node-version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'12'")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("run:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("npm")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("i")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("-g")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("markbind-cli")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("run:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("markbind")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("build")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("run:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("markbind")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("deploy")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("--ci")]),_v("\n")])])]),_c('p',[_v("Finally, the deployment of the MarkBind site.")]),_v(" "),_c('h2',{attrs:{"id":"troubleshooting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"troubleshooting"}}),_v("Troubleshooting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("You may need to ensure that the scripts are executable (something that may not be true when using a Windows machine)")]),_v(" "),_c('ul',[_c('li',[_v("By doing:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git update-index --chmod=+x run.sh")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git update-index --chmod=+x get-reposense.py")])])])])])]),_v(" "),_c('li',[_c('p',[_v("You may need to ensure that the access is granted to the workflows for deployment")]),_v(" "),_c('ul',[_c('li',[_v("By going to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings")]),_v(" in the GitHub UI and ensuring that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Actions > General > Workflow permissions")]),_v(" are set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Read and write permissions")])])])]),_v(" "),_c('li',[_c('p',[_v("You may need to ensure that the GitHub Pages source is set")]),_v(" "),_c('ul',[_c('li',[_v("By going to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings")]),_v(" in the GitHub UI and ensuring that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Pages > Source")]),_v(" is set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Branch: gh-pages")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Folder:/(root)")])])])])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v("]")])])])}
}];
  