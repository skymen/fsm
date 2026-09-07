import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.BEHAVIOR;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "skymen_fsm";
export const name = "FSM";
export const version = _version;
export const minConstructVersion = undefined;
export const author = "skymen";
export const website = "https://www.construct.net";
export const documentation = "https://www.construct.net";
export const description =
  "A simple finite state machine. Set a state, react to enter and exit triggers, and push or pop states on a stack.";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = false;
export const files = {
  extensionScript: {
    enabled: false,
    watch: true,
    targets: ["x86", "x64"],
    name: "MyExtension",
  },
  fileDependencies: [],
  remoteFileDependencies: [],
  cordovaPluginReferences: [],
  cordovaResourceFiles: [],
};

export const aceCategories = {
  state: "State",
  stack: "Stack",
};

export const info = {
  Set: {
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,
    IsOnlyOneAllowed: false,
  },
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

// Property order is load bearing: _getInitProperties() returns values positionally.
// Append new properties, never insert or reorder.
export const properties = [
  {
    type: PROPERTY_TYPE.TEXT,
    id: "initialState",
    name: "Initial state",
    desc: "The state the instance starts in.",
    options: {
      initialValue: "",
    },
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "triggerInitial",
    name: "Trigger initial state",
    desc: "Fire 'On state enter' for the initial state on the first tick after the instance is created.",
    options: {
      initialValue: true,
    },
  },
];
