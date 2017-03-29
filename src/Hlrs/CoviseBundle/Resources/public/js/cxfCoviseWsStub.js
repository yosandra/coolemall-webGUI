//
// Definitions for schema: http://www.hlrs.de/organization/vis/covise
//  file:/home/hpcaiyin/vis/test/COVISE-1312.wsdl#types1
//
//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}OpenNetDoneEvent
//
function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_OpenNetDoneEvent';
    this._type = '';
    this._mapname = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.getType = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_getType;

function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.setType = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.getMapname
// element get for mapname
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mapname
// setter function is is www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.setMapname
//
function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_getMapname() { return this._mapname;}

www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.getMapname = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_getMapname;

function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_setMapname(value) { this._mapname = value;}

www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.setMapname = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_setMapname;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}OpenNetDoneEvent
//
function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<mapname>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapname);
     xml = xml + '</mapname>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_OpenNetDoneEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_serialize;

function www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_OpenNetDoneEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapname');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMapname(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}StringPair
//
function www_hlrs_de_organization_vis_covise_StringPair () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_StringPair';
    this._first = '';
    this._second = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_StringPair.prototype.getFirst
// element get for first
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for first
// setter function is is www_hlrs_de_organization_vis_covise_StringPair.prototype.setFirst
//
function www_hlrs_de_organization_vis_covise_StringPair_getFirst() { return this._first;}

www_hlrs_de_organization_vis_covise_StringPair.prototype.getFirst = www_hlrs_de_organization_vis_covise_StringPair_getFirst;

function www_hlrs_de_organization_vis_covise_StringPair_setFirst(value) { this._first = value;}

www_hlrs_de_organization_vis_covise_StringPair.prototype.setFirst = www_hlrs_de_organization_vis_covise_StringPair_setFirst;
//
// accessor is www_hlrs_de_organization_vis_covise_StringPair.prototype.getSecond
// element get for second
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for second
// setter function is is www_hlrs_de_organization_vis_covise_StringPair.prototype.setSecond
//
function www_hlrs_de_organization_vis_covise_StringPair_getSecond() { return this._second;}

www_hlrs_de_organization_vis_covise_StringPair.prototype.getSecond = www_hlrs_de_organization_vis_covise_StringPair_getSecond;

function www_hlrs_de_organization_vis_covise_StringPair_setSecond(value) { this._second = value;}

www_hlrs_de_organization_vis_covise_StringPair.prototype.setSecond = www_hlrs_de_organization_vis_covise_StringPair_setSecond;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}StringPair
//
function www_hlrs_de_organization_vis_covise_StringPair_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<first>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._first);
     xml = xml + '</first>';
    }
    // block for local variables
    {
     xml = xml + '<second>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._second);
     xml = xml + '</second>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_StringPair.prototype.serialize = www_hlrs_de_organization_vis_covise_StringPair_serialize;

function www_hlrs_de_organization_vis_covise_StringPair_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_StringPair();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing first');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFirst(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing second');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSecond(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Event
//
function www_hlrs_de_organization_vis_covise_Event () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Event';
    this._type = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_Event.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_Event.prototype.setType
//
function www_hlrs_de_organization_vis_covise_Event_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_Event.prototype.getType = www_hlrs_de_organization_vis_covise_Event_getType;

function www_hlrs_de_organization_vis_covise_Event_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_Event.prototype.setType = www_hlrs_de_organization_vis_covise_Event_setType;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Event
//
function www_hlrs_de_organization_vis_covise_Event_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Event.prototype.serialize = www_hlrs_de_organization_vis_covise_Event_serialize;

function www_hlrs_de_organization_vis_covise_Event_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Event();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}setParameterResponse
//
function www_hlrs_de_organization_vis_covise_setParameterResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_setParameterResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}setParameterResponse
//
function www_hlrs_de_organization_vis_covise_setParameterResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_setParameterResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_setParameterResponse_serialize;

function www_hlrs_de_organization_vis_covise_setParameterResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_setParameterResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Simple type (enumeration) {http://www.hlrs.de/organization/vis/covise}covise-AddPartnerMethod
//
// - RExec
// - RSH
// - SSH
// - NQS
// - Manual
// - RemoteDaemon
//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Colormap
//
function www_hlrs_de_organization_vis_covise_Colormap () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Colormap';
    this._name = '';
    this._pins = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_Colormap.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_Colormap.prototype.setName
//
function www_hlrs_de_organization_vis_covise_Colormap_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_Colormap.prototype.getName = www_hlrs_de_organization_vis_covise_Colormap_getName;

function www_hlrs_de_organization_vis_covise_Colormap_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_Colormap.prototype.setName = www_hlrs_de_organization_vis_covise_Colormap_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_Colormap.prototype.getPins
// element get for pins
// - element type is {http://www.hlrs.de/organization/vis/covise}ColormapPin
// - required element
// - array
//
// element set for pins
// setter function is is www_hlrs_de_organization_vis_covise_Colormap.prototype.setPins
//
function www_hlrs_de_organization_vis_covise_Colormap_getPins() { return this._pins;}

www_hlrs_de_organization_vis_covise_Colormap.prototype.getPins = www_hlrs_de_organization_vis_covise_Colormap_getPins;

function www_hlrs_de_organization_vis_covise_Colormap_setPins(value) { this._pins = value;}

www_hlrs_de_organization_vis_covise_Colormap.prototype.setPins = www_hlrs_de_organization_vis_covise_Colormap_setPins;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Colormap
//
function www_hlrs_de_organization_vis_covise_Colormap_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     if (this._pins != null) {
      for (var ax = 0;ax < this._pins.length;ax ++) {
       if (this._pins[ax] == null) {
        xml = xml + '<pins/>';
       } else {
        xml = xml + this._pins[ax].serialize(cxfjsutils, 'pins', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Colormap.prototype.serialize = www_hlrs_de_organization_vis_covise_Colormap_serialize;

function www_hlrs_de_organization_vis_covise_Colormap_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Colormap();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pins');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'pins')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_ColormapPin_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'pins'));
     newobject.setPins(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleExecuteStartEvent
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent';
    this._type = '';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.getModuleID = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_getModuleID;

function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.setModuleID = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleExecuteStartEvent
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}FileBrowserParameter
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_FileBrowserParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getName = www_hlrs_de_organization_vis_covise_FileBrowserParameter_getName;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setName = www_hlrs_de_organization_vis_covise_FileBrowserParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getType = www_hlrs_de_organization_vis_covise_FileBrowserParameter_getType;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setType = www_hlrs_de_organization_vis_covise_FileBrowserParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_FileBrowserParameter_getDescription;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_FileBrowserParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_FileBrowserParameter_getMapped;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_FileBrowserParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_FileBrowserParameter_getValue;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_FileBrowserParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}FileBrowserParameter
//
function www_hlrs_de_organization_vis_covise_FileBrowserParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_FileBrowserParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_FileBrowserParameter_serialize;

function www_hlrs_de_organization_vis_covise_FileBrowserParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_FileBrowserParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleAddEvent
//
function www_hlrs_de_organization_vis_covise_ModuleAddEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleAddEvent';
    this._type = '';
    this._module = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleAddEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleAddEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleAddEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleAddEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.getModule
// element get for module
// - element type is {http://www.hlrs.de/organization/vis/covise}Module
// - required element
//
// element set for module
// setter function is is www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.setModule
//
function www_hlrs_de_organization_vis_covise_ModuleAddEvent_getModule() { return this._module;}

www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.getModule = www_hlrs_de_organization_vis_covise_ModuleAddEvent_getModule;

function www_hlrs_de_organization_vis_covise_ModuleAddEvent_setModule(value) { this._module = value;}

www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.setModule = www_hlrs_de_organization_vis_covise_ModuleAddEvent_setModule;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleAddEvent
//
function www_hlrs_de_organization_vis_covise_ModuleAddEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + this._module.serialize(cxfjsutils, 'module', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleAddEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleAddEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleAddEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleAddEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing module');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Module_deserialize(cxfjsutils, curElement);
    }
    newobject.setModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}addPartner
//
function www_hlrs_de_organization_vis_covise_addPartner () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_addPartner';
    this._method = null;
    this._ip = null;
    this._user = null;
    this._password = null;
    this._timeout = null;
    this._display = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getMethod
// element get for method
// - element type is {http://www.hlrs.de/organization/vis/covise}AddPartnerMethod
// - required element
// - nillable
//
// element set for method
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setMethod
//
function www_hlrs_de_organization_vis_covise_addPartner_getMethod() { return this._method;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getMethod = www_hlrs_de_organization_vis_covise_addPartner_getMethod;

function www_hlrs_de_organization_vis_covise_addPartner_setMethod(value) { this._method = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setMethod = www_hlrs_de_organization_vis_covise_addPartner_setMethod;
//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getIp
// element get for ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
// - nillable
//
// element set for ip
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setIp
//
function www_hlrs_de_organization_vis_covise_addPartner_getIp() { return this._ip;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getIp = www_hlrs_de_organization_vis_covise_addPartner_getIp;

function www_hlrs_de_organization_vis_covise_addPartner_setIp(value) { this._ip = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setIp = www_hlrs_de_organization_vis_covise_addPartner_setIp;
//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getUser
// element get for user
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
// - nillable
//
// element set for user
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setUser
//
function www_hlrs_de_organization_vis_covise_addPartner_getUser() { return this._user;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getUser = www_hlrs_de_organization_vis_covise_addPartner_getUser;

function www_hlrs_de_organization_vis_covise_addPartner_setUser(value) { this._user = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setUser = www_hlrs_de_organization_vis_covise_addPartner_setUser;
//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
// - nillable
//
// element set for password
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setPassword
//
function www_hlrs_de_organization_vis_covise_addPartner_getPassword() { return this._password;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getPassword = www_hlrs_de_organization_vis_covise_addPartner_getPassword;

function www_hlrs_de_organization_vis_covise_addPartner_setPassword(value) { this._password = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setPassword = www_hlrs_de_organization_vis_covise_addPartner_setPassword;
//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getTimeout
// element get for timeout
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
// - nillable
//
// element set for timeout
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setTimeout
//
function www_hlrs_de_organization_vis_covise_addPartner_getTimeout() { return this._timeout;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getTimeout = www_hlrs_de_organization_vis_covise_addPartner_getTimeout;

function www_hlrs_de_organization_vis_covise_addPartner_setTimeout(value) { this._timeout = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setTimeout = www_hlrs_de_organization_vis_covise_addPartner_setTimeout;
//
// accessor is www_hlrs_de_organization_vis_covise_addPartner.prototype.getDisplay
// element get for display
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
// - nillable
//
// element set for display
// setter function is is www_hlrs_de_organization_vis_covise_addPartner.prototype.setDisplay
//
function www_hlrs_de_organization_vis_covise_addPartner_getDisplay() { return this._display;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.getDisplay = www_hlrs_de_organization_vis_covise_addPartner_getDisplay;

function www_hlrs_de_organization_vis_covise_addPartner_setDisplay(value) { this._display = value;}

www_hlrs_de_organization_vis_covise_addPartner.prototype.setDisplay = www_hlrs_de_organization_vis_covise_addPartner_setDisplay;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}addPartner
//
function www_hlrs_de_organization_vis_covise_addPartner_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._method == null) {
      xml = xml + '<method xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<method>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._method);
      xml = xml + '</method>';
     }
    }
    // block for local variables
    {
     if (this._ip != null) {
      if (this._ip == null) {
       xml = xml + '<ip xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<ip>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._ip);
       xml = xml + '</ip>';
      }
     }
    }
    // block for local variables
    {
     if (this._user != null) {
      if (this._user == null) {
       xml = xml + '<user xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<user>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._user);
       xml = xml + '</user>';
      }
     }
    }
    // block for local variables
    {
     if (this._password != null) {
      if (this._password == null) {
       xml = xml + '<password xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<password>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._password);
       xml = xml + '</password>';
      }
     }
    }
    // block for local variables
    {
     if (this._timeout != null) {
      if (this._timeout == null) {
       xml = xml + '<timeout xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<timeout>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._timeout);
       xml = xml + '</timeout>';
      }
     }
    }
    // block for local variables
    {
     if (this._display != null) {
      if (this._display == null) {
       xml = xml + '<display xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<display>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._display);
       xml = xml + '</display>';
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_addPartner.prototype.serialize = www_hlrs_de_organization_vis_covise_addPartner_serialize;

function www_hlrs_de_organization_vis_covise_addPartner_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_addPartner();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing method');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMethod(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setIp(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing user');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'user')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setUser(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'password')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPassword(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing timeout');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'timeout')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setTimeout(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing display');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'display')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDisplay(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleChangeEvent
//
function www_hlrs_de_organization_vis_covise_ModuleChangeEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleChangeEvent';
    this._type = '';
    this._module = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.getModule
// element get for module
// - element type is {http://www.hlrs.de/organization/vis/covise}Module
// - required element
//
// element set for module
// setter function is is www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.setModule
//
function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_getModule() { return this._module;}

www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.getModule = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_getModule;

function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_setModule(value) { this._module = value;}

www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.setModule = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_setModule;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleChangeEvent
//
function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + this._module.serialize(cxfjsutils, 'module', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleChangeEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleChangeEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleChangeEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing module');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Module_deserialize(cxfjsutils, curElement);
    }
    newobject.setModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}QuitEvent
//
function www_hlrs_de_organization_vis_covise_QuitEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_QuitEvent';
    this._type = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_QuitEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_QuitEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_QuitEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_QuitEvent.prototype.getType = www_hlrs_de_organization_vis_covise_QuitEvent_getType;

function www_hlrs_de_organization_vis_covise_QuitEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_QuitEvent.prototype.setType = www_hlrs_de_organization_vis_covise_QuitEvent_setType;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}QuitEvent
//
function www_hlrs_de_organization_vis_covise_QuitEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_QuitEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_QuitEvent_serialize;

function www_hlrs_de_organization_vis_covise_QuitEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_QuitEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}executeModule
//
function www_hlrs_de_organization_vis_covise_executeModule () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_executeModule';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_executeModule.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_executeModule.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_executeModule_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_executeModule.prototype.getModuleID = www_hlrs_de_organization_vis_covise_executeModule_getModuleID;

function www_hlrs_de_organization_vis_covise_executeModule_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_executeModule.prototype.setModuleID = www_hlrs_de_organization_vis_covise_executeModule_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}executeModule
//
function www_hlrs_de_organization_vis_covise_executeModule_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_executeModule.prototype.serialize = www_hlrs_de_organization_vis_covise_executeModule_serialize;

function www_hlrs_de_organization_vis_covise_executeModule_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_executeModule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getEventResponse
//
function www_hlrs_de_organization_vis_covise_getEventResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getEventResponse';
    this._event = null;
    this._uuid = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getEventResponse.prototype.getEvent
// element get for event
// - element type is {http://www.hlrs.de/organization/vis/covise}Event
// - optional element
// - nillable
//
// element set for event
// setter function is is www_hlrs_de_organization_vis_covise_getEventResponse.prototype.setEvent
//
function www_hlrs_de_organization_vis_covise_getEventResponse_getEvent() { return this._event;}

www_hlrs_de_organization_vis_covise_getEventResponse.prototype.getEvent = www_hlrs_de_organization_vis_covise_getEventResponse_getEvent;

function www_hlrs_de_organization_vis_covise_getEventResponse_setEvent(value) { this._event = value;}

www_hlrs_de_organization_vis_covise_getEventResponse.prototype.setEvent = www_hlrs_de_organization_vis_covise_getEventResponse_setEvent;
//
// accessor is www_hlrs_de_organization_vis_covise_getEventResponse.prototype.getUuid
// element get for uuid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for uuid
// setter function is is www_hlrs_de_organization_vis_covise_getEventResponse.prototype.setUuid
//
function www_hlrs_de_organization_vis_covise_getEventResponse_getUuid() { return this._uuid;}

www_hlrs_de_organization_vis_covise_getEventResponse.prototype.getUuid = www_hlrs_de_organization_vis_covise_getEventResponse_getUuid;

function www_hlrs_de_organization_vis_covise_getEventResponse_setUuid(value) { this._uuid = value;}

www_hlrs_de_organization_vis_covise_getEventResponse.prototype.setUuid = www_hlrs_de_organization_vis_covise_getEventResponse_setUuid;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getEventResponse
//
function www_hlrs_de_organization_vis_covise_getEventResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._event != null) {
      if (this._event == null) {
       xml = xml + '<event xsi:nil=\'true\'/>';
      } else {
       xml = xml + this._event.serialize(cxfjsutils, 'event', null);
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<uuid>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._uuid);
     xml = xml + '</uuid>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getEventResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getEventResponse_serialize;

function www_hlrs_de_organization_vis_covise_getEventResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getEventResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing event');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'event')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = www_hlrs_de_organization_vis_covise_Event_deserialize(cxfjsutils, curElement);
     }
     newobject.setEvent(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing uuid');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUuid(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Port
//
function www_hlrs_de_organization_vis_covise_Port () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Port';
    this._name = '';
    this._types = [];
    this._portType = '';
    this._id = '';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_Port.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_Port.prototype.setName
//
function www_hlrs_de_organization_vis_covise_Port_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_Port.prototype.getName = www_hlrs_de_organization_vis_covise_Port_getName;

function www_hlrs_de_organization_vis_covise_Port_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_Port.prototype.setName = www_hlrs_de_organization_vis_covise_Port_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_Port.prototype.getTypes
// element get for types
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for types
// setter function is is www_hlrs_de_organization_vis_covise_Port.prototype.setTypes
//
function www_hlrs_de_organization_vis_covise_Port_getTypes() { return this._types;}

www_hlrs_de_organization_vis_covise_Port.prototype.getTypes = www_hlrs_de_organization_vis_covise_Port_getTypes;

function www_hlrs_de_organization_vis_covise_Port_setTypes(value) { this._types = value;}

www_hlrs_de_organization_vis_covise_Port.prototype.setTypes = www_hlrs_de_organization_vis_covise_Port_setTypes;
//
// accessor is www_hlrs_de_organization_vis_covise_Port.prototype.getPortType
// element get for portType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for portType
// setter function is is www_hlrs_de_organization_vis_covise_Port.prototype.setPortType
//
function www_hlrs_de_organization_vis_covise_Port_getPortType() { return this._portType;}

www_hlrs_de_organization_vis_covise_Port.prototype.getPortType = www_hlrs_de_organization_vis_covise_Port_getPortType;

function www_hlrs_de_organization_vis_covise_Port_setPortType(value) { this._portType = value;}

www_hlrs_de_organization_vis_covise_Port.prototype.setPortType = www_hlrs_de_organization_vis_covise_Port_setPortType;
//
// accessor is www_hlrs_de_organization_vis_covise_Port.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for id
// setter function is is www_hlrs_de_organization_vis_covise_Port.prototype.setId
//
function www_hlrs_de_organization_vis_covise_Port_getId() { return this._id;}

www_hlrs_de_organization_vis_covise_Port.prototype.getId = www_hlrs_de_organization_vis_covise_Port_getId;

function www_hlrs_de_organization_vis_covise_Port_setId(value) { this._id = value;}

www_hlrs_de_organization_vis_covise_Port.prototype.setId = www_hlrs_de_organization_vis_covise_Port_setId;
//
// accessor is www_hlrs_de_organization_vis_covise_Port.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_Port.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_Port_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_Port.prototype.getModuleID = www_hlrs_de_organization_vis_covise_Port_getModuleID;

function www_hlrs_de_organization_vis_covise_Port_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_Port.prototype.setModuleID = www_hlrs_de_organization_vis_covise_Port_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Port
//
function www_hlrs_de_organization_vis_covise_Port_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     if (this._types != null) {
      for (var ax = 0;ax < this._types.length;ax ++) {
       if (this._types[ax] == null) {
        xml = xml + '<types/>';
       } else {
        xml = xml + '<types>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._types[ax]);
        xml = xml + '</types>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<portType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._portType);
     xml = xml + '</portType>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Port.prototype.serialize = www_hlrs_de_organization_vis_covise_Port_serialize;

function www_hlrs_de_organization_vis_covise_Port_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Port();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing types');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'types')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'types'));
     newobject.setTypes(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing portType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setPortType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getModuleID
//
function www_hlrs_de_organization_vis_covise_getModuleID () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getModuleID';
    this._module = '';
    this._instance = '';
    this._host = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getModuleID.prototype.getModule
// element get for module
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for module
// setter function is is www_hlrs_de_organization_vis_covise_getModuleID.prototype.setModule
//
function www_hlrs_de_organization_vis_covise_getModuleID_getModule() { return this._module;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.getModule = www_hlrs_de_organization_vis_covise_getModuleID_getModule;

function www_hlrs_de_organization_vis_covise_getModuleID_setModule(value) { this._module = value;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.setModule = www_hlrs_de_organization_vis_covise_getModuleID_setModule;
//
// accessor is www_hlrs_de_organization_vis_covise_getModuleID.prototype.getInstance
// element get for instance
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for instance
// setter function is is www_hlrs_de_organization_vis_covise_getModuleID.prototype.setInstance
//
function www_hlrs_de_organization_vis_covise_getModuleID_getInstance() { return this._instance;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.getInstance = www_hlrs_de_organization_vis_covise_getModuleID_getInstance;

function www_hlrs_de_organization_vis_covise_getModuleID_setInstance(value) { this._instance = value;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.setInstance = www_hlrs_de_organization_vis_covise_getModuleID_setInstance;
//
// accessor is www_hlrs_de_organization_vis_covise_getModuleID.prototype.getHost
// element get for host
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for host
// setter function is is www_hlrs_de_organization_vis_covise_getModuleID.prototype.setHost
//
function www_hlrs_de_organization_vis_covise_getModuleID_getHost() { return this._host;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.getHost = www_hlrs_de_organization_vis_covise_getModuleID_getHost;

function www_hlrs_de_organization_vis_covise_getModuleID_setHost(value) { this._host = value;}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.setHost = www_hlrs_de_organization_vis_covise_getModuleID_setHost;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getModuleID
//
function www_hlrs_de_organization_vis_covise_getModuleID_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<module>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._module);
     xml = xml + '</module>';
    }
    // block for local variables
    {
     xml = xml + '<instance>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._instance);
     xml = xml + '</instance>';
    }
    // block for local variables
    {
     xml = xml + '<host>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._host);
     xml = xml + '</host>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getModuleID.prototype.serialize = www_hlrs_de_organization_vis_covise_getModuleID_serialize;

function www_hlrs_de_organization_vis_covise_getModuleID_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getModuleID();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing module');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing instance');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setInstance(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing host');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setHost(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getParameterAsString
//
function www_hlrs_de_organization_vis_covise_getParameterAsString () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getParameterAsString';
    this._moduleID = '';
    this._parameter = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_getParameterAsString_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.getModuleID = www_hlrs_de_organization_vis_covise_getParameterAsString_getModuleID;

function www_hlrs_de_organization_vis_covise_getParameterAsString_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.setModuleID = www_hlrs_de_organization_vis_covise_getParameterAsString_setModuleID;
//
// accessor is www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.getParameter
// element get for parameter
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for parameter
// setter function is is www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.setParameter
//
function www_hlrs_de_organization_vis_covise_getParameterAsString_getParameter() { return this._parameter;}

www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.getParameter = www_hlrs_de_organization_vis_covise_getParameterAsString_getParameter;

function www_hlrs_de_organization_vis_covise_getParameterAsString_setParameter(value) { this._parameter = value;}

www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.setParameter = www_hlrs_de_organization_vis_covise_getParameterAsString_setParameter;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getParameterAsString
//
function www_hlrs_de_organization_vis_covise_getParameterAsString_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    // block for local variables
    {
     xml = xml + '<parameter>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._parameter);
     xml = xml + '</parameter>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getParameterAsString.prototype.serialize = www_hlrs_de_organization_vis_covise_getParameterAsString_serialize;

function www_hlrs_de_organization_vis_covise_getParameterAsString_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getParameterAsString();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing parameter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setParameter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}LinkAddEvent
//
function www_hlrs_de_organization_vis_covise_LinkAddEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_LinkAddEvent';
    this._type = '';
    this._link = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_LinkAddEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.getType = www_hlrs_de_organization_vis_covise_LinkAddEvent_getType;

function www_hlrs_de_organization_vis_covise_LinkAddEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.setType = www_hlrs_de_organization_vis_covise_LinkAddEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.getLink
// element get for link
// - element type is {http://www.hlrs.de/organization/vis/covise}Link
// - required element
//
// element set for link
// setter function is is www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.setLink
//
function www_hlrs_de_organization_vis_covise_LinkAddEvent_getLink() { return this._link;}

www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.getLink = www_hlrs_de_organization_vis_covise_LinkAddEvent_getLink;

function www_hlrs_de_organization_vis_covise_LinkAddEvent_setLink(value) { this._link = value;}

www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.setLink = www_hlrs_de_organization_vis_covise_LinkAddEvent_setLink;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}LinkAddEvent
//
function www_hlrs_de_organization_vis_covise_LinkAddEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + this._link.serialize(cxfjsutils, 'link', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_LinkAddEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_LinkAddEvent_serialize;

function www_hlrs_de_organization_vis_covise_LinkAddEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_LinkAddEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing link');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Link_deserialize(cxfjsutils, curElement);
    }
    newobject.setLink(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Module
//
function www_hlrs_de_organization_vis_covise_Module () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Module';
    this._name = '';
    this._category = '';
    this._host = '';
    this._description = '';
    this._instance = '';
    this._id = '';
    this._title = '';
    this._position = null;
    this._parameters = [];
    this._inputPorts = [];
    this._outputPorts = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setName
//
function www_hlrs_de_organization_vis_covise_Module_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_Module.prototype.getName = www_hlrs_de_organization_vis_covise_Module_getName;

function www_hlrs_de_organization_vis_covise_Module_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setName = www_hlrs_de_organization_vis_covise_Module_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getCategory
// element get for category
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for category
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setCategory
//
function www_hlrs_de_organization_vis_covise_Module_getCategory() { return this._category;}

www_hlrs_de_organization_vis_covise_Module.prototype.getCategory = www_hlrs_de_organization_vis_covise_Module_getCategory;

function www_hlrs_de_organization_vis_covise_Module_setCategory(value) { this._category = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setCategory = www_hlrs_de_organization_vis_covise_Module_setCategory;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getHost
// element get for host
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for host
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setHost
//
function www_hlrs_de_organization_vis_covise_Module_getHost() { return this._host;}

www_hlrs_de_organization_vis_covise_Module.prototype.getHost = www_hlrs_de_organization_vis_covise_Module_getHost;

function www_hlrs_de_organization_vis_covise_Module_setHost(value) { this._host = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setHost = www_hlrs_de_organization_vis_covise_Module_setHost;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_Module_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_Module.prototype.getDescription = www_hlrs_de_organization_vis_covise_Module_getDescription;

function www_hlrs_de_organization_vis_covise_Module_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setDescription = www_hlrs_de_organization_vis_covise_Module_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getInstance
// element get for instance
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for instance
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setInstance
//
function www_hlrs_de_organization_vis_covise_Module_getInstance() { return this._instance;}

www_hlrs_de_organization_vis_covise_Module.prototype.getInstance = www_hlrs_de_organization_vis_covise_Module_getInstance;

function www_hlrs_de_organization_vis_covise_Module_setInstance(value) { this._instance = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setInstance = www_hlrs_de_organization_vis_covise_Module_setInstance;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for id
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setId
//
function www_hlrs_de_organization_vis_covise_Module_getId() { return this._id;}

www_hlrs_de_organization_vis_covise_Module.prototype.getId = www_hlrs_de_organization_vis_covise_Module_getId;

function www_hlrs_de_organization_vis_covise_Module_setId(value) { this._id = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setId = www_hlrs_de_organization_vis_covise_Module_setId;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getTitle
// element get for title
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for title
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setTitle
//
function www_hlrs_de_organization_vis_covise_Module_getTitle() { return this._title;}

www_hlrs_de_organization_vis_covise_Module.prototype.getTitle = www_hlrs_de_organization_vis_covise_Module_getTitle;

function www_hlrs_de_organization_vis_covise_Module_setTitle(value) { this._title = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setTitle = www_hlrs_de_organization_vis_covise_Module_setTitle;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getPosition
// element get for position
// - element type is {http://www.hlrs.de/organization/vis/covise}Point
// - required element
//
// element set for position
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setPosition
//
function www_hlrs_de_organization_vis_covise_Module_getPosition() { return this._position;}

www_hlrs_de_organization_vis_covise_Module.prototype.getPosition = www_hlrs_de_organization_vis_covise_Module_getPosition;

function www_hlrs_de_organization_vis_covise_Module_setPosition(value) { this._position = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setPosition = www_hlrs_de_organization_vis_covise_Module_setPosition;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getParameters
// element get for parameters
// - element type is {http://www.hlrs.de/organization/vis/covise}Parameter
// - required element
// - array
// - nillable
//
// element set for parameters
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setParameters
//
function www_hlrs_de_organization_vis_covise_Module_getParameters() { return this._parameters;}

www_hlrs_de_organization_vis_covise_Module.prototype.getParameters = www_hlrs_de_organization_vis_covise_Module_getParameters;

function www_hlrs_de_organization_vis_covise_Module_setParameters(value) { this._parameters = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setParameters = www_hlrs_de_organization_vis_covise_Module_setParameters;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getInputPorts
// element get for inputPorts
// - element type is {http://www.hlrs.de/organization/vis/covise}Port
// - required element
// - array
//
// element set for inputPorts
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setInputPorts
//
function www_hlrs_de_organization_vis_covise_Module_getInputPorts() { return this._inputPorts;}

www_hlrs_de_organization_vis_covise_Module.prototype.getInputPorts = www_hlrs_de_organization_vis_covise_Module_getInputPorts;

function www_hlrs_de_organization_vis_covise_Module_setInputPorts(value) { this._inputPorts = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setInputPorts = www_hlrs_de_organization_vis_covise_Module_setInputPorts;
//
// accessor is www_hlrs_de_organization_vis_covise_Module.prototype.getOutputPorts
// element get for outputPorts
// - element type is {http://www.hlrs.de/organization/vis/covise}Port
// - required element
// - array
//
// element set for outputPorts
// setter function is is www_hlrs_de_organization_vis_covise_Module.prototype.setOutputPorts
//
function www_hlrs_de_organization_vis_covise_Module_getOutputPorts() { return this._outputPorts;}

www_hlrs_de_organization_vis_covise_Module.prototype.getOutputPorts = www_hlrs_de_organization_vis_covise_Module_getOutputPorts;

function www_hlrs_de_organization_vis_covise_Module_setOutputPorts(value) { this._outputPorts = value;}

www_hlrs_de_organization_vis_covise_Module.prototype.setOutputPorts = www_hlrs_de_organization_vis_covise_Module_setOutputPorts;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Module
//
function www_hlrs_de_organization_vis_covise_Module_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<category>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._category);
     xml = xml + '</category>';
    }
    // block for local variables
    {
     xml = xml + '<host>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._host);
     xml = xml + '</host>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<instance>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._instance);
     xml = xml + '</instance>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + '<title>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._title);
     xml = xml + '</title>';
    }
    // block for local variables
    {
     xml = xml + this._position.serialize(cxfjsutils, 'position', null);
    }
    // block for local variables
    {
     if (this._parameters != null) {
      for (var ax = 0;ax < this._parameters.length;ax ++) {
       if (this._parameters[ax] == null) {
        xml = xml + '<parameters xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._parameters[ax].serialize(cxfjsutils, 'parameters', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._inputPorts != null) {
      for (var ax = 0;ax < this._inputPorts.length;ax ++) {
       if (this._inputPorts[ax] == null) {
        xml = xml + '<inputPorts/>';
       } else {
        xml = xml + this._inputPorts[ax].serialize(cxfjsutils, 'inputPorts', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._outputPorts != null) {
      for (var ax = 0;ax < this._outputPorts.length;ax ++) {
       if (this._outputPorts[ax] == null) {
        xml = xml + '<outputPorts/>';
       } else {
        xml = xml + this._outputPorts[ax].serialize(cxfjsutils, 'outputPorts', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Module.prototype.serialize = www_hlrs_de_organization_vis_covise_Module_serialize;

function www_hlrs_de_organization_vis_covise_Module_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Module();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing category');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCategory(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing host');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setHost(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing instance');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setInstance(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing title');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTitle(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Point_deserialize(cxfjsutils, curElement);
    }
    newobject.setPosition(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'parameters')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Parameter_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'parameters'));
     newobject.setParameters(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing inputPorts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'inputPorts')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Port_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'inputPorts'));
     newobject.setInputPorts(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing outputPorts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'outputPorts')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Port_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'outputPorts'));
     newobject.setOutputPorts(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse
//
function www_hlrs_de_organization_vis_covise_instantiateModuleResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_instantiateModuleResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse
//
function www_hlrs_de_organization_vis_covise_instantiateModuleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_instantiateModuleResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_serialize;

function www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_instantiateModuleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}FloatSliderParameter
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_FloatSliderParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = 0.0;
    this._min = 0.0;
    this._max = 0.0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getName = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getName;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setName = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getType = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getType;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setType = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getDescription;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMapped;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getValue;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setValue;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMin
// element get for min
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for min
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMin
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMin() { return this._min;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMin = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMin;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMin(value) { this._min = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMin = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMin;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMax
// element get for max
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for max
// setter function is is www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMax
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMax() { return this._max;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.getMax = www_hlrs_de_organization_vis_covise_FloatSliderParameter_getMax;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMax(value) { this._max = value;}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.setMax = www_hlrs_de_organization_vis_covise_FloatSliderParameter_setMax;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}FloatSliderParameter
//
function www_hlrs_de_organization_vis_covise_FloatSliderParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    // block for local variables
    {
     xml = xml + '<min>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._min);
     xml = xml + '</min>';
    }
    // block for local variables
    {
     xml = xml + '<max>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._max);
     xml = xml + '</max>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_FloatSliderParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_FloatSliderParameter_serialize;

function www_hlrs_de_organization_vis_covise_FloatSliderParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_FloatSliderParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing min');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setMin(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing max');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setMax(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ExecuteStartEvent
//
function www_hlrs_de_organization_vis_covise_ExecuteStartEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ExecuteStartEvent';
    this._type = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ExecuteStartEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ExecuteStartEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ExecuteStartEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ExecuteStartEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ExecuteStartEvent_getType;

function www_hlrs_de_organization_vis_covise_ExecuteStartEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ExecuteStartEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ExecuteStartEvent_setType;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ExecuteStartEvent
//
function www_hlrs_de_organization_vis_covise_ExecuteStartEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ExecuteStartEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ExecuteStartEvent_serialize;

function www_hlrs_de_organization_vis_covise_ExecuteStartEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ExecuteStartEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}unlink
//
function www_hlrs_de_organization_vis_covise_unlink () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_unlink';
    this._linkID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_unlink.prototype.getLinkID
// element get for linkID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for linkID
// setter function is is www_hlrs_de_organization_vis_covise_unlink.prototype.setLinkID
//
function www_hlrs_de_organization_vis_covise_unlink_getLinkID() { return this._linkID;}

www_hlrs_de_organization_vis_covise_unlink.prototype.getLinkID = www_hlrs_de_organization_vis_covise_unlink_getLinkID;

function www_hlrs_de_organization_vis_covise_unlink_setLinkID(value) { this._linkID = value;}

www_hlrs_de_organization_vis_covise_unlink.prototype.setLinkID = www_hlrs_de_organization_vis_covise_unlink_setLinkID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}unlink
//
function www_hlrs_de_organization_vis_covise_unlink_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<linkID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._linkID);
     xml = xml + '</linkID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_unlink.prototype.serialize = www_hlrs_de_organization_vis_covise_unlink_serialize;

function www_hlrs_de_organization_vis_covise_unlink_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_unlink();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing linkID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLinkID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}unlinkResponse
//
function www_hlrs_de_organization_vis_covise_unlinkResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_unlinkResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}unlinkResponse
//
function www_hlrs_de_organization_vis_covise_unlinkResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_unlinkResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_unlinkResponse_serialize;

function www_hlrs_de_organization_vis_covise_unlinkResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_unlinkResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getRunningModule
//
function www_hlrs_de_organization_vis_covise_getRunningModule () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getRunningModule';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getRunningModule.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_getRunningModule.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_getRunningModule_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_getRunningModule.prototype.getModuleID = www_hlrs_de_organization_vis_covise_getRunningModule_getModuleID;

function www_hlrs_de_organization_vis_covise_getRunningModule_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_getRunningModule.prototype.setModuleID = www_hlrs_de_organization_vis_covise_getRunningModule_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getRunningModule
//
function www_hlrs_de_organization_vis_covise_getRunningModule_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getRunningModule.prototype.serialize = www_hlrs_de_organization_vis_covise_getRunningModule_serialize;

function www_hlrs_de_organization_vis_covise_getRunningModule_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getRunningModule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ParameterChangeEvent
//
function www_hlrs_de_organization_vis_covise_ParameterChangeEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ParameterChangeEvent';
    this._type = '';
    this._moduleID = '';
    this._parameter = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getType;

function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getModuleID = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getModuleID;

function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setModuleID = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setModuleID;
//
// accessor is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getParameter
// element get for parameter
// - element type is {http://www.hlrs.de/organization/vis/covise}Parameter
// - required element
// - nillable
//
// element set for parameter
// setter function is is www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setParameter
//
function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getParameter() { return this._parameter;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.getParameter = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_getParameter;

function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setParameter(value) { this._parameter = value;}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.setParameter = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_setParameter;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ParameterChangeEvent
//
function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    // block for local variables
    {
     if (this._parameter == null) {
      xml = xml + '<parameter xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._parameter.serialize(cxfjsutils, 'parameter', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ParameterChangeEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_serialize;

function www_hlrs_de_organization_vis_covise_ParameterChangeEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ParameterChangeEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing parameter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Parameter_deserialize(cxfjsutils, curElement);
    }
    newobject.setParameter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}OpenNetEvent
//
function www_hlrs_de_organization_vis_covise_OpenNetEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_OpenNetEvent';
    this._type = '';
    this._mapname = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_OpenNetEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.getType = www_hlrs_de_organization_vis_covise_OpenNetEvent_getType;

function www_hlrs_de_organization_vis_covise_OpenNetEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.setType = www_hlrs_de_organization_vis_covise_OpenNetEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.getMapname
// element get for mapname
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for mapname
// setter function is is www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.setMapname
//
function www_hlrs_de_organization_vis_covise_OpenNetEvent_getMapname() { return this._mapname;}

www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.getMapname = www_hlrs_de_organization_vis_covise_OpenNetEvent_getMapname;

function www_hlrs_de_organization_vis_covise_OpenNetEvent_setMapname(value) { this._mapname = value;}

www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.setMapname = www_hlrs_de_organization_vis_covise_OpenNetEvent_setMapname;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}OpenNetEvent
//
function www_hlrs_de_organization_vis_covise_OpenNetEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<mapname>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapname);
     xml = xml + '</mapname>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_OpenNetEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_OpenNetEvent_serialize;

function www_hlrs_de_organization_vis_covise_OpenNetEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_OpenNetEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapname');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMapname(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse
//
function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getParameterAsStringResponse';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getParameterAsStringResponse.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_getParameterAsStringResponse.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_getParameterAsStringResponse.prototype.getValue = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_getValue;

function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_getParameterAsStringResponse.prototype.setValue = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse
//
function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getParameterAsStringResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_serialize;

function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getParameterAsStringResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ExecuteFinishEvent
//
function www_hlrs_de_organization_vis_covise_ExecuteFinishEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ExecuteFinishEvent';
    this._type = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ExecuteFinishEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ExecuteFinishEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ExecuteFinishEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_getType;

function www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ExecuteFinishEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_setType;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ExecuteFinishEvent
//
function www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ExecuteFinishEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_serialize;

function www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ExecuteFinishEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}executeNet
//
function www_hlrs_de_organization_vis_covise_executeNet () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_executeNet';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}executeNet
//
function www_hlrs_de_organization_vis_covise_executeNet_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_executeNet.prototype.serialize = www_hlrs_de_organization_vis_covise_executeNet_serialize;

function www_hlrs_de_organization_vis_covise_executeNet_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_executeNet();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}executeNetResponse
//
function www_hlrs_de_organization_vis_covise_executeNetResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_executeNetResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}executeNetResponse
//
function www_hlrs_de_organization_vis_covise_executeNetResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_executeNetResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_executeNetResponse_serialize;

function www_hlrs_de_organization_vis_covise_executeNetResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_executeNetResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}executeModuleResponse
//
function www_hlrs_de_organization_vis_covise_executeModuleResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_executeModuleResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}executeModuleResponse
//
function www_hlrs_de_organization_vis_covise_executeModuleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_executeModuleResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_executeModuleResponse_serialize;

function www_hlrs_de_organization_vis_covise_executeModuleResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_executeModuleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleExecuteFinishEvent
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent';
    this._type = '';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.getModuleID = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_getModuleID;

function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.setModuleID = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleExecuteFinishEvent
//
function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getRunningModules
//
function www_hlrs_de_organization_vis_covise_getRunningModules () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getRunningModules';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}getRunningModules
//
function www_hlrs_de_organization_vis_covise_getRunningModules_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getRunningModules.prototype.serialize = www_hlrs_de_organization_vis_covise_getRunningModules_serialize;

function www_hlrs_de_organization_vis_covise_getRunningModules_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getRunningModules();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse
//
function www_hlrs_de_organization_vis_covise_getConfigEntryResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getConfigEntryResponse';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getConfigEntryResponse.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_getConfigEntryResponse.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_getConfigEntryResponse_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_getConfigEntryResponse.prototype.getValue = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_getValue;

function www_hlrs_de_organization_vis_covise_getConfigEntryResponse_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_getConfigEntryResponse.prototype.setValue = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse
//
function www_hlrs_de_organization_vis_covise_getConfigEntryResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getConfigEntryResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_serialize;

function www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getConfigEntryResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ColormapPin
//
function www_hlrs_de_organization_vis_covise_ColormapPin () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ColormapPin';
    this._r = 0.0;
    this._g = 0.0;
    this._b = 0.0;
    this._a = 0.0;
    this._position = 0.0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getR
// element get for r
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for r
// setter function is is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setR
//
function www_hlrs_de_organization_vis_covise_ColormapPin_getR() { return this._r;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getR = www_hlrs_de_organization_vis_covise_ColormapPin_getR;

function www_hlrs_de_organization_vis_covise_ColormapPin_setR(value) { this._r = value;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setR = www_hlrs_de_organization_vis_covise_ColormapPin_setR;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getG
// element get for g
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for g
// setter function is is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setG
//
function www_hlrs_de_organization_vis_covise_ColormapPin_getG() { return this._g;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getG = www_hlrs_de_organization_vis_covise_ColormapPin_getG;

function www_hlrs_de_organization_vis_covise_ColormapPin_setG(value) { this._g = value;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setG = www_hlrs_de_organization_vis_covise_ColormapPin_setG;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getB
// element get for b
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for b
// setter function is is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setB
//
function www_hlrs_de_organization_vis_covise_ColormapPin_getB() { return this._b;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getB = www_hlrs_de_organization_vis_covise_ColormapPin_getB;

function www_hlrs_de_organization_vis_covise_ColormapPin_setB(value) { this._b = value;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setB = www_hlrs_de_organization_vis_covise_ColormapPin_setB;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getA
// element get for a
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for a
// setter function is is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setA
//
function www_hlrs_de_organization_vis_covise_ColormapPin_getA() { return this._a;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getA = www_hlrs_de_organization_vis_covise_ColormapPin_getA;

function www_hlrs_de_organization_vis_covise_ColormapPin_setA(value) { this._a = value;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setA = www_hlrs_de_organization_vis_covise_ColormapPin_setA;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getPosition
// element get for position
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for position
// setter function is is www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setPosition
//
function www_hlrs_de_organization_vis_covise_ColormapPin_getPosition() { return this._position;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.getPosition = www_hlrs_de_organization_vis_covise_ColormapPin_getPosition;

function www_hlrs_de_organization_vis_covise_ColormapPin_setPosition(value) { this._position = value;}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.setPosition = www_hlrs_de_organization_vis_covise_ColormapPin_setPosition;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ColormapPin
//
function www_hlrs_de_organization_vis_covise_ColormapPin_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<r>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._r);
     xml = xml + '</r>';
    }
    // block for local variables
    {
     xml = xml + '<g>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._g);
     xml = xml + '</g>';
    }
    // block for local variables
    {
     xml = xml + '<b>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._b);
     xml = xml + '</b>';
    }
    // block for local variables
    {
     xml = xml + '<a>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._a);
     xml = xml + '</a>';
    }
    // block for local variables
    {
     xml = xml + '<position>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._position);
     xml = xml + '</position>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ColormapPin.prototype.serialize = www_hlrs_de_organization_vis_covise_ColormapPin_serialize;

function www_hlrs_de_organization_vis_covise_ColormapPin_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ColormapPin();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing r');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setR(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing g');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setG(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing b');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setB(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing a');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setA(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setPosition(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse
//
function www_hlrs_de_organization_vis_covise_getRunningModulesResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getRunningModulesResponse';
    this._modules = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_getRunningModulesResponse.prototype.getModules
// element get for modules
// - element type is {http://www.hlrs.de/organization/vis/covise}Module
// - required element
// - array
//
// element set for modules
// setter function is is www_hlrs_de_organization_vis_covise_getRunningModulesResponse.prototype.setModules
//
function www_hlrs_de_organization_vis_covise_getRunningModulesResponse_getModules() { return this._modules;}

www_hlrs_de_organization_vis_covise_getRunningModulesResponse.prototype.getModules = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_getModules;

function www_hlrs_de_organization_vis_covise_getRunningModulesResponse_setModules(value) { this._modules = value;}

www_hlrs_de_organization_vis_covise_getRunningModulesResponse.prototype.setModules = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_setModules;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse
//
function www_hlrs_de_organization_vis_covise_getRunningModulesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._modules != null) {
      for (var ax = 0;ax < this._modules.length;ax ++) {
       if (this._modules[ax] == null) {
        xml = xml + '<modules/>';
       } else {
        xml = xml + this._modules[ax].serialize(cxfjsutils, 'modules', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getRunningModulesResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_serialize;

function www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getRunningModulesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing modules');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'modules')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Module_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'modules'));
     newobject.setModules(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Point
//
function www_hlrs_de_organization_vis_covise_Point () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Point';
    this._x = 0;
    this._y = 0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_Point.prototype.getX
// element get for x
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for x
// setter function is is www_hlrs_de_organization_vis_covise_Point.prototype.setX
//
function www_hlrs_de_organization_vis_covise_Point_getX() { return this._x;}

www_hlrs_de_organization_vis_covise_Point.prototype.getX = www_hlrs_de_organization_vis_covise_Point_getX;

function www_hlrs_de_organization_vis_covise_Point_setX(value) { this._x = value;}

www_hlrs_de_organization_vis_covise_Point.prototype.setX = www_hlrs_de_organization_vis_covise_Point_setX;
//
// accessor is www_hlrs_de_organization_vis_covise_Point.prototype.getY
// element get for y
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for y
// setter function is is www_hlrs_de_organization_vis_covise_Point.prototype.setY
//
function www_hlrs_de_organization_vis_covise_Point_getY() { return this._y;}

www_hlrs_de_organization_vis_covise_Point.prototype.getY = www_hlrs_de_organization_vis_covise_Point_getY;

function www_hlrs_de_organization_vis_covise_Point_setY(value) { this._y = value;}

www_hlrs_de_organization_vis_covise_Point.prototype.setY = www_hlrs_de_organization_vis_covise_Point_setY;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Point
//
function www_hlrs_de_organization_vis_covise_Point_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<x>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._x);
     xml = xml + '</x>';
    }
    // block for local variables
    {
     xml = xml + '<y>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._y);
     xml = xml + '</y>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Point.prototype.serialize = www_hlrs_de_organization_vis_covise_Point_serialize;

function www_hlrs_de_organization_vis_covise_Point_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Point();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing x');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setX(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing y');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setY(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getModuleIDResponse
//
function www_hlrs_de_organization_vis_covise_getModuleIDResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getModuleIDResponse';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getModuleIDResponse.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_getModuleIDResponse.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_getModuleIDResponse_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_getModuleIDResponse.prototype.getModuleID = www_hlrs_de_organization_vis_covise_getModuleIDResponse_getModuleID;

function www_hlrs_de_organization_vis_covise_getModuleIDResponse_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_getModuleIDResponse.prototype.setModuleID = www_hlrs_de_organization_vis_covise_getModuleIDResponse_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getModuleIDResponse
//
function www_hlrs_de_organization_vis_covise_getModuleIDResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getModuleIDResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getModuleIDResponse_serialize;

function www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getModuleIDResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getLinksResponse
//
function www_hlrs_de_organization_vis_covise_getLinksResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getLinksResponse';
    this._links = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_getLinksResponse.prototype.getLinks
// element get for links
// - element type is {http://www.hlrs.de/organization/vis/covise}Link
// - required element
// - array
//
// element set for links
// setter function is is www_hlrs_de_organization_vis_covise_getLinksResponse.prototype.setLinks
//
function www_hlrs_de_organization_vis_covise_getLinksResponse_getLinks() { return this._links;}

www_hlrs_de_organization_vis_covise_getLinksResponse.prototype.getLinks = www_hlrs_de_organization_vis_covise_getLinksResponse_getLinks;

function www_hlrs_de_organization_vis_covise_getLinksResponse_setLinks(value) { this._links = value;}

www_hlrs_de_organization_vis_covise_getLinksResponse.prototype.setLinks = www_hlrs_de_organization_vis_covise_getLinksResponse_setLinks;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getLinksResponse
//
function www_hlrs_de_organization_vis_covise_getLinksResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._links != null) {
      for (var ax = 0;ax < this._links.length;ax ++) {
       if (this._links[ax] == null) {
        xml = xml + '<links/>';
       } else {
        xml = xml + this._links[ax].serialize(cxfjsutils, 'links', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getLinksResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getLinksResponse_serialize;

function www_hlrs_de_organization_vis_covise_getLinksResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getLinksResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing links');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'links')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Link_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'links'));
     newobject.setLinks(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}quitResponse
//
function www_hlrs_de_organization_vis_covise_quitResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_quitResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}quitResponse
//
function www_hlrs_de_organization_vis_covise_quitResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_quitResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_quitResponse_serialize;

function www_hlrs_de_organization_vis_covise_quitResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_quitResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ChoiceParameter
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ChoiceParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._selected = 0;
    this._choices = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getName = www_hlrs_de_organization_vis_covise_ChoiceParameter_getName;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setName = www_hlrs_de_organization_vis_covise_ChoiceParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getType = www_hlrs_de_organization_vis_covise_ChoiceParameter_getType;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setType = www_hlrs_de_organization_vis_covise_ChoiceParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_ChoiceParameter_getDescription;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_ChoiceParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_ChoiceParameter_getMapped;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_ChoiceParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getSelected
// element get for selected
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for selected
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setSelected
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getSelected() { return this._selected;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getSelected = www_hlrs_de_organization_vis_covise_ChoiceParameter_getSelected;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setSelected(value) { this._selected = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setSelected = www_hlrs_de_organization_vis_covise_ChoiceParameter_setSelected;
//
// accessor is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getChoices
// element get for choices
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for choices
// setter function is is www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setChoices
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_getChoices() { return this._choices;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.getChoices = www_hlrs_de_organization_vis_covise_ChoiceParameter_getChoices;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_setChoices(value) { this._choices = value;}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.setChoices = www_hlrs_de_organization_vis_covise_ChoiceParameter_setChoices;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ChoiceParameter
//
function www_hlrs_de_organization_vis_covise_ChoiceParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<selected>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._selected);
     xml = xml + '</selected>';
    }
    // block for local variables
    {
     if (this._choices != null) {
      for (var ax = 0;ax < this._choices.length;ax ++) {
       if (this._choices[ax] == null) {
        xml = xml + '<choices/>';
       } else {
        xml = xml + '<choices>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._choices[ax]);
        xml = xml + '</choices>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ChoiceParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_ChoiceParameter_serialize;

function www_hlrs_de_organization_vis_covise_ChoiceParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ChoiceParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing selected');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setSelected(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing choices');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choices')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'choices'));
     newobject.setChoices(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}deleteModule
//
function www_hlrs_de_organization_vis_covise_deleteModule () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_deleteModule';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_deleteModule.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_deleteModule.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_deleteModule_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_deleteModule.prototype.getModuleID = www_hlrs_de_organization_vis_covise_deleteModule_getModuleID;

function www_hlrs_de_organization_vis_covise_deleteModule_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_deleteModule.prototype.setModuleID = www_hlrs_de_organization_vis_covise_deleteModule_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}deleteModule
//
function www_hlrs_de_organization_vis_covise_deleteModule_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_deleteModule.prototype.serialize = www_hlrs_de_organization_vis_covise_deleteModule_serialize;

function www_hlrs_de_organization_vis_covise_deleteModule_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_deleteModule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getLinks
//
function www_hlrs_de_organization_vis_covise_getLinks () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getLinks';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}getLinks
//
function www_hlrs_de_organization_vis_covise_getLinks_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getLinks.prototype.serialize = www_hlrs_de_organization_vis_covise_getLinks_serialize;

function www_hlrs_de_organization_vis_covise_getLinks_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getLinks();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}openNetResponse
//
function www_hlrs_de_organization_vis_covise_openNetResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_openNetResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}openNetResponse
//
function www_hlrs_de_organization_vis_covise_openNetResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_openNetResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_openNetResponse_serialize;

function www_hlrs_de_organization_vis_covise_openNetResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_openNetResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse
//
function www_hlrs_de_organization_vis_covise_setParameterFromStringResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_setParameterFromStringResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse
//
function www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_setParameterFromStringResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_serialize;

function www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_setParameterFromStringResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}listModules
//
function www_hlrs_de_organization_vis_covise_listModules () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_listModules';
    this._ipaddr = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_listModules.prototype.getIpaddr
// element get for ipaddr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for ipaddr
// setter function is is www_hlrs_de_organization_vis_covise_listModules.prototype.setIpaddr
//
function www_hlrs_de_organization_vis_covise_listModules_getIpaddr() { return this._ipaddr;}

www_hlrs_de_organization_vis_covise_listModules.prototype.getIpaddr = www_hlrs_de_organization_vis_covise_listModules_getIpaddr;

function www_hlrs_de_organization_vis_covise_listModules_setIpaddr(value) { this._ipaddr = value;}

www_hlrs_de_organization_vis_covise_listModules.prototype.setIpaddr = www_hlrs_de_organization_vis_covise_listModules_setIpaddr;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}listModules
//
function www_hlrs_de_organization_vis_covise_listModules_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<ipaddr>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._ipaddr);
     xml = xml + '</ipaddr>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_listModules.prototype.serialize = www_hlrs_de_organization_vis_covise_listModules_serialize;

function www_hlrs_de_organization_vis_covise_listModules_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_listModules();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ipaddr');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIpaddr(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}StringParameter
//
function www_hlrs_de_organization_vis_covise_StringParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_StringParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_StringParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_StringParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_StringParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.getName = www_hlrs_de_organization_vis_covise_StringParameter_getName;

function www_hlrs_de_organization_vis_covise_StringParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.setName = www_hlrs_de_organization_vis_covise_StringParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_StringParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_StringParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_StringParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.getType = www_hlrs_de_organization_vis_covise_StringParameter_getType;

function www_hlrs_de_organization_vis_covise_StringParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.setType = www_hlrs_de_organization_vis_covise_StringParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_StringParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_StringParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_StringParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_StringParameter_getDescription;

function www_hlrs_de_organization_vis_covise_StringParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_StringParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_StringParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_StringParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_StringParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_StringParameter_getMapped;

function www_hlrs_de_organization_vis_covise_StringParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_StringParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_StringParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_StringParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_StringParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_StringParameter_getValue;

function www_hlrs_de_organization_vis_covise_StringParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_StringParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}StringParameter
//
function www_hlrs_de_organization_vis_covise_StringParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_StringParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_StringParameter_serialize;

function www_hlrs_de_organization_vis_covise_StringParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_StringParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getConfigEntry
//
function www_hlrs_de_organization_vis_covise_getConfigEntry () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getConfigEntry';
    this._section = '';
    this._variable = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.getSection
// element get for section
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for section
// setter function is is www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.setSection
//
function www_hlrs_de_organization_vis_covise_getConfigEntry_getSection() { return this._section;}

www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.getSection = www_hlrs_de_organization_vis_covise_getConfigEntry_getSection;

function www_hlrs_de_organization_vis_covise_getConfigEntry_setSection(value) { this._section = value;}

www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.setSection = www_hlrs_de_organization_vis_covise_getConfigEntry_setSection;
//
// accessor is www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.getVariable
// element get for variable
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for variable
// setter function is is www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.setVariable
//
function www_hlrs_de_organization_vis_covise_getConfigEntry_getVariable() { return this._variable;}

www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.getVariable = www_hlrs_de_organization_vis_covise_getConfigEntry_getVariable;

function www_hlrs_de_organization_vis_covise_getConfigEntry_setVariable(value) { this._variable = value;}

www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.setVariable = www_hlrs_de_organization_vis_covise_getConfigEntry_setVariable;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getConfigEntry
//
function www_hlrs_de_organization_vis_covise_getConfigEntry_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<section>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._section);
     xml = xml + '</section>';
    }
    // block for local variables
    {
     xml = xml + '<variable>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._variable);
     xml = xml + '</variable>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getConfigEntry.prototype.serialize = www_hlrs_de_organization_vis_covise_getConfigEntry_serialize;

function www_hlrs_de_organization_vis_covise_getConfigEntry_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getConfigEntry();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing section');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSection(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing variable');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setVariable(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}listHostsResponse
//
function www_hlrs_de_organization_vis_covise_listHostsResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_listHostsResponse';
    this._hosts = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_listHostsResponse.prototype.getHosts
// element get for hosts
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for hosts
// setter function is is www_hlrs_de_organization_vis_covise_listHostsResponse.prototype.setHosts
//
function www_hlrs_de_organization_vis_covise_listHostsResponse_getHosts() { return this._hosts;}

www_hlrs_de_organization_vis_covise_listHostsResponse.prototype.getHosts = www_hlrs_de_organization_vis_covise_listHostsResponse_getHosts;

function www_hlrs_de_organization_vis_covise_listHostsResponse_setHosts(value) { this._hosts = value;}

www_hlrs_de_organization_vis_covise_listHostsResponse.prototype.setHosts = www_hlrs_de_organization_vis_covise_listHostsResponse_setHosts;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}listHostsResponse
//
function www_hlrs_de_organization_vis_covise_listHostsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._hosts != null) {
      for (var ax = 0;ax < this._hosts.length;ax ++) {
       if (this._hosts[ax] == null) {
        xml = xml + '<hosts/>';
       } else {
        xml = xml + '<hosts>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._hosts[ax]);
        xml = xml + '</hosts>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_listHostsResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_listHostsResponse_serialize;

function www_hlrs_de_organization_vis_covise_listHostsResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_listHostsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing hosts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'hosts')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'hosts'));
     newobject.setHosts(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}linkResponse
//
function www_hlrs_de_organization_vis_covise_linkResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_linkResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}linkResponse
//
function www_hlrs_de_organization_vis_covise_linkResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_linkResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_linkResponse_serialize;

function www_hlrs_de_organization_vis_covise_linkResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_linkResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}IntScalarParameter
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_IntScalarParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = 0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getName = www_hlrs_de_organization_vis_covise_IntScalarParameter_getName;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setName = www_hlrs_de_organization_vis_covise_IntScalarParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getType = www_hlrs_de_organization_vis_covise_IntScalarParameter_getType;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setType = www_hlrs_de_organization_vis_covise_IntScalarParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_IntScalarParameter_getDescription;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_IntScalarParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_IntScalarParameter_getMapped;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_IntScalarParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_IntScalarParameter_getValue;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_IntScalarParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}IntScalarParameter
//
function www_hlrs_de_organization_vis_covise_IntScalarParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_IntScalarParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_IntScalarParameter_serialize;

function www_hlrs_de_organization_vis_covise_IntScalarParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_IntScalarParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleDiedEvent
//
function www_hlrs_de_organization_vis_covise_ModuleDiedEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleDiedEvent';
    this._type = '';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.getModuleID = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_getModuleID;

function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.setModuleID = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleDiedEvent
//
function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleDiedEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleDiedEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleDiedEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}setParameter
//
function www_hlrs_de_organization_vis_covise_setParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_setParameter';
    this._moduleID = '';
    this._parameter = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_setParameter.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_setParameter.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_setParameter_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_setParameter.prototype.getModuleID = www_hlrs_de_organization_vis_covise_setParameter_getModuleID;

function www_hlrs_de_organization_vis_covise_setParameter_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_setParameter.prototype.setModuleID = www_hlrs_de_organization_vis_covise_setParameter_setModuleID;
//
// accessor is www_hlrs_de_organization_vis_covise_setParameter.prototype.getParameter
// element get for parameter
// - element type is {http://www.hlrs.de/organization/vis/covise}Parameter
// - required element
// - nillable
//
// element set for parameter
// setter function is is www_hlrs_de_organization_vis_covise_setParameter.prototype.setParameter
//
function www_hlrs_de_organization_vis_covise_setParameter_getParameter() { return this._parameter;}

www_hlrs_de_organization_vis_covise_setParameter.prototype.getParameter = www_hlrs_de_organization_vis_covise_setParameter_getParameter;

function www_hlrs_de_organization_vis_covise_setParameter_setParameter(value) { this._parameter = value;}

www_hlrs_de_organization_vis_covise_setParameter.prototype.setParameter = www_hlrs_de_organization_vis_covise_setParameter_setParameter;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}setParameter
//
function www_hlrs_de_organization_vis_covise_setParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    // block for local variables
    {
     if (this._parameter == null) {
      xml = xml + '<parameter xsi:nil=\'true\'/>';
     } else {
      xml = xml + this._parameter.serialize(cxfjsutils, 'parameter', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_setParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_setParameter_serialize;

function www_hlrs_de_organization_vis_covise_setParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_setParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing parameter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Parameter_deserialize(cxfjsutils, curElement);
    }
    newobject.setParameter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}addPartnerResponse
//
function www_hlrs_de_organization_vis_covise_addPartnerResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_addPartnerResponse';
    this._success = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_addPartnerResponse.prototype.getSuccess
// element get for success
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - optional element
// - nillable
//
// element set for success
// setter function is is www_hlrs_de_organization_vis_covise_addPartnerResponse.prototype.setSuccess
//
function www_hlrs_de_organization_vis_covise_addPartnerResponse_getSuccess() { return this._success;}

www_hlrs_de_organization_vis_covise_addPartnerResponse.prototype.getSuccess = www_hlrs_de_organization_vis_covise_addPartnerResponse_getSuccess;

function www_hlrs_de_organization_vis_covise_addPartnerResponse_setSuccess(value) { this._success = value;}

www_hlrs_de_organization_vis_covise_addPartnerResponse.prototype.setSuccess = www_hlrs_de_organization_vis_covise_addPartnerResponse_setSuccess;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}addPartnerResponse
//
function www_hlrs_de_organization_vis_covise_addPartnerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._success != null) {
      if (this._success == null) {
       xml = xml + '<success xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<success>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._success);
       xml = xml + '</success>';
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_addPartnerResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_addPartnerResponse_serialize;

function www_hlrs_de_organization_vis_covise_addPartnerResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_addPartnerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing success');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'success')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = (value == 'true');
     }
     newobject.setSuccess(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}IntVectorParameter
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_IntVectorParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getName = www_hlrs_de_organization_vis_covise_IntVectorParameter_getName;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setName = www_hlrs_de_organization_vis_covise_IntVectorParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getType = www_hlrs_de_organization_vis_covise_IntVectorParameter_getType;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setType = www_hlrs_de_organization_vis_covise_IntVectorParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_IntVectorParameter_getDescription;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_IntVectorParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_IntVectorParameter_getMapped;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_IntVectorParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
// - array
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_IntVectorParameter_getValue;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_IntVectorParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}IntVectorParameter
//
function www_hlrs_de_organization_vis_covise_IntVectorParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     if (this._value != null) {
      for (var ax = 0;ax < this._value.length;ax ++) {
       if (this._value[ax] == null) {
        xml = xml + '<value/>';
       } else {
        xml = xml + '<value>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._value[ax]);
        xml = xml + '</value>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_IntVectorParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_IntVectorParameter_serialize;

function www_hlrs_de_organization_vis_covise_IntVectorParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_IntVectorParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value'));
     newobject.setValue(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}FloatVectorParameter
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_FloatVectorParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getName = www_hlrs_de_organization_vis_covise_FloatVectorParameter_getName;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setName = www_hlrs_de_organization_vis_covise_FloatVectorParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getType = www_hlrs_de_organization_vis_covise_FloatVectorParameter_getType;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setType = www_hlrs_de_organization_vis_covise_FloatVectorParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_FloatVectorParameter_getDescription;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_FloatVectorParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_FloatVectorParameter_getMapped;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_FloatVectorParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
// - array
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_FloatVectorParameter_getValue;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_FloatVectorParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}FloatVectorParameter
//
function www_hlrs_de_organization_vis_covise_FloatVectorParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     if (this._value != null) {
      for (var ax = 0;ax < this._value.length;ax ++) {
       if (this._value[ax] == null) {
        xml = xml + '<value/>';
       } else {
        xml = xml + '<value>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._value[ax]);
        xml = xml + '</value>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_FloatVectorParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_FloatVectorParameter_serialize;

function www_hlrs_de_organization_vis_covise_FloatVectorParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_FloatVectorParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseFloat(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value'));
     newobject.setValue(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Link
//
function www_hlrs_de_organization_vis_covise_Link () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Link';
    this._id = '';
    this._from = null;
    this._to = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_Link.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for id
// setter function is is www_hlrs_de_organization_vis_covise_Link.prototype.setId
//
function www_hlrs_de_organization_vis_covise_Link_getId() { return this._id;}

www_hlrs_de_organization_vis_covise_Link.prototype.getId = www_hlrs_de_organization_vis_covise_Link_getId;

function www_hlrs_de_organization_vis_covise_Link_setId(value) { this._id = value;}

www_hlrs_de_organization_vis_covise_Link.prototype.setId = www_hlrs_de_organization_vis_covise_Link_setId;
//
// accessor is www_hlrs_de_organization_vis_covise_Link.prototype.getFrom
// element get for from
// - element type is {http://www.hlrs.de/organization/vis/covise}Port
// - required element
//
// element set for from
// setter function is is www_hlrs_de_organization_vis_covise_Link.prototype.setFrom
//
function www_hlrs_de_organization_vis_covise_Link_getFrom() { return this._from;}

www_hlrs_de_organization_vis_covise_Link.prototype.getFrom = www_hlrs_de_organization_vis_covise_Link_getFrom;

function www_hlrs_de_organization_vis_covise_Link_setFrom(value) { this._from = value;}

www_hlrs_de_organization_vis_covise_Link.prototype.setFrom = www_hlrs_de_organization_vis_covise_Link_setFrom;
//
// accessor is www_hlrs_de_organization_vis_covise_Link.prototype.getTo
// element get for to
// - element type is {http://www.hlrs.de/organization/vis/covise}Port
// - required element
//
// element set for to
// setter function is is www_hlrs_de_organization_vis_covise_Link.prototype.setTo
//
function www_hlrs_de_organization_vis_covise_Link_getTo() { return this._to;}

www_hlrs_de_organization_vis_covise_Link.prototype.getTo = www_hlrs_de_organization_vis_covise_Link_getTo;

function www_hlrs_de_organization_vis_covise_Link_setTo(value) { this._to = value;}

www_hlrs_de_organization_vis_covise_Link.prototype.setTo = www_hlrs_de_organization_vis_covise_Link_setTo;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Link
//
function www_hlrs_de_organization_vis_covise_Link_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + this._from.serialize(cxfjsutils, 'from', null);
    }
    // block for local variables
    {
     xml = xml + this._to.serialize(cxfjsutils, 'to', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Link.prototype.serialize = www_hlrs_de_organization_vis_covise_Link_serialize;

function www_hlrs_de_organization_vis_covise_Link_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Link();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing from');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Port_deserialize(cxfjsutils, curElement);
    }
    newobject.setFrom(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing to');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Port_deserialize(cxfjsutils, curElement);
    }
    newobject.setTo(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}quit
//
function www_hlrs_de_organization_vis_covise_quit () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_quit';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}quit
//
function www_hlrs_de_organization_vis_covise_quit_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_quit.prototype.serialize = www_hlrs_de_organization_vis_covise_quit_serialize;

function www_hlrs_de_organization_vis_covise_quit_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_quit();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}IntSliderParameter
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_IntSliderParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = 0;
    this._min = 0;
    this._max = 0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getName = www_hlrs_de_organization_vis_covise_IntSliderParameter_getName;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setName = www_hlrs_de_organization_vis_covise_IntSliderParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getType = www_hlrs_de_organization_vis_covise_IntSliderParameter_getType;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setType = www_hlrs_de_organization_vis_covise_IntSliderParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_IntSliderParameter_getDescription;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_IntSliderParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_IntSliderParameter_getMapped;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_IntSliderParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_IntSliderParameter_getValue;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_IntSliderParameter_setValue;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMin
// element get for min
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for min
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMin
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getMin() { return this._min;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMin = www_hlrs_de_organization_vis_covise_IntSliderParameter_getMin;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setMin(value) { this._min = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMin = www_hlrs_de_organization_vis_covise_IntSliderParameter_setMin;
//
// accessor is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMax
// element get for max
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for max
// setter function is is www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMax
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_getMax() { return this._max;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.getMax = www_hlrs_de_organization_vis_covise_IntSliderParameter_getMax;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_setMax(value) { this._max = value;}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.setMax = www_hlrs_de_organization_vis_covise_IntSliderParameter_setMax;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}IntSliderParameter
//
function www_hlrs_de_organization_vis_covise_IntSliderParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    // block for local variables
    {
     xml = xml + '<min>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._min);
     xml = xml + '</min>';
    }
    // block for local variables
    {
     xml = xml + '<max>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._max);
     xml = xml + '</max>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_IntSliderParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_IntSliderParameter_serialize;

function www_hlrs_de_organization_vis_covise_IntSliderParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_IntSliderParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing min');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setMin(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing max');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setMax(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getEvent
//
function www_hlrs_de_organization_vis_covise_getEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getEvent';
    this._uuid = '';
    this._timeout = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_getEvent.prototype.getUuid
// element get for uuid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for uuid
// setter function is is www_hlrs_de_organization_vis_covise_getEvent.prototype.setUuid
//
function www_hlrs_de_organization_vis_covise_getEvent_getUuid() { return this._uuid;}

www_hlrs_de_organization_vis_covise_getEvent.prototype.getUuid = www_hlrs_de_organization_vis_covise_getEvent_getUuid;

function www_hlrs_de_organization_vis_covise_getEvent_setUuid(value) { this._uuid = value;}

www_hlrs_de_organization_vis_covise_getEvent.prototype.setUuid = www_hlrs_de_organization_vis_covise_getEvent_setUuid;
//
// accessor is www_hlrs_de_organization_vis_covise_getEvent.prototype.getTimeout
// element get for timeout
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
// - nillable
//
// element set for timeout
// setter function is is www_hlrs_de_organization_vis_covise_getEvent.prototype.setTimeout
//
function www_hlrs_de_organization_vis_covise_getEvent_getTimeout() { return this._timeout;}

www_hlrs_de_organization_vis_covise_getEvent.prototype.getTimeout = www_hlrs_de_organization_vis_covise_getEvent_getTimeout;

function www_hlrs_de_organization_vis_covise_getEvent_setTimeout(value) { this._timeout = value;}

www_hlrs_de_organization_vis_covise_getEvent.prototype.setTimeout = www_hlrs_de_organization_vis_covise_getEvent_setTimeout;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getEvent
//
function www_hlrs_de_organization_vis_covise_getEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<uuid>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._uuid);
     xml = xml + '</uuid>';
    }
    // block for local variables
    {
     if (this._timeout != null) {
      if (this._timeout == null) {
       xml = xml + '<timeout xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<timeout>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._timeout);
       xml = xml + '</timeout>';
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_getEvent_serialize;

function www_hlrs_de_organization_vis_covise_getEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing uuid');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUuid(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing timeout');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'timeout')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setTimeout(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}addEventListenerResponse
//
function www_hlrs_de_organization_vis_covise_addEventListenerResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_addEventListenerResponse';
    this._uuid = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_addEventListenerResponse.prototype.getUuid
// element get for uuid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for uuid
// setter function is is www_hlrs_de_organization_vis_covise_addEventListenerResponse.prototype.setUuid
//
function www_hlrs_de_organization_vis_covise_addEventListenerResponse_getUuid() { return this._uuid;}

www_hlrs_de_organization_vis_covise_addEventListenerResponse.prototype.getUuid = www_hlrs_de_organization_vis_covise_addEventListenerResponse_getUuid;

function www_hlrs_de_organization_vis_covise_addEventListenerResponse_setUuid(value) { this._uuid = value;}

www_hlrs_de_organization_vis_covise_addEventListenerResponse.prototype.setUuid = www_hlrs_de_organization_vis_covise_addEventListenerResponse_setUuid;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}addEventListenerResponse
//
function www_hlrs_de_organization_vis_covise_addEventListenerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<uuid>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._uuid);
     xml = xml + '</uuid>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_addEventListenerResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_addEventListenerResponse_serialize;

function www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_addEventListenerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing uuid');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUuid(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}removeEventListener
//
function www_hlrs_de_organization_vis_covise_removeEventListener () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_removeEventListener';
    this._uuid = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_removeEventListener.prototype.getUuid
// element get for uuid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for uuid
// setter function is is www_hlrs_de_organization_vis_covise_removeEventListener.prototype.setUuid
//
function www_hlrs_de_organization_vis_covise_removeEventListener_getUuid() { return this._uuid;}

www_hlrs_de_organization_vis_covise_removeEventListener.prototype.getUuid = www_hlrs_de_organization_vis_covise_removeEventListener_getUuid;

function www_hlrs_de_organization_vis_covise_removeEventListener_setUuid(value) { this._uuid = value;}

www_hlrs_de_organization_vis_covise_removeEventListener.prototype.setUuid = www_hlrs_de_organization_vis_covise_removeEventListener_setUuid;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}removeEventListener
//
function www_hlrs_de_organization_vis_covise_removeEventListener_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<uuid>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._uuid);
     xml = xml + '</uuid>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_removeEventListener.prototype.serialize = www_hlrs_de_organization_vis_covise_removeEventListener_serialize;

function www_hlrs_de_organization_vis_covise_removeEventListener_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_removeEventListener();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing uuid');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUuid(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}instantiateModule
//
function www_hlrs_de_organization_vis_covise_instantiateModule () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_instantiateModule';
    this._module = '';
    this._host = '';
    this._x = null;
    this._y = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getModule
// element get for module
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for module
// setter function is is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setModule
//
function www_hlrs_de_organization_vis_covise_instantiateModule_getModule() { return this._module;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getModule = www_hlrs_de_organization_vis_covise_instantiateModule_getModule;

function www_hlrs_de_organization_vis_covise_instantiateModule_setModule(value) { this._module = value;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setModule = www_hlrs_de_organization_vis_covise_instantiateModule_setModule;
//
// accessor is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getHost
// element get for host
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for host
// setter function is is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setHost
//
function www_hlrs_de_organization_vis_covise_instantiateModule_getHost() { return this._host;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getHost = www_hlrs_de_organization_vis_covise_instantiateModule_getHost;

function www_hlrs_de_organization_vis_covise_instantiateModule_setHost(value) { this._host = value;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setHost = www_hlrs_de_organization_vis_covise_instantiateModule_setHost;
//
// accessor is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getX
// element get for x
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
// - nillable
//
// element set for x
// setter function is is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setX
//
function www_hlrs_de_organization_vis_covise_instantiateModule_getX() { return this._x;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getX = www_hlrs_de_organization_vis_covise_instantiateModule_getX;

function www_hlrs_de_organization_vis_covise_instantiateModule_setX(value) { this._x = value;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setX = www_hlrs_de_organization_vis_covise_instantiateModule_setX;
//
// accessor is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getY
// element get for y
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
// - nillable
//
// element set for y
// setter function is is www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setY
//
function www_hlrs_de_organization_vis_covise_instantiateModule_getY() { return this._y;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.getY = www_hlrs_de_organization_vis_covise_instantiateModule_getY;

function www_hlrs_de_organization_vis_covise_instantiateModule_setY(value) { this._y = value;}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.setY = www_hlrs_de_organization_vis_covise_instantiateModule_setY;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}instantiateModule
//
function www_hlrs_de_organization_vis_covise_instantiateModule_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<module>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._module);
     xml = xml + '</module>';
    }
    // block for local variables
    {
     xml = xml + '<host>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._host);
     xml = xml + '</host>';
    }
    // block for local variables
    {
     if (this._x != null) {
      if (this._x == null) {
       xml = xml + '<x xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<x>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._x);
       xml = xml + '</x>';
      }
     }
    }
    // block for local variables
    {
     if (this._y != null) {
      if (this._y == null) {
       xml = xml + '<y xsi:nil=\'true\'/>';
      } else {
       xml = xml + '<y>';
       xml = xml + cxfjsutils.escapeXmlEntities(this._y);
       xml = xml + '</y>';
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_instantiateModule.prototype.serialize = www_hlrs_de_organization_vis_covise_instantiateModule_serialize;

function www_hlrs_de_organization_vis_covise_instantiateModule_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_instantiateModule();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing module');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing host');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setHost(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing x');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'x')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setX(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing y');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'y')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setY(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}listHosts
//
function www_hlrs_de_organization_vis_covise_listHosts () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_listHosts';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}listHosts
//
function www_hlrs_de_organization_vis_covise_listHosts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_listHosts.prototype.serialize = www_hlrs_de_organization_vis_covise_listHosts_serialize;

function www_hlrs_de_organization_vis_covise_listHosts_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_listHosts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}deleteModuleResponse
//
function www_hlrs_de_organization_vis_covise_deleteModuleResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_deleteModuleResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}deleteModuleResponse
//
function www_hlrs_de_organization_vis_covise_deleteModuleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_deleteModuleResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_deleteModuleResponse_serialize;

function www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_deleteModuleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}addEventListener
//
function www_hlrs_de_organization_vis_covise_addEventListener () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_addEventListener';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}addEventListener
//
function www_hlrs_de_organization_vis_covise_addEventListener_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_addEventListener.prototype.serialize = www_hlrs_de_organization_vis_covise_addEventListener_serialize;

function www_hlrs_de_organization_vis_covise_addEventListener_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_addEventListener();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}LinkDelEvent
//
function www_hlrs_de_organization_vis_covise_LinkDelEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_LinkDelEvent';
    this._type = '';
    this._linkID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_LinkDelEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.getType = www_hlrs_de_organization_vis_covise_LinkDelEvent_getType;

function www_hlrs_de_organization_vis_covise_LinkDelEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.setType = www_hlrs_de_organization_vis_covise_LinkDelEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.getLinkID
// element get for linkID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for linkID
// setter function is is www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.setLinkID
//
function www_hlrs_de_organization_vis_covise_LinkDelEvent_getLinkID() { return this._linkID;}

www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.getLinkID = www_hlrs_de_organization_vis_covise_LinkDelEvent_getLinkID;

function www_hlrs_de_organization_vis_covise_LinkDelEvent_setLinkID(value) { this._linkID = value;}

www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.setLinkID = www_hlrs_de_organization_vis_covise_LinkDelEvent_setLinkID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}LinkDelEvent
//
function www_hlrs_de_organization_vis_covise_LinkDelEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<linkID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._linkID);
     xml = xml + '</linkID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_LinkDelEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_LinkDelEvent_serialize;

function www_hlrs_de_organization_vis_covise_LinkDelEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_LinkDelEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing linkID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLinkID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}FloatScalarParameter
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_FloatScalarParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = 0.0;
}

//
// accessor is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getName = www_hlrs_de_organization_vis_covise_FloatScalarParameter_getName;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setName = www_hlrs_de_organization_vis_covise_FloatScalarParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getType = www_hlrs_de_organization_vis_covise_FloatScalarParameter_getType;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setType = www_hlrs_de_organization_vis_covise_FloatScalarParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_FloatScalarParameter_getDescription;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_FloatScalarParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_FloatScalarParameter_getMapped;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_FloatScalarParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_FloatScalarParameter_getValue;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_FloatScalarParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}FloatScalarParameter
//
function www_hlrs_de_organization_vis_covise_FloatScalarParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_FloatScalarParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_FloatScalarParameter_serialize;

function www_hlrs_de_organization_vis_covise_FloatScalarParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_FloatScalarParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}openNet
//
function www_hlrs_de_organization_vis_covise_openNet () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_openNet';
    this._filename = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_openNet.prototype.getFilename
// element get for filename
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for filename
// setter function is is www_hlrs_de_organization_vis_covise_openNet.prototype.setFilename
//
function www_hlrs_de_organization_vis_covise_openNet_getFilename() { return this._filename;}

www_hlrs_de_organization_vis_covise_openNet.prototype.getFilename = www_hlrs_de_organization_vis_covise_openNet_getFilename;

function www_hlrs_de_organization_vis_covise_openNet_setFilename(value) { this._filename = value;}

www_hlrs_de_organization_vis_covise_openNet.prototype.setFilename = www_hlrs_de_organization_vis_covise_openNet_setFilename;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}openNet
//
function www_hlrs_de_organization_vis_covise_openNet_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<filename>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._filename);
     xml = xml + '</filename>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_openNet.prototype.serialize = www_hlrs_de_organization_vis_covise_openNet_serialize;

function www_hlrs_de_organization_vis_covise_openNet_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_openNet();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing filename');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFilename(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}link
//
function www_hlrs_de_organization_vis_covise_link () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_link';
    this._fromModule = '';
    this._fromPort = '';
    this._toModule = '';
    this._toPort = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_link.prototype.getFromModule
// element get for fromModule
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for fromModule
// setter function is is www_hlrs_de_organization_vis_covise_link.prototype.setFromModule
//
function www_hlrs_de_organization_vis_covise_link_getFromModule() { return this._fromModule;}

www_hlrs_de_organization_vis_covise_link.prototype.getFromModule = www_hlrs_de_organization_vis_covise_link_getFromModule;

function www_hlrs_de_organization_vis_covise_link_setFromModule(value) { this._fromModule = value;}

www_hlrs_de_organization_vis_covise_link.prototype.setFromModule = www_hlrs_de_organization_vis_covise_link_setFromModule;
//
// accessor is www_hlrs_de_organization_vis_covise_link.prototype.getFromPort
// element get for fromPort
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for fromPort
// setter function is is www_hlrs_de_organization_vis_covise_link.prototype.setFromPort
//
function www_hlrs_de_organization_vis_covise_link_getFromPort() { return this._fromPort;}

www_hlrs_de_organization_vis_covise_link.prototype.getFromPort = www_hlrs_de_organization_vis_covise_link_getFromPort;

function www_hlrs_de_organization_vis_covise_link_setFromPort(value) { this._fromPort = value;}

www_hlrs_de_organization_vis_covise_link.prototype.setFromPort = www_hlrs_de_organization_vis_covise_link_setFromPort;
//
// accessor is www_hlrs_de_organization_vis_covise_link.prototype.getToModule
// element get for toModule
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for toModule
// setter function is is www_hlrs_de_organization_vis_covise_link.prototype.setToModule
//
function www_hlrs_de_organization_vis_covise_link_getToModule() { return this._toModule;}

www_hlrs_de_organization_vis_covise_link.prototype.getToModule = www_hlrs_de_organization_vis_covise_link_getToModule;

function www_hlrs_de_organization_vis_covise_link_setToModule(value) { this._toModule = value;}

www_hlrs_de_organization_vis_covise_link.prototype.setToModule = www_hlrs_de_organization_vis_covise_link_setToModule;
//
// accessor is www_hlrs_de_organization_vis_covise_link.prototype.getToPort
// element get for toPort
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for toPort
// setter function is is www_hlrs_de_organization_vis_covise_link.prototype.setToPort
//
function www_hlrs_de_organization_vis_covise_link_getToPort() { return this._toPort;}

www_hlrs_de_organization_vis_covise_link.prototype.getToPort = www_hlrs_de_organization_vis_covise_link_getToPort;

function www_hlrs_de_organization_vis_covise_link_setToPort(value) { this._toPort = value;}

www_hlrs_de_organization_vis_covise_link.prototype.setToPort = www_hlrs_de_organization_vis_covise_link_setToPort;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}link
//
function www_hlrs_de_organization_vis_covise_link_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<fromModule>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._fromModule);
     xml = xml + '</fromModule>';
    }
    // block for local variables
    {
     xml = xml + '<fromPort>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._fromPort);
     xml = xml + '</fromPort>';
    }
    // block for local variables
    {
     xml = xml + '<toModule>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._toModule);
     xml = xml + '</toModule>';
    }
    // block for local variables
    {
     xml = xml + '<toPort>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._toPort);
     xml = xml + '</toPort>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_link.prototype.serialize = www_hlrs_de_organization_vis_covise_link_serialize;

function www_hlrs_de_organization_vis_covise_link_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_link();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing fromModule');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFromModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing fromPort');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setFromPort(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing toModule');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setToModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing toPort');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setToPort(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}BooleanParameter
//
function www_hlrs_de_organization_vis_covise_BooleanParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_BooleanParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getName = www_hlrs_de_organization_vis_covise_BooleanParameter_getName;

function www_hlrs_de_organization_vis_covise_BooleanParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setName = www_hlrs_de_organization_vis_covise_BooleanParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getType = www_hlrs_de_organization_vis_covise_BooleanParameter_getType;

function www_hlrs_de_organization_vis_covise_BooleanParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setType = www_hlrs_de_organization_vis_covise_BooleanParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_BooleanParameter_getDescription;

function www_hlrs_de_organization_vis_covise_BooleanParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_BooleanParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_BooleanParameter_getMapped;

function www_hlrs_de_organization_vis_covise_BooleanParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_BooleanParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.getValue = www_hlrs_de_organization_vis_covise_BooleanParameter_getValue;

function www_hlrs_de_organization_vis_covise_BooleanParameter_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.setValue = www_hlrs_de_organization_vis_covise_BooleanParameter_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}BooleanParameter
//
function www_hlrs_de_organization_vis_covise_BooleanParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_BooleanParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_BooleanParameter_serialize;

function www_hlrs_de_organization_vis_covise_BooleanParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_BooleanParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse
//
function www_hlrs_de_organization_vis_covise_removeEventListenerResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_removeEventListenerResponse';
}

//
// Serialize {http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse
//
function www_hlrs_de_organization_vis_covise_removeEventListenerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_removeEventListenerResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_serialize;

function www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_removeEventListenerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}Parameter
//
function www_hlrs_de_organization_vis_covise_Parameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_Parameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_Parameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_Parameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_Parameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.getName = www_hlrs_de_organization_vis_covise_Parameter_getName;

function www_hlrs_de_organization_vis_covise_Parameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.setName = www_hlrs_de_organization_vis_covise_Parameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_Parameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_Parameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_Parameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.getType = www_hlrs_de_organization_vis_covise_Parameter_getType;

function www_hlrs_de_organization_vis_covise_Parameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.setType = www_hlrs_de_organization_vis_covise_Parameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_Parameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_Parameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_Parameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_Parameter_getDescription;

function www_hlrs_de_organization_vis_covise_Parameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_Parameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_Parameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_Parameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_Parameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_Parameter_getMapped;

function www_hlrs_de_organization_vis_covise_Parameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_Parameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_Parameter_setMapped;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}Parameter
//
function www_hlrs_de_organization_vis_covise_Parameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_Parameter.prototype.serialize = www_hlrs_de_organization_vis_covise_Parameter_serialize;

function www_hlrs_de_organization_vis_covise_Parameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_Parameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}listModulesResponse
//
function www_hlrs_de_organization_vis_covise_listModulesResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_listModulesResponse';
    this._ipaddr = '';
    this._modules = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.getIpaddr
// element get for ipaddr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for ipaddr
// setter function is is www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.setIpaddr
//
function www_hlrs_de_organization_vis_covise_listModulesResponse_getIpaddr() { return this._ipaddr;}

www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.getIpaddr = www_hlrs_de_organization_vis_covise_listModulesResponse_getIpaddr;

function www_hlrs_de_organization_vis_covise_listModulesResponse_setIpaddr(value) { this._ipaddr = value;}

www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.setIpaddr = www_hlrs_de_organization_vis_covise_listModulesResponse_setIpaddr;
//
// accessor is www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.getModules
// element get for modules
// - element type is {http://www.hlrs.de/organization/vis/covise}StringPair
// - required element
// - array
//
// element set for modules
// setter function is is www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.setModules
//
function www_hlrs_de_organization_vis_covise_listModulesResponse_getModules() { return this._modules;}

www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.getModules = www_hlrs_de_organization_vis_covise_listModulesResponse_getModules;

function www_hlrs_de_organization_vis_covise_listModulesResponse_setModules(value) { this._modules = value;}

www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.setModules = www_hlrs_de_organization_vis_covise_listModulesResponse_setModules;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}listModulesResponse
//
function www_hlrs_de_organization_vis_covise_listModulesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<ipaddr>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._ipaddr);
     xml = xml + '</ipaddr>';
    }
    // block for local variables
    {
     if (this._modules != null) {
      for (var ax = 0;ax < this._modules.length;ax ++) {
       if (this._modules[ax] == null) {
        xml = xml + '<modules/>';
       } else {
        xml = xml + this._modules[ax].serialize(cxfjsutils, 'modules', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_listModulesResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_listModulesResponse_serialize;

function www_hlrs_de_organization_vis_covise_listModulesResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_listModulesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ipaddr');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setIpaddr(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing modules');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'modules')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_StringPair_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'modules'));
     newobject.setModules(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse
//
function www_hlrs_de_organization_vis_covise_getRunningModuleResponse () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_getRunningModuleResponse';
    this._module = null;
}

//
// accessor is www_hlrs_de_organization_vis_covise_getRunningModuleResponse.prototype.getModule
// element get for module
// - element type is {http://www.hlrs.de/organization/vis/covise}Module
// - required element
//
// element set for module
// setter function is is www_hlrs_de_organization_vis_covise_getRunningModuleResponse.prototype.setModule
//
function www_hlrs_de_organization_vis_covise_getRunningModuleResponse_getModule() { return this._module;}

www_hlrs_de_organization_vis_covise_getRunningModuleResponse.prototype.getModule = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_getModule;

function www_hlrs_de_organization_vis_covise_getRunningModuleResponse_setModule(value) { this._module = value;}

www_hlrs_de_organization_vis_covise_getRunningModuleResponse.prototype.setModule = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_setModule;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse
//
function www_hlrs_de_organization_vis_covise_getRunningModuleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._module.serialize(cxfjsutils, 'module', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_getRunningModuleResponse.prototype.serialize = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_serialize;

function www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_getRunningModuleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing module');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = www_hlrs_de_organization_vis_covise_Module_deserialize(cxfjsutils, curElement);
    }
    newobject.setModule(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}setParameterFromString
//
function www_hlrs_de_organization_vis_covise_setParameterFromString () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_setParameterFromString';
    this._moduleID = '';
    this._parameter = '';
    this._value = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_setParameterFromString_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getModuleID = www_hlrs_de_organization_vis_covise_setParameterFromString_getModuleID;

function www_hlrs_de_organization_vis_covise_setParameterFromString_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setModuleID = www_hlrs_de_organization_vis_covise_setParameterFromString_setModuleID;
//
// accessor is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getParameter
// element get for parameter
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for parameter
// setter function is is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setParameter
//
function www_hlrs_de_organization_vis_covise_setParameterFromString_getParameter() { return this._parameter;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getParameter = www_hlrs_de_organization_vis_covise_setParameterFromString_getParameter;

function www_hlrs_de_organization_vis_covise_setParameterFromString_setParameter(value) { this._parameter = value;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setParameter = www_hlrs_de_organization_vis_covise_setParameterFromString_setParameter;
//
// accessor is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for value
// setter function is is www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setValue
//
function www_hlrs_de_organization_vis_covise_setParameterFromString_getValue() { return this._value;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.getValue = www_hlrs_de_organization_vis_covise_setParameterFromString_getValue;

function www_hlrs_de_organization_vis_covise_setParameterFromString_setValue(value) { this._value = value;}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.setValue = www_hlrs_de_organization_vis_covise_setParameterFromString_setValue;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}setParameterFromString
//
function www_hlrs_de_organization_vis_covise_setParameterFromString_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    // block for local variables
    {
     xml = xml + '<parameter>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._parameter);
     xml = xml + '</parameter>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_setParameterFromString.prototype.serialize = www_hlrs_de_organization_vis_covise_setParameterFromString_serialize;

function www_hlrs_de_organization_vis_covise_setParameterFromString_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_setParameterFromString();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing parameter');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setParameter(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ColormapChoiceParameter
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ColormapChoiceParameter';
    this._name = '';
    this._type = '';
    this._description = '';
    this._mapped = '';
    this._selected = 0;
    this._colormaps = [];
}

//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for name
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setName
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getName() { return this._name;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getName = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getName;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setName(value) { this._name = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setName = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setName;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getType = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getType;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setType = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for description
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setDescription
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getDescription() { return this._description;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getDescription = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getDescription;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setDescription(value) { this._description = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setDescription = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setDescription;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getMapped
// element get for mapped
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for mapped
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setMapped
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getMapped() { return this._mapped;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getMapped = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getMapped;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setMapped(value) { this._mapped = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setMapped = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setMapped;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getSelected
// element get for selected
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for selected
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setSelected
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getSelected() { return this._selected;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getSelected = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getSelected;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setSelected(value) { this._selected = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setSelected = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setSelected;
//
// accessor is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getColormaps
// element get for colormaps
// - element type is {http://www.hlrs.de/organization/vis/covise}Colormap
// - required element
// - array
//
// element set for colormaps
// setter function is is www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setColormaps
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getColormaps() { return this._colormaps;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.getColormaps = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_getColormaps;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setColormaps(value) { this._colormaps = value;}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.setColormaps = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_setColormaps;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ColormapChoiceParameter
//
function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<name>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._name);
     xml = xml + '</name>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<description>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._description);
     xml = xml + '</description>';
    }
    // block for local variables
    {
     xml = xml + '<mapped>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._mapped);
     xml = xml + '</mapped>';
    }
    // block for local variables
    {
     xml = xml + '<selected>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._selected);
     xml = xml + '</selected>';
    }
    // block for local variables
    {
     if (this._colormaps != null) {
      for (var ax = 0;ax < this._colormaps.length;ax ++) {
       if (this._colormaps[ax] == null) {
        xml = xml + '<colormaps/>';
       } else {
        xml = xml + this._colormaps[ax].serialize(cxfjsutils, 'colormaps', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ColormapChoiceParameter.prototype.serialize = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_serialize;

function www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ColormapChoiceParameter();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDescription(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mapped');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMapped(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing selected');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setSelected(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing colormaps');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'colormaps')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_hlrs_de_organization_vis_covise_Colormap_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'colormaps'));
     newobject.setColormaps(item);
     var item = null;
    }
    return newobject;
}

//
// Simple type (enumeration) {http://www.hlrs.de/organization/vis/covise}AddPartnerMethod
//
//
// Constructor for XML Schema item {http://www.hlrs.de/organization/vis/covise}ModuleDelEvent
//
function www_hlrs_de_organization_vis_covise_ModuleDelEvent () {
    this.typeMarker = 'www_hlrs_de_organization_vis_covise_ModuleDelEvent';
    this._type = '';
    this._moduleID = '';
}

//
// accessor is www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for type
// setter function is is www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.setType
//
function www_hlrs_de_organization_vis_covise_ModuleDelEvent_getType() { return this._type;}

www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.getType = www_hlrs_de_organization_vis_covise_ModuleDelEvent_getType;

function www_hlrs_de_organization_vis_covise_ModuleDelEvent_setType(value) { this._type = value;}

www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.setType = www_hlrs_de_organization_vis_covise_ModuleDelEvent_setType;
//
// accessor is www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.getModuleID
// element get for moduleID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for moduleID
// setter function is is www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.setModuleID
//
function www_hlrs_de_organization_vis_covise_ModuleDelEvent_getModuleID() { return this._moduleID;}

www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.getModuleID = www_hlrs_de_organization_vis_covise_ModuleDelEvent_getModuleID;

function www_hlrs_de_organization_vis_covise_ModuleDelEvent_setModuleID(value) { this._moduleID = value;}

www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.setModuleID = www_hlrs_de_organization_vis_covise_ModuleDelEvent_setModuleID;
//
// Serialize {http://www.hlrs.de/organization/vis/covise}ModuleDelEvent
//
function www_hlrs_de_organization_vis_covise_ModuleDelEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    // block for local variables
    {
     xml = xml + '<moduleID>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._moduleID);
     xml = xml + '</moduleID>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_hlrs_de_organization_vis_covise_ModuleDelEvent.prototype.serialize = www_hlrs_de_organization_vis_covise_ModuleDelEvent_serialize;

function www_hlrs_de_organization_vis_covise_ModuleDelEvent_deserialize (cxfjsutils, element) {
    var newobject = new www_hlrs_de_organization_vis_covise_ModuleDelEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing moduleID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setModuleID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {http://www.hlrs.de/organization/vis/covise}COVISE
//

// Javascript for {http://www.hlrs.de/organization/vis/covise}ServiceSoap

function www_hlrs_de_organization_vis_covise_ServiceSoap () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}deleteModule'] = www_hlrs_de_organization_vis_covise_deleteModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}deleteModule'] = www_hlrs_de_organization_vis_covise_deleteModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}openNetResponse'] = www_hlrs_de_organization_vis_covise_openNetResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}openNetResponse'] = www_hlrs_de_organization_vis_covise_openNetResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getLinks'] = www_hlrs_de_organization_vis_covise_getLinks_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getLinks'] = www_hlrs_de_organization_vis_covise_getLinks_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse'] = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse'] = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listModules'] = www_hlrs_de_organization_vis_covise_listModules_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listModules'] = www_hlrs_de_organization_vis_covise_listModules_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterResponse'] = www_hlrs_de_organization_vis_covise_setParameterResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterResponse'] = www_hlrs_de_organization_vis_covise_setParameterResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listHostsResponse'] = www_hlrs_de_organization_vis_covise_listHostsResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listHostsResponse'] = www_hlrs_de_organization_vis_covise_listHostsResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntry'] = www_hlrs_de_organization_vis_covise_getConfigEntry_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntry'] = www_hlrs_de_organization_vis_covise_getConfigEntry_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}linkResponse'] = www_hlrs_de_organization_vis_covise_linkResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}linkResponse'] = www_hlrs_de_organization_vis_covise_linkResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addPartner'] = www_hlrs_de_organization_vis_covise_addPartner_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addPartner'] = www_hlrs_de_organization_vis_covise_addPartner_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addPartnerResponse'] = www_hlrs_de_organization_vis_covise_addPartnerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addPartnerResponse'] = www_hlrs_de_organization_vis_covise_addPartnerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameter'] = www_hlrs_de_organization_vis_covise_setParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameter'] = www_hlrs_de_organization_vis_covise_setParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeModule'] = www_hlrs_de_organization_vis_covise_executeModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeModule'] = www_hlrs_de_organization_vis_covise_executeModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getEventResponse'] = www_hlrs_de_organization_vis_covise_getEventResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getEventResponse'] = www_hlrs_de_organization_vis_covise_getEventResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsString'] = www_hlrs_de_organization_vis_covise_getParameterAsString_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsString'] = www_hlrs_de_organization_vis_covise_getParameterAsString_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}quit'] = www_hlrs_de_organization_vis_covise_quit_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}quit'] = www_hlrs_de_organization_vis_covise_quit_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getModuleID'] = www_hlrs_de_organization_vis_covise_getModuleID_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getModuleID'] = www_hlrs_de_organization_vis_covise_getModuleID_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse'] = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse'] = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getEvent'] = www_hlrs_de_organization_vis_covise_getEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getEvent'] = www_hlrs_de_organization_vis_covise_getEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addEventListenerResponse'] = www_hlrs_de_organization_vis_covise_addEventListenerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addEventListenerResponse'] = www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}removeEventListener'] = www_hlrs_de_organization_vis_covise_removeEventListener_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}removeEventListener'] = www_hlrs_de_organization_vis_covise_removeEventListener_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}instantiateModule'] = www_hlrs_de_organization_vis_covise_instantiateModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}instantiateModule'] = www_hlrs_de_organization_vis_covise_instantiateModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listHosts'] = www_hlrs_de_organization_vis_covise_listHosts_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listHosts'] = www_hlrs_de_organization_vis_covise_listHosts_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}unlink'] = www_hlrs_de_organization_vis_covise_unlink_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}unlink'] = www_hlrs_de_organization_vis_covise_unlink_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}deleteModuleResponse'] = www_hlrs_de_organization_vis_covise_deleteModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}deleteModuleResponse'] = www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addEventListener'] = www_hlrs_de_organization_vis_covise_addEventListener_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addEventListener'] = www_hlrs_de_organization_vis_covise_addEventListener_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}unlinkResponse'] = www_hlrs_de_organization_vis_covise_unlinkResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}unlinkResponse'] = www_hlrs_de_organization_vis_covise_unlinkResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}openNet'] = www_hlrs_de_organization_vis_covise_openNet_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}openNet'] = www_hlrs_de_organization_vis_covise_openNet_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModule'] = www_hlrs_de_organization_vis_covise_getRunningModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModule'] = www_hlrs_de_organization_vis_covise_getRunningModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}link'] = www_hlrs_de_organization_vis_covise_link_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}link'] = www_hlrs_de_organization_vis_covise_link_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse'] = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse'] = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeNet'] = www_hlrs_de_organization_vis_covise_executeNet_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeNet'] = www_hlrs_de_organization_vis_covise_executeNet_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse'] = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse'] = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeNetResponse'] = www_hlrs_de_organization_vis_covise_executeNetResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeNetResponse'] = www_hlrs_de_organization_vis_covise_executeNetResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeModuleResponse'] = www_hlrs_de_organization_vis_covise_executeModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeModuleResponse'] = www_hlrs_de_organization_vis_covise_executeModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModules'] = www_hlrs_de_organization_vis_covise_getRunningModules_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModules'] = www_hlrs_de_organization_vis_covise_getRunningModules_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse'] = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse'] = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listModulesResponse'] = www_hlrs_de_organization_vis_covise_listModulesResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listModulesResponse'] = www_hlrs_de_organization_vis_covise_listModulesResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse'] = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse'] = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse'] = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse'] = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromString'] = www_hlrs_de_organization_vis_covise_setParameterFromString_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromString'] = www_hlrs_de_organization_vis_covise_setParameterFromString_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getModuleIDResponse'] = www_hlrs_de_organization_vis_covise_getModuleIDResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getModuleIDResponse'] = www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getLinksResponse'] = www_hlrs_de_organization_vis_covise_getLinksResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getLinksResponse'] = www_hlrs_de_organization_vis_covise_getLinksResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}quitResponse'] = www_hlrs_de_organization_vis_covise_quitResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}quitResponse'] = www_hlrs_de_organization_vis_covise_quitResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}OpenNetDoneEvent'] = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}OpenNetDoneEvent'] = www_hlrs_de_organization_vis_covise_OpenNetDoneEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}StringPair'] = www_hlrs_de_organization_vis_covise_StringPair_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}StringPair'] = www_hlrs_de_organization_vis_covise_StringPair_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Event'] = www_hlrs_de_organization_vis_covise_Event_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Event'] = www_hlrs_de_organization_vis_covise_Event_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterResponse'] = www_hlrs_de_organization_vis_covise_setParameterResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterResponse'] = www_hlrs_de_organization_vis_covise_setParameterResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Colormap'] = www_hlrs_de_organization_vis_covise_Colormap_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Colormap'] = www_hlrs_de_organization_vis_covise_Colormap_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleExecuteStartEvent'] = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleExecuteStartEvent'] = www_hlrs_de_organization_vis_covise_ModuleExecuteStartEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}FileBrowserParameter'] = www_hlrs_de_organization_vis_covise_FileBrowserParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}FileBrowserParameter'] = www_hlrs_de_organization_vis_covise_FileBrowserParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleAddEvent'] = www_hlrs_de_organization_vis_covise_ModuleAddEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleAddEvent'] = www_hlrs_de_organization_vis_covise_ModuleAddEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addPartner'] = www_hlrs_de_organization_vis_covise_addPartner_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addPartner'] = www_hlrs_de_organization_vis_covise_addPartner_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleChangeEvent'] = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleChangeEvent'] = www_hlrs_de_organization_vis_covise_ModuleChangeEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}QuitEvent'] = www_hlrs_de_organization_vis_covise_QuitEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}QuitEvent'] = www_hlrs_de_organization_vis_covise_QuitEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeModule'] = www_hlrs_de_organization_vis_covise_executeModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeModule'] = www_hlrs_de_organization_vis_covise_executeModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getEventResponse'] = www_hlrs_de_organization_vis_covise_getEventResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getEventResponse'] = www_hlrs_de_organization_vis_covise_getEventResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Port'] = www_hlrs_de_organization_vis_covise_Port_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Port'] = www_hlrs_de_organization_vis_covise_Port_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getModuleID'] = www_hlrs_de_organization_vis_covise_getModuleID_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getModuleID'] = www_hlrs_de_organization_vis_covise_getModuleID_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsString'] = www_hlrs_de_organization_vis_covise_getParameterAsString_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsString'] = www_hlrs_de_organization_vis_covise_getParameterAsString_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}LinkAddEvent'] = www_hlrs_de_organization_vis_covise_LinkAddEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}LinkAddEvent'] = www_hlrs_de_organization_vis_covise_LinkAddEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Module'] = www_hlrs_de_organization_vis_covise_Module_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Module'] = www_hlrs_de_organization_vis_covise_Module_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse'] = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}instantiateModuleResponse'] = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}FloatSliderParameter'] = www_hlrs_de_organization_vis_covise_FloatSliderParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}FloatSliderParameter'] = www_hlrs_de_organization_vis_covise_FloatSliderParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ExecuteStartEvent'] = www_hlrs_de_organization_vis_covise_ExecuteStartEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ExecuteStartEvent'] = www_hlrs_de_organization_vis_covise_ExecuteStartEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}unlink'] = www_hlrs_de_organization_vis_covise_unlink_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}unlink'] = www_hlrs_de_organization_vis_covise_unlink_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}unlinkResponse'] = www_hlrs_de_organization_vis_covise_unlinkResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}unlinkResponse'] = www_hlrs_de_organization_vis_covise_unlinkResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModule'] = www_hlrs_de_organization_vis_covise_getRunningModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModule'] = www_hlrs_de_organization_vis_covise_getRunningModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ParameterChangeEvent'] = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ParameterChangeEvent'] = www_hlrs_de_organization_vis_covise_ParameterChangeEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}OpenNetEvent'] = www_hlrs_de_organization_vis_covise_OpenNetEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}OpenNetEvent'] = www_hlrs_de_organization_vis_covise_OpenNetEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse'] = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getParameterAsStringResponse'] = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ExecuteFinishEvent'] = www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ExecuteFinishEvent'] = www_hlrs_de_organization_vis_covise_ExecuteFinishEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeNet'] = www_hlrs_de_organization_vis_covise_executeNet_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeNet'] = www_hlrs_de_organization_vis_covise_executeNet_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeNetResponse'] = www_hlrs_de_organization_vis_covise_executeNetResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeNetResponse'] = www_hlrs_de_organization_vis_covise_executeNetResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}executeModuleResponse'] = www_hlrs_de_organization_vis_covise_executeModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}executeModuleResponse'] = www_hlrs_de_organization_vis_covise_executeModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleExecuteFinishEvent'] = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleExecuteFinishEvent'] = www_hlrs_de_organization_vis_covise_ModuleExecuteFinishEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModules'] = www_hlrs_de_organization_vis_covise_getRunningModules_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModules'] = www_hlrs_de_organization_vis_covise_getRunningModules_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse'] = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntryResponse'] = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ColormapPin'] = www_hlrs_de_organization_vis_covise_ColormapPin_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ColormapPin'] = www_hlrs_de_organization_vis_covise_ColormapPin_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse'] = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModulesResponse'] = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Point'] = www_hlrs_de_organization_vis_covise_Point_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Point'] = www_hlrs_de_organization_vis_covise_Point_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getModuleIDResponse'] = www_hlrs_de_organization_vis_covise_getModuleIDResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getModuleIDResponse'] = www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getLinksResponse'] = www_hlrs_de_organization_vis_covise_getLinksResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getLinksResponse'] = www_hlrs_de_organization_vis_covise_getLinksResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}quitResponse'] = www_hlrs_de_organization_vis_covise_quitResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}quitResponse'] = www_hlrs_de_organization_vis_covise_quitResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ChoiceParameter'] = www_hlrs_de_organization_vis_covise_ChoiceParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ChoiceParameter'] = www_hlrs_de_organization_vis_covise_ChoiceParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}deleteModule'] = www_hlrs_de_organization_vis_covise_deleteModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}deleteModule'] = www_hlrs_de_organization_vis_covise_deleteModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getLinks'] = www_hlrs_de_organization_vis_covise_getLinks_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getLinks'] = www_hlrs_de_organization_vis_covise_getLinks_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}openNetResponse'] = www_hlrs_de_organization_vis_covise_openNetResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}openNetResponse'] = www_hlrs_de_organization_vis_covise_openNetResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse'] = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromStringResponse'] = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listModules'] = www_hlrs_de_organization_vis_covise_listModules_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listModules'] = www_hlrs_de_organization_vis_covise_listModules_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}StringParameter'] = www_hlrs_de_organization_vis_covise_StringParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}StringParameter'] = www_hlrs_de_organization_vis_covise_StringParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntry'] = www_hlrs_de_organization_vis_covise_getConfigEntry_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getConfigEntry'] = www_hlrs_de_organization_vis_covise_getConfigEntry_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listHostsResponse'] = www_hlrs_de_organization_vis_covise_listHostsResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listHostsResponse'] = www_hlrs_de_organization_vis_covise_listHostsResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}linkResponse'] = www_hlrs_de_organization_vis_covise_linkResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}linkResponse'] = www_hlrs_de_organization_vis_covise_linkResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}IntScalarParameter'] = www_hlrs_de_organization_vis_covise_IntScalarParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}IntScalarParameter'] = www_hlrs_de_organization_vis_covise_IntScalarParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleDiedEvent'] = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleDiedEvent'] = www_hlrs_de_organization_vis_covise_ModuleDiedEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameter'] = www_hlrs_de_organization_vis_covise_setParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameter'] = www_hlrs_de_organization_vis_covise_setParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addPartnerResponse'] = www_hlrs_de_organization_vis_covise_addPartnerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addPartnerResponse'] = www_hlrs_de_organization_vis_covise_addPartnerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}IntVectorParameter'] = www_hlrs_de_organization_vis_covise_IntVectorParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}IntVectorParameter'] = www_hlrs_de_organization_vis_covise_IntVectorParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}FloatVectorParameter'] = www_hlrs_de_organization_vis_covise_FloatVectorParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}FloatVectorParameter'] = www_hlrs_de_organization_vis_covise_FloatVectorParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Link'] = www_hlrs_de_organization_vis_covise_Link_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Link'] = www_hlrs_de_organization_vis_covise_Link_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}quit'] = www_hlrs_de_organization_vis_covise_quit_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}quit'] = www_hlrs_de_organization_vis_covise_quit_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}IntSliderParameter'] = www_hlrs_de_organization_vis_covise_IntSliderParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}IntSliderParameter'] = www_hlrs_de_organization_vis_covise_IntSliderParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getEvent'] = www_hlrs_de_organization_vis_covise_getEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getEvent'] = www_hlrs_de_organization_vis_covise_getEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addEventListenerResponse'] = www_hlrs_de_organization_vis_covise_addEventListenerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addEventListenerResponse'] = www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}removeEventListener'] = www_hlrs_de_organization_vis_covise_removeEventListener_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}removeEventListener'] = www_hlrs_de_organization_vis_covise_removeEventListener_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}instantiateModule'] = www_hlrs_de_organization_vis_covise_instantiateModule_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}instantiateModule'] = www_hlrs_de_organization_vis_covise_instantiateModule_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listHosts'] = www_hlrs_de_organization_vis_covise_listHosts_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listHosts'] = www_hlrs_de_organization_vis_covise_listHosts_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}deleteModuleResponse'] = www_hlrs_de_organization_vis_covise_deleteModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}deleteModuleResponse'] = www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}addEventListener'] = www_hlrs_de_organization_vis_covise_addEventListener_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}addEventListener'] = www_hlrs_de_organization_vis_covise_addEventListener_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}LinkDelEvent'] = www_hlrs_de_organization_vis_covise_LinkDelEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}LinkDelEvent'] = www_hlrs_de_organization_vis_covise_LinkDelEvent_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}FloatScalarParameter'] = www_hlrs_de_organization_vis_covise_FloatScalarParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}FloatScalarParameter'] = www_hlrs_de_organization_vis_covise_FloatScalarParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}openNet'] = www_hlrs_de_organization_vis_covise_openNet_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}openNet'] = www_hlrs_de_organization_vis_covise_openNet_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}link'] = www_hlrs_de_organization_vis_covise_link_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}link'] = www_hlrs_de_organization_vis_covise_link_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}BooleanParameter'] = www_hlrs_de_organization_vis_covise_BooleanParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}BooleanParameter'] = www_hlrs_de_organization_vis_covise_BooleanParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse'] = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}removeEventListenerResponse'] = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}Parameter'] = www_hlrs_de_organization_vis_covise_Parameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}Parameter'] = www_hlrs_de_organization_vis_covise_Parameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}listModulesResponse'] = www_hlrs_de_organization_vis_covise_listModulesResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}listModulesResponse'] = www_hlrs_de_organization_vis_covise_listModulesResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse'] = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}getRunningModuleResponse'] = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromString'] = www_hlrs_de_organization_vis_covise_setParameterFromString_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}setParameterFromString'] = www_hlrs_de_organization_vis_covise_setParameterFromString_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ColormapChoiceParameter'] = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ColormapChoiceParameter'] = www_hlrs_de_organization_vis_covise_ColormapChoiceParameter_deserialize;
    this.globalElementSerializers['{http://www.hlrs.de/organization/vis/covise}ModuleDelEvent'] = www_hlrs_de_organization_vis_covise_ModuleDelEvent_serialize;
    this.globalElementDeserializers['{http://www.hlrs.de/organization/vis/covise}ModuleDelEvent'] = www_hlrs_de_organization_vis_covise_ModuleDelEvent_deserialize;
}

function www_hlrs_de_organization_vis_covise_getLinks_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getLinksResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getLinksResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getLinks_onsuccess = www_hlrs_de_organization_vis_covise_getLinks_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getLinks_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getLinks_onerror = www_hlrs_de_organization_vis_covise_getLinks_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getLinks
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_getLinks_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getLinks_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getLinks_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getLinks_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getLinks';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getLinks = www_hlrs_de_organization_vis_covise_getLinks_op;

function www_hlrs_de_organization_vis_covise_getLinks_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getLinks();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getLinks', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getLinks_serializeInput = www_hlrs_de_organization_vis_covise_getLinks_serializeInput;

function www_hlrs_de_organization_vis_covise_getLinksResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getLinksResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_setParameterFromString_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameterFromString_onsuccess = www_hlrs_de_organization_vis_covise_setParameterFromString_op_onsuccess;

function www_hlrs_de_organization_vis_covise_setParameterFromString_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameterFromString_onerror = www_hlrs_de_organization_vis_covise_setParameterFromString_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}setParameterFromString
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter parameter
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter value
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_setParameterFromString_op(successCallback, errorCallback, moduleID, parameter, value) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = moduleID;
    args[1] = parameter;
    args[2] = value;
    xml = this.setParameterFromString_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setParameterFromString_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setParameterFromString_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/setParameterFromString';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameterFromString = www_hlrs_de_organization_vis_covise_setParameterFromString_op;

function www_hlrs_de_organization_vis_covise_setParameterFromString_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_setParameterFromString();
    wrapperObj.setModuleID(args[0]);
    wrapperObj.setParameter(args[1]);
    wrapperObj.setValue(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setParameterFromString', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameterFromString_serializeInput = www_hlrs_de_organization_vis_covise_setParameterFromString_serializeInput;

function www_hlrs_de_organization_vis_covise_setParameterFromStringResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_removeEventListener_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.removeEventListener_onsuccess = www_hlrs_de_organization_vis_covise_removeEventListener_op_onsuccess;

function www_hlrs_de_organization_vis_covise_removeEventListener_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.removeEventListener_onerror = www_hlrs_de_organization_vis_covise_removeEventListener_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}removeEventListener
// Wrapped operation.
// parameter uuid
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_removeEventListener_op(successCallback, errorCallback, uuid) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = uuid;
    xml = this.removeEventListener_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.removeEventListener_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.removeEventListener_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/removeEventListener';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.removeEventListener = www_hlrs_de_organization_vis_covise_removeEventListener_op;

function www_hlrs_de_organization_vis_covise_removeEventListener_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_removeEventListener();
    wrapperObj.setUuid(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:removeEventListener', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.removeEventListener_serializeInput = www_hlrs_de_organization_vis_covise_removeEventListener_serializeInput;

function www_hlrs_de_organization_vis_covise_removeEventListenerResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_addEventListener_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addEventListener_onsuccess = www_hlrs_de_organization_vis_covise_addEventListener_op_onsuccess;

function www_hlrs_de_organization_vis_covise_addEventListener_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addEventListener_onerror = www_hlrs_de_organization_vis_covise_addEventListener_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}addEventListener
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_addEventListener_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.addEventListener_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addEventListener_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addEventListener_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/addEventListener';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addEventListener = www_hlrs_de_organization_vis_covise_addEventListener_op;

function www_hlrs_de_organization_vis_covise_addEventListener_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_addEventListener();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addEventListener', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addEventListener_serializeInput = www_hlrs_de_organization_vis_covise_addEventListener_serializeInput;

function www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_addEventListenerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_getModuleID_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getModuleID_onsuccess = www_hlrs_de_organization_vis_covise_getModuleID_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getModuleID_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getModuleID_onerror = www_hlrs_de_organization_vis_covise_getModuleID_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getModuleID
// Wrapped operation.
// parameter module
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter instance
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter host
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_getModuleID_op(successCallback, errorCallback, module, instance, host) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = module;
    args[1] = instance;
    args[2] = host;
    xml = this.getModuleID_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getModuleID_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getModuleID_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getModuleID';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getModuleID = www_hlrs_de_organization_vis_covise_getModuleID_op;

function www_hlrs_de_organization_vis_covise_getModuleID_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getModuleID();
    wrapperObj.setModule(args[0]);
    wrapperObj.setInstance(args[1]);
    wrapperObj.setHost(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getModuleID', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getModuleID_serializeInput = www_hlrs_de_organization_vis_covise_getModuleID_serializeInput;

function www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getModuleIDResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_unlink_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_unlinkResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_unlinkResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.unlink_onsuccess = www_hlrs_de_organization_vis_covise_unlink_op_onsuccess;

function www_hlrs_de_organization_vis_covise_unlink_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.unlink_onerror = www_hlrs_de_organization_vis_covise_unlink_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}unlink
// Wrapped operation.
// parameter linkID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_unlink_op(successCallback, errorCallback, linkID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = linkID;
    xml = this.unlink_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.unlink_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.unlink_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/unlink';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.unlink = www_hlrs_de_organization_vis_covise_unlink_op;

function www_hlrs_de_organization_vis_covise_unlink_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_unlink();
    wrapperObj.setLinkID(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:unlink', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.unlink_serializeInput = www_hlrs_de_organization_vis_covise_unlink_serializeInput;

function www_hlrs_de_organization_vis_covise_unlinkResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_link_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_linkResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_linkResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.link_onsuccess = www_hlrs_de_organization_vis_covise_link_op_onsuccess;

function www_hlrs_de_organization_vis_covise_link_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.link_onerror = www_hlrs_de_organization_vis_covise_link_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}link
// Wrapped operation.
// parameter fromModule
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter fromPort
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter toModule
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter toPort
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_link_op(successCallback, errorCallback, fromModule, fromPort, toModule, toPort) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(4);
    args[0] = fromModule;
    args[1] = fromPort;
    args[2] = toModule;
    args[3] = toPort;
    xml = this.link_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.link_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.link_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/link';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.link = www_hlrs_de_organization_vis_covise_link_op;

function www_hlrs_de_organization_vis_covise_link_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_link();
    wrapperObj.setFromModule(args[0]);
    wrapperObj.setFromPort(args[1]);
    wrapperObj.setToModule(args[2]);
    wrapperObj.setToPort(args[3]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:link', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.link_serializeInput = www_hlrs_de_organization_vis_covise_link_serializeInput;

function www_hlrs_de_organization_vis_covise_linkResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_executeNet_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_executeNetResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_executeNetResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeNet_onsuccess = www_hlrs_de_organization_vis_covise_executeNet_op_onsuccess;

function www_hlrs_de_organization_vis_covise_executeNet_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeNet_onerror = www_hlrs_de_organization_vis_covise_executeNet_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}executeNet
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_executeNet_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.executeNet_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.executeNet_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.executeNet_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/executeNet';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeNet = www_hlrs_de_organization_vis_covise_executeNet_op;

function www_hlrs_de_organization_vis_covise_executeNet_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_executeNet();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:executeNet', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeNet_serializeInput = www_hlrs_de_organization_vis_covise_executeNet_serializeInput;

function www_hlrs_de_organization_vis_covise_executeNetResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_addPartner_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_addPartnerResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_addPartnerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addPartner_onsuccess = www_hlrs_de_organization_vis_covise_addPartner_op_onsuccess;

function www_hlrs_de_organization_vis_covise_addPartner_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addPartner_onerror = www_hlrs_de_organization_vis_covise_addPartner_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}addPartner
// Wrapped operation.
// parameter method
// - simple type {http://www.hlrs.de/organization/vis/covise}AddPartnerMethod// parameter ip
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter user
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter password
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter timeout
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter display
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_addPartner_op(successCallback, errorCallback, method, ip, user, password, timeout, display) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(6);
    args[0] = method;
    args[1] = ip;
    args[2] = user;
    args[3] = password;
    args[4] = timeout;
    args[5] = display;
    xml = this.addPartner_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addPartner_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addPartner_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/addPartner';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addPartner = www_hlrs_de_organization_vis_covise_addPartner_op;

function www_hlrs_de_organization_vis_covise_addPartner_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_addPartner();
    wrapperObj.setMethod(args[0]);
    wrapperObj.setIp(args[1]);
    wrapperObj.setUser(args[2]);
    wrapperObj.setPassword(args[3]);
    wrapperObj.setTimeout(args[4]);
    wrapperObj.setDisplay(args[5]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addPartner', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.addPartner_serializeInput = www_hlrs_de_organization_vis_covise_addPartner_serializeInput;

function www_hlrs_de_organization_vis_covise_addPartnerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_addPartnerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_listHosts_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_listHostsResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_listHostsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listHosts_onsuccess = www_hlrs_de_organization_vis_covise_listHosts_op_onsuccess;

function www_hlrs_de_organization_vis_covise_listHosts_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listHosts_onerror = www_hlrs_de_organization_vis_covise_listHosts_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}listHosts
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_listHosts_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.listHosts_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.listHosts_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.listHosts_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/listHosts';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listHosts = www_hlrs_de_organization_vis_covise_listHosts_op;

function www_hlrs_de_organization_vis_covise_listHosts_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_listHosts();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:listHosts', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listHosts_serializeInput = www_hlrs_de_organization_vis_covise_listHosts_serializeInput;

function www_hlrs_de_organization_vis_covise_listHostsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_listHostsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_executeModule_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_executeModuleResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_executeModuleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeModule_onsuccess = www_hlrs_de_organization_vis_covise_executeModule_op_onsuccess;

function www_hlrs_de_organization_vis_covise_executeModule_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeModule_onerror = www_hlrs_de_organization_vis_covise_executeModule_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}executeModule
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_executeModule_op(successCallback, errorCallback, moduleID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = moduleID;
    xml = this.executeModule_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.executeModule_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.executeModule_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/executeModule';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeModule = www_hlrs_de_organization_vis_covise_executeModule_op;

function www_hlrs_de_organization_vis_covise_executeModule_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_executeModule();
    wrapperObj.setModuleID(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:executeModule', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.executeModule_serializeInput = www_hlrs_de_organization_vis_covise_executeModule_serializeInput;

function www_hlrs_de_organization_vis_covise_executeModuleResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_setParameter_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_setParameterResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_setParameterResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameter_onsuccess = www_hlrs_de_organization_vis_covise_setParameter_op_onsuccess;

function www_hlrs_de_organization_vis_covise_setParameter_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameter_onerror = www_hlrs_de_organization_vis_covise_setParameter_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}setParameter
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter parameter
// - Object constructor is www_hlrs_de_organization_vis_covise_Parameter
//
function www_hlrs_de_organization_vis_covise_setParameter_op(successCallback, errorCallback, moduleID, parameter) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = moduleID;
    args[1] = parameter;
    xml = this.setParameter_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setParameter_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setParameter_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/setParameter';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameter = www_hlrs_de_organization_vis_covise_setParameter_op;

function www_hlrs_de_organization_vis_covise_setParameter_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_setParameter();
    wrapperObj.setModuleID(args[0]);
    wrapperObj.setParameter(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setParameter', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.setParameter_serializeInput = www_hlrs_de_organization_vis_covise_setParameter_serializeInput;

function www_hlrs_de_organization_vis_covise_setParameterResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_openNet_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_openNetResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_openNetResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.openNet_onsuccess = www_hlrs_de_organization_vis_covise_openNet_op_onsuccess;

function www_hlrs_de_organization_vis_covise_openNet_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.openNet_onerror = www_hlrs_de_organization_vis_covise_openNet_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}openNet
// Wrapped operation.
// parameter filename
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_openNet_op(successCallback, errorCallback, filename) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = filename;
    xml = this.openNet_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.openNet_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.openNet_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/openNet';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.openNet = www_hlrs_de_organization_vis_covise_openNet_op;

function www_hlrs_de_organization_vis_covise_openNet_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_openNet();
    wrapperObj.setFilename(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:openNet', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.openNet_serializeInput = www_hlrs_de_organization_vis_covise_openNet_serializeInput;

function www_hlrs_de_organization_vis_covise_openNetResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_listModules_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_listModulesResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_listModulesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listModules_onsuccess = www_hlrs_de_organization_vis_covise_listModules_op_onsuccess;

function www_hlrs_de_organization_vis_covise_listModules_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listModules_onerror = www_hlrs_de_organization_vis_covise_listModules_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}listModules
// Wrapped operation.
// parameter ipaddr
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_listModules_op(successCallback, errorCallback, ipaddr) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ipaddr;
    xml = this.listModules_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.listModules_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.listModules_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/listModules';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listModules = www_hlrs_de_organization_vis_covise_listModules_op;

function www_hlrs_de_organization_vis_covise_listModules_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_listModules();
    wrapperObj.setIpaddr(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:listModules', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.listModules_serializeInput = www_hlrs_de_organization_vis_covise_listModules_serializeInput;

function www_hlrs_de_organization_vis_covise_listModulesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_listModulesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_deleteModule_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.deleteModule_onsuccess = www_hlrs_de_organization_vis_covise_deleteModule_op_onsuccess;

function www_hlrs_de_organization_vis_covise_deleteModule_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.deleteModule_onerror = www_hlrs_de_organization_vis_covise_deleteModule_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}deleteModule
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_deleteModule_op(successCallback, errorCallback, moduleID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = moduleID;
    xml = this.deleteModule_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteModule_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteModule_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/deleteModule';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.deleteModule = www_hlrs_de_organization_vis_covise_deleteModule_op;

function www_hlrs_de_organization_vis_covise_deleteModule_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_deleteModule();
    wrapperObj.setModuleID(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteModule', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.deleteModule_serializeInput = www_hlrs_de_organization_vis_covise_deleteModule_serializeInput;

function www_hlrs_de_organization_vis_covise_deleteModuleResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_getEvent_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getEventResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getEventResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getEvent_onsuccess = www_hlrs_de_organization_vis_covise_getEvent_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getEvent_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getEvent_onerror = www_hlrs_de_organization_vis_covise_getEvent_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getEvent
// Wrapped operation.
// parameter uuid
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter timeout
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function www_hlrs_de_organization_vis_covise_getEvent_op(successCallback, errorCallback, uuid, timeout) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = uuid;
    args[1] = timeout;
    xml = this.getEvent_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEvent_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEvent_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getEvent';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getEvent = www_hlrs_de_organization_vis_covise_getEvent_op;

function www_hlrs_de_organization_vis_covise_getEvent_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getEvent();
    wrapperObj.setUuid(args[0]);
    wrapperObj.setTimeout(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEvent', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getEvent_serializeInput = www_hlrs_de_organization_vis_covise_getEvent_serializeInput;

function www_hlrs_de_organization_vis_covise_getEventResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getEventResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_getRunningModule_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModule_onsuccess = www_hlrs_de_organization_vis_covise_getRunningModule_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getRunningModule_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModule_onerror = www_hlrs_de_organization_vis_covise_getRunningModule_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getRunningModule
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_getRunningModule_op(successCallback, errorCallback, moduleID) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = moduleID;
    xml = this.getRunningModule_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getRunningModule_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getRunningModule_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getRunningModule';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModule = www_hlrs_de_organization_vis_covise_getRunningModule_op;

function www_hlrs_de_organization_vis_covise_getRunningModule_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getRunningModule();
    wrapperObj.setModuleID(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getRunningModule', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModule_serializeInput = www_hlrs_de_organization_vis_covise_getRunningModule_serializeInput;

function www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getRunningModuleResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_instantiateModule_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.instantiateModule_onsuccess = www_hlrs_de_organization_vis_covise_instantiateModule_op_onsuccess;

function www_hlrs_de_organization_vis_covise_instantiateModule_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.instantiateModule_onerror = www_hlrs_de_organization_vis_covise_instantiateModule_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}instantiateModule
// Wrapped operation.
// parameter module
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter host
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter x
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter y
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function www_hlrs_de_organization_vis_covise_instantiateModule_op(successCallback, errorCallback, module, host, x, y) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(4);
    args[0] = module;
    args[1] = host;
    args[2] = x;
    args[3] = y;
    xml = this.instantiateModule_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.instantiateModule_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.instantiateModule_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/instantiateModule';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.instantiateModule = www_hlrs_de_organization_vis_covise_instantiateModule_op;

function www_hlrs_de_organization_vis_covise_instantiateModule_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_instantiateModule();
    wrapperObj.setModule(args[0]);
    wrapperObj.setHost(args[1]);
    wrapperObj.setX(args[2]);
    wrapperObj.setY(args[3]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:instantiateModule', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.instantiateModule_serializeInput = www_hlrs_de_organization_vis_covise_instantiateModule_serializeInput;

function www_hlrs_de_organization_vis_covise_instantiateModuleResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_getParameterAsString_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getParameterAsString_onsuccess = www_hlrs_de_organization_vis_covise_getParameterAsString_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getParameterAsString_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getParameterAsString_onerror = www_hlrs_de_organization_vis_covise_getParameterAsString_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getParameterAsString
// Wrapped operation.
// parameter moduleID
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter parameter
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_getParameterAsString_op(successCallback, errorCallback, moduleID, parameter) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = moduleID;
    args[1] = parameter;
    xml = this.getParameterAsString_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getParameterAsString_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getParameterAsString_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getParameterAsString';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getParameterAsString = www_hlrs_de_organization_vis_covise_getParameterAsString_op;

function www_hlrs_de_organization_vis_covise_getParameterAsString_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getParameterAsString();
    wrapperObj.setModuleID(args[0]);
    wrapperObj.setParameter(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getParameterAsString', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getParameterAsString_serializeInput = www_hlrs_de_organization_vis_covise_getParameterAsString_serializeInput;

function www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getParameterAsStringResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_getRunningModules_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModules_onsuccess = www_hlrs_de_organization_vis_covise_getRunningModules_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getRunningModules_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModules_onerror = www_hlrs_de_organization_vis_covise_getRunningModules_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getRunningModules
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_getRunningModules_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getRunningModules_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getRunningModules_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getRunningModules_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getRunningModules';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModules = www_hlrs_de_organization_vis_covise_getRunningModules_op;

function www_hlrs_de_organization_vis_covise_getRunningModules_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getRunningModules();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getRunningModules', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getRunningModules_serializeInput = www_hlrs_de_organization_vis_covise_getRunningModules_serializeInput;

function www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getRunningModulesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_quit_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_quitResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_quitResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.quit_onsuccess = www_hlrs_de_organization_vis_covise_quit_op_onsuccess;

function www_hlrs_de_organization_vis_covise_quit_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.quit_onerror = www_hlrs_de_organization_vis_covise_quit_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}quit
// Wrapped operation.
//
function www_hlrs_de_organization_vis_covise_quit_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.quit_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.quit_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.quit_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/quit';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.quit = www_hlrs_de_organization_vis_covise_quit_op;

function www_hlrs_de_organization_vis_covise_quit_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_quit();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:quit', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.quit_serializeInput = www_hlrs_de_organization_vis_covise_quit_serializeInput;

function www_hlrs_de_organization_vis_covise_quitResponse_deserializeResponse(cxfjsutils, partElement) {
}
function www_hlrs_de_organization_vis_covise_getConfigEntry_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserializeResponse');
     responseObject = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getConfigEntry_onsuccess = www_hlrs_de_organization_vis_covise_getConfigEntry_op_onsuccess;

function www_hlrs_de_organization_vis_covise_getConfigEntry_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getConfigEntry_onerror = www_hlrs_de_organization_vis_covise_getConfigEntry_op_onerror;

//
// Operation {http://www.hlrs.de/organization/vis/covise}getConfigEntry
// Wrapped operation.
// parameter section
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter variable
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function www_hlrs_de_organization_vis_covise_getConfigEntry_op(successCallback, errorCallback, section, variable) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = section;
    args[1] = variable;
    xml = this.getConfigEntry_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getConfigEntry_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getConfigEntry_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.hlrs.de/organization/vis/covise/getConfigEntry';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getConfigEntry = www_hlrs_de_organization_vis_covise_getConfigEntry_op;

function www_hlrs_de_organization_vis_covise_getConfigEntry_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_hlrs_de_organization_vis_covise_getConfigEntry();
    wrapperObj.setSection(args[0]);
    wrapperObj.setVariable(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.hlrs.de/organization/vis/covise' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getConfigEntry', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_hlrs_de_organization_vis_covise_ServiceSoap.prototype.getConfigEntry_serializeInput = www_hlrs_de_organization_vis_covise_getConfigEntry_serializeInput;

function www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_hlrs_de_organization_vis_covise_getConfigEntryResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_hlrs_de_organization_vis_covise_ServiceSoap_www_hlrs_de_organization_vis_covise_COVISE () {
  this.url = 'http://localhost:32090/';
}
www_hlrs_de_organization_vis_covise_ServiceSoap_www_hlrs_de_organization_vis_covise_COVISE.prototype = new www_hlrs_de_organization_vis_covise_ServiceSoap;
