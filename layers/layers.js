var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BruceTrailEntireShp_1 = new ol.format.GeoJSON();
var features_BruceTrailEntireShp_1 = format_BruceTrailEntireShp_1.readFeatures(json_BruceTrailEntireShp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BruceTrailEntireShp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BruceTrailEntireShp_1.addFeatures(features_BruceTrailEntireShp_1);
var lyr_BruceTrailEntireShp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BruceTrailEntireShp_1, 
                style: style_BruceTrailEntireShp_1,
                popuplayertitle: "BruceTrailEntireShp",
                interactive: true,
                title: '<img src="styles/legend/BruceTrailEntireShp_1.png" /> BruceTrailEntireShp'
            });
var format_BeaverValleytracks_2 = new ol.format.GeoJSON();
var features_BeaverValleytracks_2 = format_BeaverValleytracks_2.readFeatures(json_BeaverValleytracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeaverValleytracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeaverValleytracks_2.addFeatures(features_BeaverValleytracks_2);
var lyr_BeaverValleytracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BeaverValleytracks_2, 
                style: style_BeaverValleytracks_2,
                popuplayertitle: "Beaver Valley — tracks",
                interactive: true,
                title: '<img src="styles/legend/BeaverValleytracks_2.png" /> Beaver Valley — tracks'
            });
var format_BlueMountaintracks_3 = new ol.format.GeoJSON();
var features_BlueMountaintracks_3 = format_BlueMountaintracks_3.readFeatures(json_BlueMountaintracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMountaintracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMountaintracks_3.addFeatures(features_BlueMountaintracks_3);
var lyr_BlueMountaintracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMountaintracks_3, 
                style: style_BlueMountaintracks_3,
                popuplayertitle: "Blue Mountain — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMountaintracks_3.png" /> Blue Mountain — tracks'
            });
var format_DufferinSectiontracks_4 = new ol.format.GeoJSON();
var features_DufferinSectiontracks_4 = format_DufferinSectiontracks_4.readFeatures(json_DufferinSectiontracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DufferinSectiontracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DufferinSectiontracks_4.addFeatures(features_DufferinSectiontracks_4);
var lyr_DufferinSectiontracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DufferinSectiontracks_4, 
                style: style_DufferinSectiontracks_4,
                popuplayertitle: "Dufferin Section — tracks",
                interactive: true,
                title: '<img src="styles/legend/DufferinSectiontracks_4.png" /> Dufferin Section — tracks'
            });
var format_FallingWatersMerged_5 = new ol.format.GeoJSON();
var features_FallingWatersMerged_5 = format_FallingWatersMerged_5.readFeatures(json_FallingWatersMerged_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FallingWatersMerged_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FallingWatersMerged_5.addFeatures(features_FallingWatersMerged_5);
var lyr_FallingWatersMerged_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FallingWatersMerged_5, 
                style: style_FallingWatersMerged_5,
                popuplayertitle: "FallingWatersMerged",
                interactive: true,
                title: '<img src="styles/legend/FallingWatersMerged_5.png" /> FallingWatersMerged'
            });
var format_MerrithonShape_6 = new ol.format.GeoJSON();
var features_MerrithonShape_6 = format_MerrithonShape_6.readFeatures(json_MerrithonShape_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MerrithonShape_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MerrithonShape_6.addFeatures(features_MerrithonShape_6);
var lyr_MerrithonShape_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MerrithonShape_6, 
                style: style_MerrithonShape_6,
                popuplayertitle: "MerrithonShape",
                interactive: true,
                title: '<img src="styles/legend/MerrithonShape_6.png" /> MerrithonShape'
            });
var format_Hamilton1RainDay_7 = new ol.format.GeoJSON();
var features_Hamilton1RainDay_7 = format_Hamilton1RainDay_7.readFeatures(json_Hamilton1RainDay_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hamilton1RainDay_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hamilton1RainDay_7.addFeatures(features_Hamilton1RainDay_7);
var lyr_Hamilton1RainDay_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hamilton1RainDay_7, 
                style: style_Hamilton1RainDay_7,
                popuplayertitle: "Hamilton1RainDay",
                interactive: true,
                title: '<img src="styles/legend/Hamilton1RainDay_7.png" /> Hamilton1RainDay'
            });
var format_BlueMnt102024tracks_8 = new ol.format.GeoJSON();
var features_BlueMnt102024tracks_8 = format_BlueMnt102024tracks_8.readFeatures(json_BlueMnt102024tracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102024tracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102024tracks_8.addFeatures(features_BlueMnt102024tracks_8);
var lyr_BlueMnt102024tracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102024tracks_8, 
                style: style_BlueMnt102024tracks_8,
                popuplayertitle: "BlueMnt 10-20-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102024tracks_8.png" /> BlueMnt 10-20-24 — tracks'
            });
var format_BlueMnt102124tracks_9 = new ol.format.GeoJSON();
var features_BlueMnt102124tracks_9 = format_BlueMnt102124tracks_9.readFeatures(json_BlueMnt102124tracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102124tracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102124tracks_9.addFeatures(features_BlueMnt102124tracks_9);
var lyr_BlueMnt102124tracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102124tracks_9, 
                style: style_BlueMnt102124tracks_9,
                popuplayertitle: "BlueMnt 10-21-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102124tracks_9.png" /> BlueMnt 10-21-24 — tracks'
            });
var format_BlueMnt102224tracks_10 = new ol.format.GeoJSON();
var features_BlueMnt102224tracks_10 = format_BlueMnt102224tracks_10.readFeatures(json_BlueMnt102224tracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102224tracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102224tracks_10.addFeatures(features_BlueMnt102224tracks_10);
var lyr_BlueMnt102224tracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102224tracks_10, 
                style: style_BlueMnt102224tracks_10,
                popuplayertitle: "BlueMnt 10-22-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102224tracks_10.png" /> BlueMnt 10-22-24 — tracks'
            });
var format_BlueMnt102224_2tracks_11 = new ol.format.GeoJSON();
var features_BlueMnt102224_2tracks_11 = format_BlueMnt102224_2tracks_11.readFeatures(json_BlueMnt102224_2tracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102224_2tracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102224_2tracks_11.addFeatures(features_BlueMnt102224_2tracks_11);
var lyr_BlueMnt102224_2tracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102224_2tracks_11, 
                style: style_BlueMnt102224_2tracks_11,
                popuplayertitle: "BlueMnt 10-22-24_2 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102224_2tracks_11.png" /> BlueMnt 10-22-24_2 — tracks'
            });
var format_BlueMnt102324tracks_12 = new ol.format.GeoJSON();
var features_BlueMnt102324tracks_12 = format_BlueMnt102324tracks_12.readFeatures(json_BlueMnt102324tracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102324tracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102324tracks_12.addFeatures(features_BlueMnt102324tracks_12);
var lyr_BlueMnt102324tracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102324tracks_12, 
                style: style_BlueMnt102324tracks_12,
                popuplayertitle: "BlueMnt 10-23-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102324tracks_12.png" /> BlueMnt 10-23-24 — tracks'
            });
var format_BlueMnt102424tracks_13 = new ol.format.GeoJSON();
var features_BlueMnt102424tracks_13 = format_BlueMnt102424tracks_13.readFeatures(json_BlueMnt102424tracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102424tracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102424tracks_13.addFeatures(features_BlueMnt102424tracks_13);
var lyr_BlueMnt102424tracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102424tracks_13, 
                style: style_BlueMnt102424tracks_13,
                popuplayertitle: "BlueMnt 10-24-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102424tracks_13.png" /> BlueMnt 10-24-24 — tracks'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BruceTrailEntireShp_1.setVisible(true);lyr_BeaverValleytracks_2.setVisible(true);lyr_BlueMountaintracks_3.setVisible(true);lyr_DufferinSectiontracks_4.setVisible(true);lyr_FallingWatersMerged_5.setVisible(true);lyr_MerrithonShape_6.setVisible(true);lyr_Hamilton1RainDay_7.setVisible(true);lyr_BlueMnt102024tracks_8.setVisible(true);lyr_BlueMnt102124tracks_9.setVisible(true);lyr_BlueMnt102224tracks_10.setVisible(true);lyr_BlueMnt102224_2tracks_11.setVisible(true);lyr_BlueMnt102324tracks_12.setVisible(true);lyr_BlueMnt102424tracks_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BruceTrailEntireShp_1,lyr_BeaverValleytracks_2,lyr_BlueMountaintracks_3,lyr_DufferinSectiontracks_4,lyr_FallingWatersMerged_5,lyr_MerrithonShape_6,lyr_Hamilton1RainDay_7,lyr_BlueMnt102024tracks_8,lyr_BlueMnt102124tracks_9,lyr_BlueMnt102224tracks_10,lyr_BlueMnt102224_2tracks_11,lyr_BlueMnt102324tracks_12,lyr_BlueMnt102424tracks_13];
lyr_BruceTrailEntireShp_1.set('fieldAliases', {'OGF_ID': 'OGF_ID', 'TRAIL_NAME': 'TRAIL_NAME', 'TRAIL_ASSO': 'TRAIL_ASSO', 'TRAIL_AS_1': 'TRAIL_AS_1', 'PERMITTED_': 'PERMITTED_', 'DESCRIPTIO': 'DESCRIPTIO', 'ON_ROAD_FL': 'ON_ROAD_FL', 'TRAIL_LENG': 'TRAIL_LENG', 'LOCATION_A': 'LOCATION_A', 'EFFECTIVE_': 'EFFECTIVE_', 'SYSTEM_DAT': 'SYSTEM_DAT', 'OBJECTID_1': 'OBJECTID_1', 'SHAPELEN': 'SHAPELEN', });
lyr_BeaverValleytracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMountaintracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_DufferinSectiontracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_FallingWatersMerged_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Descript': 'Descript', 'Type': 'Type', 'layer': 'layer', 'path': 'path', });
lyr_MerrithonShape_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Descript': 'Descript', 'Type': 'Type', });
lyr_Hamilton1RainDay_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102024tracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102124tracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102224tracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102224_2tracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102324tracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102424tracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BruceTrailEntireShp_1.set('fieldImages', {'OGF_ID': 'TextEdit', 'TRAIL_NAME': 'TextEdit', 'TRAIL_ASSO': 'TextEdit', 'TRAIL_AS_1': 'TextEdit', 'PERMITTED_': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ON_ROAD_FL': 'TextEdit', 'TRAIL_LENG': 'TextEdit', 'LOCATION_A': 'TextEdit', 'EFFECTIVE_': 'DateTime', 'SYSTEM_DAT': 'DateTime', 'OBJECTID_1': 'Range', 'SHAPELEN': 'Range', });
lyr_BeaverValleytracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMountaintracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_DufferinSectiontracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_FallingWatersMerged_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Descript': 'TextEdit', 'Type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MerrithonShape_6.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'Descript': 'TextEdit', 'Type': 'TextEdit', });
lyr_Hamilton1RainDay_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_BlueMnt102024tracks_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102124tracks_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102224tracks_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102224_2tracks_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102324tracks_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102424tracks_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BruceTrailEntireShp_1.set('fieldLabels', {'OGF_ID': 'no label', 'TRAIL_NAME': 'no label', 'TRAIL_ASSO': 'no label', 'TRAIL_AS_1': 'no label', 'PERMITTED_': 'no label', 'DESCRIPTIO': 'no label', 'ON_ROAD_FL': 'no label', 'TRAIL_LENG': 'no label', 'LOCATION_A': 'no label', 'EFFECTIVE_': 'no label', 'SYSTEM_DAT': 'no label', 'OBJECTID_1': 'no label', 'SHAPELEN': 'no label', });
lyr_BeaverValleytracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMountaintracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_DufferinSectiontracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_FallingWatersMerged_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Descript': 'no label', 'Type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MerrithonShape_6.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'Descript': 'no label', 'Type': 'no label', });
lyr_Hamilton1RainDay_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102024tracks_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102124tracks_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102224tracks_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102224_2tracks_11.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102324tracks_12.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102424tracks_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102424tracks_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});