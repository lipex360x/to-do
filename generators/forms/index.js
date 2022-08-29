/* eslint-disable */
const { pushFiles } = require("../utils/generator");

module.exports = {
  description: "Generate a Form",
  prompts: [
    {
      type: "input",
      name: "formName",
      message: "Form Name",
      validate: (value) => {
        if (!value) return "Value is required";
        return true;
      },
    },
  ],

  actions: (data) => {
    const pathTemplate = "./forms/templates";
    const formPath = "../src/components/molecules/{{formName}}Form";

    const files = () => {
      const arrayFiles = [];

      arrayFiles.push(pushFiles(formPath, "index.ts", "index.hbs"));
      arrayFiles.push(pushFiles(formPath, "styles.ts", "styles.hbs"));
      arrayFiles.push(pushFiles(formPath, "form.schema.ts", "form.schema.hbs"));
      arrayFiles.push(pushFiles(formPath, "{{formName}}Form.tsx", "form.hbs"));

      return arrayFiles;
    };

    // Create Files
    const action = [];

    files().forEach((file) => {
      const createFile = {
        type: "add",
        path: `${file.path}/${file.name}`,
        data: file.data,
        templateFile: `${pathTemplate}/${file.template}`,
        force: true,
      };

      action.push(createFile);
    });

    // Message
    const message = () => `Form ${data.formName} created`;
    action.push(message);

    return action;
  },
};
