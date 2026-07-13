import {
  HoldTapConfig,
  HoldTapFlavor,
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
