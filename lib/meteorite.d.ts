import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zmk.meteorite";
export declare enum SetConfigResponse {
    SET_CONFIG_RESP_OK = 0,
    SET_CONFIG_RESP_ERR_INVALID_VALUE = 1,
    SET_CONFIG_RESP_ERR_GENERIC = 2,
    UNRECOGNIZED = -1
}
export declare function setConfigResponseFromJSON(object: any): SetConfigResponse;
export declare function setConfigResponseToJSON(object: SetConfigResponse): string;
export declare enum SaveChangesErrorCode {
    SAVE_CHANGES_ERR_OK = 0,
    SAVE_CHANGES_ERR_GENERIC = 1,
    SAVE_CHANGES_ERR_NOT_SUPPORTED = 2,
    SAVE_CHANGES_ERR_NO_SPACE = 3,
    UNRECOGNIZED = -1
}
export declare function saveChangesErrorCodeFromJSON(object: any): SaveChangesErrorCode;
export declare function saveChangesErrorCodeToJSON(object: SaveChangesErrorCode): string;
export declare enum ConfigFieldKind {
    CONFIG_FIELD_KIND_RANGE = 0,
    CONFIG_FIELD_KIND_TOGGLE = 1,
    CONFIG_FIELD_KIND_ENUM = 2,
    CONFIG_FIELD_KIND_INDEXED = 3,
    UNRECOGNIZED = -1
}
export declare function configFieldKindFromJSON(object: any): ConfigFieldKind;
export declare function configFieldKindToJSON(object: ConfigFieldKind): string;
export interface Request {
    getConfigState?: boolean | undefined;
    setConfig?: SetConfigRequest | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: boolean | undefined;
    discardChanges?: boolean | undefined;
}
export interface Response {
    getConfigState?: ConfigState | undefined;
    setConfig?: SetConfigResponse | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: SaveChangesResponse | undefined;
    discardChanges?: boolean | undefined;
}
export interface Notification {
    configStateChanged?: ConfigState | undefined;
    unsavedChangesStatusChanged?: boolean | undefined;
}
export interface SetConfigRequest {
    config: ConfigValues | undefined;
}
export interface SaveChangesResponse {
    ok?: boolean | undefined;
    err?: SaveChangesErrorCode | undefined;
}
export interface ConfigState {
    schemaVersion: number;
    firmwareFeatureVersion: string;
    fields: ConfigField[];
    current: ConfigValues | undefined;
    saved: ConfigValues | undefined;
    defaults: ConfigValues | undefined;
    dirty: boolean;
}
export interface ConfigValues {
    cpiIdx: number;
    scrollDiv: number;
    rotationIdx: number;
    scrollHRev: number;
    scrollVRev: number;
    scalingMode: number;
    scrollScalingMode: number;
    scrollLayer1: number;
    scrollLayer2: number;
    osMode: number;
}
export interface ConfigField {
    id: string;
    label: string;
    kind: ConfigFieldKind;
    unit: string;
    min: number;
    max: number;
    step: number;
    readOnly: boolean;
    fixedReason: string;
    options: ConfigFieldOption[];
}
export interface ConfigFieldOption {
    value: number;
    label: string;
    displayValue: number;
    displayLabel: string;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        getConfigState?: boolean | undefined;
        setConfig?: {
            config?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getConfigState?: boolean | undefined;
        setConfig?: ({
            config?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
        } & {
            config?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K in Exclude<keyof I["setConfig"]["config"], keyof ConfigValues>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["setConfig"], "config">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        getConfigState?: boolean | undefined;
        setConfig?: {
            config?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getConfigState?: boolean | undefined;
        setConfig?: ({
            config?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
        } & {
            config?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_3 in Exclude<keyof I_1["setConfig"]["config"], keyof ConfigValues>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["setConfig"], "config">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        getConfigState?: {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getConfigState?: ({
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] & ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] & ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & { [K in Exclude<keyof I["getConfigState"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_1 in Exclude<keyof I["getConfigState"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["getConfigState"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_3 in Exclude<keyof I["getConfigState"]["fields"], keyof {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            current?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_4 in Exclude<keyof I["getConfigState"]["current"], keyof ConfigValues>]: never; }) | undefined;
            saved?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_5 in Exclude<keyof I["getConfigState"]["saved"], keyof ConfigValues>]: never; }) | undefined;
            defaults?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_6 in Exclude<keyof I["getConfigState"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_7 in Exclude<keyof I["getConfigState"], keyof ConfigState>]: never; }) | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_8 in Exclude<keyof I["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        getConfigState?: {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getConfigState?: ({
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] & ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] & ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & { [K_10 in Exclude<keyof I_1["getConfigState"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_11 in Exclude<keyof I_1["getConfigState"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I_1["getConfigState"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_13 in Exclude<keyof I_1["getConfigState"]["fields"], keyof {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            current?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["getConfigState"]["current"], keyof ConfigValues>]: never; }) | undefined;
            saved?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_15 in Exclude<keyof I_1["getConfigState"]["saved"], keyof ConfigValues>]: never; }) | undefined;
            defaults?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_16 in Exclude<keyof I_1["getConfigState"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_17 in Exclude<keyof I_1["getConfigState"], keyof ConfigState>]: never; }) | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_18 in Exclude<keyof I_1["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        configStateChanged?: {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        configStateChanged?: ({
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] & ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] & ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & { [K in Exclude<keyof I["configStateChanged"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_1 in Exclude<keyof I["configStateChanged"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["configStateChanged"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_3 in Exclude<keyof I["configStateChanged"]["fields"], keyof {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            current?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_4 in Exclude<keyof I["configStateChanged"]["current"], keyof ConfigValues>]: never; }) | undefined;
            saved?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_5 in Exclude<keyof I["configStateChanged"]["saved"], keyof ConfigValues>]: never; }) | undefined;
            defaults?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_6 in Exclude<keyof I["configStateChanged"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_7 in Exclude<keyof I["configStateChanged"], keyof ConfigState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        configStateChanged?: {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        configStateChanged?: ({
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            current?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            saved?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            defaults?: {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            firmwareFeatureVersion?: string | undefined;
            fields?: ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[] & ({
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] & ({
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                } & { [K_9 in Exclude<keyof I_1["configStateChanged"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_10 in Exclude<keyof I_1["configStateChanged"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["configStateChanged"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_12 in Exclude<keyof I_1["configStateChanged"]["fields"], keyof {
                id?: string | undefined;
                label?: string | undefined;
                kind?: ConfigFieldKind | undefined;
                unit?: string | undefined;
                min?: number | undefined;
                max?: number | undefined;
                step?: number | undefined;
                readOnly?: boolean | undefined;
                fixedReason?: string | undefined;
                options?: {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            current?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["configStateChanged"]["current"], keyof ConfigValues>]: never; }) | undefined;
            saved?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["configStateChanged"]["saved"], keyof ConfigValues>]: never; }) | undefined;
            defaults?: ({
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & {
                cpiIdx?: number | undefined;
                scrollDiv?: number | undefined;
                rotationIdx?: number | undefined;
                scrollHRev?: number | undefined;
                scrollVRev?: number | undefined;
                scalingMode?: number | undefined;
                scrollScalingMode?: number | undefined;
                scrollLayer1?: number | undefined;
                scrollLayer2?: number | undefined;
                osMode?: number | undefined;
            } & { [K_15 in Exclude<keyof I_1["configStateChanged"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_16 in Exclude<keyof I_1["configStateChanged"], keyof ConfigState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
};
export declare const SetConfigRequest: {
    encode(message: SetConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetConfigRequest;
    fromJSON(object: any): SetConfigRequest;
    toJSON(message: SetConfigRequest): unknown;
    create<I extends {
        config?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
    } & {
        config?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K in Exclude<keyof I["config"], keyof ConfigValues>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "config">]: never; }>(base?: I | undefined): SetConfigRequest;
    fromPartial<I_1 extends {
        config?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
    } & {
        config?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["config"], keyof ConfigValues>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "config">]: never; }>(object: I_1): SetConfigRequest;
};
export declare const SaveChangesResponse: {
    encode(message: SaveChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SaveChangesResponse;
    fromJSON(object: any): SaveChangesResponse;
    toJSON(message: SaveChangesResponse): unknown;
    create<I extends {
        ok?: boolean | undefined;
        err?: SaveChangesErrorCode | undefined;
    } & {
        ok?: boolean | undefined;
        err?: SaveChangesErrorCode | undefined;
    } & { [K in Exclude<keyof I, keyof SaveChangesResponse>]: never; }>(base?: I | undefined): SaveChangesResponse;
    fromPartial<I_1 extends {
        ok?: boolean | undefined;
        err?: SaveChangesErrorCode | undefined;
    } & {
        ok?: boolean | undefined;
        err?: SaveChangesErrorCode | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SaveChangesResponse>]: never; }>(object: I_1): SaveChangesResponse;
};
export declare const ConfigState: {
    encode(message: ConfigState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigState;
    fromJSON(object: any): ConfigState;
    toJSON(message: ConfigState): unknown;
    create<I extends {
        schemaVersion?: number | undefined;
        firmwareFeatureVersion?: string | undefined;
        fields?: {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        current?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        saved?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        defaults?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        schemaVersion?: number | undefined;
        firmwareFeatureVersion?: string | undefined;
        fields?: ({
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[] & ({
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: ({
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] & ({
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            } & {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            } & { [K in Exclude<keyof I["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_1 in Exclude<keyof I["fields"][number]["options"], keyof {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["fields"][number], keyof ConfigField>]: never; })[] & { [K_3 in Exclude<keyof I["fields"], keyof {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        current?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_4 in Exclude<keyof I["current"], keyof ConfigValues>]: never; }) | undefined;
        saved?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_5 in Exclude<keyof I["saved"], keyof ConfigValues>]: never; }) | undefined;
        defaults?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_6 in Exclude<keyof I["defaults"], keyof ConfigValues>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_7 in Exclude<keyof I, keyof ConfigState>]: never; }>(base?: I | undefined): ConfigState;
    fromPartial<I_1 extends {
        schemaVersion?: number | undefined;
        firmwareFeatureVersion?: string | undefined;
        fields?: {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        current?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        saved?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        defaults?: {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        schemaVersion?: number | undefined;
        firmwareFeatureVersion?: string | undefined;
        fields?: ({
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[] & ({
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: ({
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] & ({
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            } & {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_9 in Exclude<keyof I_1["fields"][number]["options"], keyof {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["fields"][number], keyof ConfigField>]: never; })[] & { [K_11 in Exclude<keyof I_1["fields"], keyof {
            id?: string | undefined;
            label?: string | undefined;
            kind?: ConfigFieldKind | undefined;
            unit?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            readOnly?: boolean | undefined;
            fixedReason?: string | undefined;
            options?: {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        current?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_12 in Exclude<keyof I_1["current"], keyof ConfigValues>]: never; }) | undefined;
        saved?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_13 in Exclude<keyof I_1["saved"], keyof ConfigValues>]: never; }) | undefined;
        defaults?: ({
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & {
            cpiIdx?: number | undefined;
            scrollDiv?: number | undefined;
            rotationIdx?: number | undefined;
            scrollHRev?: number | undefined;
            scrollVRev?: number | undefined;
            scalingMode?: number | undefined;
            scrollScalingMode?: number | undefined;
            scrollLayer1?: number | undefined;
            scrollLayer2?: number | undefined;
            osMode?: number | undefined;
        } & { [K_14 in Exclude<keyof I_1["defaults"], keyof ConfigValues>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof ConfigState>]: never; }>(object: I_1): ConfigState;
};
export declare const ConfigValues: {
    encode(message: ConfigValues, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigValues;
    fromJSON(object: any): ConfigValues;
    toJSON(message: ConfigValues): unknown;
    create<I extends {
        cpiIdx?: number | undefined;
        scrollDiv?: number | undefined;
        rotationIdx?: number | undefined;
        scrollHRev?: number | undefined;
        scrollVRev?: number | undefined;
        scalingMode?: number | undefined;
        scrollScalingMode?: number | undefined;
        scrollLayer1?: number | undefined;
        scrollLayer2?: number | undefined;
        osMode?: number | undefined;
    } & {
        cpiIdx?: number | undefined;
        scrollDiv?: number | undefined;
        rotationIdx?: number | undefined;
        scrollHRev?: number | undefined;
        scrollVRev?: number | undefined;
        scalingMode?: number | undefined;
        scrollScalingMode?: number | undefined;
        scrollLayer1?: number | undefined;
        scrollLayer2?: number | undefined;
        osMode?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ConfigValues>]: never; }>(base?: I | undefined): ConfigValues;
    fromPartial<I_1 extends {
        cpiIdx?: number | undefined;
        scrollDiv?: number | undefined;
        rotationIdx?: number | undefined;
        scrollHRev?: number | undefined;
        scrollVRev?: number | undefined;
        scalingMode?: number | undefined;
        scrollScalingMode?: number | undefined;
        scrollLayer1?: number | undefined;
        scrollLayer2?: number | undefined;
        osMode?: number | undefined;
    } & {
        cpiIdx?: number | undefined;
        scrollDiv?: number | undefined;
        rotationIdx?: number | undefined;
        scrollHRev?: number | undefined;
        scrollVRev?: number | undefined;
        scalingMode?: number | undefined;
        scrollScalingMode?: number | undefined;
        scrollLayer1?: number | undefined;
        scrollLayer2?: number | undefined;
        osMode?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConfigValues>]: never; }>(object: I_1): ConfigValues;
};
export declare const ConfigField: {
    encode(message: ConfigField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigField;
    fromJSON(object: any): ConfigField;
    toJSON(message: ConfigField): unknown;
    create<I extends {
        id?: string | undefined;
        label?: string | undefined;
        kind?: ConfigFieldKind | undefined;
        unit?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        readOnly?: boolean | undefined;
        fixedReason?: string | undefined;
        options?: {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        label?: string | undefined;
        kind?: ConfigFieldKind | undefined;
        unit?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        readOnly?: boolean | undefined;
        fixedReason?: string | undefined;
        options?: ({
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[] & ({
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        } & {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        } & { [K in Exclude<keyof I["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_1 in Exclude<keyof I["options"], keyof {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ConfigField>]: never; }>(base?: I | undefined): ConfigField;
    fromPartial<I_1 extends {
        id?: string | undefined;
        label?: string | undefined;
        kind?: ConfigFieldKind | undefined;
        unit?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        readOnly?: boolean | undefined;
        fixedReason?: string | undefined;
        options?: {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        label?: string | undefined;
        kind?: ConfigFieldKind | undefined;
        unit?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        readOnly?: boolean | undefined;
        fixedReason?: string | undefined;
        options?: ({
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[] & ({
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        } & {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_4 in Exclude<keyof I_1["options"], keyof {
            value?: number | undefined;
            label?: string | undefined;
            displayValue?: number | undefined;
            displayLabel?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof ConfigField>]: never; }>(object: I_1): ConfigField;
};
export declare const ConfigFieldOption: {
    encode(message: ConfigFieldOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigFieldOption;
    fromJSON(object: any): ConfigFieldOption;
    toJSON(message: ConfigFieldOption): unknown;
    create<I extends {
        value?: number | undefined;
        label?: string | undefined;
        displayValue?: number | undefined;
        displayLabel?: string | undefined;
    } & {
        value?: number | undefined;
        label?: string | undefined;
        displayValue?: number | undefined;
        displayLabel?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConfigFieldOption>]: never; }>(base?: I | undefined): ConfigFieldOption;
    fromPartial<I_1 extends {
        value?: number | undefined;
        label?: string | undefined;
        displayValue?: number | undefined;
        displayLabel?: string | undefined;
    } & {
        value?: number | undefined;
        label?: string | undefined;
        displayValue?: number | undefined;
        displayLabel?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConfigFieldOption>]: never; }>(object: I_1): ConfigFieldOption;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
