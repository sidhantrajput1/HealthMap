const express = require("express");
const DepartmentController = require("../Controller/DepartmentController.js");

const router = express.Router();

router.get("/", DepartmentController.getAllDepartments);
router.get("/:id", DepartmentController.getDepartmentById);
router.post("/", DepartmentController.createDepartment);
router.put("/:id", DepartmentController.updateDepartmentById);
router.delete("/:id", DepartmentController.deleteDepartmentById);


module.exports = router;
