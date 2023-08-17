import { Router } from "express";
import { getAdmins, verifyAdmin, createAdmin } from "../../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get("/", getAdmins);

adminRouter.post("/", createAdmin);

adminRouter.put("/verify", verifyAdmin);

export default adminRouter;
