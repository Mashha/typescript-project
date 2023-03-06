"use strict";
exports.__esModule = true;
exports.LoyaltyUser = exports.Permissions = void 0;
var Permissions;
(function (Permissions) {
    Permissions[Permissions["ADMIN"] = 0] = "ADMIN";
    Permissions[Permissions["READ_ONLY"] = 1] = "READ_ONLY";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser[LoyaltyUser["GOLD_USER"] = 0] = "GOLD_USER";
    LoyaltyUser[LoyaltyUser["SILVER_USER"] = 1] = "SILVER_USER";
    LoyaltyUser[LoyaltyUser["BRONZE_USER"] = 2] = "BRONZE_USER";
})(LoyaltyUser = exports.LoyaltyUser || (exports.LoyaltyUser = {}));
