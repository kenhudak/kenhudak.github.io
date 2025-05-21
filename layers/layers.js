var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BeaverValleytracks_1 = new ol.format.GeoJSON();
var features_BeaverValleytracks_1 = format_BeaverValleytracks_1.readFeatures(json_BeaverValleytracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeaverValleytracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeaverValleytracks_1.addFeatures(features_BeaverValleytracks_1);
var lyr_BeaverValleytracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BeaverValleytracks_1, 
                style: style_BeaverValleytracks_1,
                popuplayertitle: "Beaver Valley — tracks",
                interactive: true,
                title: '<img src="styles/legend/BeaverValleytracks_1.png" /> Beaver Valley — tracks'
            });
var format_BlueMountaintracks_2 = new ol.format.GeoJSON();
var features_BlueMountaintracks_2 = format_BlueMountaintracks_2.readFeatures(json_BlueMountaintracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMountaintracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMountaintracks_2.addFeatures(features_BlueMountaintracks_2);
var lyr_BlueMountaintracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMountaintracks_2, 
                style: style_BlueMountaintracks_2,
                popuplayertitle: "Blue Mountain — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMountaintracks_2.png" /> Blue Mountain — tracks'
            });
var format_DufferinSectiontracks_3 = new ol.format.GeoJSON();
var features_DufferinSectiontracks_3 = format_DufferinSectiontracks_3.readFeatures(json_DufferinSectiontracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DufferinSectiontracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DufferinSectiontracks_3.addFeatures(features_DufferinSectiontracks_3);
var lyr_DufferinSectiontracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DufferinSectiontracks_3, 
                style: style_DufferinSectiontracks_3,
                popuplayertitle: "Dufferin Section — tracks",
                interactive: true,
                title: '<img src="styles/legend/DufferinSectiontracks_3.png" /> Dufferin Section — tracks'
            });
var format_Niagara_Section_of_the_Brucetracks_4 = new ol.format.GeoJSON();
var features_Niagara_Section_of_the_Brucetracks_4 = format_Niagara_Section_of_the_Brucetracks_4.readFeatures(json_Niagara_Section_of_the_Brucetracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niagara_Section_of_the_Brucetracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niagara_Section_of_the_Brucetracks_4.addFeatures(features_Niagara_Section_of_the_Brucetracks_4);
var lyr_Niagara_Section_of_the_Brucetracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niagara_Section_of_the_Brucetracks_4, 
                style: style_Niagara_Section_of_the_Brucetracks_4,
                popuplayertitle: "Niagara_Section_of_the_Bruce — tracks",
                interactive: true,
                title: '<img src="styles/legend/Niagara_Section_of_the_Brucetracks_4.png" /> Niagara_Section_of_the_Bruce — tracks'
            });
var format_Bruce_Trail_Toronto_Section_20210410tracks_5 = new ol.format.GeoJSON();
var features_Bruce_Trail_Toronto_Section_20210410tracks_5 = format_Bruce_Trail_Toronto_Section_20210410tracks_5.readFeatures(json_Bruce_Trail_Toronto_Section_20210410tracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bruce_Trail_Toronto_Section_20210410tracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bruce_Trail_Toronto_Section_20210410tracks_5.addFeatures(features_Bruce_Trail_Toronto_Section_20210410tracks_5);
var lyr_Bruce_Trail_Toronto_Section_20210410tracks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bruce_Trail_Toronto_Section_20210410tracks_5, 
                style: style_Bruce_Trail_Toronto_Section_20210410tracks_5,
                popuplayertitle: "Bruce_Trail_Toronto_Section_20210410 — tracks",
                interactive: true,
                title: '<img src="styles/legend/Bruce_Trail_Toronto_Section_20210410tracks_5.png" /> Bruce_Trail_Toronto_Section_20210410 — tracks'
            });
var format_Peninsulatracks_6 = new ol.format.GeoJSON();
var features_Peninsulatracks_6 = format_Peninsulatracks_6.readFeatures(json_Peninsulatracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peninsulatracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peninsulatracks_6.addFeatures(features_Peninsulatracks_6);
var lyr_Peninsulatracks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peninsulatracks_6, 
                style: style_Peninsulatracks_6,
                popuplayertitle: "Peninsula  — tracks",
                interactive: true,
                title: '<img src="styles/legend/Peninsulatracks_6.png" /> Peninsula  — tracks'
            });
var format_BruceTrail_CaledonHillsSectiontracks_7 = new ol.format.GeoJSON();
var features_BruceTrail_CaledonHillsSectiontracks_7 = format_BruceTrail_CaledonHillsSectiontracks_7.readFeatures(json_BruceTrail_CaledonHillsSectiontracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BruceTrail_CaledonHillsSectiontracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BruceTrail_CaledonHillsSectiontracks_7.addFeatures(features_BruceTrail_CaledonHillsSectiontracks_7);
var lyr_BruceTrail_CaledonHillsSectiontracks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BruceTrail_CaledonHillsSectiontracks_7, 
                style: style_BruceTrail_CaledonHillsSectiontracks_7,
                popuplayertitle: "Bruce Trail_ Caledon Hills Section — tracks",
                interactive: true,
                title: '<img src="styles/legend/BruceTrail_CaledonHillsSectiontracks_7.png" /> Bruce Trail_ Caledon Hills Section — tracks'
            });
var format_BruceTrail_IroquoiaSectiontracks_8 = new ol.format.GeoJSON();
var features_BruceTrail_IroquoiaSectiontracks_8 = format_BruceTrail_IroquoiaSectiontracks_8.readFeatures(json_BruceTrail_IroquoiaSectiontracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BruceTrail_IroquoiaSectiontracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BruceTrail_IroquoiaSectiontracks_8.addFeatures(features_BruceTrail_IroquoiaSectiontracks_8);
var lyr_BruceTrail_IroquoiaSectiontracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BruceTrail_IroquoiaSectiontracks_8, 
                style: style_BruceTrail_IroquoiaSectiontracks_8,
                popuplayertitle: "Bruce Trail_ Iroquoia Section — tracks",
                interactive: true,
                title: '<img src="styles/legend/BruceTrail_IroquoiaSectiontracks_8.png" /> Bruce Trail_ Iroquoia Section — tracks'
            });
var format_Sydenhamtracks_9 = new ol.format.GeoJSON();
var features_Sydenhamtracks_9 = format_Sydenhamtracks_9.readFeatures(json_Sydenhamtracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sydenhamtracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sydenhamtracks_9.addFeatures(features_Sydenhamtracks_9);
var lyr_Sydenhamtracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sydenhamtracks_9, 
                style: style_Sydenhamtracks_9,
                popuplayertitle: "Sydenham  — tracks",
                interactive: true,
                title: '<img src="styles/legend/Sydenhamtracks_9.png" /> Sydenham  — tracks'
            });
var format_BlueMnt102024tracks_10 = new ol.format.GeoJSON();
var features_BlueMnt102024tracks_10 = format_BlueMnt102024tracks_10.readFeatures(json_BlueMnt102024tracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102024tracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102024tracks_10.addFeatures(features_BlueMnt102024tracks_10);
var lyr_BlueMnt102024tracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102024tracks_10, 
                style: style_BlueMnt102024tracks_10,
                popuplayertitle: "BlueMnt 10-20-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102024tracks_10.png" /> BlueMnt 10-20-24 — tracks'
            });
var format_BlueMnt102124tracks_11 = new ol.format.GeoJSON();
var features_BlueMnt102124tracks_11 = format_BlueMnt102124tracks_11.readFeatures(json_BlueMnt102124tracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102124tracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102124tracks_11.addFeatures(features_BlueMnt102124tracks_11);
var lyr_BlueMnt102124tracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102124tracks_11, 
                style: style_BlueMnt102124tracks_11,
                popuplayertitle: "BlueMnt 10-21-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102124tracks_11.png" /> BlueMnt 10-21-24 — tracks'
            });
var format_BlueMnt102224tracks_12 = new ol.format.GeoJSON();
var features_BlueMnt102224tracks_12 = format_BlueMnt102224tracks_12.readFeatures(json_BlueMnt102224tracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102224tracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102224tracks_12.addFeatures(features_BlueMnt102224tracks_12);
var lyr_BlueMnt102224tracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102224tracks_12, 
                style: style_BlueMnt102224tracks_12,
                popuplayertitle: "BlueMnt 10-22-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102224tracks_12.png" /> BlueMnt 10-22-24 — tracks'
            });
var format_BlueMnt102224_2tracks_13 = new ol.format.GeoJSON();
var features_BlueMnt102224_2tracks_13 = format_BlueMnt102224_2tracks_13.readFeatures(json_BlueMnt102224_2tracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102224_2tracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102224_2tracks_13.addFeatures(features_BlueMnt102224_2tracks_13);
var lyr_BlueMnt102224_2tracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102224_2tracks_13, 
                style: style_BlueMnt102224_2tracks_13,
                popuplayertitle: "BlueMnt 10-22-24_2 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102224_2tracks_13.png" /> BlueMnt 10-22-24_2 — tracks'
            });
var format_BlueMnt102324tracks_14 = new ol.format.GeoJSON();
var features_BlueMnt102324tracks_14 = format_BlueMnt102324tracks_14.readFeatures(json_BlueMnt102324tracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102324tracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102324tracks_14.addFeatures(features_BlueMnt102324tracks_14);
var lyr_BlueMnt102324tracks_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102324tracks_14, 
                style: style_BlueMnt102324tracks_14,
                popuplayertitle: "BlueMnt 10-23-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102324tracks_14.png" /> BlueMnt 10-23-24 — tracks'
            });
var format_BlueMnt102424tracks_15 = new ol.format.GeoJSON();
var features_BlueMnt102424tracks_15 = format_BlueMnt102424tracks_15.readFeatures(json_BlueMnt102424tracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMnt102424tracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMnt102424tracks_15.addFeatures(features_BlueMnt102424tracks_15);
var lyr_BlueMnt102424tracks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMnt102424tracks_15, 
                style: style_BlueMnt102424tracks_15,
                popuplayertitle: "BlueMnt 10-24-24 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMnt102424tracks_15.png" /> BlueMnt 10-24-24 — tracks'
            });
var format_FallingWatersEventShapefile_16 = new ol.format.GeoJSON();
var features_FallingWatersEventShapefile_16 = format_FallingWatersEventShapefile_16.readFeatures(json_FallingWatersEventShapefile_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FallingWatersEventShapefile_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FallingWatersEventShapefile_16.addFeatures(features_FallingWatersEventShapefile_16);
var lyr_FallingWatersEventShapefile_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FallingWatersEventShapefile_16, 
                style: style_FallingWatersEventShapefile_16,
                popuplayertitle: "FallingWatersEventShapefile",
                interactive: true,
                title: '<img src="styles/legend/FallingWatersEventShapefile_16.png" /> FallingWatersEventShapefile'
            });
var format_Merrithonactivity_12703574676tracks_17 = new ol.format.GeoJSON();
var features_Merrithonactivity_12703574676tracks_17 = format_Merrithonactivity_12703574676tracks_17.readFeatures(json_Merrithonactivity_12703574676tracks_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merrithonactivity_12703574676tracks_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merrithonactivity_12703574676tracks_17.addFeatures(features_Merrithonactivity_12703574676tracks_17);
var lyr_Merrithonactivity_12703574676tracks_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merrithonactivity_12703574676tracks_17, 
                style: style_Merrithonactivity_12703574676tracks_17,
                popuplayertitle: "Merrithonactivity_12703574676 — tracks",
                interactive: true,
                title: '<img src="styles/legend/Merrithonactivity_12703574676tracks_17.png" /> Merrithonactivity_12703574676 — tracks'
            });
var format_BlueMntn5182025tracks_18 = new ol.format.GeoJSON();
var features_BlueMntn5182025tracks_18 = format_BlueMntn5182025tracks_18.readFeatures(json_BlueMntn5182025tracks_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueMntn5182025tracks_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueMntn5182025tracks_18.addFeatures(features_BlueMntn5182025tracks_18);
var lyr_BlueMntn5182025tracks_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueMntn5182025tracks_18, 
                style: style_BlueMntn5182025tracks_18,
                popuplayertitle: "Blue Mntn 5-18-2025 — tracks",
                interactive: true,
                title: '<img src="styles/legend/BlueMntn5182025tracks_18.png" /> Blue Mntn 5-18-2025 — tracks'
            });
var format_Dufferin5192025tracks_19 = new ol.format.GeoJSON();
var features_Dufferin5192025tracks_19 = format_Dufferin5192025tracks_19.readFeatures(json_Dufferin5192025tracks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dufferin5192025tracks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dufferin5192025tracks_19.addFeatures(features_Dufferin5192025tracks_19);
var lyr_Dufferin5192025tracks_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dufferin5192025tracks_19, 
                style: style_Dufferin5192025tracks_19,
                popuplayertitle: "Dufferin 5-19-2025 — tracks",
                interactive: true,
                title: '<img src="styles/legend/Dufferin5192025tracks_19.png" /> Dufferin 5-19-2025 — tracks'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BeaverValleytracks_1.setVisible(true);lyr_BlueMountaintracks_2.setVisible(true);lyr_DufferinSectiontracks_3.setVisible(true);lyr_Niagara_Section_of_the_Brucetracks_4.setVisible(true);lyr_Bruce_Trail_Toronto_Section_20210410tracks_5.setVisible(true);lyr_Peninsulatracks_6.setVisible(true);lyr_BruceTrail_CaledonHillsSectiontracks_7.setVisible(true);lyr_BruceTrail_IroquoiaSectiontracks_8.setVisible(true);lyr_Sydenhamtracks_9.setVisible(true);lyr_BlueMnt102024tracks_10.setVisible(true);lyr_BlueMnt102124tracks_11.setVisible(true);lyr_BlueMnt102224tracks_12.setVisible(true);lyr_BlueMnt102224_2tracks_13.setVisible(true);lyr_BlueMnt102324tracks_14.setVisible(true);lyr_BlueMnt102424tracks_15.setVisible(true);lyr_FallingWatersEventShapefile_16.setVisible(true);lyr_Merrithonactivity_12703574676tracks_17.setVisible(true);lyr_BlueMntn5182025tracks_18.setVisible(true);lyr_Dufferin5192025tracks_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BeaverValleytracks_1,lyr_BlueMountaintracks_2,lyr_DufferinSectiontracks_3,lyr_Niagara_Section_of_the_Brucetracks_4,lyr_Bruce_Trail_Toronto_Section_20210410tracks_5,lyr_Peninsulatracks_6,lyr_BruceTrail_CaledonHillsSectiontracks_7,lyr_BruceTrail_IroquoiaSectiontracks_8,lyr_Sydenhamtracks_9,lyr_BlueMnt102024tracks_10,lyr_BlueMnt102124tracks_11,lyr_BlueMnt102224tracks_12,lyr_BlueMnt102224_2tracks_13,lyr_BlueMnt102324tracks_14,lyr_BlueMnt102424tracks_15,lyr_FallingWatersEventShapefile_16,lyr_Merrithonactivity_12703574676tracks_17,lyr_BlueMntn5182025tracks_18,lyr_Dufferin5192025tracks_19];
lyr_BeaverValleytracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMountaintracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_DufferinSectiontracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Niagara_Section_of_the_Brucetracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Bruce_Trail_Toronto_Section_20210410tracks_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Peninsulatracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BruceTrail_CaledonHillsSectiontracks_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BruceTrail_IroquoiaSectiontracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sydenhamtracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102024tracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102124tracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102224tracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102224_2tracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102324tracks_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMnt102424tracks_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_FallingWatersEventShapefile_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Merrithonactivity_12703574676tracks_17.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BlueMntn5182025tracks_18.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Dufferin5192025tracks_19.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BeaverValleytracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMountaintracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_DufferinSectiontracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Niagara_Section_of_the_Brucetracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Bruce_Trail_Toronto_Section_20210410tracks_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Peninsulatracks_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BruceTrail_CaledonHillsSectiontracks_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BruceTrail_IroquoiaSectiontracks_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sydenhamtracks_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102024tracks_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102124tracks_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102224tracks_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102224_2tracks_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102324tracks_14.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMnt102424tracks_15.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_FallingWatersEventShapefile_16.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Merrithonactivity_12703574676tracks_17.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BlueMntn5182025tracks_18.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Dufferin5192025tracks_19.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BeaverValleytracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMountaintracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_DufferinSectiontracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Niagara_Section_of_the_Brucetracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Bruce_Trail_Toronto_Section_20210410tracks_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Peninsulatracks_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BruceTrail_CaledonHillsSectiontracks_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BruceTrail_IroquoiaSectiontracks_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sydenhamtracks_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102024tracks_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102124tracks_11.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102224tracks_12.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102224_2tracks_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102324tracks_14.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMnt102424tracks_15.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_FallingWatersEventShapefile_16.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Merrithonactivity_12703574676tracks_17.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BlueMntn5182025tracks_18.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Dufferin5192025tracks_19.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Dufferin5192025tracks_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});