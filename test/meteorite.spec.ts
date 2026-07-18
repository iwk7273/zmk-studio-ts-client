import {
  ConfigValues,
  HoldTapConfig,
  HoldTapFlavor,
  PointerConfig,
  PointerProfile,
  TimingConfig,
} from '../src/meteorite';

describe('meteorite timing protobuf compatibility', () => {
  it('round-trips nested mod-tap and layer-tap presence', () => {
    const message = TimingConfig.create({
      modTapTappingTermMs: 210,
      layerTapTappingTermMs: 170,
      idleTimeoutS: 60,
      idleSleepTimeoutS: 120,
      modTap: {
        flavor: HoldTapFlavor.HOLD_TAP_FLAVOR_BALANCED,
        quickTapMs: 160,
        requirePriorIdleMs: 70,
      },
      layerTap: {
        flavor: HoldTapFlavor.HOLD_TAP_FLAVOR_HOLD_PREFERRED,
        quickTapMs: 0,
        requirePriorIdleMs: 80,
      },
    });

    const decoded = TimingConfig.decode(TimingConfig.encode(message).finish());

    expect(decoded).toEqual(message);
    expect(decoded.modTap).toBeDefined();
    expect(decoded.layerTap).toBeDefined();
  });

  it('keeps nested profiles absent when decoding an older timing message', () => {
    const oldMessage = TimingConfig.create({
      modTapTappingTermMs: 200,
      layerTapTappingTermMs: 150,
      idleTimeoutS: 120,
      idleSleepTimeoutS: 900,
    });

    const decoded = TimingConfig.decode(TimingConfig.encode(oldMessage).finish());

    expect(decoded.modTap).toBeUndefined();
    expect(decoded.layerTap).toBeUndefined();
    expect(decoded).toMatchObject({
      modTapTappingTermMs: 200,
      layerTapTappingTermMs: 150,
      idleTimeoutS: 120,
      idleSleepTimeoutS: 900,
    });
  });

  it('preserves an unknown hold-tap enum value in the binary codec', () => {
    const decoded = HoldTapConfig.decode(Uint8Array.from([0x08, 0x04]));

    expect(decoded.flavor).toBe(4);
    expect(Array.from(HoldTapConfig.encode(decoded).finish())).toEqual([
      0x08,
      0x04,
    ]);
  });
});

describe('meteorite pointer profile protobuf compatibility', () => {
  it('round-trips optional pointer profile presence', () => {
    const message = ConfigValues.create({
      cpiIdx: 2,
      scalingMode: 1,
      pointerConfig: {
        profile: PointerProfile.POINTER_PROFILE_RESPONSIVE,
      },
    });

    const decoded = ConfigValues.decode(ConfigValues.encode(message).finish());

    expect(decoded).toEqual(message);
    expect(decoded.pointerConfig).toEqual({
      profile: PointerProfile.POINTER_PROFILE_RESPONSIVE,
    });
  });

  it('keeps pointer profile absent when decoding an older config message', () => {
    const oldMessage = ConfigValues.create({
      cpiIdx: 1,
      scalingMode: 1,
    });

    const decoded = ConfigValues.decode(ConfigValues.encode(oldMessage).finish());

    expect(decoded.pointerConfig).toBeUndefined();
    expect(decoded).toMatchObject({ cpiIdx: 1, scalingMode: 1 });
  });

  it('preserves an unknown pointer profile enum in the binary codec', () => {
    const decoded = PointerConfig.decode(Uint8Array.from([0x08, 0x04]));

    expect(decoded.profile).toBe(4);
    expect(Array.from(PointerConfig.encode(decoded).finish())).toEqual([
      0x08,
      0x04,
    ]);
  });
});
