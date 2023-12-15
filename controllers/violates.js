const ViolateService = require("../services/ViolatesService");

exports.GetAllViolate = async (req, res) => {
  let result = await ViolateService.GetAllViolate();
  if (result) res.status(200).json(result);
  else res.status(400).json("Not Found");
};

exports.CreateViolate = async (req, res) => {
  let result = await ViolateService.CreateViolate(req.body);
  if (result)
    res.status(200).json({
      mess: "OK",
      userCreate: result,
    });
  else res.status(400).json("Create failure");
};

exports.EditViolate = async (req, res) => {
  let result = await ViolateService.EditViolate(req.body);
  if (result)
    res.status(200).json({
      mess: "OK",
      userEdit: result,
    });
  else res.status(400).json("Edit failure");
};

exports.deleteViolate = async (req, res) => {
  let result = await ViolateService.DeleteViolate(req.params.id);
  if (result)
    res.status(200).json({
      mess: "OK",
      userCreate: result,
    });
  else res.status(400).json("Delete failure");
};
