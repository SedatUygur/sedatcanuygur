export type ParseDatabaseErrorResult<TFields> = {
  base: string[];
  // Mapped type - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
  formFields: {
    [K in keyof TFields]?: TFields[K];
  };
};

export type ParseDatabaseErrorProps<TFields> = {
  fields: TFields;
};

export function convertMessageToHash(message: string) {
  const fieldResult = /error:.*desc = Field (?<field>'.*?)\(/.exec(message);
  const field = fieldResult?.groups?.field;
  if (field) {
    const keyResult = /'(?<key>.*?)'/.exec(field);
    const key = keyResult?.groups?.key;
    if (key) {
      return {
        [key]: field.trim(),
      };
    }
  }

  return {};
}

// Narrowing / Type Guard - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
export function presentKey<TFields extends Record<string, unknown>>(
  object: TFields,
  key: string,
): Extract<keyof TFields, string> | undefined {
  if (key in object) {
    return key as Extract<keyof TFields, string>;
  } else {
    return undefined;
  }
}
