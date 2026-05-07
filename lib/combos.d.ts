import * as _m0 from "protobufjs/minimal";
import { BehaviorBinding } from "./keymap";
export declare const protobufPackage = "zmk.combos";
export declare enum ComboSource {
    COMBO_SOURCE_STOCK = 0,
    COMBO_SOURCE_USER = 1,
    UNRECOGNIZED = -1
}
export declare function comboSourceFromJSON(object: any): ComboSource;
export declare function comboSourceToJSON(object: ComboSource): string;
export declare enum SetComboErrorCode {
    SET_COMBO_ERR_OK = 0,
    SET_COMBO_ERR_GENERIC = 1,
    SET_COMBO_ERR_INVALID_SLOT = 2,
    SET_COMBO_ERR_INVALID_BEHAVIOR = 3,
    SET_COMBO_ERR_INVALID_PARAMETERS = 4,
    SET_COMBO_ERR_BUSY = 5,
    UNRECOGNIZED = -1
}
export declare function setComboErrorCodeFromJSON(object: any): SetComboErrorCode;
export declare function setComboErrorCodeToJSON(object: SetComboErrorCode): string;
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
    getComboState?: boolean | undefined;
    setCombo?: SetComboRequest | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: boolean | undefined;
    discardChanges?: boolean | undefined;
}
export interface Response {
    getComboState?: ComboState | undefined;
    setCombo?: SetComboResponse | undefined;
    checkUnsavedChanges?: boolean | undefined;
    saveChanges?: SaveChangesResponse | undefined;
    discardChanges?: boolean | undefined;
}
export interface Notification {
    comboStateChanged?: ComboState | undefined;
    unsavedChangesStatusChanged?: boolean | undefined;
}
export interface ComboState {
    schemaVersion: number;
    maxCombos: number;
    maxKeysPerCombo: number;
    combos: Combo[];
    dirty: boolean;
}
export interface Combo {
    comboId: string;
    slotIndex: number;
    source: ComboSource;
    enabled: boolean;
    binding: BehaviorBinding | undefined;
    keyPositions: number[];
    /** Empty list means the combo is active on all layers. */
    layers: number[];
    timeoutMs: number;
    requirePriorIdleMs: number;
    slowRelease: boolean;
    dirty: boolean;
}
export interface SetComboRequest {
    combo: Combo | undefined;
}
export interface SetComboResponse {
    ok?: SetComboOk | undefined;
    err?: SetComboErrorCode | undefined;
}
export interface SetComboOk {
    combo: Combo | undefined;
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
        getComboState?: boolean | undefined;
        setCombo?: {
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getComboState?: boolean | undefined;
        setCombo?: ({
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } & {
            combo?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["setCombo"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["setCombo"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["setCombo"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["setCombo"]["combo"], keyof Combo>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["setCombo"], "combo">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        getComboState?: boolean | undefined;
        setCombo?: {
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getComboState?: boolean | undefined;
        setCombo?: ({
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
        } & {
            combo?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_6 in Exclude<keyof I_1["setCombo"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_7 in Exclude<keyof I_1["setCombo"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_8 in Exclude<keyof I_1["setCombo"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I_1["setCombo"]["combo"], keyof Combo>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["setCombo"], "combo">]: never; }) | undefined;
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
        getComboState?: {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        setCombo?: {
            ok?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetComboErrorCode | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getComboState?: ({
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] & ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["getComboState"]["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["getComboState"]["combos"][number], keyof Combo>]: never; })[] & { [K_4 in Exclude<keyof I["getComboState"]["combos"], keyof {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["getComboState"], keyof ComboState>]: never; }) | undefined;
        setCombo?: ({
            ok?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetComboErrorCode | undefined;
        } & {
            ok?: ({
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                combo?: ({
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_6 in Exclude<keyof I["setCombo"]["ok"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_7 in Exclude<keyof I["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_8 in Exclude<keyof I["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_9 in Exclude<keyof I["setCombo"]["ok"]["combo"], keyof Combo>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I["setCombo"]["ok"], keyof SetComboOk>]: never; }) | undefined;
            err?: SetComboErrorCode | undefined;
        } & { [K_11 in Exclude<keyof I["setCombo"], keyof SetComboResponse>]: never; }) | undefined;
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
        getComboState?: {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        setCombo?: {
            ok?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetComboErrorCode | undefined;
        } | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } | undefined;
        discardChanges?: boolean | undefined;
    } & {
        getComboState?: ({
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] & ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_14 in Exclude<keyof I_1["getComboState"]["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_15 in Exclude<keyof I_1["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_16 in Exclude<keyof I_1["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_17 in Exclude<keyof I_1["getComboState"]["combos"][number], keyof Combo>]: never; })[] & { [K_18 in Exclude<keyof I_1["getComboState"]["combos"], keyof {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_19 in Exclude<keyof I_1["getComboState"], keyof ComboState>]: never; }) | undefined;
        setCombo?: ({
            ok?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            err?: SetComboErrorCode | undefined;
        } & {
            ok?: ({
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } | undefined;
                dirty?: boolean | undefined;
            } & {
                combo?: ({
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } | undefined;
                    keyPositions?: number[] | undefined;
                    layers?: number[] | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_20 in Exclude<keyof I_1["setCombo"]["ok"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_21 in Exclude<keyof I_1["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_22 in Exclude<keyof I_1["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_23 in Exclude<keyof I_1["setCombo"]["ok"]["combo"], keyof Combo>]: never; }) | undefined;
                dirty?: boolean | undefined;
            } & { [K_24 in Exclude<keyof I_1["setCombo"]["ok"], keyof SetComboOk>]: never; }) | undefined;
            err?: SetComboErrorCode | undefined;
        } & { [K_25 in Exclude<keyof I_1["setCombo"], keyof SetComboResponse>]: never; }) | undefined;
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
        comboStateChanged?: {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        comboStateChanged?: ({
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] & ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["comboStateChanged"]["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["comboStateChanged"]["combos"][number], keyof Combo>]: never; })[] & { [K_4 in Exclude<keyof I["comboStateChanged"]["combos"], keyof {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["comboStateChanged"], keyof ComboState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        comboStateChanged?: {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & {
        comboStateChanged?: ({
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] | undefined;
            dirty?: boolean | undefined;
        } & {
            schemaVersion?: number | undefined;
            maxCombos?: number | undefined;
            maxKeysPerCombo?: number | undefined;
            combos?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[] & ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_7 in Exclude<keyof I_1["comboStateChanged"]["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_8 in Exclude<keyof I_1["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_9 in Exclude<keyof I_1["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I_1["comboStateChanged"]["combos"][number], keyof Combo>]: never; })[] & { [K_11 in Exclude<keyof I_1["comboStateChanged"]["combos"], keyof {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            }[]>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_12 in Exclude<keyof I_1["comboStateChanged"], keyof ComboState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
};
export declare const ComboState: {
    encode(message: ComboState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ComboState;
    fromJSON(object: any): ComboState;
    toJSON(message: ComboState): unknown;
    create<I extends {
        schemaVersion?: number | undefined;
        maxCombos?: number | undefined;
        maxKeysPerCombo?: number | undefined;
        combos?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
    } & {
        schemaVersion?: number | undefined;
        maxCombos?: number | undefined;
        maxKeysPerCombo?: number | undefined;
        combos?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[] & ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K in Exclude<keyof I["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["combos"][number], keyof Combo>]: never; })[] & { [K_4 in Exclude<keyof I["combos"], keyof {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ComboState>]: never; }>(base?: I | undefined): ComboState;
    fromPartial<I_1 extends {
        schemaVersion?: number | undefined;
        maxCombos?: number | undefined;
        maxKeysPerCombo?: number | undefined;
        combos?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[] | undefined;
        dirty?: boolean | undefined;
    } & {
        schemaVersion?: number | undefined;
        maxCombos?: number | undefined;
        maxKeysPerCombo?: number | undefined;
        combos?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[] & ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K_6 in Exclude<keyof I_1["combos"][number]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_7 in Exclude<keyof I_1["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_8 in Exclude<keyof I_1["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_9 in Exclude<keyof I_1["combos"][number], keyof Combo>]: never; })[] & { [K_10 in Exclude<keyof I_1["combos"], keyof {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        }[]>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof ComboState>]: never; }>(object: I_1): ComboState;
};
export declare const Combo: {
    encode(message: Combo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Combo;
    fromJSON(object: any): Combo;
    toJSON(message: Combo): unknown;
    create<I extends {
        comboId?: string | undefined;
        slotIndex?: number | undefined;
        source?: ComboSource | undefined;
        enabled?: boolean | undefined;
        binding?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } | undefined;
        keyPositions?: number[] | undefined;
        layers?: number[] | undefined;
        timeoutMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
        slowRelease?: boolean | undefined;
        dirty?: boolean | undefined;
    } & {
        comboId?: string | undefined;
        slotIndex?: number | undefined;
        source?: ComboSource | undefined;
        enabled?: boolean | undefined;
        binding?: ({
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & { [K in Exclude<keyof I["binding"], keyof BehaviorBinding>]: never; }) | undefined;
        keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["keyPositions"], keyof number[]>]: never; }) | undefined;
        layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["layers"], keyof number[]>]: never; }) | undefined;
        timeoutMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
        slowRelease?: boolean | undefined;
        dirty?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Combo>]: never; }>(base?: I | undefined): Combo;
    fromPartial<I_1 extends {
        comboId?: string | undefined;
        slotIndex?: number | undefined;
        source?: ComboSource | undefined;
        enabled?: boolean | undefined;
        binding?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } | undefined;
        keyPositions?: number[] | undefined;
        layers?: number[] | undefined;
        timeoutMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
        slowRelease?: boolean | undefined;
        dirty?: boolean | undefined;
    } & {
        comboId?: string | undefined;
        slotIndex?: number | undefined;
        source?: ComboSource | undefined;
        enabled?: boolean | undefined;
        binding?: ({
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["binding"], keyof BehaviorBinding>]: never; }) | undefined;
        keyPositions?: (number[] & number[] & { [K_5 in Exclude<keyof I_1["keyPositions"], keyof number[]>]: never; }) | undefined;
        layers?: (number[] & number[] & { [K_6 in Exclude<keyof I_1["layers"], keyof number[]>]: never; }) | undefined;
        timeoutMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
        slowRelease?: boolean | undefined;
        dirty?: boolean | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Combo>]: never; }>(object: I_1): Combo;
};
export declare const SetComboRequest: {
    encode(message: SetComboRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetComboRequest;
    fromJSON(object: any): SetComboRequest;
    toJSON(message: SetComboRequest): unknown;
    create<I extends {
        combo?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } | undefined;
    } & {
        combo?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K in Exclude<keyof I["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["combo"]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["combo"], keyof Combo>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "combo">]: never; }>(base?: I | undefined): SetComboRequest;
    fromPartial<I_1 extends {
        combo?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } | undefined;
    } & {
        combo?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K_5 in Exclude<keyof I_1["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_6 in Exclude<keyof I_1["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_7 in Exclude<keyof I_1["combo"]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["combo"], keyof Combo>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "combo">]: never; }>(object: I_1): SetComboRequest;
};
export declare const SetComboResponse: {
    encode(message: SetComboResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetComboResponse;
    fromJSON(object: any): SetComboResponse;
    toJSON(message: SetComboResponse): unknown;
    create<I extends {
        ok?: {
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetComboErrorCode | undefined;
    } & {
        ok?: ({
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            combo?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K in Exclude<keyof I["ok"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["ok"]["combo"], keyof Combo>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I["ok"], keyof SetComboOk>]: never; }) | undefined;
        err?: SetComboErrorCode | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SetComboResponse>]: never; }>(base?: I | undefined): SetComboResponse;
    fromPartial<I_1 extends {
        ok?: {
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        err?: SetComboErrorCode | undefined;
    } & {
        ok?: ({
            combo?: {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } | undefined;
            dirty?: boolean | undefined;
        } & {
            combo?: ({
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
                keyPositions?: number[] | undefined;
                layers?: number[] | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & {
                comboId?: string | undefined;
                slotIndex?: number | undefined;
                source?: ComboSource | undefined;
                enabled?: boolean | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_6 in Exclude<keyof I_1["ok"]["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
                keyPositions?: (number[] & number[] & { [K_7 in Exclude<keyof I_1["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                layers?: (number[] & number[] & { [K_8 in Exclude<keyof I_1["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                timeoutMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
                slowRelease?: boolean | undefined;
                dirty?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I_1["ok"]["combo"], keyof Combo>]: never; }) | undefined;
            dirty?: boolean | undefined;
        } & { [K_10 in Exclude<keyof I_1["ok"], keyof SetComboOk>]: never; }) | undefined;
        err?: SetComboErrorCode | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SetComboResponse>]: never; }>(object: I_1): SetComboResponse;
};
export declare const SetComboOk: {
    encode(message: SetComboOk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetComboOk;
    fromJSON(object: any): SetComboOk;
    toJSON(message: SetComboOk): unknown;
    create<I extends {
        combo?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        combo?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K in Exclude<keyof I["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_1 in Exclude<keyof I["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_2 in Exclude<keyof I["combo"]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["combo"], keyof Combo>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SetComboOk>]: never; }>(base?: I | undefined): SetComboOk;
    fromPartial<I_1 extends {
        combo?: {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } | undefined;
        dirty?: boolean | undefined;
    } & {
        combo?: ({
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } | undefined;
            keyPositions?: number[] | undefined;
            layers?: number[] | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & {
            comboId?: string | undefined;
            slotIndex?: number | undefined;
            source?: ComboSource | undefined;
            enabled?: boolean | undefined;
            binding?: ({
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            } & { [K_5 in Exclude<keyof I_1["combo"]["binding"], keyof BehaviorBinding>]: never; }) | undefined;
            keyPositions?: (number[] & number[] & { [K_6 in Exclude<keyof I_1["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
            layers?: (number[] & number[] & { [K_7 in Exclude<keyof I_1["combo"]["layers"], keyof number[]>]: never; }) | undefined;
            timeoutMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
            slowRelease?: boolean | undefined;
            dirty?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["combo"], keyof Combo>]: never; }) | undefined;
        dirty?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof SetComboOk>]: never; }>(object: I_1): SetComboOk;
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
