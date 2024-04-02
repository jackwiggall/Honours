/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPages } from "../graphql/queries";
import { updatePages } from "../graphql/mutations";
const client = generateClient();
export default function PagesUpdateForm(props) {
  const {
    id: idProp,
    pages: pagesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gameID: "",
    localID: "",
    title: "",
    text: "",
    linkText: "",
    linkID: "",
  };
  const [gameID, setGameID] = React.useState(initialValues.gameID);
  const [localID, setLocalID] = React.useState(initialValues.localID);
  const [title, setTitle] = React.useState(initialValues.title);
  const [text, setText] = React.useState(initialValues.text);
  const [linkText, setLinkText] = React.useState(initialValues.linkText);
  const [linkID, setLinkID] = React.useState(initialValues.linkID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pagesRecord
      ? { ...initialValues, ...pagesRecord }
      : initialValues;
    setGameID(cleanValues.gameID);
    setLocalID(cleanValues.localID);
    setTitle(cleanValues.title);
    setText(cleanValues.text);
    setLinkText(cleanValues.linkText);
    setLinkID(cleanValues.linkID);
    setErrors({});
  };
  const [pagesRecord, setPagesRecord] = React.useState(pagesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPages.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPages
        : pagesModelProp;
      setPagesRecord(record);
    };
    queryData();
  }, [idProp, pagesModelProp]);
  React.useEffect(resetStateValues, [pagesRecord]);
  const validations = {
    gameID: [{ type: "Required" }],
    localID: [{ type: "Required" }],
    title: [{ type: "Required" }],
    text: [{ type: "Required" }],
    linkText: [],
    linkID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          gameID,
          localID,
          title,
          text,
          linkText: linkText ?? null,
          linkID: linkID ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePages.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pagesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PagesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Game id"
        isRequired={true}
        isReadOnly={false}
        value={gameID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID: value,
              localID,
              title,
              text,
              linkText,
              linkID,
            };
            const result = onChange(modelFields);
            value = result?.gameID ?? value;
          }
          if (errors.gameID?.hasError) {
            runValidationTasks("gameID", value);
          }
          setGameID(value);
        }}
        onBlur={() => runValidationTasks("gameID", gameID)}
        errorMessage={errors.gameID?.errorMessage}
        hasError={errors.gameID?.hasError}
        {...getOverrideProps(overrides, "gameID")}
      ></TextField>
      <TextField
        label="Local id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={localID}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              gameID,
              localID: value,
              title,
              text,
              linkText,
              linkID,
            };
            const result = onChange(modelFields);
            value = result?.localID ?? value;
          }
          if (errors.localID?.hasError) {
            runValidationTasks("localID", value);
          }
          setLocalID(value);
        }}
        onBlur={() => runValidationTasks("localID", localID)}
        errorMessage={errors.localID?.errorMessage}
        hasError={errors.localID?.hasError}
        {...getOverrideProps(overrides, "localID")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              localID,
              title: value,
              text,
              linkText,
              linkID,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={true}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              localID,
              title,
              text: value,
              linkText,
              linkID,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Link text"
        isRequired={false}
        isReadOnly={false}
        value={linkText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              localID,
              title,
              text,
              linkText: value,
              linkID,
            };
            const result = onChange(modelFields);
            value = result?.linkText ?? value;
          }
          if (errors.linkText?.hasError) {
            runValidationTasks("linkText", value);
          }
          setLinkText(value);
        }}
        onBlur={() => runValidationTasks("linkText", linkText)}
        errorMessage={errors.linkText?.errorMessage}
        hasError={errors.linkText?.hasError}
        {...getOverrideProps(overrides, "linkText")}
      ></TextField>
      <TextField
        label="Link id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={linkID}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              gameID,
              localID,
              title,
              text,
              linkText,
              linkID: value,
            };
            const result = onChange(modelFields);
            value = result?.linkID ?? value;
          }
          if (errors.linkID?.hasError) {
            runValidationTasks("linkID", value);
          }
          setLinkID(value);
        }}
        onBlur={() => runValidationTasks("linkID", linkID)}
        errorMessage={errors.linkID?.errorMessage}
        hasError={errors.linkID?.hasError}
        {...getOverrideProps(overrides, "linkID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pagesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pagesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
