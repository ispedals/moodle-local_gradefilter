<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Acts as API to determine which grade_items have been marked as not needing to be graded
 *
 * The API can be queried from /moodle/local/gradefilter/ajax.php
 * and has one mandatory parameters: items which is a comma-separated list of grade_item ids.
 * It returns a JSON object with the keys being the ids that are marked as not needing to be graded.
 * Grade items are marked as not needing to be graded by having an idnumber that starts with 'nograde'
 * (note that the idnumber must be unique so the string 'nograde' must be suffixed with a unique string).
 *
 * @package    local_gradefilter
 * @copyright  2015 Abir Viqar
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define('AJAX_SCRIPT', true);
define('NO_MOODLE_COOKIES', true);
require('../../config.php');

global $DB, $OUTPUT;

$items = required_param('items', PARAM_TEXT);
echo $OUTPUT->header();
$results = $DB->get_records_list('grade_items', 'id', explode(',', $items), 'id,idnumber');
$out = array();
foreach ($results as $key => $gi) {
    if (strripos($gi->idnumber, 'nograde', -strlen($gi->idnumber)) !== FALSE) {
        $out[] = $key;
    }
}
echo json_encode($out);
die;