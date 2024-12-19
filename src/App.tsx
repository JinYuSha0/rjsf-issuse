import React, { memo, useState } from "react";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { RJSFSchema } from "@rjsf/utils";
import { FormProps } from "@rjsf/core";

const schema: RJSFSchema = {
  title: "App",
  type: "object",
  required: ["name"],
  properties: {
    name: { title: "name", type: "string" },
  },
  definitions: {},
};

const App: React.FC = () => {
  const [formData, setFormData] = useState({});
  const onChange = (
    data: Parameters<NonNullable<FormProps["onChange"]>>[0]
  ) => {
    setFormData(data.formData);
  };
  return (
    <div>
      <Form
        formData={formData}
        showErrorList={false}
        noHtml5Validate
        schema={schema}
        validator={validator}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(App);
