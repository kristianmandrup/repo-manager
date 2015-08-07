Repo Project Manager
====================

Companies have an inceasing number of small repos as they move away from Monolithic MVC apps towards standalone SPAs, widgets, microservices etc. Currently there is no good way to get an overview about which repos logically belong to gether or how they are connected.

This project should provide such an overview. It should also leverage `docker-compose.yml` to create navigatable graphs of how services and resources are linked.

This will be sold to companies as a subscription based SAAS.

3 projects for free. up to 10 projects for $9/month up to 20 projects for $15/month up to 50 projects for $25/month up to 100 projects for $40/month

Integrations
------------

Github - https://developer.github.com/v3/ Bitbucket - https://confluence.atlassian.com/display/BITBUCKET/Use+the+Bitbucket+REST+APIs Gitlab - https://github.com/gitlabhq/gitlabhq/tree/master/doc/api

Wrappers bitbucket: - https://github.com/vongrippen/bitbucket github: - https://github.com/philschatz/octokat.js/tree/master gitlab: - https://github.com/node-gitlab/node-gitlab - http://narkoz.github.io/gitlab/ - https://about.gitlab.com/applications/

Chat integrations
-----------------

Slack - https://api.slack.com/ Gitter - https://developer.gitter.im/docs/streaming-api - https://developer.gitter.im/docs/rest-api HipChat - https://www.hipchat.com/docs/apiv2

CI integrations
---------------

https://github.com/arangamani/jenkins_api_client Python: https://pypi.python.org/pypi/python-jenkins/0.4.8 Ruby: - https://github.com/arangamani/jenkins_api_client - https://github.com/jfairchild/jenkins_api_client (more enhancements)

We can even display progress of each build in real time!

The new version actually returns information allowing the jenkins_api_client to check the build queue for the job and see if it has started yet (once it has started, the build- number is available.

Project
-------

:name:summary (markdown):description (markdown)

:tags (any string) - authentication - ...

:milestones:issues

repos:application - links to application repos - links to application projects

:frontend - links to frontend repos - links to frontend projects

:modules:widgets ...:backend ...:infrastructure ...

:dbs DBs used set explicitly and/or read from `docker-compose.yml`

:dependencies set explicitly and/or read from `docker-compose.yml`

:used_by (ie. dependency from) set explicitly and/or read from `docker-compose.yml`

:dependency-graph Use D3.js to visualize dependency graph you can click on!

:team_members - individual github users:teams

Only members of the Project can edit Project attributes. Authorization: view/edit, manage certain Project parts (optional)

:stats - overview of relative progress

:CI stats

:reports

:comments - comment threads in various channels...
