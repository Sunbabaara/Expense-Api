const express =require("express");
const {createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount} =require ("../controllers/accountsController")


const router = express.Router()


router.route("/")
.post( createAccount)
.get(getAllAccounts)
router.route("/:_id")
.get(getSingleAccount)
.put(updateAccount)
.delete(deleteAccount)




module.exports=router;