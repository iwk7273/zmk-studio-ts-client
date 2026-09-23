import * as _m0 from "protobufjs/minimal";
import { BehaviorBinding } from "./keymap";
export declare const protobufPackage = "zmk.macros";
export declare enum MacroStepAction {
    MACRO_STEP_ACTION_UNSPECIFIED = 0,
    MACRO_STEP_ACTION_TAP = 1,
    MACRO_STEP_ACTION_PRESS = 2,
    MACRO_STEP_ACTION_RELEASE = 3,
    MACRO_STEP_ACTION_WAIT = 4,
    MACRO_STEP_ACTION_TEXT = 5,
    UNRECOGNIZED = -1
}
export declare function macroStepActionFromJSON(object: any): MacroStepAction;
export declare function macroStepActionToJSON(object: MacroStepAction): string;
export declare enum SetMacroErrorCode {
    SET_MACRO_ERR_OK = 0,
    SET_MACRO_ERR_GENERIC = 1,
    SET_MACRO_ERR_INVALID_SLOT = 2,
    SET_MACRO_ERR_INVALID_NAME = 3,
    SET_MACRO_ERR_INVALID_STEP = 4,
    SET_MACRO_ERR_INVALID_BEHAVIOR = 5,
    SET_MACRO_ERR_INVALID_PARAMETERS = 6,
    SET_MACRO_ERR_BUSY = 7,
    SET_MACRO_ERR_NO_SPACE = 8,
    UNRECOGNIZED = -1
}
export declare function setMacroErrorCodeFromJSON(object: any): SetMacroErrorCode;
export declare function setMacroErrorCodeToJSON(object: SetMacroErrorCode): string;
export declare enum SaveChangesErrorCode {
    SAVE_CHANGES_ERR_OK = 0,
    SAVE_CHANGES_ERR_GENERIC = 1,
    SAVE_CHANGES_ERR_NOT_SUPPORTED = 2,
    SAVE_CHANGES_ERR_NO_SPACE = 3,
    UNRECOGNIZED = -1
}
export declare function saveChangesErrorCodeFromJSON(object: any): SaveChangesErrorCode;
export declare function saveChangesErrorCodeToJSON(object: SaveChangesErrorCode): string;
export interface Request {
    getMacroState?: boolean | undefined;
    setMacro?: SetMacroRequest | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: boolean | undefined;
    discardChanges?: boolean | undefined;
    getMacro?: GetMacroRequest | undefined;
    setTapMs?: SetTapMsRequest | undefined;
    resetMacro?: ResetMacroRequest | undefined;
}
export interface Response {
    getMacroState?: MacroState | undefined;
    setMacro?: SetMacroResponse | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: SaveChangesResponse | undefined;
    discardChanges?: boolean | undefined;
    getMacro?: GetMacroResponse | undefined;
    setTapMs?: SetTapMsResponse | undefined;
    resetMacro?: ResetMacroResponse | undefined;
}
export interface Notification {
    macroStateChanged?: MacroState | undefined;
    unsavedChangesStatusChanged?: boolean | undefined;
}
export interface MacroState {
    schemaVersion: number;
    maxMacros: number;
    maxStepsPerMacro: number;
    macros: Macro[];
    dirty: boolean;
    tapMs: number;
    poolBytesTotal: number;
    poolBytesUsed: number;
    maxMacroBytes: number;
}
export interface Macro {
    slotIndex: number;
    behaviorId: number;
    name: string;
    enabled: boolean;
    steps: MacroStep[];
    dirty: boolean;
    packedKeys: Uint8Array;
    encodedSize: number;
}
export interface MacroStep {
    action: MacroStepAction;
    binding: BehaviorBinding | undefined;
    waitMs: number;
    packedKeysOffset: number;
    packedKeysLength: number;
}
export interface GetMacroRequest {
    slotIndex: number;
}
export interface GetMacroResponse {
    macro: Macro | undefined;
}
export interface SetMacroRequest {
    macro: Macro | undefined;
}
export interface SetMacroResponse {
    ok?: SetMacroOk | undefined;
    err?: SetMacroErrorCode | undefined;
}
export interface SetMacroOk {
    macro: Macro | undefined;
    dirty: boolean;
}
export interface SetTapMsRequest {
    tapMs: number;
}
export interface SetTapMsResponse {
    tapMs: number;
    dirty: boolean;
}
export interface ResetMacroRequest {
    slotIndex: number;
}
export interface ResetMacroResponse {
    ok?: SetMacroOk | undefined;
    err?: SetMacroErrorCode | undefined;
}
export interface SaveChangesResponse {
    ok?: boolean | undefined;
    err?: SaveChangesErrorCode | undefined;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        getMacroState?: boolean | undefined;
        setMacro?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: {
            slotIndex?: number | undefined;
        } | undefined;
        setTapMs?: {
            tapMs?: number | undefined;
        } | undefined;
        resetMacro?: {
            slotIndex?: number | undefined;
        } | undefined;
    } & {
        getMacroState?: boolean | undefined;
        setMacro?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K in Exclude<keyof I["setMacro"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_1 in Exclude<keyof I["setMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["setMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_3 in Exclude<keyof I["setMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["setMacro"], "macro">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: ({
            slotIndex?: number | undefined;
        } & {
            slotIndex?: number | undefined;
        } & { [K_5 in Exclude<keyof I["getMacro"], "slotIndex">]: never; }) | undefined;
        setTapMs?: ({
            tapMs?: number | undefined;
        } & {
            tapMs?: number | undefined;
        } & { [K_6 in Exclude<keyof I["setTapMs"], "tapMs">]: never; }) | undefined;
        resetMacro?: ({
            slotIndex?: number | undefined;
        } & {
            slotIndex?: number | undefined;
        } & { [K_7 in Exclude<keyof I["resetMacro"], "slotIndex">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        getMacroState?: boolean | undefined;
        setMacro?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: {
            slotIndex?: number | undefined;
        } | undefined;
        setTapMs?: {
            tapMs?: number | undefined;
        } | undefined;
        resetMacro?: {
            slotIndex?: number | undefined;
        } | undefined;
    } & {
        getMacroState?: boolean | undefined;
        setMacro?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_9 in Exclude<keyof I_1["setMacro"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_10 in Exclude<keyof I_1["setMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_11 in Exclude<keyof I_1["setMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_12 in Exclude<keyof I_1["setMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["setMacro"], "macro">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: ({
            slotIndex?: number | undefined;
        } & {
            slotIndex?: number | undefined;
        } & { [K_14 in Exclude<keyof I_1["getMacro"], "slotIndex">]: never; }) | undefined;
        setTapMs?: ({
            tapMs?: number | undefined;
        } & {
            tapMs?: number | undefined;
        } & { [K_15 in Exclude<keyof I_1["setTapMs"], "tapMs">]: never; }) | undefined;
        resetMacro?: ({
            slotIndex?: number | undefined;
        } & {
            slotIndex?: number | undefined;
        } & { [K_16 in Exclude<keyof I_1["resetMacro"], "slotIndex">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        getMacroState?: {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } | undefined;
        setMacro?: {
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } | undefined;
        setTapMs?: {
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        resetMacro?: {
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } | undefined;
    } & {
        getMacroState?: ({
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] & ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K in Exclude<keyof I["getMacroState"]["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_1 in Exclude<keyof I["getMacroState"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["getMacroState"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_3 in Exclude<keyof I["getMacroState"]["macros"][number], keyof Macro>]: never; })[] & { [K_4 in Exclude<keyof I["getMacroState"]["macros"], keyof {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & { [K_5 in Exclude<keyof I["getMacroState"], keyof MacroState>]: never; }) | undefined;
        setMacro?: ({
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } & {
            ok?: ({
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                macro?: ({
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & {
                        action?: MacroStepAction | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_6 in Exclude<keyof I["setMacro"]["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & { [K_7 in Exclude<keyof I["setMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I["setMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & { [K_9 in Exclude<keyof I["setMacro"]["ok"]["macro"], keyof Macro>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I["setMacro"]["ok"], keyof SetMacroOk>]: never; }) | undefined;
            err?: SetMacroErrorCode | undefined;
        } & { [K_11 in Exclude<keyof I["setMacro"], keyof SetMacroResponse>]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_12 in Exclude<keyof I["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_13 in Exclude<keyof I["getMacro"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_14 in Exclude<keyof I["getMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_15 in Exclude<keyof I["getMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_16 in Exclude<keyof I["getMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["getMacro"], "macro">]: never; }) | undefined;
        setTapMs?: ({
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } & {
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } & { [K_18 in Exclude<keyof I["setTapMs"], keyof SetTapMsResponse>]: never; }) | undefined;
        resetMacro?: ({
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } & {
            ok?: ({
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                macro?: ({
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & {
                        action?: MacroStepAction | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_19 in Exclude<keyof I["resetMacro"]["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & { [K_20 in Exclude<keyof I["resetMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_21 in Exclude<keyof I["resetMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & { [K_22 in Exclude<keyof I["resetMacro"]["ok"]["macro"], keyof Macro>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_23 in Exclude<keyof I["resetMacro"]["ok"], keyof SetMacroOk>]: never; }) | undefined;
            err?: SetMacroErrorCode | undefined;
        } & { [K_24 in Exclude<keyof I["resetMacro"], keyof ResetMacroResponse>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        getMacroState?: {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } | undefined;
        setMacro?: {
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } | undefined;
        setTapMs?: {
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        resetMacro?: {
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } | undefined;
    } & {
        getMacroState?: ({
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] & ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_26 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_27 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_28 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_29 in Exclude<keyof I_1["getMacroState"]["macros"][number], keyof Macro>]: never; })[] & { [K_30 in Exclude<keyof I_1["getMacroState"]["macros"], keyof {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & { [K_31 in Exclude<keyof I_1["getMacroState"], keyof MacroState>]: never; }) | undefined;
        setMacro?: ({
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } & {
            ok?: ({
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                macro?: ({
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & {
                        action?: MacroStepAction | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_32 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & { [K_33 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_34 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & { [K_35 in Exclude<keyof I_1["setMacro"]["ok"]["macro"], keyof Macro>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_36 in Exclude<keyof I_1["setMacro"]["ok"], keyof SetMacroOk>]: never; }) | undefined;
            err?: SetMacroErrorCode | undefined;
        } & { [K_37 in Exclude<keyof I_1["setMacro"], keyof SetMacroResponse>]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_38 in Exclude<keyof I_1["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
        getMacro?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_39 in Exclude<keyof I_1["getMacro"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_40 in Exclude<keyof I_1["getMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_41 in Exclude<keyof I_1["getMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_42 in Exclude<keyof I_1["getMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I_1["getMacro"], "macro">]: never; }) | undefined;
        setTapMs?: ({
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } & {
            tapMs?: number | undefined;
            dirty?: boolean | undefined;
        } & { [K_44 in Exclude<keyof I_1["setTapMs"], keyof SetTapMsResponse>]: never; }) | undefined;
        resetMacro?: ({
            ok?: {
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetMacroErrorCode | undefined;
        } & {
            ok?: ({
                macro?: {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                macro?: ({
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & {
                    slotIndex?: number | undefined;
                    behaviorId?: number | undefined;
                    name?: string | undefined;
                    enabled?: boolean | undefined;
                    steps?: ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & {
                        action?: MacroStepAction | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_45 in Exclude<keyof I_1["resetMacro"]["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    } & { [K_46 in Exclude<keyof I_1["resetMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_47 in Exclude<keyof I_1["resetMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                        packedKeysOffset?: number | undefined;
                        packedKeysLength?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    packedKeys?: Uint8Array | undefined;
                    encodedSize?: number | undefined;
                } & { [K_48 in Exclude<keyof I_1["resetMacro"]["ok"]["macro"], keyof Macro>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_49 in Exclude<keyof I_1["resetMacro"]["ok"], keyof SetMacroOk>]: never; }) | undefined;
            err?: SetMacroErrorCode | undefined;
        } & { [K_50 in Exclude<keyof I_1["resetMacro"], keyof ResetMacroResponse>]: never; }) | undefined;
    } & { [K_51 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        macroStateChanged?: {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        macroStateChanged?: ({
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] & ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K in Exclude<keyof I["macroStateChanged"]["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_1 in Exclude<keyof I["macroStateChanged"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macroStateChanged"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_3 in Exclude<keyof I["macroStateChanged"]["macros"][number], keyof Macro>]: never; })[] & { [K_4 in Exclude<keyof I["macroStateChanged"]["macros"], keyof {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & { [K_5 in Exclude<keyof I["macroStateChanged"], keyof MacroState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        macroStateChanged?: {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        macroStateChanged?: ({
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxMacros?: number | undefined;
            maxStepsPerMacro?: number | undefined;
            macros?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[] & ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_7 in Exclude<keyof I_1["macroStateChanged"]["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_8 in Exclude<keyof I_1["macroStateChanged"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_9 in Exclude<keyof I_1["macroStateChanged"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_10 in Exclude<keyof I_1["macroStateChanged"]["macros"][number], keyof Macro>]: never; })[] & { [K_11 in Exclude<keyof I_1["macroStateChanged"]["macros"], keyof {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            tapMs?: number | undefined;
            poolBytesTotal?: number | undefined;
            poolBytesUsed?: number | undefined;
            maxMacroBytes?: number | undefined;
        } & { [K_12 in Exclude<keyof I_1["macroStateChanged"], keyof MacroState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
};
export declare const MacroState: {
    encode(message: MacroState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MacroState;
    fromJSON(object: any): MacroState;
    toJSON(message: MacroState): unknown;
    create<I extends {
        schemaVersion?: number | undefined;
        maxMacros?: number | undefined;
        maxStepsPerMacro?: number | undefined;
        macros?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
        tapMs?: number | undefined;
        poolBytesTotal?: number | undefined;
        poolBytesUsed?: number | undefined;
        maxMacroBytes?: number | undefined;
    } & {
        schemaVersion?: number | undefined;
        maxMacros?: number | undefined;
        maxStepsPerMacro?: number | undefined;
        macros?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[] & ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_1 in Exclude<keyof I["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macros"][number]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_3 in Exclude<keyof I["macros"][number], keyof Macro>]: never; })[] & { [K_4 in Exclude<keyof I["macros"], keyof {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
        tapMs?: number | undefined;
        poolBytesTotal?: number | undefined;
        poolBytesUsed?: number | undefined;
        maxMacroBytes?: number | undefined;
    } & { [K_5 in Exclude<keyof I, keyof MacroState>]: never; }>(base?: I | undefined): MacroState;
    fromPartial<I_1 extends {
        schemaVersion?: number | undefined;
        maxMacros?: number | undefined;
        maxStepsPerMacro?: number | undefined;
        macros?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
        tapMs?: number | undefined;
        poolBytesTotal?: number | undefined;
        poolBytesUsed?: number | undefined;
        maxMacroBytes?: number | undefined;
    } & {
        schemaVersion?: number | undefined;
        maxMacros?: number | undefined;
        maxStepsPerMacro?: number | undefined;
        macros?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[] & ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_6 in Exclude<keyof I_1["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_7 in Exclude<keyof I_1["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["macros"][number]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_9 in Exclude<keyof I_1["macros"][number], keyof Macro>]: never; })[] & { [K_10 in Exclude<keyof I_1["macros"], keyof {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
        tapMs?: number | undefined;
        poolBytesTotal?: number | undefined;
        poolBytesUsed?: number | undefined;
        maxMacroBytes?: number | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof MacroState>]: never; }>(object: I_1): MacroState;
};
export declare const Macro: {
    encode(message: Macro, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Macro;
    fromJSON(object: any): Macro;
    toJSON(message: Macro): unknown;
    create<I extends {
        slotIndex?: number | undefined;
        behaviorId?: number | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        steps?: {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
        packedKeys?: Uint8Array | undefined;
        encodedSize?: number | undefined;
    } & {
        slotIndex?: number | undefined;
        behaviorId?: number | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        steps?: ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[] & ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        } & {
            action?: MacroStepAction | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K in Exclude<keyof I["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        } & { [K_1 in Exclude<keyof I["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["steps"], keyof {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
        packedKeys?: Uint8Array | undefined;
        encodedSize?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Macro>]: never; }>(base?: I | undefined): Macro;
    fromPartial<I_1 extends {
        slotIndex?: number | undefined;
        behaviorId?: number | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        steps?: {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
        packedKeys?: Uint8Array | undefined;
        encodedSize?: number | undefined;
    } & {
        slotIndex?: number | undefined;
        behaviorId?: number | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        steps?: ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[] & ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        } & {
            action?: MacroStepAction | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K_4 in Exclude<keyof I_1["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["steps"][number], keyof MacroStep>]: never; })[] & { [K_6 in Exclude<keyof I_1["steps"], keyof {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
            packedKeysOffset?: number | undefined;
            packedKeysLength?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
        packedKeys?: Uint8Array | undefined;
        encodedSize?: number | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Macro>]: never; }>(object: I_1): Macro;
};
export declare const MacroStep: {
    encode(message: MacroStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MacroStep;
    fromJSON(object: any): MacroStep;
    toJSON(message: MacroStep): unknown;
    create<I extends {
        action?: MacroStepAction | undefined;
        binding?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } | undefined;
        waitMs?: number | undefined;
        packedKeysOffset?: number | undefined;
        packedKeysLength?: number | undefined;
    } & {
        action?: MacroStepAction | undefined;
        binding?: ({
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & { [K in Exclude<keyof I["binding"], keyof BehaviorBinding>]: never; }) | undefined;
        waitMs?: number | undefined;
        packedKeysOffset?: number | undefined;
        packedKeysLength?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MacroStep>]: never; }>(base?: I | undefined): MacroStep;
    fromPartial<I_1 extends {
        action?: MacroStepAction | undefined;
        binding?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } | undefined;
        waitMs?: number | undefined;
        packedKeysOffset?: number | undefined;
        packedKeysLength?: number | undefined;
    } & {
        action?: MacroStepAction | undefined;
        binding?: ({
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["binding"], keyof BehaviorBinding>]: never; }) | undefined;
        waitMs?: number | undefined;
        packedKeysOffset?: number | undefined;
        packedKeysLength?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MacroStep>]: never; }>(object: I_1): MacroStep;
};
export declare const GetMacroRequest: {
    encode(message: GetMacroRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMacroRequest;
    fromJSON(object: any): GetMacroRequest;
    toJSON(message: GetMacroRequest): unknown;
    create<I extends {
        slotIndex?: number | undefined;
    } & {
        slotIndex?: number | undefined;
    } & { [K in Exclude<keyof I, "slotIndex">]: never; }>(base?: I | undefined): GetMacroRequest;
    fromPartial<I_1 extends {
        slotIndex?: number | undefined;
    } & {
        slotIndex?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "slotIndex">]: never; }>(object: I_1): GetMacroRequest;
};
export declare const GetMacroResponse: {
    encode(message: GetMacroResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMacroResponse;
    fromJSON(object: any): GetMacroResponse;
    toJSON(message: GetMacroResponse): unknown;
    create<I extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_1 in Exclude<keyof I["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_3 in Exclude<keyof I["macro"], keyof Macro>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "macro">]: never; }>(base?: I | undefined): GetMacroResponse;
    fromPartial<I_1 extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_5 in Exclude<keyof I_1["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_6 in Exclude<keyof I_1["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_7 in Exclude<keyof I_1["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["macro"], keyof Macro>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "macro">]: never; }>(object: I_1): GetMacroResponse;
};
export declare const SetMacroRequest: {
    encode(message: SetMacroRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetMacroRequest;
    fromJSON(object: any): SetMacroRequest;
    toJSON(message: SetMacroRequest): unknown;
    create<I extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_1 in Exclude<keyof I["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_3 in Exclude<keyof I["macro"], keyof Macro>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "macro">]: never; }>(base?: I | undefined): SetMacroRequest;
    fromPartial<I_1 extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_5 in Exclude<keyof I_1["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_6 in Exclude<keyof I_1["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_7 in Exclude<keyof I_1["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["macro"], keyof Macro>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "macro">]: never; }>(object: I_1): SetMacroRequest;
};
export declare const SetMacroResponse: {
    encode(message: SetMacroResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetMacroResponse;
    fromJSON(object: any): SetMacroResponse;
    toJSON(message: SetMacroResponse): unknown;
    create<I extends {
        ok?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetMacroErrorCode | undefined;
    } & {
        ok?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K in Exclude<keyof I["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_1 in Exclude<keyof I["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_3 in Exclude<keyof I["ok"]["macro"], keyof Macro>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I["ok"], keyof SetMacroOk>]: never; }) | undefined;
        err?: SetMacroErrorCode | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SetMacroResponse>]: never; }>(base?: I | undefined): SetMacroResponse;
    fromPartial<I_1 extends {
        ok?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetMacroErrorCode | undefined;
    } & {
        ok?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_6 in Exclude<keyof I_1["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_7 in Exclude<keyof I_1["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["ok"]["macro"], keyof Macro>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_10 in Exclude<keyof I_1["ok"], keyof SetMacroOk>]: never; }) | undefined;
        err?: SetMacroErrorCode | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SetMacroResponse>]: never; }>(object: I_1): SetMacroResponse;
};
export declare const SetMacroOk: {
    encode(message: SetMacroOk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetMacroOk;
    fromJSON(object: any): SetMacroOk;
    toJSON(message: SetMacroOk): unknown;
    create<I extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_1 in Exclude<keyof I["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_3 in Exclude<keyof I["macro"], keyof Macro>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SetMacroOk>]: never; }>(base?: I | undefined): SetMacroOk;
    fromPartial<I_1 extends {
        macro?: {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        macro?: ({
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & {
            slotIndex?: number | undefined;
            behaviorId?: number | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            steps?: ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & {
                action?: MacroStepAction | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_5 in Exclude<keyof I_1["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            } & { [K_6 in Exclude<keyof I_1["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_7 in Exclude<keyof I_1["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
                packedKeysOffset?: number | undefined;
                packedKeysLength?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
            packedKeys?: Uint8Array | undefined;
            encodedSize?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["macro"], keyof Macro>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof SetMacroOk>]: never; }>(object: I_1): SetMacroOk;
};
export declare const SetTapMsRequest: {
    encode(message: SetTapMsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTapMsRequest;
    fromJSON(object: any): SetTapMsRequest;
    toJSON(message: SetTapMsRequest): unknown;
    create<I extends {
        tapMs?: number | undefined;
    } & {
        tapMs?: number | undefined;
    } & { [K in Exclude<keyof I, "tapMs">]: never; }>(base?: I | undefined): SetTapMsRequest;
    fromPartial<I_1 extends {
        tapMs?: number | undefined;
    } & {
        tapMs?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "tapMs">]: never; }>(object: I_1): SetTapMsRequest;
};
export declare const SetTapMsResponse: {
    encode(message: SetTapMsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTapMsResponse;
    fromJSON(object: any): SetTapMsResponse;
    toJSON(message: SetTapMsResponse): unknown;
    create<I extends {
        tapMs?: number | undefined;
        dirty?: boolean | undefined;
    } & {
        tapMs?: number | undefined;
        dirty?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof SetTapMsResponse>]: never; }>(base?: I | undefined): SetTapMsResponse;
    fromPartial<I_1 extends {
        tapMs?: number | undefined;
        dirty?: boolean | undefined;
    } & {
        tapMs?: number | undefined;
        dirty?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetTapMsResponse>]: never; }>(object: I_1): SetTapMsResponse;
};
export declare const ResetMacroRequest: {
    encode(message: ResetMacroRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetMacroRequest;
    fromJSON(object: any): ResetMacroRequest;
    toJSON(message: ResetMacroRequest): unknown;
    create<I extends {
        slotIndex?: number | undefined;
    } & {
        slotIndex?: number | undefined;
    } & { [K in Exclude<keyof I, "slotIndex">]: never; }>(base?: I | undefined): ResetMacroRequest;
    fromPartial<I_1 extends {
        slotIndex?: number | undefined;
    } & {
        slotIndex?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "slotIndex">]: never; }>(object: I_1): ResetMacroRequest;
};
export declare const ResetMacroResponse: {
    encode(message: ResetMacroResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetMacroResponse;
    fromJSON(object: any): ResetMacroResponse;
    toJSON(message: ResetMacroResponse): unknown;
    create<I extends {
        ok?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetMacroErrorCode | undefined;
    } & {
        ok?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K in Exclude<keyof I["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_1 in Exclude<keyof I["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_3 in Exclude<keyof I["ok"]["macro"], keyof Macro>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I["ok"], keyof SetMacroOk>]: never; }) | undefined;
        err?: SetMacroErrorCode | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ResetMacroResponse>]: never; }>(base?: I | undefined): ResetMacroResponse;
    fromPartial<I_1 extends {
        ok?: {
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetMacroErrorCode | undefined;
    } & {
        ok?: ({
            macro?: {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            macro?: ({
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & {
                slotIndex?: number | undefined;
                behaviorId?: number | undefined;
                name?: string | undefined;
                enabled?: boolean | undefined;
                steps?: ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & {
                    action?: MacroStepAction | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_6 in Exclude<keyof I_1["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                } & { [K_7 in Exclude<keyof I_1["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                    packedKeysOffset?: number | undefined;
                    packedKeysLength?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
                packedKeys?: Uint8Array | undefined;
                encodedSize?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["ok"]["macro"], keyof Macro>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_10 in Exclude<keyof I_1["ok"], keyof SetMacroOk>]: never; }) | undefined;
        err?: SetMacroErrorCode | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof ResetMacroResponse>]: never; }>(object: I_1): ResetMacroResponse;
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
