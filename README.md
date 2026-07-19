# zmk-studio-ts-client

Simple client library for the ZMK Studio RPC layer, with the message types generated directly from the ZMK Studio
protocol buffer files.

## Meteorite fork

This branch points the `zmk-studio-messages` submodule at
`iwk7273/zmk-studio-messages#feat/meteorite-custom-config-rpc` and regenerates the TS protobuf types
with the `meteorite` subsystem.
The generated `core.GetDeviceInfoResponse` also includes a `capabilities` list. The Meteorite editor
uses `meteorite.config` from that list as the safe gate before calling the fork-only Meteorite RPC
subsystem, so older firmware remains connectable.
`PointerConfig` includes the Standard, Stable, Responsive, and Custom profile enum plus an optional
four-point `PointerCurveConfig`; omitted curve data retains its protobuf presence semantics.
The generated Meteorite types include `ConfigState.encoderSlots`, which lets the editor use
firmware-provided rotary encoder key positions instead of local layout heuristics when supported.

The upstream package assumes a system `protoc` is available when installing from git. This fork adds
the npm `protoc` dev dependency so `npm run generate` and git dependency postinstall can run in the
Meteorite editor workspace without a separate system install.
Generated `lib/` files are committed on this branch because npm prepares git dependencies without a
`.git` directory in some environments; postinstall only regenerates from the submodule in a normal
git checkout.

## API

TODO
