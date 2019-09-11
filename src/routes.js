const express = require("express");
const controllers = require("./app/controllers");
const authMiddleware = require("./app/middlewares/auth");
const validate = require("express-validation");
const validators = require("./app/validators");
const handle = require("express-async-handler");

const routes = express.Router();

routes.post(
	"/sessions",
	validate(validators.Sessions),
	handle(controllers.SessionController.store)
);
routes.post(
	"/users",
	validate(validators.User),
	handle(controllers.UserController.store)
);

routes.use(authMiddleware);

/** Ads */
routes.get("/ads", handle(controllers.AdController.index));
routes.get("/ads/:id", handle(controllers.AdController.show));
routes.post(
	"/ads",
	validate(validators.Ad),
	handle(controllers.AdController.store)
);
routes.put(
	"/ads/:id",
	validate(validators.Ad),
	handle(controllers.AdController.update)
);
routes.delete("/ads/:id", handle(controllers.AdController.destroy));
/** --- */

/** Purchase */
routes.post(
	"/purchase",
	validate(validators.Purchase),
	handle(controllers.PurchaseController.store)
);
/** --- */

module.exports = routes;
