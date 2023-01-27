import { Records} from "../models/records.model.js";

// get all Records

export const getAllRecords = async (req, res, next) => {
    const allRecords = await Records.find();
  
    res.status(200).json({msg: "here we go", allRecords});
  };
  