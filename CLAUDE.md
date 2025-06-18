# Claude Code 設定

このファイルには、Claude Code がプロジェクトをより理解し、作業するための設定とコンテキストが含まれています。

## プロジェクト概要
React + TypeScript + Vite で作られた占い診断ランディングページサイト。
四柱推命、おみくじ、手相診断、タロットカードの4つの診断機能を提供。

## 開発コマンド
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# リンターの実行
npm run lint
```

## プロジェクト構造
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

## 重要な注意事項
- React 19を使用しているため、一部TypeScriptの型エラーが発生する可能性がある
- ビルド時は `npx vite build` でTypeScriptチェックをスキップすることを推奨
- styled-jsx を使用したCSS-in-JS スタイリング
- レスポンシブデザイン（モバイルファーストアプローチ）

## Claude Code 動作設定

### スクリーンショット確認設定
**スクリーンショットは全て自動確認する**
- 許可を求めずに全てのスクリーンショット（.png, .jpg, .jpeg）を自動的に確認・表示する
- `/var/folders/` 以下の一時ファイルも含めて全て確認する
- ユーザーがスクリーンショットを提供した場合は即座にReadツールで内容を確認する

### ファイル操作設定
- プロジェクト内の全てのファイルに対して読み書き権限を持つ
- 必要に応じてファイルの作成・編集・削除を行う