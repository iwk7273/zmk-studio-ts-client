import { Profile, Request } from '../src/ble_profiles';

describe('Bluetooth host labels', () => {
  it('round-trips a Unicode host label independently of the advertised name', () => {
    const profile = Profile.create({
      index: 2,
      name: 'meteorite40',
      hostLabel: '仕事用 PC',
      address: 'AA:BB:CC:DD:EE:FF (random)',
      open: false,
      connected: true,
      active: true,
    });

    expect(Profile.decode(Profile.encode(profile).finish())).toEqual(profile);
  });

  it('decodes an older profile without the optional host label', () => {
    expect(Profile.decode(Uint8Array.from([0x08, 0x02])).hostLabel).toBe('');
  });

  it('encodes an empty label to clear a slot', () => {
    const request = Request.create({
      setHostLabel: { index: 2, hostLabelUtf8: new Uint8Array(0) },
    });

    expect(Request.decode(Request.encode(request).finish()).setHostLabel).toEqual({
      index: 2,
      hostLabelUtf8: new Uint8Array(0),
    });
  });
});
