# meltypuff_v2

電子タバコ（vape）のECサイト。元々の React + Flask 構成から Next.js App Router によるフルスタック構成に移行して再開発したリポジトリ。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **DB**: PostgreSQL (Supabase)
- **ORM**: Prisma v7
- **認証**: NextAuth v5 (JWT + Credentials)
- **決済**: Square SDK
- **画像ストレージ**: Supabase Storage

## 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install --legacy-peer-deps
```

### 2. 環境変数の設定

プロジェクトルートに `.env` を作成して以下を設定する。
普通にセキュリティとしてやばいので削除

### 3. Prisma Clientの生成

```bash
npx prisma generate
```

### 4. マイグレーションの実行

マイグレーション実行時は `.env` の `DATABASE_URL` を `DIRECT_URL`（ポート5432）に差し替えてから実行する。

```bash
npx prisma migrate dev --name <migration-name>
```

実行後は `DATABASE_URL` を元のpooler URL（ポート6543）に戻す。

### 5. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できる。

## ディレクトリ構成

```
app/                        # ルーティング・ページのContainer
  shop/                     # 一般ユーザー向けページ
  admin/                    # 管理者向けページ
  legal/                    # 特商法・利用規約・プライバシーポリシー
lib/
  api/                      # DBアクセス（"use server"、Prismaを直接操作）
  actions/                  # サーバー側のビジネスロジック
  prisma.ts                 # Prisma Clientのシングルトン
  supabaseClient.ts         # Supabase Clientのシングルトン
src/
  components/
    common/                 # ヘッダー・フッターなど共通UIコンポーネント
    admin/                  # 管理者画面のコンポーネント・hooks
    shop/                   # ショップのコンポーネント
  hooks/                    # カスタムフック
  types/                    # 型定義
prisma/
  schema.prisma             # DBスキーマ
```

### 役割分担

| ディレクトリ | 役割 |
|-------------|------|
| `app/` | ルーティング・レイアウトの組み立て（Container）。データ取得後に `src/components/` のコンポーネントに渡す |
| `lib/api/` | DBへの直接アクセス（低レベル）。Prismaを使ったCRUD操作のみ |
| `lib/actions/` | `lib/api/` を使って構築するサーバー側のビジネスロジック |
| `src/components/` | UIコンポーネント・カスタムフック（クライアント側） |

## APIの仕様

Next.js の Server Actions を使用しており、URLを叩くREST APIではなく `lib/api/` 配下の関数を直接 Server Component から呼び出す形で使用する。すべて `"use server"` ディレクティブで宣言されている。

### 商品 (`lib/api/products.ts`)

| 関数 | 説明 |
|------|------|
| `getNonProducts()` | ノンニコチン商品を全件取得 |
| `getNonProductsInStock()` | 在庫あり（stock > 0）のノンニコチン商品を取得 |

### 決済・クーポン (`lib/api/payments.ts`, `lib/api/purchase.ts`)

| 関数 | 説明 |
|------|------|
| `getPaymentsData()` | 全注文をPaymentItemを含めて取得 |
| `makePaymentsData(payment)` | 注文データを保存（未実装） |
| `applyCoupon(code)` | クーポンコードを検証して割引率を返す |
| `handlePurchase(price, products)` | 購入処理（未実装） |

### お問い合わせ (`lib/api/contacts.ts`)

| 関数 | 説明 |
|------|------|
| `submitContact(formData)` | フォームからお問い合わせを保存 |
| `saveContact(contact)` | ContactInput型からお問い合わせを保存 |
| `getContacts()` | お問い合わせを全件取得 |

### 常連顧客 (`lib/api/regularCustomer.ts`)

| 関数 | 説明 |
|------|------|
| `getRegularCustomer()` | 常連顧客を全件取得 |

## 認証

NextAuth v5のCredentialsプロバイダを使用。ログイン時にAdminテーブルを優先して検索し、見つからなければUserテーブルを検索する。JWTに `type: "admin" | "user"` を付与して権限管理を行う。

`/admin/*` へのアクセスは `middleware.ts` でセッションcookieの存在チェックを行い、未認証の場合は `/admin/login` にリダイレクトする。

## カートの仕様

カートデータは `localStorage`（キー：`meltypuff_cart`）に `CartItem[]` として保存する。`cartUpdated` カスタムイベントを発火することでタブ間・コンポーネント間の同期を行う。

