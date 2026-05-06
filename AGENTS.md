# AGENTS.md

このリポジトリは ZMK Studio RPC の TypeScript client fork です。
`zmk-studio-messages` submodule の protobuf schema から TS 型と encoder / decoder を生成し、Meteorite editor が git dependency として利用します。

## 作業方針

- protobuf schema の正本は `zmk-studio-messages/` submodule です。生成後の `lib/*.js` / `lib/*.d.ts` を先に手編集しないでください。
- `src/*.ts` は `npm run generate` の中間生成物で、この fork では通常 git 管理しません。
- `lib/` は npm git dependency として利用できるよう、この branch では commit 対象です。
- `node_modules/`、`coverage/`、生成途中の `src/*.ts` は通常編集・commit しません。
- upstream 追従時は `upstream` remote と submodule の upstream 差分を分けて確認します。

## Branch / Fork 運用

- `origin` は Meteorite fork (`iwk7273/zmk-studio-ts-client`)、`upstream` は `zmkfirmware/zmk-studio-ts-client` として扱います。
- 現行の Meteorite editor dependency branch は `feat/meteorite-custom-config-rpc` です。
- `zmk-studio-messages` submodule も `feat/meteorite-custom-config-rpc` の commit を指します。
- branch 名や commit を変えたら、editor の `package.json` / `package-lock.json` の `@zmkfirmware/zmk-studio-ts-client` dependency を更新してください。
- schema 変更時は submodule pointer、生成済み `lib/`、README を同じ commit に含めます。

## Meteorite 拡張

- `zmk-studio-messages` submodule は `iwk7273/zmk-studio-messages#feat/meteorite-custom-config-rpc` 系を参照します。
- 生成型には `meteorite` subsystem、`core.GetDeviceInfoResponse.capabilities`、`ConfigState.encoderSlots` が含まれます。
- editor は `meteorite.config` capability を見てから Meteorite RPC を呼ぶため、client 側で独自 fallback protocol は追加しません。
- rotary encoder metadata は `ConfigState.encoderSlots` として decode されます。editor 側で key position の推測を増やすのではなく、firmware metadata を通してください。

## 更新手順

1. `zmk-studio-messages` repo で schema を変更して commit します。
2. この repo の submodule をその commit へ更新します。
3. `npm run generate` を実行します。
4. `npm run build`、`npm run typecheck`、必要に応じて `npm run test` を実行します。
5. `lib/`、README、submodule pointer を commit します。

`postinstall` は git checkout では submodule update / generate / build を試みますが、npm が git dependency を展開した後は `.git` がない場合があります。そのため、この branch では `lib/` を commit しておきます。
