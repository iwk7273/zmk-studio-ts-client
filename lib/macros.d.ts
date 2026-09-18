import * as _m0 from "protobufjs/minimal";
import { BehaviorBinding } from "./keymap";
export declare const protobufPackage = "zmk.macros";
export declare enum MacroStepAction {
    MACRO_STEP_ACTION_UNSPECIFIED = 0,
    MACRO_STEP_ACTION_TAP = 1,
    MACRO_STEP_ACTION_PRESS = 2,
    MACRO_STEP_ACTION_RELEASE = 3,
    MACRO_STEP_ACTION_WAIT = 4,
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
}
export interface Response {
    getMacroState?: MacroState | undefined;
    setMacro?: SetMacroResponse | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: SaveChangesResponse | undefined;
    discardChanges?: boolean | undefined;
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
}
export interface Macro {
    slotIndex: number;
    behaviorId: number;
    name: string;
    enabled: boolean;
    steps: MacroStep[];
    dirty: boolean;
}
export interface MacroStep {
    action: MacroStepAction;
    binding: BehaviorBinding | undefined;
    waitMs: number;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_1 in Exclude<keyof I["setMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["setMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["setMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["setMacro"], "macro">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                    } & { [K_6 in Exclude<keyof I_1["setMacro"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                } & { [K_7 in Exclude<keyof I_1["setMacro"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["setMacro"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I_1["setMacro"]["macro"], keyof Macro>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["setMacro"], "macro">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_1 in Exclude<keyof I["getMacroState"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["getMacroState"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
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
                    } & { [K_7 in Exclude<keyof I["setMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I["setMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
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
    } & { [K_13 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                    } & { [K_14 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    waitMs?: number | undefined;
                } & { [K_15 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_16 in Exclude<keyof I_1["getMacroState"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_17 in Exclude<keyof I_1["getMacroState"]["macros"][number], keyof Macro>]: never; })[] & { [K_18 in Exclude<keyof I_1["getMacroState"]["macros"], keyof {
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_19 in Exclude<keyof I_1["getMacroState"], keyof MacroState>]: never; }) | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] | undefined;
                    dirty?: boolean | undefined;
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
                    }[] & ({
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
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
                        } & { [K_20 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                        waitMs?: number | undefined;
                    } & { [K_21 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_22 in Exclude<keyof I_1["setMacro"]["ok"]["macro"]["steps"], keyof {
                        action?: MacroStepAction | undefined;
                        binding?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } | undefined;
                        waitMs?: number | undefined;
                    }[]>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                } & { [K_23 in Exclude<keyof I_1["setMacro"]["ok"]["macro"], keyof Macro>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_24 in Exclude<keyof I_1["setMacro"]["ok"], keyof SetMacroOk>]: never; }) | undefined;
            err?: SetMacroErrorCode | undefined;
        } & { [K_25 in Exclude<keyof I_1["setMacro"], keyof SetMacroResponse>]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_26 in Exclude<keyof I_1["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_27 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_1 in Exclude<keyof I["macroStateChanged"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macroStateChanged"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_8 in Exclude<keyof I_1["macroStateChanged"]["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_9 in Exclude<keyof I_1["macroStateChanged"]["macros"][number]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_1 in Exclude<keyof I["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macros"][number]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["macros"][number]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["macros"][number]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
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
        }[] | undefined;
        dirty?: boolean | undefined;
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
        }[] & ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
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
        } & { [K_1 in Exclude<keyof I["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["steps"], keyof {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
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
        }[] | undefined;
        dirty?: boolean | undefined;
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
        }[] & ({
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
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
        } & { [K_5 in Exclude<keyof I_1["steps"][number], keyof MacroStep>]: never; })[] & { [K_6 in Exclude<keyof I_1["steps"], keyof {
            action?: MacroStepAction | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            waitMs?: number | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof MacroStep>]: never; }>(base?: I | undefined): MacroStep;
    fromPartial<I_1 extends {
        action?: MacroStepAction | undefined;
        binding?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } | undefined;
        waitMs?: number | undefined;
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
    } & { [K_3 in Exclude<keyof I_1, keyof MacroStep>]: never; }>(object: I_1): MacroStep;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_1 in Exclude<keyof I["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_6 in Exclude<keyof I_1["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_7 in Exclude<keyof I_1["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_1 in Exclude<keyof I["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] | undefined;
                dirty?: boolean | undefined;
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
                }[] & ({
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
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
                } & { [K_7 in Exclude<keyof I_1["ok"]["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["ok"]["macro"]["steps"], keyof {
                    action?: MacroStepAction | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    waitMs?: number | undefined;
                }[]>]: never; }) | undefined;
                dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_1 in Exclude<keyof I["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_2 in Exclude<keyof I["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] | undefined;
            dirty?: boolean | undefined;
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
            }[] & ({
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
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
            } & { [K_6 in Exclude<keyof I_1["macro"]["steps"][number], keyof MacroStep>]: never; })[] & { [K_7 in Exclude<keyof I_1["macro"]["steps"], keyof {
                action?: MacroStepAction | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                waitMs?: number | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["macro"], keyof Macro>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof SetMacroOk>]: never; }>(object: I_1): SetMacroOk;
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
