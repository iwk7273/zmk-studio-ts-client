import * as _m0 from "protobufjs/minimal";
import { Request as Request2, Response as Response8 } from "./behaviors";
import { Notification as Notification15, Request as Request5, Response as Response11 } from "./combos";
import { Notification as Notification12, Request as Request1, Response as Response7 } from "./core";
import { Notification as Notification13, Request as Request3, Response as Response9 } from "./keymap";
import { Response as Response6 } from "./meta";
import { Notification as Notification14, Request as Request4, Response as Response10 } from "./meteorite";
export declare const protobufPackage = "zmk.studio";
/** Requests */
export interface Request {
    requestId: number;
    core?: Request1 | undefined;
    behaviors?: Request2 | undefined;
    keymap?: Request3 | undefined;
    meteorite?: Request4 | undefined;
    /** Fork-local provisional tag. Resolve manually if upstream assigns combos elsewhere. */
    combos?: Request5 | undefined;
}
export interface Response {
    requestResponse?: RequestResponse | undefined;
    notification?: Notification | undefined;
}
export interface RequestResponse {
    requestId: number;
    meta?: Response6 | undefined;
    core?: Response7 | undefined;
    behaviors?: Response8 | undefined;
    keymap?: Response9 | undefined;
    meteorite?: Response10 | undefined;
    /** Fork-local provisional tag. Resolve manually if upstream assigns combos elsewhere. */
    combos?: Response11 | undefined;
}
export interface Notification {
    core?: Notification12 | undefined;
    keymap?: Notification13 | undefined;
    meteorite?: Notification14 | undefined;
    /** Fork-local provisional tag. Resolve manually if upstream assigns combos elsewhere. */
    combos?: Notification15 | undefined;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        requestId?: number | undefined;
        core?: {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        meteorite?: {
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
        } | undefined;
        combos?: {
            getComboState?: boolean | undefined;
            setCombo?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        core?: ({
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } & { [K in Exclude<keyof I["core"], keyof Request1>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_1 in Exclude<keyof I["behaviors"]["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["behaviors"], keyof Request2>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            getKeymap?: boolean | undefined;
            setLayerBinding?: ({
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } & {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_3 in Exclude<keyof I["keymap"]["setLayerBinding"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["keymap"]["setLayerBinding"], keyof import("./keymap").SetLayerBindingRequest>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: ({
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & { [K_5 in Exclude<keyof I["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerRequest>]: never; }) | undefined;
            addLayer?: ({} & {} & { [K_6 in Exclude<keyof I["keymap"]["addLayer"], never>]: never; }) | undefined;
            removeLayer?: ({
                layerIndex?: number | undefined;
            } & {
                layerIndex?: number | undefined;
            } & { [K_7 in Exclude<keyof I["keymap"]["removeLayer"], "layerIndex">]: never; }) | undefined;
            restoreLayer?: ({
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & { [K_8 in Exclude<keyof I["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerRequest>]: never; }) | undefined;
            setLayerProps?: ({
                layerId?: number | undefined;
                name?: string | undefined;
            } & {
                layerId?: number | undefined;
                name?: string | undefined;
            } & { [K_9 in Exclude<keyof I["keymap"]["setLayerProps"], keyof import("./keymap").SetLayerPropsRequest>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["keymap"], keyof Request3>]: never; }) | undefined;
        meteorite?: ({
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
                } & { [K_11 in Exclude<keyof I["meteorite"]["setConfig"]["config"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["meteorite"]["setConfig"], "config">]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_13 in Exclude<keyof I["meteorite"], keyof Request4>]: never; }) | undefined;
        combos?: ({
            getComboState?: boolean | undefined;
            setCombo?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_14 in Exclude<keyof I["combos"]["setCombo"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_15 in Exclude<keyof I["combos"]["setCombo"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_16 in Exclude<keyof I["combos"]["setCombo"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_17 in Exclude<keyof I["combos"]["setCombo"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["combos"]["setCombo"], "combo">]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_19 in Exclude<keyof I["combos"], keyof Request5>]: never; }) | undefined;
    } & { [K_20 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        requestId?: number | undefined;
        core?: {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        meteorite?: {
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
        } | undefined;
        combos?: {
            getComboState?: boolean | undefined;
            setCombo?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        core?: ({
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
        } & { [K_21 in Exclude<keyof I_1["core"], keyof Request1>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_22 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I_1["behaviors"], keyof Request2>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            getKeymap?: boolean | undefined;
            setLayerBinding?: ({
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } & {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_24 in Exclude<keyof I_1["keymap"]["setLayerBinding"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I_1["keymap"]["setLayerBinding"], keyof import("./keymap").SetLayerBindingRequest>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: ({
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & { [K_26 in Exclude<keyof I_1["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerRequest>]: never; }) | undefined;
            addLayer?: ({} & {} & { [K_27 in Exclude<keyof I_1["keymap"]["addLayer"], never>]: never; }) | undefined;
            removeLayer?: ({
                layerIndex?: number | undefined;
            } & {
                layerIndex?: number | undefined;
            } & { [K_28 in Exclude<keyof I_1["keymap"]["removeLayer"], "layerIndex">]: never; }) | undefined;
            restoreLayer?: ({
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & { [K_29 in Exclude<keyof I_1["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerRequest>]: never; }) | undefined;
            setLayerProps?: ({
                layerId?: number | undefined;
                name?: string | undefined;
            } & {
                layerId?: number | undefined;
                name?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["keymap"]["setLayerProps"], keyof import("./keymap").SetLayerPropsRequest>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["keymap"], keyof Request3>]: never; }) | undefined;
        meteorite?: ({
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
                } & { [K_32 in Exclude<keyof I_1["meteorite"]["setConfig"]["config"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
            } & { [K_33 in Exclude<keyof I_1["meteorite"]["setConfig"], "config">]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_34 in Exclude<keyof I_1["meteorite"], keyof Request4>]: never; }) | undefined;
        combos?: ({
            getComboState?: boolean | undefined;
            setCombo?: {
                combo?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_35 in Exclude<keyof I_1["combos"]["setCombo"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_36 in Exclude<keyof I_1["combos"]["setCombo"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_37 in Exclude<keyof I_1["combos"]["setCombo"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_38 in Exclude<keyof I_1["combos"]["setCombo"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["combos"]["setCombo"], "combo">]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_40 in Exclude<keyof I_1["combos"], keyof Request5>]: never; }) | undefined;
    } & { [K_41 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        requestResponse?: {
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            meteorite?: {
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
            combos?: {
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
        } | undefined;
        notification?: {
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            meteorite?: {
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            combos?: {
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
            } | undefined;
        } | undefined;
    } & {
        requestResponse?: ({
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            meteorite?: {
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
            combos?: {
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
        } & {
            requestId?: number | undefined;
            meta?: ({
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & { [K in Exclude<keyof I["requestResponse"]["meta"], keyof Response6>]: never; }) | undefined;
            core?: ({
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } & {
                getDeviceInfo?: ({
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } & {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: (string[] & string[] & { [K_1 in Exclude<keyof I["requestResponse"]["core"]["getDeviceInfo"]["capabilities"], keyof string[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["requestResponse"]["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["requestResponse"]["core"], keyof Response7>]: never; }) | undefined;
            behaviors?: ({
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                listAllBehaviors?: ({
                    behaviors?: number[] | undefined;
                } & {
                    behaviors?: (number[] & number[] & { [K_4 in Exclude<keyof I["requestResponse"]["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["requestResponse"]["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
                getBehaviorDetails?: ({
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] & ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    } & {
                        param1?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_6 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_7 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_8 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_9 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_10 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                        param2?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_12 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_13 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_14 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_15 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_16 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_17 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_18 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_19 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["requestResponse"]["behaviors"], keyof Response8>]: never; }) | undefined;
            keymap?: ({
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & {
                getKeymap?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_22 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_23 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_24 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_25 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_26 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & { [K_27 in Exclude<keyof I["requestResponse"]["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: ({
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    activeLayoutIndex?: number | undefined;
                    layouts?: ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    } & {
                        name?: string | undefined;
                        keys?: ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] & ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & { [K_28 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_29 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_30 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_31 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_32 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
                setActivePhysicalLayout?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_33 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_34 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_35 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_36 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_37 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & { [K_38 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
                moveLayer?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_39 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_40 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_41 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_42 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_43 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & { [K_44 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
                addLayer?: ({
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        index?: number | undefined;
                        layer?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_45 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_46 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_47 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    } & { [K_48 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & { [K_49 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
                removeLayer?: ({
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & {
                    ok?: ({} & {} & { [K_50 in Exclude<keyof I["requestResponse"]["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & { [K_51 in Exclude<keyof I["requestResponse"]["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
                restoreLayer?: ({
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_52 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_53 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_54 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & { [K_55 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & { [K_56 in Exclude<keyof I["requestResponse"]["keymap"], keyof Response9>]: never; }) | undefined;
            meteorite?: ({
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } & {
                getConfigState?: ({
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } & {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: ({
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        } & { [K_57 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_58 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["fields"][number]["options"], keyof {
                            value?: number | undefined;
                            label?: string | undefined;
                            displayValue?: number | undefined;
                            displayLabel?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_59 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_60 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["fields"], keyof {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_61 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_62 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_63 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    encoderSlots?: ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] & ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & { [K_64 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_65 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"]["encoderSlots"], keyof {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_66 in Exclude<keyof I["requestResponse"]["meteorite"]["getConfigState"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } & { [K_67 in Exclude<keyof I["requestResponse"]["meteorite"]["saveChanges"], keyof import("./meteorite").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
            } & { [K_68 in Exclude<keyof I["requestResponse"]["meteorite"], keyof Response10>]: never; }) | undefined;
            combos?: ({
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_69 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_70 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_71 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_72 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_73 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"]["combos"], keyof {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                } & { [K_74 in Exclude<keyof I["requestResponse"]["combos"]["getComboState"], keyof import("./combos").ComboState>]: never; }) | undefined;
                setCombo?: ({
                    ok?: {
                        combo?: {
                            comboId?: string | undefined;
                            slotIndex?: number | undefined;
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } & {
                    ok?: ({
                        combo?: {
                            comboId?: string | undefined;
                            slotIndex?: number | undefined;
                            source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
                            enabled?: boolean | undefined;
                            binding?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_75 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                            keyPositions?: (number[] & number[] & { [K_76 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                            layers?: (number[] & number[] & { [K_77 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                            timeoutMs?: number | undefined;
                            requirePriorIdleMs?: number | undefined;
                            slowRelease?: boolean | undefined;
                            dirty?: boolean | undefined;
                        } & { [K_78 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"]["ok"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_79 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"]["ok"], keyof import("./combos").SetComboOk>]: never; }) | undefined;
                    err?: import("./combos").SetComboErrorCode | undefined;
                } & { [K_80 in Exclude<keyof I["requestResponse"]["combos"]["setCombo"], keyof import("./combos").SetComboResponse>]: never; }) | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } & { [K_81 in Exclude<keyof I["requestResponse"]["combos"]["saveChanges"], keyof import("./combos").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
            } & { [K_82 in Exclude<keyof I["requestResponse"]["combos"], keyof Response11>]: never; }) | undefined;
        } & { [K_83 in Exclude<keyof I["requestResponse"], keyof RequestResponse>]: never; }) | undefined;
        notification?: ({
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            meteorite?: {
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            combos?: {
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
            } | undefined;
        } & {
            core?: ({
                lockStateChanged?: import("./core").LockState | undefined;
            } & {
                lockStateChanged?: import("./core").LockState | undefined;
            } & { [K_84 in Exclude<keyof I["notification"]["core"], "lockStateChanged">]: never; }) | undefined;
            keymap?: ({
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_85 in Exclude<keyof I["notification"]["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
            meteorite?: ({
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                configStateChanged?: ({
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } & {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: ({
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        } & { [K_86 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_87 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["fields"][number]["options"], keyof {
                            value?: number | undefined;
                            label?: string | undefined;
                            displayValue?: number | undefined;
                            displayLabel?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_88 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_89 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["fields"], keyof {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_90 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_91 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_92 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    encoderSlots?: ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] & ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & { [K_93 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_94 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"]["encoderSlots"], keyof {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_95 in Exclude<keyof I["notification"]["meteorite"]["configStateChanged"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_96 in Exclude<keyof I["notification"]["meteorite"], keyof Notification14>]: never; }) | undefined;
            combos?: ({
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_97 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_98 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_99 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_100 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_101 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"]["combos"], keyof {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                } & { [K_102 in Exclude<keyof I["notification"]["combos"]["comboStateChanged"], keyof import("./combos").ComboState>]: never; }) | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_103 in Exclude<keyof I["notification"]["combos"], keyof Notification15>]: never; }) | undefined;
        } & { [K_104 in Exclude<keyof I["notification"], keyof Notification>]: never; }) | undefined;
    } & { [K_105 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        requestResponse?: {
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            meteorite?: {
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
            combos?: {
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
        } | undefined;
        notification?: {
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            meteorite?: {
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            combos?: {
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
            } | undefined;
        } | undefined;
    } & {
        requestResponse?: ({
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            meteorite?: {
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
            combos?: {
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } | undefined;
        } & {
            requestId?: number | undefined;
            meta?: ({
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & { [K_106 in Exclude<keyof I_1["requestResponse"]["meta"], keyof Response6>]: never; }) | undefined;
            core?: ({
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } & {
                getDeviceInfo?: ({
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: string[] | undefined;
                } & {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                    capabilities?: (string[] & string[] & { [K_107 in Exclude<keyof I_1["requestResponse"]["core"]["getDeviceInfo"]["capabilities"], keyof string[]>]: never; }) | undefined;
                } & { [K_108 in Exclude<keyof I_1["requestResponse"]["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
            } & { [K_109 in Exclude<keyof I_1["requestResponse"]["core"], keyof Response7>]: never; }) | undefined;
            behaviors?: ({
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                listAllBehaviors?: ({
                    behaviors?: number[] | undefined;
                } & {
                    behaviors?: (number[] & number[] & { [K_110 in Exclude<keyof I_1["requestResponse"]["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
                } & { [K_111 in Exclude<keyof I_1["requestResponse"]["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
                getBehaviorDetails?: ({
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] & ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    } & {
                        param1?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_112 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_113 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_114 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_115 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_116 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_117 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                        param2?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_118 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_119 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_120 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_121 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_122 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_123 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_124 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_125 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_126 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
            } & { [K_127 in Exclude<keyof I_1["requestResponse"]["behaviors"], keyof Response8>]: never; }) | undefined;
            keymap?: ({
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & {
                getKeymap?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_128 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_129 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_130 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_131 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_132 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & { [K_133 in Exclude<keyof I_1["requestResponse"]["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: ({
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    activeLayoutIndex?: number | undefined;
                    layouts?: ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    } & {
                        name?: string | undefined;
                        keys?: ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] & ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & { [K_134 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_135 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_136 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_137 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
                setActivePhysicalLayout?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_139 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_140 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_141 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_142 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_143 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & { [K_144 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
                moveLayer?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_145 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_146 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_147 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_148 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_149 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & { [K_150 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
                addLayer?: ({
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        index?: number | undefined;
                        layer?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_151 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_152 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_153 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    } & { [K_154 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & { [K_155 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
                removeLayer?: ({
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & {
                    ok?: ({} & {} & { [K_156 in Exclude<keyof I_1["requestResponse"]["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & { [K_157 in Exclude<keyof I_1["requestResponse"]["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
                restoreLayer?: ({
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_158 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_159 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_160 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & { [K_161 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & { [K_162 in Exclude<keyof I_1["requestResponse"]["keymap"], keyof Response9>]: never; }) | undefined;
            meteorite?: ({
                getConfigState?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
            } & {
                getConfigState?: ({
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } & {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: ({
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        } & { [K_163 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_164 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["fields"][number]["options"], keyof {
                            value?: number | undefined;
                            label?: string | undefined;
                            displayValue?: number | undefined;
                            displayLabel?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_165 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_166 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["fields"], keyof {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_167 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_168 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_169 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    encoderSlots?: ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] & ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & { [K_170 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_171 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"]["encoderSlots"], keyof {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_172 in Exclude<keyof I_1["requestResponse"]["meteorite"]["getConfigState"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
                setConfig?: import("./meteorite").SetConfigResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./meteorite").SaveChangesErrorCode | undefined;
                } & { [K_173 in Exclude<keyof I_1["requestResponse"]["meteorite"]["saveChanges"], keyof import("./meteorite").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
            } & { [K_174 in Exclude<keyof I_1["requestResponse"]["meteorite"], keyof Response10>]: never; }) | undefined;
            combos?: ({
                getComboState?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_175 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_176 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_177 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_178 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_179 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"]["combos"], keyof {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                } & { [K_180 in Exclude<keyof I_1["requestResponse"]["combos"]["getComboState"], keyof import("./combos").ComboState>]: never; }) | undefined;
                setCombo?: ({
                    ok?: {
                        combo?: {
                            comboId?: string | undefined;
                            slotIndex?: number | undefined;
                            source?: import("./combos").ComboSource | undefined;
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
                    err?: import("./combos").SetComboErrorCode | undefined;
                } & {
                    ok?: ({
                        combo?: {
                            comboId?: string | undefined;
                            slotIndex?: number | undefined;
                            source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
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
                            source?: import("./combos").ComboSource | undefined;
                            enabled?: boolean | undefined;
                            binding?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_181 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                            keyPositions?: (number[] & number[] & { [K_182 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                            layers?: (number[] & number[] & { [K_183 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                            timeoutMs?: number | undefined;
                            requirePriorIdleMs?: number | undefined;
                            slowRelease?: boolean | undefined;
                            dirty?: boolean | undefined;
                        } & { [K_184 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"]["ok"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_185 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"]["ok"], keyof import("./combos").SetComboOk>]: never; }) | undefined;
                    err?: import("./combos").SetComboErrorCode | undefined;
                } & { [K_186 in Exclude<keyof I_1["requestResponse"]["combos"]["setCombo"], keyof import("./combos").SetComboResponse>]: never; }) | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./combos").SaveChangesErrorCode | undefined;
                } & { [K_187 in Exclude<keyof I_1["requestResponse"]["combos"]["saveChanges"], keyof import("./combos").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
            } & { [K_188 in Exclude<keyof I_1["requestResponse"]["combos"], keyof Response11>]: never; }) | undefined;
        } & { [K_189 in Exclude<keyof I_1["requestResponse"], keyof RequestResponse>]: never; }) | undefined;
        notification?: ({
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            meteorite?: {
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            combos?: {
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
            } | undefined;
        } & {
            core?: ({
                lockStateChanged?: import("./core").LockState | undefined;
            } & {
                lockStateChanged?: import("./core").LockState | undefined;
            } & { [K_190 in Exclude<keyof I_1["notification"]["core"], "lockStateChanged">]: never; }) | undefined;
            keymap?: ({
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_191 in Exclude<keyof I_1["notification"]["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
            meteorite?: ({
                configStateChanged?: {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                configStateChanged?: ({
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    encoderSlots?: {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] | undefined;
                } & {
                    schemaVersion?: number | undefined;
                    firmwareFeatureVersion?: string | undefined;
                    fields?: ({
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                        } & { [K_192 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_193 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["fields"][number]["options"], keyof {
                            value?: number | undefined;
                            label?: string | undefined;
                            displayValue?: number | undefined;
                            displayLabel?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_194 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_195 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["fields"], keyof {
                        id?: string | undefined;
                        label?: string | undefined;
                        kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_196 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_197 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                    } & { [K_198 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                    encoderSlots?: ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[] & ({
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    } & { [K_199 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_200 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"]["encoderSlots"], keyof {
                        position?: number | undefined;
                        side?: import("./meteorite").EncoderSide | undefined;
                        direction?: import("./meteorite").EncoderDirection | undefined;
                        label?: string | undefined;
                        sensorIndex?: number | undefined;
                        slotOffset?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_201 in Exclude<keyof I_1["notification"]["meteorite"]["configStateChanged"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_202 in Exclude<keyof I_1["notification"]["meteorite"], keyof Notification14>]: never; }) | undefined;
            combos?: ({
                comboStateChanged?: {
                    schemaVersion?: number | undefined;
                    maxCombos?: number | undefined;
                    maxKeysPerCombo?: number | undefined;
                    combos?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_203 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_204 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_205 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_206 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_207 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"]["combos"], keyof {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                } & { [K_208 in Exclude<keyof I_1["notification"]["combos"]["comboStateChanged"], keyof import("./combos").ComboState>]: never; }) | undefined;
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_209 in Exclude<keyof I_1["notification"]["combos"], keyof Notification15>]: never; }) | undefined;
        } & { [K_210 in Exclude<keyof I_1["notification"], keyof Notification>]: never; }) | undefined;
    } & { [K_211 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const RequestResponse: {
    encode(message: RequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestResponse;
    fromJSON(object: any): RequestResponse;
    toJSON(message: RequestResponse): unknown;
    create<I extends {
        requestId?: number | undefined;
        meta?: {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } | undefined;
        core?: {
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } | undefined;
        meteorite?: {
            getConfigState?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } | undefined;
        combos?: {
            getComboState?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } | undefined;
    } & {
        requestId?: number | undefined;
        meta?: ({
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & { [K in Exclude<keyof I["meta"], keyof Response6>]: never; }) | undefined;
        core?: ({
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: ({
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } & {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: (string[] & string[] & { [K_1 in Exclude<keyof I["core"]["getDeviceInfo"]["capabilities"], keyof string[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["core"], keyof Response7>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: ({
                behaviors?: number[] | undefined;
            } & {
                behaviors?: (number[] & number[] & { [K_4 in Exclude<keyof I["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
            getBehaviorDetails?: ({
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] & ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                } & {
                    param1?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_6 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_7 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_8 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_9 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                    param2?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_12 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_13 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_14 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_15 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_16 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_17 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_19 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I["behaviors"], keyof Response8>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & {
            getKeymap?: ({
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & {
                layers?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_22 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_23 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_24 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_25 in Exclude<keyof I["keymap"]["getKeymap"]["layers"], keyof {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & { [K_26 in Exclude<keyof I["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & { [K_27 in Exclude<keyof I["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: ({
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                activeLayoutIndex?: number | undefined;
                layouts?: ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                } & {
                    name?: string | undefined;
                    keys?: ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] & ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & { [K_28 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_29 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_30 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_31 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
            setActivePhysicalLayout?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_33 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_34 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_35 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_36 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_37 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & { [K_38 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
            moveLayer?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_39 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_40 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_41 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_42 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_43 in Exclude<keyof I["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & { [K_44 in Exclude<keyof I["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
            addLayer?: ({
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & {
                ok?: ({
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    index?: number | undefined;
                    layer?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_45 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_46 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_47 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                } & { [K_48 in Exclude<keyof I["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & { [K_49 in Exclude<keyof I["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
            removeLayer?: ({
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & {
                ok?: ({} & {} & { [K_50 in Exclude<keyof I["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & { [K_51 in Exclude<keyof I["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
            restoreLayer?: ({
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & {
                ok?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_52 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_53 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_54 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & { [K_55 in Exclude<keyof I["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & { [K_56 in Exclude<keyof I["keymap"], keyof Response9>]: never; }) | undefined;
        meteorite?: ({
            getConfigState?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } & {
            getConfigState?: ({
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } & {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: ({
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_57 in Exclude<keyof I["meteorite"]["getConfigState"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_58 in Exclude<keyof I["meteorite"]["getConfigState"]["fields"][number]["options"], keyof {
                        value?: number | undefined;
                        label?: string | undefined;
                        displayValue?: number | undefined;
                        displayLabel?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I["meteorite"]["getConfigState"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_60 in Exclude<keyof I["meteorite"]["getConfigState"]["fields"], keyof {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                } & { [K_61 in Exclude<keyof I["meteorite"]["getConfigState"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_62 in Exclude<keyof I["meteorite"]["getConfigState"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_63 in Exclude<keyof I["meteorite"]["getConfigState"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                dirty?: boolean | undefined;
                encoderSlots?: ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] & ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & { [K_64 in Exclude<keyof I["meteorite"]["getConfigState"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_65 in Exclude<keyof I["meteorite"]["getConfigState"]["encoderSlots"], keyof {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_66 in Exclude<keyof I["meteorite"]["getConfigState"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } & { [K_67 in Exclude<keyof I["meteorite"]["saveChanges"], keyof import("./meteorite").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_68 in Exclude<keyof I["meteorite"], keyof Response10>]: never; }) | undefined;
        combos?: ({
            getComboState?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_69 in Exclude<keyof I["combos"]["getComboState"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_70 in Exclude<keyof I["combos"]["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_71 in Exclude<keyof I["combos"]["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_72 in Exclude<keyof I["combos"]["getComboState"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_73 in Exclude<keyof I["combos"]["getComboState"]["combos"], keyof {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
            } & { [K_74 in Exclude<keyof I["combos"]["getComboState"], keyof import("./combos").ComboState>]: never; }) | undefined;
            setCombo?: ({
                ok?: {
                    combo?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } & {
                ok?: ({
                    combo?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_75 in Exclude<keyof I["combos"]["setCombo"]["ok"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_76 in Exclude<keyof I["combos"]["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_77 in Exclude<keyof I["combos"]["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_78 in Exclude<keyof I["combos"]["setCombo"]["ok"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                } & { [K_79 in Exclude<keyof I["combos"]["setCombo"]["ok"], keyof import("./combos").SetComboOk>]: never; }) | undefined;
                err?: import("./combos").SetComboErrorCode | undefined;
            } & { [K_80 in Exclude<keyof I["combos"]["setCombo"], keyof import("./combos").SetComboResponse>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } & { [K_81 in Exclude<keyof I["combos"]["saveChanges"], keyof import("./combos").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_82 in Exclude<keyof I["combos"], keyof Response11>]: never; }) | undefined;
    } & { [K_83 in Exclude<keyof I, keyof RequestResponse>]: never; }>(base?: I | undefined): RequestResponse;
    fromPartial<I_1 extends {
        requestId?: number | undefined;
        meta?: {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } | undefined;
        core?: {
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } | undefined;
        meteorite?: {
            getConfigState?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } | undefined;
        combos?: {
            getComboState?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } | undefined;
    } & {
        requestId?: number | undefined;
        meta?: ({
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & { [K_84 in Exclude<keyof I_1["meta"], keyof Response6>]: never; }) | undefined;
        core?: ({
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: ({
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: string[] | undefined;
            } & {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
                capabilities?: (string[] & string[] & { [K_85 in Exclude<keyof I_1["core"]["getDeviceInfo"]["capabilities"], keyof string[]>]: never; }) | undefined;
            } & { [K_86 in Exclude<keyof I_1["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
        } & { [K_87 in Exclude<keyof I_1["core"], keyof Response7>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: ({
                behaviors?: number[] | undefined;
            } & {
                behaviors?: (number[] & number[] & { [K_88 in Exclude<keyof I_1["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
            } & { [K_89 in Exclude<keyof I_1["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
            getBehaviorDetails?: ({
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] & ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                } & {
                    param1?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_90 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_91 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_92 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_93 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_94 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_95 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                    param2?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_96 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_97 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_98 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_99 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_100 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_101 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_102 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_103 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_104 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
        } & { [K_105 in Exclude<keyof I_1["behaviors"], keyof Response8>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & {
            getKeymap?: ({
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & {
                layers?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_106 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_107 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_108 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_109 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"], keyof {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & { [K_110 in Exclude<keyof I_1["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & { [K_111 in Exclude<keyof I_1["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: ({
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                activeLayoutIndex?: number | undefined;
                layouts?: ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                } & {
                    name?: string | undefined;
                    keys?: ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] & ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & { [K_112 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_113 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_114 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_115 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_116 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
            setActivePhysicalLayout?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_117 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_118 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_119 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_120 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_121 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & { [K_122 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
            moveLayer?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_123 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_124 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_125 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_126 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_127 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & { [K_128 in Exclude<keyof I_1["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
            addLayer?: ({
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & {
                ok?: ({
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    index?: number | undefined;
                    layer?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_129 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_130 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_131 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                } & { [K_132 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & { [K_133 in Exclude<keyof I_1["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
            removeLayer?: ({
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & {
                ok?: ({} & {} & { [K_134 in Exclude<keyof I_1["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & { [K_135 in Exclude<keyof I_1["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
            restoreLayer?: ({
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & {
                ok?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_136 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_137 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & { [K_139 in Exclude<keyof I_1["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & { [K_140 in Exclude<keyof I_1["keymap"], keyof Response9>]: never; }) | undefined;
        meteorite?: ({
            getConfigState?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
        } & {
            getConfigState?: ({
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } & {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: ({
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_141 in Exclude<keyof I_1["meteorite"]["getConfigState"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_142 in Exclude<keyof I_1["meteorite"]["getConfigState"]["fields"][number]["options"], keyof {
                        value?: number | undefined;
                        label?: string | undefined;
                        displayValue?: number | undefined;
                        displayLabel?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_143 in Exclude<keyof I_1["meteorite"]["getConfigState"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_144 in Exclude<keyof I_1["meteorite"]["getConfigState"]["fields"], keyof {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                } & { [K_145 in Exclude<keyof I_1["meteorite"]["getConfigState"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_146 in Exclude<keyof I_1["meteorite"]["getConfigState"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_147 in Exclude<keyof I_1["meteorite"]["getConfigState"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                dirty?: boolean | undefined;
                encoderSlots?: ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] & ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & { [K_148 in Exclude<keyof I_1["meteorite"]["getConfigState"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_149 in Exclude<keyof I_1["meteorite"]["getConfigState"]["encoderSlots"], keyof {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_150 in Exclude<keyof I_1["meteorite"]["getConfigState"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
            setConfig?: import("./meteorite").SetConfigResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./meteorite").SaveChangesErrorCode | undefined;
            } & { [K_151 in Exclude<keyof I_1["meteorite"]["saveChanges"], keyof import("./meteorite").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_152 in Exclude<keyof I_1["meteorite"], keyof Response10>]: never; }) | undefined;
        combos?: ({
            getComboState?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_153 in Exclude<keyof I_1["combos"]["getComboState"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_154 in Exclude<keyof I_1["combos"]["getComboState"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_155 in Exclude<keyof I_1["combos"]["getComboState"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_156 in Exclude<keyof I_1["combos"]["getComboState"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_157 in Exclude<keyof I_1["combos"]["getComboState"]["combos"], keyof {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
            } & { [K_158 in Exclude<keyof I_1["combos"]["getComboState"], keyof import("./combos").ComboState>]: never; }) | undefined;
            setCombo?: ({
                ok?: {
                    combo?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                err?: import("./combos").SetComboErrorCode | undefined;
            } & {
                ok?: ({
                    combo?: {
                        comboId?: string | undefined;
                        slotIndex?: number | undefined;
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
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
                        source?: import("./combos").ComboSource | undefined;
                        enabled?: boolean | undefined;
                        binding?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_159 in Exclude<keyof I_1["combos"]["setCombo"]["ok"]["combo"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                        keyPositions?: (number[] & number[] & { [K_160 in Exclude<keyof I_1["combos"]["setCombo"]["ok"]["combo"]["keyPositions"], keyof number[]>]: never; }) | undefined;
                        layers?: (number[] & number[] & { [K_161 in Exclude<keyof I_1["combos"]["setCombo"]["ok"]["combo"]["layers"], keyof number[]>]: never; }) | undefined;
                        timeoutMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                        slowRelease?: boolean | undefined;
                        dirty?: boolean | undefined;
                    } & { [K_162 in Exclude<keyof I_1["combos"]["setCombo"]["ok"]["combo"], keyof import("./combos").Combo>]: never; }) | undefined;
                    dirty?: boolean | undefined;
                } & { [K_163 in Exclude<keyof I_1["combos"]["setCombo"]["ok"], keyof import("./combos").SetComboOk>]: never; }) | undefined;
                err?: import("./combos").SetComboErrorCode | undefined;
            } & { [K_164 in Exclude<keyof I_1["combos"]["setCombo"], keyof import("./combos").SetComboResponse>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./combos").SaveChangesErrorCode | undefined;
            } & { [K_165 in Exclude<keyof I_1["combos"]["saveChanges"], keyof import("./combos").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
        } & { [K_166 in Exclude<keyof I_1["combos"], keyof Response11>]: never; }) | undefined;
    } & { [K_167 in Exclude<keyof I_1, keyof RequestResponse>]: never; }>(object: I_1): RequestResponse;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        core?: {
            lockStateChanged?: import("./core").LockState | undefined;
        } | undefined;
        keymap?: {
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        meteorite?: {
            configStateChanged?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        combos?: {
            comboStateChanged?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
        } | undefined;
    } & {
        core?: ({
            lockStateChanged?: import("./core").LockState | undefined;
        } & {
            lockStateChanged?: import("./core").LockState | undefined;
        } & { [K in Exclude<keyof I["core"], "lockStateChanged">]: never; }) | undefined;
        keymap?: ({
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
        meteorite?: ({
            configStateChanged?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            configStateChanged?: ({
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } & {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: ({
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_2 in Exclude<keyof I["meteorite"]["configStateChanged"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_3 in Exclude<keyof I["meteorite"]["configStateChanged"]["fields"][number]["options"], keyof {
                        value?: number | undefined;
                        label?: string | undefined;
                        displayValue?: number | undefined;
                        displayLabel?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["meteorite"]["configStateChanged"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_5 in Exclude<keyof I["meteorite"]["configStateChanged"]["fields"], keyof {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                } & { [K_6 in Exclude<keyof I["meteorite"]["configStateChanged"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_7 in Exclude<keyof I["meteorite"]["configStateChanged"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_8 in Exclude<keyof I["meteorite"]["configStateChanged"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                dirty?: boolean | undefined;
                encoderSlots?: ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] & ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & { [K_9 in Exclude<keyof I["meteorite"]["configStateChanged"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_10 in Exclude<keyof I["meteorite"]["configStateChanged"]["encoderSlots"], keyof {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["meteorite"]["configStateChanged"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_12 in Exclude<keyof I["meteorite"], keyof Notification14>]: never; }) | undefined;
        combos?: ({
            comboStateChanged?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_13 in Exclude<keyof I["combos"]["comboStateChanged"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_14 in Exclude<keyof I["combos"]["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_15 in Exclude<keyof I["combos"]["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_16 in Exclude<keyof I["combos"]["comboStateChanged"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_17 in Exclude<keyof I["combos"]["comboStateChanged"]["combos"], keyof {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
            } & { [K_18 in Exclude<keyof I["combos"]["comboStateChanged"], keyof import("./combos").ComboState>]: never; }) | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_19 in Exclude<keyof I["combos"], keyof Notification15>]: never; }) | undefined;
    } & { [K_20 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        core?: {
            lockStateChanged?: import("./core").LockState | undefined;
        } | undefined;
        keymap?: {
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        meteorite?: {
            configStateChanged?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        combos?: {
            comboStateChanged?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
        } | undefined;
    } & {
        core?: ({
            lockStateChanged?: import("./core").LockState | undefined;
        } & {
            lockStateChanged?: import("./core").LockState | undefined;
        } & { [K_21 in Exclude<keyof I_1["core"], "lockStateChanged">]: never; }) | undefined;
        keymap?: ({
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_22 in Exclude<keyof I_1["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
        meteorite?: ({
            configStateChanged?: {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            configStateChanged?: ({
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                encoderSlots?: {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] | undefined;
            } & {
                schemaVersion?: number | undefined;
                firmwareFeatureVersion?: string | undefined;
                fields?: ({
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                    } & { [K_23 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["fields"][number]["options"][number], keyof import("./meteorite").ConfigFieldOption>]: never; })[] & { [K_24 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["fields"][number]["options"], keyof {
                        value?: number | undefined;
                        label?: string | undefined;
                        displayValue?: number | undefined;
                        displayLabel?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["fields"][number], keyof import("./meteorite").ConfigField>]: never; })[] & { [K_26 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["fields"], keyof {
                    id?: string | undefined;
                    label?: string | undefined;
                    kind?: import("./meteorite").ConfigFieldKind | undefined;
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
                } & { [K_27 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["current"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_28 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["saved"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
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
                } & { [K_29 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["defaults"], keyof import("./meteorite").ConfigValues>]: never; }) | undefined;
                dirty?: boolean | undefined;
                encoderSlots?: ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[] & ({
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                } & { [K_30 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["encoderSlots"][number], keyof import("./meteorite").EncoderSlot>]: never; })[] & { [K_31 in Exclude<keyof I_1["meteorite"]["configStateChanged"]["encoderSlots"], keyof {
                    position?: number | undefined;
                    side?: import("./meteorite").EncoderSide | undefined;
                    direction?: import("./meteorite").EncoderDirection | undefined;
                    label?: string | undefined;
                    sensorIndex?: number | undefined;
                    slotOffset?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I_1["meteorite"]["configStateChanged"], keyof import("./meteorite").ConfigState>]: never; }) | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_33 in Exclude<keyof I_1["meteorite"], keyof Notification14>]: never; }) | undefined;
        combos?: ({
            comboStateChanged?: {
                schemaVersion?: number | undefined;
                maxCombos?: number | undefined;
                maxKeysPerCombo?: number | undefined;
                combos?: {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
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
                    source?: import("./combos").ComboSource | undefined;
                    enabled?: boolean | undefined;
                    binding?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_34 in Exclude<keyof I_1["combos"]["comboStateChanged"]["combos"][number]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
                    keyPositions?: (number[] & number[] & { [K_35 in Exclude<keyof I_1["combos"]["comboStateChanged"]["combos"][number]["keyPositions"], keyof number[]>]: never; }) | undefined;
                    layers?: (number[] & number[] & { [K_36 in Exclude<keyof I_1["combos"]["comboStateChanged"]["combos"][number]["layers"], keyof number[]>]: never; }) | undefined;
                    timeoutMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                    slowRelease?: boolean | undefined;
                    dirty?: boolean | undefined;
                } & { [K_37 in Exclude<keyof I_1["combos"]["comboStateChanged"]["combos"][number], keyof import("./combos").Combo>]: never; })[] & { [K_38 in Exclude<keyof I_1["combos"]["comboStateChanged"]["combos"], keyof {
                    comboId?: string | undefined;
                    slotIndex?: number | undefined;
                    source?: import("./combos").ComboSource | undefined;
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
            } & { [K_39 in Exclude<keyof I_1["combos"]["comboStateChanged"], keyof import("./combos").ComboState>]: never; }) | undefined;
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_40 in Exclude<keyof I_1["combos"], keyof Notification15>]: never; }) | undefined;
    } & { [K_41 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
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
