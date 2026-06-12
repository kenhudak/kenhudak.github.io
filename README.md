1. Record event on garmin watch and connect.garmin.com
2. Download event as a gpx file
3. Open QGIS project from red usb drive
4. Add new layers to existing map. Only select "tracks" from the import
5. Line color is ffda00 with 0.80 width
6. With qgis2web extention, web - export
7. In the HTML file, Add this one line right before </body> in the exported HTML, after the qgis2web.js line:
<script src="./resources/geolocation.js"></script>
8. Launch GitHub from that folder
9. Right click top level folder, more options, Open Git Bash here.
10. Git Pull (to update the ReadMe.md)
11. Save the new exported files into kenhudak.github.io folder (overwrite)
12. Git Status
13. Git Add .
14. Git Commit -m "the update message text"
15. Git Push
