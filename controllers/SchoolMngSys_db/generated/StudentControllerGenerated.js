/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE StudentControllerGenerated.js PLEASE EDIT ../StudentController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import StudentModel from "../../../models/SchoolMngSys_db/StudentModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import StudentController from "../StudentController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/student`;
    router.post(baseUrl + "", authorize(["ADMIN"]), StudentController.create);
    router.delete(baseUrl + "/:id", authorize(["ADMIN"]), StudentController.delete);
    router.get(baseUrl + "/findBy_Checklist/:key", authorize([]), StudentController.findBy_Checklist);
    router.get(baseUrl + "/:id", authorize([]), StudentController.get);
    router.get(baseUrl + "", authorize([]), StudentController.list);
    router.post(baseUrl + "/:id", authorize([]), StudentController.update);
  },


  // CRUD METHODS


  /**
  * StudentModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await StudentModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StudentModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await StudentModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StudentModel.findBy_Checklist
  *   @description CRUD ACTION findBy_Checklist
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_Checklist: async (req, res) => {
    try {
      const result = await StudentModel.findBy_Checklist(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StudentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await StudentModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StudentModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await StudentModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * StudentModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await StudentModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
