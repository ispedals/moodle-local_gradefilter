Ensure `Site administration > Development > Debugging > Debug messages` is set to DEVELOPER

1. Install local_gradefilter` (follow the script inclusion instructions).
2. Under `Site administration > Development >  Make test course`, make a small test course.
3. Verify activities appear in the grader report.
4. Change the id number of one activity to `nograde1`.
5. Verify the activity does not appear in the grader report.
6. Change the id number of the activity to `NoGrade1`.
7. Verify the activity does not appear in the grader report.
8. Change the id number of the other activity to `NoGrade2`.
9. Verify no activities appear in the grader report.