#local_gradefilter
This plugin prevents activities that have been manually marked as not having a grade from appearing in the
grader report.

This plugin has only been tested on Moodle 2.8.


[Download here](https://github.com/ispedals/moodle-local_gradefilter/releases/latest).

##Installation
Once installed, go to `Site administration > Appearance > Additional HTML` and under `Before BODY is closed`
paste the text in `client.min.js` into it.

##Usage
* For an activity that should not have a grade, set the activity's id number to `nograde<NUMBER>`,
where the number is unique for all activities in the course (for example, `nograde1`)
* When you go to the grader report, you should no longer see the activity show up

##Screenshots
Notice how Assignments 1-6 appear in the Grader Report
![Screenshot of unfiltered Grader Report](/screenshot1.png?raw=true "Screenshot1")
After Assignments 3 and 6 have been marked as having no grade, they no longer appear in the Grader Report
![Screenshot of filtered Grader Report](/screenshot2.png?raw=true "Screenshot2")

##Notes
Ideally, the plugin would only inject the Javascript when the Grader Report is being rendered, instead of having
it be present on all pages. If this plugin is updated for Moodle 2.9 or greater, it should use the new
[AJAX](https://docs.moodle.org/dev/AJAX) functionality introduced in Moodle 2.9 to query the database.