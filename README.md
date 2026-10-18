# Mini Marketplace

A small online store built on the [Fake Store API](https://fakestoreapi.com): a product catalog with category tabs, flip cards with descriptions and a shopping cart.

🔗 **Live demo:** https://mini-market-bay.vercel.app

<img width="1836" height="858" alt="Mini Marketplace screenshot" src="https://github.com/user-attachments/assets/77f59d86-9ea4-4583-985d-6032ba0b35b8" />
<img width="1824" height="857" alt="Mini Marketplace screenshot" src="https://github.com/user-attachments/assets/ef9431c0-d1a9-4660-b6c0-f93d04417763" />
<img width="1814" height="849" alt="Mini Marketplace screenshot" src="https://github.com/user-attachments/assets/ed0f2d1a-5bcb-47c1-b70a-1fd8f40d3897" />

## Features

- Products loaded from the Fake Store API, with an error message if the request fails
- Category tabs: men's clothing, women's clothing, jewelry, electronics
- Flip cards: the back side shows the product description
- Cart: add items (adding again increases the quantity), remove items, see the total price
- Cart badge in the header with the number of items

## How it works

The catalog is rendered with plain JavaScript, while the cart and the header badge are two separate React roots. Both share one **Zustand** store, so clicking "Add to Cart" on a plain-JS card updates the React components instantly.

## Tech stack

JavaScript · React 18 · Zustand · Vite · CSS

## Getting started

```bash
npm install
npm run dev
```

## Notes

Built in about 10 hours. The trickiest part was moving the logic into a separate store and utility functions.

**Author:** Jamshidbek Samandarov · [GitHub](https://github.com/Jamshid-1207) · [Telegram](https://t.me/Samandarov_2804)
