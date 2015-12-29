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
(function() {
    try {
        if (window.location.pathname.search(/grade\/report\/grader\/index[.]php$/) == -1 &&
            window.location.search.match(/[?&]edit=1/) == -1) {
            return;
        }
        var nodes = document.querySelectorAll("#user-grades th.item[data-itemid]");
        if (nodes.length == 0) {
            return;
        }
        var ids = nodes[0].dataset.itemid;
        if (nodes.length > 1) {
            ids += ','
            for (var i = 1; i < nodes.length - 1; i++) {
                ids += nodes[i].dataset.itemid + ',';
            }
            ids += nodes[nodes.length - 1].dataset.itemid;
        }
        var req = new XMLHttpRequest();
        req.open('GET', '/moodle/local/gradefilter/ajax.php?items=' + ids, true);
        req.onreadystatechange = function(aEvt) {
            try {
                if (req.readyState == 4 && req.status == 200) {
                    var items = JSON.parse(req.responseText);
                    if (items.length === 0) {
                        return;
                    }
                    var ret = '.i' + items[0];
                    if (items.length > 1) {
                        ret += ', '
                        for (var i = 0; i < items.length - 1; i++) {
                            ret += '.i' + items[i] + ', ';
                        }
                        ret += '.i' + items[items.length - 1];
                    }
                    ret += '{display:none;}';
                    var styleEl = document.createElement('style');
                    document.head.appendChild(styleEl);
                    styleEl.innerHTML = ret;
                }
            } catch (e) {
                console.error(e)
            }
        };
        req.send(null);
    } catch (e) {
        console.error(e)
    }
})();