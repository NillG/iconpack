"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/index.ts
var icons_exports = {};
__export(icons_exports, {
  ArrowRightFilled: () => ArrowRightFilled_default,
  ArrowRightOutlined: () => ArrowRightOutlined_default,
  CloseCircleFilled: () => CloseCircleFilled_default,
  CloseCircleOutlined: () => CloseCircleOutlined_default,
  EditFilled: () => EditFilled_default,
  EditOutlined: () => EditOutlined_default
});
module.exports = __toCommonJS(icons_exports);

// src/icons/ArrowRightFilled.tsx
var React = __toESM(require("react"));
var SvgArrowRightFilled = (props) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "#292D32",
      d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m2.34 10.53-4.29 4.29c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.01-3.01H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.19l-3.01-3.01a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.29 4.29a.75.75 0 0 1 0 1.06"
    }
  )
);
var ArrowRightFilled_default = SvgArrowRightFilled;

// src/icons/ArrowRightOutlined.tsx
var React2 = __toESM(require("react"));
var SvgArrowRightOutlined = (props) => /* @__PURE__ */ React2.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      stroke: "#292D32",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5,
      d: "M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
    }
  )
);
var ArrowRightOutlined_default = SvgArrowRightOutlined;

// src/icons/CloseCircleFilled.tsx
var React3 = __toESM(require("react"));
var SvgCloseCircleFilled = (props) => /* @__PURE__ */ React3.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React3.createElement(
    "path",
    {
      fill: "#292D32",
      d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.3 2.3z"
    }
  )
);
var CloseCircleFilled_default = SvgCloseCircleFilled;

// src/icons/CloseCircleOutlined.tsx
var React4 = __toESM(require("react"));
var SvgCloseCircleOutlined = (props) => /* @__PURE__ */ React4.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React4.createElement(
    "path",
    {
      fill: "#292D32",
      d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.3 2.3z"
    }
  )
);
var CloseCircleOutlined_default = SvgCloseCircleOutlined;

// src/icons/EditFilled.tsx
var React5 = __toESM(require("react"));
var SvgEditFilled = (props) => /* @__PURE__ */ React5.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React5.createElement(
    "path",
    {
      fill: "#292D32",
      d: "M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.13 8.13 0 0 0 5.53 5.53.4.4 0 0 0 .41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94M15.61 11.53c-.29-.14-.57-.28-.84-.44a9 9 0 0 1-.64-.42c-.17-.11-.37-.27-.56-.43a1.2 1.2 0 0 1-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a6 6 0 0 1-.39-.59c-.16-.27-.3-.54-.44-.82l-.062-.135c-.147-.334-.582-.431-.84-.173L4.34 12.33c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54q.18 0 .36-.03l3.84-.54c.18-.03.43-.15.55-.28l5.721-5.721c.26-.26.162-.705-.176-.85z"
    }
  )
);
var EditFilled_default = SvgEditFilled;

// src/icons/EditOutlined.tsx
var React6 = __toESM(require("react"));
var SvgEditOutlined = (props) => /* @__PURE__ */ React6.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React6.createElement(
    "path",
    {
      stroke: "#292D32",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5,
      d: "m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16"
    }
  ),
  /* @__PURE__ */ React6.createElement(
    "path",
    {
      stroke: "#292D32",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5,
      d: "M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
    }
  )
);
var EditOutlined_default = SvgEditOutlined;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowRightFilled,
  ArrowRightOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  EditFilled,
  EditOutlined
});
