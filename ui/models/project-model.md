Project
-------

-	name
-	summary (markdown)
-	description (markdown)
-	tags (any string)
	-	authentication
	-	...

Dev Management
--------------

-	milestones
-	issues

Consists of
-----------

-	repos: Repo[]
-	frontend
	-	repos: Repo[]
	-	projects: Project[]
-	modules
	-	repos: Repo[]
	-	projects: Project[]
-	widgets
	-	repos: Repo[]
	-	projects: Project[]
-	backend
	-	repos: Repo[]
	-	projects: Project[]
-	infrastructure

	-	repos: Repo[]
	-	projects: Project[]

Docker info
-----------

-	dbs (DBs used set explicitly and/or read from `docker-compose.yml`\)
-	Dependencies

Dependencies
------------

-	dependencies set explicitly and/or read from `docker-compose.yml`
-	used_by (ie. dependency from) set explicitly and/or read from `docker-compose.yml`

Use D3.js to visualize dependency graph you can click on!

Teams
-----

-	teams: Team[]
-	team members: Person

Only members of the Project can edit Project attributes. Authorization: view/edit, manage certain Project parts (optional)

Stats
-----

-	stats - overview of relative progress
-	CI stats
-	reports

Communication
-------------

-	comments: comment threads in various channels...
-	ratings
