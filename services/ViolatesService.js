const db = require("../models/index");

exports.GetAllViolate = async () => {
  try {
    let check = await db.Violate.findAll({
      raw: true,
    });
    if (check) {
      return check;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.CreateViolate = async (data) => {
  try {
    let result = await db.Violate.create(data);
    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.EditViolate = async (data) => {
  try {
    let result = await db.Violate.update(data, {
      where: {
        id: data.id,
      },
    });
    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.DeleteViolate = async (id) => {
  try {
    let result = await db.Violate.destroy({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    console.log(err);
    return null;
  }
};
