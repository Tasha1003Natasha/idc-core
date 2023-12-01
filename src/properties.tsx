import { EditNumber } from "./property_editors/number";
import { EditSelectNumber } from "./property_editors/select_number";
import { EditNumberSlider } from "./property_editors/select_number_slider";
import { EditString } from "./property_editors/string";
import { EditStringList } from "./property_editors/string_list";
import { EditSelectDatabase } from "./property_editors/select_database";
import { EditSelectServerOID } from "./property_editors/select_server_oid";
import { EditSelectString } from "./property_editors/select_string";
import { EditSelectColor } from "./property_editors/select_color";
import { EditBoolean } from "./property_editors/boolean";
import { EditOID } from "./property_editors/oid";
import { Dispatch, SetStateAction } from "react";
import { EditValueMap } from "./property_editors/value_map";

export interface Property {
  id: string;
  name: string;
  kind: PropertyKind;
  params?: any;
}

export enum PropertyKind {
  Number = "number",
  SelectNumber = "select_number",
  SelectNumberSlider = "select_number_slider",
  String = "string",
  StringList = "string_list",
  SelectString = "select_string",
  SelectDatabase = "select_database",
  SelectServerOID = "select_server_oid",
  SelectColor = "select_color",
  Boolean = "boolean",
  OID = "oid",
  ValueMap = "value_map"
}

export const PropertyEditor = ({
  kind,
  ...props
}: {
  kind: PropertyKind;
  element_id: string;
  update_key?: any;
  current_value: any;
  setParam: (a: any) => void;
  params?: any;
  setErrorMessage?: Dispatch<SetStateAction<string | null>>;
  //forceUpdate: () => void;
}): JSX.Element => {
  let editor;
  switch (kind) {
    case PropertyKind.Number:
      editor = <EditNumber {...props} />;
      break;
    case PropertyKind.SelectNumber:
      editor = <EditSelectNumber {...props} />;
      break;
    case PropertyKind.SelectNumberSlider:
      editor = <EditNumberSlider {...(props as any)} />;
      break;
    case PropertyKind.String:
      editor = <EditString {...props} />;
      break;
    case PropertyKind.StringList:
      editor = <EditStringList {...props} />;
      break;
    case PropertyKind.SelectString:
      editor = <EditSelectString {...props} />;
      break;
    case PropertyKind.SelectColor:
      editor = <EditSelectColor {...props} />;
      break;
    case PropertyKind.Boolean:
      editor = <EditBoolean {...props} />;
      break;
    case PropertyKind.OID:
      editor = <EditOID {...props} />;
      break;
    case PropertyKind.SelectDatabase:
      editor = <EditSelectDatabase {...props} />;
      break;
    case PropertyKind.SelectServerOID:
      editor = <EditSelectServerOID {...props} />;
      break;
    case PropertyKind.ValueMap:
      editor = <EditValueMap {...props} />;
      break;
  }
  return <>{editor}</>;
};
