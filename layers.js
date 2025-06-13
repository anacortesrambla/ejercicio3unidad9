var wms_layers = [];

var lyr_OrtoimagenPNOA_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.MosaicElement",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen PNOA',
                            popuplayertitle: 'Ortoimagen PNOA',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtoimagenPNOA_0, 0]);
var lyr_FondoMapasrasterdelIGN_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/mapa-raster",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fondo/Mapas raster del IGN',
                            popuplayertitle: 'Fondo/Mapas raster del IGN',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FondoMapasrasterdelIGN_1, 0]);

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunidadesAutnomas_3 = new ol.format.GeoJSON();
var features_ComunidadesAutnomas_3 = format_ComunidadesAutnomas_3.readFeatures(json_ComunidadesAutnomas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesAutnomas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesAutnomas_3.addFeatures(features_ComunidadesAutnomas_3);
var lyr_ComunidadesAutnomas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesAutnomas_3, 
                style: style_ComunidadesAutnomas_3,
                popuplayertitle: 'Comunidades Autónomas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesAutnomas_3.png" /> Comunidades Autónomas'
            });
var format_Parquesnacionales_4 = new ol.format.GeoJSON();
var features_Parquesnacionales_4 = format_Parquesnacionales_4.readFeatures(json_Parquesnacionales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parquesnacionales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquesnacionales_4.addFeatures(features_Parquesnacionales_4);
var lyr_Parquesnacionales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parquesnacionales_4, 
                style: style_Parquesnacionales_4,
                popuplayertitle: 'Parques nacionales',
                interactive: true,
                title: '<img src="styles/legend/Parquesnacionales_4.png" /> Parques nacionales'
            });
var format_Ros_5 = new ol.format.GeoJSON();
var features_Ros_5 = format_Ros_5.readFeatures(json_Ros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_5.addFeatures(features_Ros_5);
var lyr_Ros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_5, 
                style: style_Ros_5,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_5.png" /> Ríos'
            });
var group_Ejercicio2 = new ol.layer.Group({
                                layers: [lyr_ComunidadesAutnomas_3,lyr_Parquesnacionales_4,lyr_Ros_5,],
                                fold: 'open',
                                title: 'Ejercicio 2'});

lyr_OrtoimagenPNOA_0.setVisible(true);lyr_FondoMapasrasterdelIGN_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_ComunidadesAutnomas_3.setVisible(true);lyr_Parquesnacionales_4.setVisible(true);lyr_Ros_5.setVisible(true);
var layersList = [lyr_OrtoimagenPNOA_0,lyr_FondoMapasrasterdelIGN_1,lyr_OSMStandard_2,group_Ejercicio2];
lyr_ComunidadesAutnomas_3.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'area': 'Área (hectáreas)', 'CCAA': 'CCAA', });
lyr_Parquesnacionales_4.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'area', 'Nombre PN': 'Nombre PN', });
lyr_Ros_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre Río', });
lyr_ComunidadesAutnomas_3.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', 'area': 'TextEdit', 'CCAA': 'TextEdit', });
lyr_Parquesnacionales_4.set('fieldImages', {'Name': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'Hidden', 'Ampliacion': 'Hidden', 'Fecha de d': 'Hidden', 'Modificaci': 'Hidden', 'area': 'Hidden', 'Nombre PN': 'Hidden', });
lyr_Ros_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_ComunidadesAutnomas_3.set('fieldLabels', {'ID': 'inline label - always visible', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', 'area': 'no label', 'CCAA': 'header label - visible with data', });
lyr_Parquesnacionales_4.set('fieldLabels', {'Name': 'header label - always visible', 'Declaracio': 'inline label - always visible', });
lyr_Ros_5.set('fieldLabels', {'Texto': 'header label - visible with data', 'Longitud': 'no label', 'Categoria': 'inline label - always visible', 'Imagen': 'no label', 'Shape_Leng': 'no label', 'Nombre Río': 'no label', });
lyr_Ros_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});