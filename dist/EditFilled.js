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

// src/icons/EditFilled.tsx
var EditFilled_exports = {};
__export(EditFilled_exports, {
  default: () => EditFilled_default
});
module.exports = __toCommonJS(EditFilled_exports);
var React = __toESM(require("react"));
var SvgEditFilled = (props) => /* @__PURE__ */ React.createElement(
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
      d: "M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.13 8.13 0 0 0 5.53 5.53.4.4 0 0 0 .41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94M15.61 11.53c-.29-.14-.57-.28-.84-.44a9 9 0 0 1-.64-.42c-.17-.11-.37-.27-.56-.43a1.2 1.2 0 0 1-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a6 6 0 0 1-.39-.59c-.16-.27-.3-.54-.44-.82l-.062-.135c-.147-.334-.582-.431-.84-.173L4.34 12.33c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54q.18 0 .36-.03l3.84-.54c.18-.03.43-.15.55-.28l5.721-5.721c.26-.26.162-.705-.176-.85z"
    }
  )
);
var EditFilled_default = SvgEditFilled;
