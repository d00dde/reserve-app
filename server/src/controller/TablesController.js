import { TablesModel } from "../model/TablesModel.js";

class TablesController {
  async create(req, res, next) {
    try {
      const { name, placesMin, placesMax } = req.body;
      await TablesModel.addTable(name, placesMin, placesMax);
      res.json({ message: "New table created" });
    }
    catch(err) {
      next(err);
    }
  }

  async getTableById(req, res, next) {
    try {
      console.log(req.userData);
      const table = await TablesModel.getTableById(req.params.id);
      res.json(table);
    }
    catch(err) {
      next(err);
    }
  }

  async getAllTables(req, res, next) {
    try {
      const tables = await TablesModel.getTables();
      res.json(tables);
    }
    catch(err) {
      next(err);
    }
  }
}

export const tablesController = new TablesController();
