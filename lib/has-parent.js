"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_in_dom_1 = __importDefault(require("./is-in-dom"));
function hasParent(element, root) {
    return root && root.contains(element) && (0, is_in_dom_1.default)(element);
}
exports.default = hasParent;
//# sourceMappingURL=has-parent.js.map