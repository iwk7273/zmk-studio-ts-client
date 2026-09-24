import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zmk.ble_profiles";
export declare enum Transport {
    TRANSPORT_NONE = 0,
    TRANSPORT_USB = 1,
    TRANSPORT_BLE = 2,
    UNRECOGNIZED = -1
}
export declare function transportFromJSON(object: any): Transport;
export declare function transportToJSON(object: Transport): string;
export declare enum MutationError {
    MUTATION_OK = 0,
    MUTATION_INVALID_INDEX = 1,
    MUTATION_INVALID_NAME = 2,
    MUTATION_INVALID_TRANSPORT = 3,
    MUTATION_SAVE_FAILED = 4,
    MUTATION_APPLY_FAILED = 5,
    MUTATION_INVALID_HOST_LABEL = 6,
    UNRECOGNIZED = -1
}
export declare function mutationErrorFromJSON(object: any): MutationError;
export declare function mutationErrorToJSON(object: MutationError): string;
export interface Request {
    getProfiles?: boolean | undefined;
    setName?: SetNameRequest | undefined;
    selectProfile?: SelectProfileRequest | undefined;
    unpairProfile?: UnpairProfileRequest | undefined;
    setPreferredTransport?: SetPreferredTransportRequest | undefined;
    setHostLabel?: SetHostLabelRequest | undefined;
}
export interface Response {
    getProfiles?: GetProfilesResponse | undefined;
    setName?: MutationResponse | undefined;
    selectProfile?: MutationResponse | undefined;
    unpairProfile?: MutationResponse | undefined;
    setPreferredTransport?: MutationResponse | undefined;
    setHostLabel?: MutationResponse | undefined;
}
export interface Profile {
    index: number;
    /** Empty when no per-slot advertising name has been configured. */
    name: string;
    address: string;
    open: boolean;
    connected: boolean;
    active: boolean;
    /** User-supplied host label. This is not the advertised keyboard name. */
    hostLabel: string;
}
export interface GetProfilesResponse {
    slotCount: number;
    profiles: Profile[];
    activeIndex: number;
    preferredTransport: Transport;
    selectedTransport: Transport;
}
export interface SetNameRequest {
    index: number;
    /** Bytes retain the exact input length, including any embedded NUL. */
    nameUtf8: Uint8Array;
}
export interface SetHostLabelRequest {
    index: number;
    /** Empty clears the label; bytes retain the exact input length for validation. */
    hostLabelUtf8: Uint8Array;
}
export interface SelectProfileRequest {
    index: number;
}
export interface UnpairProfileRequest {
    index: number;
}
export interface SetPreferredTransportRequest {
    transport: Transport;
}
export interface MutationResponse {
    error: MutationError;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        getProfiles?: boolean | undefined;
        setName?: {
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } | undefined;
        selectProfile?: {
            index?: number | undefined;
        } | undefined;
        unpairProfile?: {
            index?: number | undefined;
        } | undefined;
        setPreferredTransport?: {
            transport?: Transport | undefined;
        } | undefined;
        setHostLabel?: {
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } | undefined;
    } & {
        getProfiles?: boolean | undefined;
        setName?: ({
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } & {
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["setName"], keyof SetNameRequest>]: never; }) | undefined;
        selectProfile?: ({
            index?: number | undefined;
        } & {
            index?: number | undefined;
        } & { [K_1 in Exclude<keyof I["selectProfile"], "index">]: never; }) | undefined;
        unpairProfile?: ({
            index?: number | undefined;
        } & {
            index?: number | undefined;
        } & { [K_2 in Exclude<keyof I["unpairProfile"], "index">]: never; }) | undefined;
        setPreferredTransport?: ({
            transport?: Transport | undefined;
        } & {
            transport?: Transport | undefined;
        } & { [K_3 in Exclude<keyof I["setPreferredTransport"], "transport">]: never; }) | undefined;
        setHostLabel?: ({
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } & {
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I["setHostLabel"], keyof SetHostLabelRequest>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        getProfiles?: boolean | undefined;
        setName?: {
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } | undefined;
        selectProfile?: {
            index?: number | undefined;
        } | undefined;
        unpairProfile?: {
            index?: number | undefined;
        } | undefined;
        setPreferredTransport?: {
            transport?: Transport | undefined;
        } | undefined;
        setHostLabel?: {
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } | undefined;
    } & {
        getProfiles?: boolean | undefined;
        setName?: ({
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } & {
            index?: number | undefined;
            nameUtf8?: Uint8Array | undefined;
        } & { [K_6 in Exclude<keyof I_1["setName"], keyof SetNameRequest>]: never; }) | undefined;
        selectProfile?: ({
            index?: number | undefined;
        } & {
            index?: number | undefined;
        } & { [K_7 in Exclude<keyof I_1["selectProfile"], "index">]: never; }) | undefined;
        unpairProfile?: ({
            index?: number | undefined;
        } & {
            index?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["unpairProfile"], "index">]: never; }) | undefined;
        setPreferredTransport?: ({
            transport?: Transport | undefined;
        } & {
            transport?: Transport | undefined;
        } & { [K_9 in Exclude<keyof I_1["setPreferredTransport"], "transport">]: never; }) | undefined;
        setHostLabel?: ({
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } & {
            index?: number | undefined;
            hostLabelUtf8?: Uint8Array | undefined;
        } & { [K_10 in Exclude<keyof I_1["setHostLabel"], keyof SetHostLabelRequest>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        getProfiles?: {
            slotCount?: number | undefined;
            profiles?: {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } | undefined;
        setName?: {
            error?: MutationError | undefined;
        } | undefined;
        selectProfile?: {
            error?: MutationError | undefined;
        } | undefined;
        unpairProfile?: {
            error?: MutationError | undefined;
        } | undefined;
        setPreferredTransport?: {
            error?: MutationError | undefined;
        } | undefined;
        setHostLabel?: {
            error?: MutationError | undefined;
        } | undefined;
    } & {
        getProfiles?: ({
            slotCount?: number | undefined;
            profiles?: {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } & {
            slotCount?: number | undefined;
            profiles?: ({
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] & ({
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            } & {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            } & { [K in Exclude<keyof I["getProfiles"]["profiles"][number], keyof Profile>]: never; })[] & { [K_1 in Exclude<keyof I["getProfiles"]["profiles"], keyof {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[]>]: never; }) | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } & { [K_2 in Exclude<keyof I["getProfiles"], keyof GetProfilesResponse>]: never; }) | undefined;
        setName?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_3 in Exclude<keyof I["setName"], "error">]: never; }) | undefined;
        selectProfile?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_4 in Exclude<keyof I["selectProfile"], "error">]: never; }) | undefined;
        unpairProfile?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_5 in Exclude<keyof I["unpairProfile"], "error">]: never; }) | undefined;
        setPreferredTransport?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_6 in Exclude<keyof I["setPreferredTransport"], "error">]: never; }) | undefined;
        setHostLabel?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_7 in Exclude<keyof I["setHostLabel"], "error">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        getProfiles?: {
            slotCount?: number | undefined;
            profiles?: {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } | undefined;
        setName?: {
            error?: MutationError | undefined;
        } | undefined;
        selectProfile?: {
            error?: MutationError | undefined;
        } | undefined;
        unpairProfile?: {
            error?: MutationError | undefined;
        } | undefined;
        setPreferredTransport?: {
            error?: MutationError | undefined;
        } | undefined;
        setHostLabel?: {
            error?: MutationError | undefined;
        } | undefined;
    } & {
        getProfiles?: ({
            slotCount?: number | undefined;
            profiles?: {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } & {
            slotCount?: number | undefined;
            profiles?: ({
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[] & ({
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            } & {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["getProfiles"]["profiles"][number], keyof Profile>]: never; })[] & { [K_10 in Exclude<keyof I_1["getProfiles"]["profiles"], keyof {
                index?: number | undefined;
                name?: string | undefined;
                address?: string | undefined;
                open?: boolean | undefined;
                connected?: boolean | undefined;
                active?: boolean | undefined;
                hostLabel?: string | undefined;
            }[]>]: never; }) | undefined;
            activeIndex?: number | undefined;
            preferredTransport?: Transport | undefined;
            selectedTransport?: Transport | undefined;
        } & { [K_11 in Exclude<keyof I_1["getProfiles"], keyof GetProfilesResponse>]: never; }) | undefined;
        setName?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_12 in Exclude<keyof I_1["setName"], "error">]: never; }) | undefined;
        selectProfile?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_13 in Exclude<keyof I_1["selectProfile"], "error">]: never; }) | undefined;
        unpairProfile?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_14 in Exclude<keyof I_1["unpairProfile"], "error">]: never; }) | undefined;
        setPreferredTransport?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_15 in Exclude<keyof I_1["setPreferredTransport"], "error">]: never; }) | undefined;
        setHostLabel?: ({
            error?: MutationError | undefined;
        } & {
            error?: MutationError | undefined;
        } & { [K_16 in Exclude<keyof I_1["setHostLabel"], "error">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const Profile: {
    encode(message: Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Profile;
    fromJSON(object: any): Profile;
    toJSON(message: Profile): unknown;
    create<I extends {
        index?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
        open?: boolean | undefined;
        connected?: boolean | undefined;
        active?: boolean | undefined;
        hostLabel?: string | undefined;
    } & {
        index?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
        open?: boolean | undefined;
        connected?: boolean | undefined;
        active?: boolean | undefined;
        hostLabel?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Profile>]: never; }>(base?: I | undefined): Profile;
    fromPartial<I_1 extends {
        index?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
        open?: boolean | undefined;
        connected?: boolean | undefined;
        active?: boolean | undefined;
        hostLabel?: string | undefined;
    } & {
        index?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
        open?: boolean | undefined;
        connected?: boolean | undefined;
        active?: boolean | undefined;
        hostLabel?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Profile>]: never; }>(object: I_1): Profile;
};
export declare const GetProfilesResponse: {
    encode(message: GetProfilesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProfilesResponse;
    fromJSON(object: any): GetProfilesResponse;
    toJSON(message: GetProfilesResponse): unknown;
    create<I extends {
        slotCount?: number | undefined;
        profiles?: {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[] | undefined;
        activeIndex?: number | undefined;
        preferredTransport?: Transport | undefined;
        selectedTransport?: Transport | undefined;
    } & {
        slotCount?: number | undefined;
        profiles?: ({
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[] & ({
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        } & {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        } & { [K in Exclude<keyof I["profiles"][number], keyof Profile>]: never; })[] & { [K_1 in Exclude<keyof I["profiles"], keyof {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[]>]: never; }) | undefined;
        activeIndex?: number | undefined;
        preferredTransport?: Transport | undefined;
        selectedTransport?: Transport | undefined;
    } & { [K_2 in Exclude<keyof I, keyof GetProfilesResponse>]: never; }>(base?: I | undefined): GetProfilesResponse;
    fromPartial<I_1 extends {
        slotCount?: number | undefined;
        profiles?: {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[] | undefined;
        activeIndex?: number | undefined;
        preferredTransport?: Transport | undefined;
        selectedTransport?: Transport | undefined;
    } & {
        slotCount?: number | undefined;
        profiles?: ({
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[] & ({
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        } & {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["profiles"][number], keyof Profile>]: never; })[] & { [K_4 in Exclude<keyof I_1["profiles"], keyof {
            index?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            open?: boolean | undefined;
            connected?: boolean | undefined;
            active?: boolean | undefined;
            hostLabel?: string | undefined;
        }[]>]: never; }) | undefined;
        activeIndex?: number | undefined;
        preferredTransport?: Transport | undefined;
        selectedTransport?: Transport | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof GetProfilesResponse>]: never; }>(object: I_1): GetProfilesResponse;
};
export declare const SetNameRequest: {
    encode(message: SetNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetNameRequest;
    fromJSON(object: any): SetNameRequest;
    toJSON(message: SetNameRequest): unknown;
    create<I extends {
        index?: number | undefined;
        nameUtf8?: Uint8Array | undefined;
    } & {
        index?: number | undefined;
        nameUtf8?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SetNameRequest>]: never; }>(base?: I | undefined): SetNameRequest;
    fromPartial<I_1 extends {
        index?: number | undefined;
        nameUtf8?: Uint8Array | undefined;
    } & {
        index?: number | undefined;
        nameUtf8?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetNameRequest>]: never; }>(object: I_1): SetNameRequest;
};
export declare const SetHostLabelRequest: {
    encode(message: SetHostLabelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetHostLabelRequest;
    fromJSON(object: any): SetHostLabelRequest;
    toJSON(message: SetHostLabelRequest): unknown;
    create<I extends {
        index?: number | undefined;
        hostLabelUtf8?: Uint8Array | undefined;
    } & {
        index?: number | undefined;
        hostLabelUtf8?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SetHostLabelRequest>]: never; }>(base?: I | undefined): SetHostLabelRequest;
    fromPartial<I_1 extends {
        index?: number | undefined;
        hostLabelUtf8?: Uint8Array | undefined;
    } & {
        index?: number | undefined;
        hostLabelUtf8?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetHostLabelRequest>]: never; }>(object: I_1): SetHostLabelRequest;
};
export declare const SelectProfileRequest: {
    encode(message: SelectProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SelectProfileRequest;
    fromJSON(object: any): SelectProfileRequest;
    toJSON(message: SelectProfileRequest): unknown;
    create<I extends {
        index?: number | undefined;
    } & {
        index?: number | undefined;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I | undefined): SelectProfileRequest;
    fromPartial<I_1 extends {
        index?: number | undefined;
    } & {
        index?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): SelectProfileRequest;
};
export declare const UnpairProfileRequest: {
    encode(message: UnpairProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnpairProfileRequest;
    fromJSON(object: any): UnpairProfileRequest;
    toJSON(message: UnpairProfileRequest): unknown;
    create<I extends {
        index?: number | undefined;
    } & {
        index?: number | undefined;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I | undefined): UnpairProfileRequest;
    fromPartial<I_1 extends {
        index?: number | undefined;
    } & {
        index?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): UnpairProfileRequest;
};
export declare const SetPreferredTransportRequest: {
    encode(message: SetPreferredTransportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetPreferredTransportRequest;
    fromJSON(object: any): SetPreferredTransportRequest;
    toJSON(message: SetPreferredTransportRequest): unknown;
    create<I extends {
        transport?: Transport | undefined;
    } & {
        transport?: Transport | undefined;
    } & { [K in Exclude<keyof I, "transport">]: never; }>(base?: I | undefined): SetPreferredTransportRequest;
    fromPartial<I_1 extends {
        transport?: Transport | undefined;
    } & {
        transport?: Transport | undefined;
    } & { [K_1 in Exclude<keyof I_1, "transport">]: never; }>(object: I_1): SetPreferredTransportRequest;
};
export declare const MutationResponse: {
    encode(message: MutationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MutationResponse;
    fromJSON(object: any): MutationResponse;
    toJSON(message: MutationResponse): unknown;
    create<I extends {
        error?: MutationError | undefined;
    } & {
        error?: MutationError | undefined;
    } & { [K in Exclude<keyof I, "error">]: never; }>(base?: I | undefined): MutationResponse;
    fromPartial<I_1 extends {
        error?: MutationError | undefined;
    } & {
        error?: MutationError | undefined;
    } & { [K_1 in Exclude<keyof I_1, "error">]: never; }>(object: I_1): MutationResponse;
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
