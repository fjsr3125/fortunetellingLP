# 🔮 占い診断ランディングページ

React + TypeScript + Vite で作られた占い診断サイトです。四柱推命、おみくじ、手相診断、タロットカードの4つの診断機能を提供します。

## ✨ 機能

### 診断機能
- **🌟 四柱推命診断**: 生年月日から基本気質を診断
- **🏮 おみくじ**: インタラクティブなおみくじ体験
- **🤲 手相診断**: 手相写真をアップロードして診断
- **🔮 タロットカード診断**: 過去・現在・未来の3枚カード占い

### 特徴
- 📱 レスポンシブデザイン（スマートフォン対応）
- ✨ アニメーション豊富なユーザー体験
- 🎨 神秘的でエレガントなUI/UX
- 🚀 高速ロード（Vite使用）

## 🛠️ 技術スタック

- **フレームワーク**: React 19
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS-in-JS (styled-jsx)
- **リンター**: ESLint

## 🚀 デプロイ

### ライブデモ
🌐 **https://serene-kataifi-8636b2.netlify.app**
- パスワード: `My-Drop-Site`

## 📦 開発環境のセットアップ

### 必要な環境
- Node.js 18以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone <repository-url>
cd project

# 依存関係をインストール
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```
開発サーバーが `http://localhost:5173` で起動します。

### ビルド
```bash
npm run build
```
プロダクション用ビルドが `dist/` フォルダに生成されます。

### プレビュー
```bash
npm run preview
```
ビルドしたプロジェクトを `http://localhost:4173` でプレビューできます。

### リンター
```bash
npm run lint
```

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── diagnosis/           # 診断機能コンポーネント
│   │   ├── FourPillars.tsx  # 四柱推命診断
│   │   ├── Omikuji.tsx      # おみくじ
│   │   ├── Palmistry.tsx    # 手相診断
│   │   └── Tarot.tsx        # タロット診断
│   ├── DiagnosisSection.tsx # 診断セクション
│   ├── Footer.tsx           # フッター
│   ├── Hero.tsx             # ヒーローセクション
│   ├── LineSection.tsx      # LINE誘導セクション
│   └── ResultCard.tsx       # 結果表示カード
├── types/                   # 型定義
├── assets/                  # 静的ファイル
├── App.tsx                  # メインアプリ
├── main.tsx                 # エントリーポイント
└── index.css               # グローバルスタイル
```

## 🎨 UI/UX 特徴

### アニメーション
- 各診断で独自のアニメーション演出
- 宇宙・神社・クリスタルなど占いに合ったビジュアル
- ローディング中の魅力的なアニメーション

### レスポンシブ
- モバイルファーストデザイン
- タッチ操作に最適化
- 縦画面での快適な操作性

## 🔧 カスタマイズ

### LINE連携の設定
`src/components/LineSection.tsx` と `src/components/ResultCard.tsx` でLINE公式アカウントのURLを設定してください：

```typescript
const lineUrl = 'https://line.me/R/ti/p/@your-line-id';
```

### 診断結果のカスタマイズ
各診断コンポーネント内の結果配列を編集することで、診断結果をカスタマイズできます。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストや Issue の報告を歓迎します。

---

*Claude Code で生成されました* 🤖