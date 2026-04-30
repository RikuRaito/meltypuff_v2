# meltypuff_v2 コーディング規約

## ディレクトリ・ファイル配置

- ページごとのロジック・コンポーネントは `src/feature/` に機能単位で置く
- DBアクセス関数は `lib/api/` に置き、必ず `"use server"` を付ける
- カスタムフックは `src/hooks/` に置く
- 型定義は `src/types/` に置く

## コンポーネント

- データ取得はサーバーコンポーネントで行い、クライアントコンポーネントに props で渡す
- `"use client"` は必要最小限にする
- コンポーネントファイル名・関数名はPascalCase

## 型

- `any` の使用禁止
- Prismaの生成型（`Product_Non`、`Payment` など）を優先して使う
- 独自の型定義が必要な場合は `src/types/` に置く

## 命名規則

- コンポーネント：PascalCase
- 関数・変数：camelCase
- DBカラム名：snake_case（Prismaの `@map` で変換してTypeScript側はcamelCase）

## エラーハンドリング

- エラーハンドリングは `lib/api/` 層で行う
- `console.log` はデバッグ用途のみ、本番コードには残さない
- サーバー側のエラーはユーザーに詳細を露出しない
