const express =require("express");
const {createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount} =require ("../controllers/accountsController")
import protect from "../middlewares/authMiddleware";

const router = express.Router()


router.route("/")
.post(protect, createAccount)
.get(getAllAccounts)
router.route("/:_id")
.get(protect, getSingleAccount)
.put(protect, updateAccount)
.delete(protect, deleteAccount)




module.exports=router;