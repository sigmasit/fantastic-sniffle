
if (typeof gdjs.evtsExt__Record__SetDithering !== "undefined") {
  gdjs.evtsExt__Record__SetDithering.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Record__SetDithering = {};


gdjs.evtsExt__Record__SetDithering.userFunc0xb22c28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionRecord.gif.videoDithering = eventsFunctionContext.getArgument('dithering');
};
gdjs.evtsExt__Record__SetDithering.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Record__SetDithering.userFunc0xb22c28(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Record__SetDithering.func = function(runtimeScene, dithering, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "dithering") return dithering;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Record__SetDithering.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Record__SetDithering.registeredGdjsCallbacks = [];