import * as _m0 from "protobufjs/minimal";
import { BehaviorBinding } from "./keymap";
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
export declare enum PointerProfile {
    POINTER_PROFILE_STANDARD = 0,
    POINTER_PROFILE_STABLE = 1,
    POINTER_PROFILE_RESPONSIVE = 2,
    POINTER_PROFILE_WIDE = 3,
    UNRECOGNIZED = -1
}
export declare function pointerProfileFromJSON(object: any): PointerProfile;
export declare function pointerProfileToJSON(object: PointerProfile): string;
export declare enum HoldTapFlavor {
    HOLD_TAP_FLAVOR_HOLD_PREFERRED = 0,
    HOLD_TAP_FLAVOR_BALANCED = 1,
    HOLD_TAP_FLAVOR_TAP_PREFERRED = 2,
    HOLD_TAP_FLAVOR_TAP_UNLESS_INTERRUPTED = 3,
    UNRECOGNIZED = -1
}
export declare function holdTapFlavorFromJSON(object: any): HoldTapFlavor;
export declare function holdTapFlavorToJSON(object: HoldTapFlavor): string;
/**
 * Ball Profile assigned per keymap layer.
 * APP is a reserved value (hidden in the v1 UI).
 */
export declare enum BallProfile {
    BALL_PROFILE_OFF = 0,
    BALL_PROFILE_SCROLL = 1,
    BALL_PROFILE_BROWSER = 2,
    BALL_PROFILE_DESKTOP = 3,
    BALL_PROFILE_WINDOW = 4,
    BALL_PROFILE_APP = 5,
    BALL_PROFILE_USER1 = 6,
    UNRECOGNIZED = -1
}
export declare function ballProfileFromJSON(object: any): BallProfile;
export declare function ballProfileToJSON(object: BallProfile): string;
/**
 * Shared accumulation threshold for all action profiles. Higher = less
 * sensitive (needs a larger flick before one action fires).
 *
 * The enum integer values are in sensitivity order (VERY_LIGHT most sensitive
 * .. VERY_HEAVY least), so a slider can map its position directly to the value.
 * Any future level must be appended at the end (>= 5) to keep saved configs
 * stable; do not renumber these.
 */
export declare enum BallSensitivity {
    /** BALL_SENSITIVITY_VERY_LIGHT - most sensitive (smallest flick) */
    BALL_SENSITIVITY_VERY_LIGHT = 0,
    BALL_SENSITIVITY_LIGHT = 1,
    BALL_SENSITIVITY_NORMAL = 2,
    BALL_SENSITIVITY_HEAVY = 3,
    /** BALL_SENSITIVITY_VERY_HEAVY - least sensitive (largest flick) */
    BALL_SENSITIVITY_VERY_HEAVY = 4,
    UNRECOGNIZED = -1
}
export declare function ballSensitivityFromJSON(object: any): BallSensitivity;
export declare function ballSensitivityToJSON(object: BallSensitivity): string;
export declare enum BallDirection {
    BALL_DIRECTION_LEFT = 0,
    BALL_DIRECTION_RIGHT = 1,
    BALL_DIRECTION_UP = 2,
    BALL_DIRECTION_DOWN = 3,
    UNRECOGNIZED = -1
}
export declare function ballDirectionFromJSON(object: any): BallDirection;
export declare function ballDirectionToJSON(object: BallDirection): string;
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
    /**
     * Build version of the flashed firmware artifact (zmk-config-meteorite40
     * release version). Empty when the firmware predates this field.
     */
    firmwareBuildVersion: string;
}
export interface PointerConfig {
    profile: PointerProfile;
}
export interface ConfigValues {
    cpiIdx: number;
    scrollDiv: number;
    rotationIdx: number;
    scrollHRev: number;
    scrollVRev: number;
    scalingMode: number;
    scrollScalingMode: number;
    /**
     * Frozen for backward compatibility. No longer used for routing; superseded
     * by ball_config.layer_profiles (migrated to a SCROLL profile). Always
     * reported at defaults.
     */
    scrollLayer1: number;
    scrollLayer2: number;
    osMode: number;
    /**
     * Optional. Absence (no submessage presence) means "preserve existing ball
     * state", so an older client that does not know about ball profiles can
     * still set the scalar values without clobbering ball_config.
     */
    ballConfig: BallConfig | undefined;
    /**
     * Optional. Absence means "preserve existing timing state", so an older
     * client can still update the original custom-config fields without
     * resetting the user-selected tapping and power timings.
     */
    timingConfig: TimingConfig | undefined;
    /**
     * Optional. Absence means "preserve the existing pointer profile", so an
     * older client can update the original custom-config fields without
     * resetting the user-selected pointer profile.
     */
    pointerConfig: PointerConfig | undefined;
}
/**
 * Keyboard behavior and power-management timings. All values are stored in
 * user-facing units: tapping terms in milliseconds and power timeouts in
 * seconds. A timeout value of 0 disables that automatic transition.
 */
export interface TimingConfig {
    modTapTappingTermMs: number;
    layerTapTappingTermMs: number;
    idleTimeoutS: number;
    idleSleepTimeoutS: number;
    /**
     * Optional profile messages preserve these settings when an older client,
     * which only knows fields 1-4, updates TimingConfig.
     */
    modTap: HoldTapConfig | undefined;
    layerTap: HoldTapConfig | undefined;
}
export interface HoldTapConfig {
    flavor: HoldTapFlavor;
    /** 0 disables the corresponding timing feature. */
    quickTapMs: number;
    requirePriorIdleMs: number;
}
export interface BallConfig {
    /** Indexed by keymap layer index. Fixed max_count 16 (see meteorite.options). */
    layerProfiles: BallProfile[];
    /**
     * Shared threshold for all action profiles. Firmware always populates this
     * explicitly (do not rely on the proto3 zero-default).
     */
    sensitivity: BallSensitivity;
    /** Indexed by BallDirection (LEFT, RIGHT, UP, DOWN). Fixed max_count 4. */
    user1Bindings: BehaviorBinding[];
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K in Exclude<keyof I["setConfig"]["config"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_1 in Exclude<keyof I["setConfig"]["config"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_2 in Exclude<keyof I["setConfig"]["config"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["setConfig"]["config"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_4 in Exclude<keyof I["setConfig"]["config"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_5 in Exclude<keyof I["setConfig"]["config"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["setConfig"]["config"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_7 in Exclude<keyof I["setConfig"]["config"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["setConfig"]["config"], keyof ConfigValues>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["setConfig"], "config">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_10 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_11 in Exclude<keyof I_1["setConfig"]["config"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_12 in Exclude<keyof I_1["setConfig"]["config"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_13 in Exclude<keyof I_1["setConfig"]["config"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I_1["setConfig"]["config"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_15 in Exclude<keyof I_1["setConfig"]["config"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_16 in Exclude<keyof I_1["setConfig"]["config"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I_1["setConfig"]["config"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_18 in Exclude<keyof I_1["setConfig"]["config"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["setConfig"]["config"], keyof ConfigValues>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I_1["setConfig"], "config">]: never; }) | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: boolean | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_4 in Exclude<keyof I["getConfigState"]["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_5 in Exclude<keyof I["getConfigState"]["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_6 in Exclude<keyof I["getConfigState"]["current"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["getConfigState"]["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_8 in Exclude<keyof I["getConfigState"]["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_9 in Exclude<keyof I["getConfigState"]["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["getConfigState"]["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_11 in Exclude<keyof I["getConfigState"]["current"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["getConfigState"]["current"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_13 in Exclude<keyof I["getConfigState"]["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_14 in Exclude<keyof I["getConfigState"]["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_15 in Exclude<keyof I["getConfigState"]["saved"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["getConfigState"]["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_17 in Exclude<keyof I["getConfigState"]["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_18 in Exclude<keyof I["getConfigState"]["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["getConfigState"]["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_20 in Exclude<keyof I["getConfigState"]["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["getConfigState"]["saved"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_22 in Exclude<keyof I["getConfigState"]["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_23 in Exclude<keyof I["getConfigState"]["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_24 in Exclude<keyof I["getConfigState"]["defaults"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I["getConfigState"]["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_26 in Exclude<keyof I["getConfigState"]["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_27 in Exclude<keyof I["getConfigState"]["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["getConfigState"]["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_29 in Exclude<keyof I["getConfigState"]["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I["getConfigState"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
        } & { [K_31 in Exclude<keyof I["getConfigState"], keyof ConfigState>]: never; }) | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_32 in Exclude<keyof I["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_33 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                } & { [K_34 in Exclude<keyof I_1["getConfigState"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_35 in Exclude<keyof I_1["getConfigState"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I_1["getConfigState"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_37 in Exclude<keyof I_1["getConfigState"]["fields"], keyof {
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_38 in Exclude<keyof I_1["getConfigState"]["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_39 in Exclude<keyof I_1["getConfigState"]["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_40 in Exclude<keyof I_1["getConfigState"]["current"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_41 in Exclude<keyof I_1["getConfigState"]["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_42 in Exclude<keyof I_1["getConfigState"]["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_43 in Exclude<keyof I_1["getConfigState"]["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_44 in Exclude<keyof I_1["getConfigState"]["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_45 in Exclude<keyof I_1["getConfigState"]["current"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I_1["getConfigState"]["current"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_47 in Exclude<keyof I_1["getConfigState"]["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_48 in Exclude<keyof I_1["getConfigState"]["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_49 in Exclude<keyof I_1["getConfigState"]["saved"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I_1["getConfigState"]["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_51 in Exclude<keyof I_1["getConfigState"]["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_52 in Exclude<keyof I_1["getConfigState"]["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I_1["getConfigState"]["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_54 in Exclude<keyof I_1["getConfigState"]["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I_1["getConfigState"]["saved"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_56 in Exclude<keyof I_1["getConfigState"]["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_57 in Exclude<keyof I_1["getConfigState"]["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_58 in Exclude<keyof I_1["getConfigState"]["defaults"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I_1["getConfigState"]["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_60 in Exclude<keyof I_1["getConfigState"]["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_61 in Exclude<keyof I_1["getConfigState"]["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_62 in Exclude<keyof I_1["getConfigState"]["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_63 in Exclude<keyof I_1["getConfigState"]["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_64 in Exclude<keyof I_1["getConfigState"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
        } & { [K_65 in Exclude<keyof I_1["getConfigState"], keyof ConfigState>]: never; }) | undefined;
        setConfig?: SetConfigResponse | undefined;
        checkUnsavedChanges?: boolean | undefined;
        saveChanges?: ({
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & {
            ok?: boolean | undefined;
            err?: SaveChangesErrorCode | undefined;
        } & { [K_66 in Exclude<keyof I_1["saveChanges"], keyof SaveChangesResponse>]: never; }) | undefined;
        discardChanges?: boolean | undefined;
    } & { [K_67 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_4 in Exclude<keyof I["configStateChanged"]["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_5 in Exclude<keyof I["configStateChanged"]["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_6 in Exclude<keyof I["configStateChanged"]["current"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["configStateChanged"]["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_8 in Exclude<keyof I["configStateChanged"]["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_9 in Exclude<keyof I["configStateChanged"]["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["configStateChanged"]["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_11 in Exclude<keyof I["configStateChanged"]["current"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["configStateChanged"]["current"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_13 in Exclude<keyof I["configStateChanged"]["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_14 in Exclude<keyof I["configStateChanged"]["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_15 in Exclude<keyof I["configStateChanged"]["saved"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["configStateChanged"]["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_17 in Exclude<keyof I["configStateChanged"]["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_18 in Exclude<keyof I["configStateChanged"]["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["configStateChanged"]["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_20 in Exclude<keyof I["configStateChanged"]["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["configStateChanged"]["saved"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_22 in Exclude<keyof I["configStateChanged"]["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_23 in Exclude<keyof I["configStateChanged"]["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_24 in Exclude<keyof I["configStateChanged"]["defaults"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I["configStateChanged"]["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_26 in Exclude<keyof I["configStateChanged"]["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_27 in Exclude<keyof I["configStateChanged"]["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["configStateChanged"]["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_29 in Exclude<keyof I["configStateChanged"]["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I["configStateChanged"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
        } & { [K_31 in Exclude<keyof I["configStateChanged"], keyof ConfigState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_32 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
            } | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
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
                } & { [K_33 in Exclude<keyof I_1["configStateChanged"]["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_34 in Exclude<keyof I_1["configStateChanged"]["fields"][number]["options"], keyof {
                    value?: number | undefined;
                    label?: string | undefined;
                    displayValue?: number | undefined;
                    displayLabel?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["configStateChanged"]["fields"][number], keyof ConfigField>]: never; })[] & { [K_36 in Exclude<keyof I_1["configStateChanged"]["fields"], keyof {
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_37 in Exclude<keyof I_1["configStateChanged"]["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_38 in Exclude<keyof I_1["configStateChanged"]["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_39 in Exclude<keyof I_1["configStateChanged"]["current"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["configStateChanged"]["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_41 in Exclude<keyof I_1["configStateChanged"]["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_42 in Exclude<keyof I_1["configStateChanged"]["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["configStateChanged"]["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_44 in Exclude<keyof I_1["configStateChanged"]["current"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I_1["configStateChanged"]["current"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_46 in Exclude<keyof I_1["configStateChanged"]["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_47 in Exclude<keyof I_1["configStateChanged"]["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_48 in Exclude<keyof I_1["configStateChanged"]["saved"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_49 in Exclude<keyof I_1["configStateChanged"]["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_50 in Exclude<keyof I_1["configStateChanged"]["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_51 in Exclude<keyof I_1["configStateChanged"]["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_52 in Exclude<keyof I_1["configStateChanged"]["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_53 in Exclude<keyof I_1["configStateChanged"]["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I_1["configStateChanged"]["saved"], keyof ConfigValues>]: never; }) | undefined;
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
                ballConfig?: {
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                timingConfig?: {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } | undefined;
                pointerConfig?: {
                    profile?: PointerProfile | undefined;
                } | undefined;
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
                ballConfig?: ({
                    layerProfiles?: BallProfile[] | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    layerProfiles?: (BallProfile[] & BallProfile[] & { [K_55 in Exclude<keyof I_1["configStateChanged"]["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                    sensitivity?: BallSensitivity | undefined;
                    user1Bindings?: ({
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
                    } & { [K_56 in Exclude<keyof I_1["configStateChanged"]["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_57 in Exclude<keyof I_1["configStateChanged"]["defaults"]["ballConfig"]["user1Bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_58 in Exclude<keyof I_1["configStateChanged"]["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
                timingConfig?: ({
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                    layerTap?: {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } | undefined;
                } & {
                    modTapTappingTermMs?: number | undefined;
                    layerTapTappingTermMs?: number | undefined;
                    idleTimeoutS?: number | undefined;
                    idleSleepTimeoutS?: number | undefined;
                    modTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_59 in Exclude<keyof I_1["configStateChanged"]["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                    layerTap?: ({
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & {
                        flavor?: HoldTapFlavor | undefined;
                        quickTapMs?: number | undefined;
                        requirePriorIdleMs?: number | undefined;
                    } & { [K_60 in Exclude<keyof I_1["configStateChanged"]["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I_1["configStateChanged"]["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
                pointerConfig?: ({
                    profile?: PointerProfile | undefined;
                } & {
                    profile?: PointerProfile | undefined;
                } & { [K_62 in Exclude<keyof I_1["configStateChanged"]["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
            } & { [K_63 in Exclude<keyof I_1["configStateChanged"]["defaults"], keyof ConfigValues>]: never; }) | undefined;
            dirty?: boolean | undefined;
            firmwareBuildVersion?: string | undefined;
        } & { [K_64 in Exclude<keyof I_1["configStateChanged"], keyof ConfigState>]: never; }) | undefined;
        unsavedChangesStatusChanged?: boolean | undefined;
    } & { [K_65 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K in Exclude<keyof I["config"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_1 in Exclude<keyof I["config"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_2 in Exclude<keyof I["config"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["config"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_4 in Exclude<keyof I["config"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_5 in Exclude<keyof I["config"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["config"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_7 in Exclude<keyof I["config"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["config"], keyof ConfigValues>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "config">]: never; }>(base?: I | undefined): SetConfigRequest;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_10 in Exclude<keyof I_1["config"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_11 in Exclude<keyof I_1["config"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_12 in Exclude<keyof I_1["config"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["config"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_14 in Exclude<keyof I_1["config"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_15 in Exclude<keyof I_1["config"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["config"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_17 in Exclude<keyof I_1["config"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I_1["config"], keyof ConfigValues>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "config">]: never; }>(object: I_1): SetConfigRequest;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
        } | undefined;
        dirty?: boolean | undefined;
        firmwareBuildVersion?: string | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_4 in Exclude<keyof I["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_5 in Exclude<keyof I["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_6 in Exclude<keyof I["current"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_8 in Exclude<keyof I["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_9 in Exclude<keyof I["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_11 in Exclude<keyof I["current"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["current"], keyof ConfigValues>]: never; }) | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_13 in Exclude<keyof I["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_14 in Exclude<keyof I["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_15 in Exclude<keyof I["saved"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_17 in Exclude<keyof I["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_18 in Exclude<keyof I["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_20 in Exclude<keyof I["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I["saved"], keyof ConfigValues>]: never; }) | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_22 in Exclude<keyof I["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_23 in Exclude<keyof I["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_24 in Exclude<keyof I["defaults"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_26 in Exclude<keyof I["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_27 in Exclude<keyof I["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_28 in Exclude<keyof I["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_29 in Exclude<keyof I["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["defaults"], keyof ConfigValues>]: never; }) | undefined;
        dirty?: boolean | undefined;
        firmwareBuildVersion?: string | undefined;
    } & { [K_31 in Exclude<keyof I, keyof ConfigState>]: never; }>(base?: I | undefined): ConfigState;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
        } | undefined;
        dirty?: boolean | undefined;
        firmwareBuildVersion?: string | undefined;
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
            } & { [K_32 in Exclude<keyof I_1["fields"][number]["options"][number], keyof ConfigFieldOption>]: never; })[] & { [K_33 in Exclude<keyof I_1["fields"][number]["options"], keyof {
                value?: number | undefined;
                label?: string | undefined;
                displayValue?: number | undefined;
                displayLabel?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I_1["fields"][number], keyof ConfigField>]: never; })[] & { [K_35 in Exclude<keyof I_1["fields"], keyof {
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_36 in Exclude<keyof I_1["current"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_37 in Exclude<keyof I_1["current"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_38 in Exclude<keyof I_1["current"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["current"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_40 in Exclude<keyof I_1["current"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_41 in Exclude<keyof I_1["current"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_42 in Exclude<keyof I_1["current"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_43 in Exclude<keyof I_1["current"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_44 in Exclude<keyof I_1["current"], keyof ConfigValues>]: never; }) | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_45 in Exclude<keyof I_1["saved"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_46 in Exclude<keyof I_1["saved"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_47 in Exclude<keyof I_1["saved"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_48 in Exclude<keyof I_1["saved"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_49 in Exclude<keyof I_1["saved"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_50 in Exclude<keyof I_1["saved"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I_1["saved"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_52 in Exclude<keyof I_1["saved"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_53 in Exclude<keyof I_1["saved"], keyof ConfigValues>]: never; }) | undefined;
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
            ballConfig?: {
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } | undefined;
            timingConfig?: {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } | undefined;
            pointerConfig?: {
                profile?: PointerProfile | undefined;
            } | undefined;
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
            ballConfig?: ({
                layerProfiles?: BallProfile[] | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[] | undefined;
            } & {
                layerProfiles?: (BallProfile[] & BallProfile[] & { [K_54 in Exclude<keyof I_1["defaults"]["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
                sensitivity?: BallSensitivity | undefined;
                user1Bindings?: ({
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
                } & { [K_55 in Exclude<keyof I_1["defaults"]["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_56 in Exclude<keyof I_1["defaults"]["ballConfig"]["user1Bindings"], keyof {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_57 in Exclude<keyof I_1["defaults"]["ballConfig"], keyof BallConfig>]: never; }) | undefined;
            timingConfig?: ({
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
                layerTap?: {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } | undefined;
            } & {
                modTapTappingTermMs?: number | undefined;
                layerTapTappingTermMs?: number | undefined;
                idleTimeoutS?: number | undefined;
                idleSleepTimeoutS?: number | undefined;
                modTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_58 in Exclude<keyof I_1["defaults"]["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
                layerTap?: ({
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & {
                    flavor?: HoldTapFlavor | undefined;
                    quickTapMs?: number | undefined;
                    requirePriorIdleMs?: number | undefined;
                } & { [K_59 in Exclude<keyof I_1["defaults"]["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I_1["defaults"]["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
            pointerConfig?: ({
                profile?: PointerProfile | undefined;
            } & {
                profile?: PointerProfile | undefined;
            } & { [K_61 in Exclude<keyof I_1["defaults"]["pointerConfig"], "profile">]: never; }) | undefined;
        } & { [K_62 in Exclude<keyof I_1["defaults"], keyof ConfigValues>]: never; }) | undefined;
        dirty?: boolean | undefined;
        firmwareBuildVersion?: string | undefined;
    } & { [K_63 in Exclude<keyof I_1, keyof ConfigState>]: never; }>(object: I_1): ConfigState;
};
export declare const PointerConfig: {
    encode(message: PointerConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PointerConfig;
    fromJSON(object: any): PointerConfig;
    toJSON(message: PointerConfig): unknown;
    create<I extends {
        profile?: PointerProfile | undefined;
    } & {
        profile?: PointerProfile | undefined;
    } & { [K in Exclude<keyof I, "profile">]: never; }>(base?: I | undefined): PointerConfig;
    fromPartial<I_1 extends {
        profile?: PointerProfile | undefined;
    } & {
        profile?: PointerProfile | undefined;
    } & { [K_1 in Exclude<keyof I_1, "profile">]: never; }>(object: I_1): PointerConfig;
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
        ballConfig?: {
            layerProfiles?: BallProfile[] | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[] | undefined;
        } | undefined;
        timingConfig?: {
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
            layerTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
        } | undefined;
        pointerConfig?: {
            profile?: PointerProfile | undefined;
        } | undefined;
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
        ballConfig?: ({
            layerProfiles?: BallProfile[] | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[] | undefined;
        } & {
            layerProfiles?: (BallProfile[] & BallProfile[] & { [K in Exclude<keyof I["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: ({
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
            } & { [K_1 in Exclude<keyof I["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_2 in Exclude<keyof I["ballConfig"]["user1Bindings"], keyof {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["ballConfig"], keyof BallConfig>]: never; }) | undefined;
        timingConfig?: ({
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
            layerTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
        } & {
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: ({
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & { [K_4 in Exclude<keyof I["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
            layerTap?: ({
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & { [K_5 in Exclude<keyof I["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
        pointerConfig?: ({
            profile?: PointerProfile | undefined;
        } & {
            profile?: PointerProfile | undefined;
        } & { [K_7 in Exclude<keyof I["pointerConfig"], "profile">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof ConfigValues>]: never; }>(base?: I | undefined): ConfigValues;
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
        ballConfig?: {
            layerProfiles?: BallProfile[] | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[] | undefined;
        } | undefined;
        timingConfig?: {
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
            layerTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
        } | undefined;
        pointerConfig?: {
            profile?: PointerProfile | undefined;
        } | undefined;
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
        ballConfig?: ({
            layerProfiles?: BallProfile[] | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[] | undefined;
        } & {
            layerProfiles?: (BallProfile[] & BallProfile[] & { [K_9 in Exclude<keyof I_1["ballConfig"]["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
            sensitivity?: BallSensitivity | undefined;
            user1Bindings?: ({
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
            } & { [K_10 in Exclude<keyof I_1["ballConfig"]["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_11 in Exclude<keyof I_1["ballConfig"]["user1Bindings"], keyof {
                behaviorId?: number | undefined;
                param1?: number | undefined;
                param2?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["ballConfig"], keyof BallConfig>]: never; }) | undefined;
        timingConfig?: ({
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
            layerTap?: {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } | undefined;
        } & {
            modTapTappingTermMs?: number | undefined;
            layerTapTappingTermMs?: number | undefined;
            idleTimeoutS?: number | undefined;
            idleSleepTimeoutS?: number | undefined;
            modTap?: ({
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["timingConfig"]["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
            layerTap?: ({
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & {
                flavor?: HoldTapFlavor | undefined;
                quickTapMs?: number | undefined;
                requirePriorIdleMs?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["timingConfig"]["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I_1["timingConfig"], keyof TimingConfig>]: never; }) | undefined;
        pointerConfig?: ({
            profile?: PointerProfile | undefined;
        } & {
            profile?: PointerProfile | undefined;
        } & { [K_16 in Exclude<keyof I_1["pointerConfig"], "profile">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof ConfigValues>]: never; }>(object: I_1): ConfigValues;
};
export declare const TimingConfig: {
    encode(message: TimingConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimingConfig;
    fromJSON(object: any): TimingConfig;
    toJSON(message: TimingConfig): unknown;
    create<I extends {
        modTapTappingTermMs?: number | undefined;
        layerTapTappingTermMs?: number | undefined;
        idleTimeoutS?: number | undefined;
        idleSleepTimeoutS?: number | undefined;
        modTap?: {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } | undefined;
        layerTap?: {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } | undefined;
    } & {
        modTapTappingTermMs?: number | undefined;
        layerTapTappingTermMs?: number | undefined;
        idleTimeoutS?: number | undefined;
        idleSleepTimeoutS?: number | undefined;
        modTap?: ({
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & { [K in Exclude<keyof I["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
        layerTap?: ({
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & { [K_1 in Exclude<keyof I["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof TimingConfig>]: never; }>(base?: I | undefined): TimingConfig;
    fromPartial<I_1 extends {
        modTapTappingTermMs?: number | undefined;
        layerTapTappingTermMs?: number | undefined;
        idleTimeoutS?: number | undefined;
        idleSleepTimeoutS?: number | undefined;
        modTap?: {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } | undefined;
        layerTap?: {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } | undefined;
    } & {
        modTapTappingTermMs?: number | undefined;
        layerTapTappingTermMs?: number | undefined;
        idleTimeoutS?: number | undefined;
        idleSleepTimeoutS?: number | undefined;
        modTap?: ({
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["modTap"], keyof HoldTapConfig>]: never; }) | undefined;
        layerTap?: ({
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & {
            flavor?: HoldTapFlavor | undefined;
            quickTapMs?: number | undefined;
            requirePriorIdleMs?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["layerTap"], keyof HoldTapConfig>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof TimingConfig>]: never; }>(object: I_1): TimingConfig;
};
export declare const HoldTapConfig: {
    encode(message: HoldTapConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HoldTapConfig;
    fromJSON(object: any): HoldTapConfig;
    toJSON(message: HoldTapConfig): unknown;
    create<I extends {
        flavor?: HoldTapFlavor | undefined;
        quickTapMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
    } & {
        flavor?: HoldTapFlavor | undefined;
        quickTapMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
    } & { [K in Exclude<keyof I, keyof HoldTapConfig>]: never; }>(base?: I | undefined): HoldTapConfig;
    fromPartial<I_1 extends {
        flavor?: HoldTapFlavor | undefined;
        quickTapMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
    } & {
        flavor?: HoldTapFlavor | undefined;
        quickTapMs?: number | undefined;
        requirePriorIdleMs?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof HoldTapConfig>]: never; }>(object: I_1): HoldTapConfig;
};
export declare const BallConfig: {
    encode(message: BallConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BallConfig;
    fromJSON(object: any): BallConfig;
    toJSON(message: BallConfig): unknown;
    create<I extends {
        layerProfiles?: BallProfile[] | undefined;
        sensitivity?: BallSensitivity | undefined;
        user1Bindings?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        }[] | undefined;
    } & {
        layerProfiles?: (BallProfile[] & BallProfile[] & { [K in Exclude<keyof I["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
        sensitivity?: BallSensitivity | undefined;
        user1Bindings?: ({
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
        } & { [K_1 in Exclude<keyof I["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_2 in Exclude<keyof I["user1Bindings"], keyof {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof BallConfig>]: never; }>(base?: I | undefined): BallConfig;
    fromPartial<I_1 extends {
        layerProfiles?: BallProfile[] | undefined;
        sensitivity?: BallSensitivity | undefined;
        user1Bindings?: {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        }[] | undefined;
    } & {
        layerProfiles?: (BallProfile[] & BallProfile[] & { [K_4 in Exclude<keyof I_1["layerProfiles"], keyof BallProfile[]>]: never; }) | undefined;
        sensitivity?: BallSensitivity | undefined;
        user1Bindings?: ({
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
        } & { [K_5 in Exclude<keyof I_1["user1Bindings"][number], keyof BehaviorBinding>]: never; })[] & { [K_6 in Exclude<keyof I_1["user1Bindings"], keyof {
            behaviorId?: number | undefined;
            param1?: number | undefined;
            param2?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof BallConfig>]: never; }>(object: I_1): BallConfig;
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
