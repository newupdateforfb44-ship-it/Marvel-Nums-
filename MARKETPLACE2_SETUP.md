# Marketplace 2 (RakibSocials) + Low pool switch

## .env setup
Add these to your .env (or your host's Environment settings, e.g. Render → Environment):

    RAKIB_API_KEY=your_api_key_from_rakibsocials_dashboard
    RAKIB_BASE_URL=https://www.rakibsocials.com/api/v1
    RAKIB_LOW_BALANCE_NGN=5000
    ADMIN_ALERT_EMAIL=you@example.com

- RAKIB_API_KEY: copy it from your RakibSocials account (API page). Keep it secret.
- RAKIB_BASE_URL: leave as shown.
- Low-balance emails use your existing RESEND_API_KEY. Alert email/level can also be changed in Admin → Logs 2.
Restart the server after editing .env.

## Admin
- Admin → Buy numbers → Server 2: "Disable low pool sms rate" button hides Pool 1–3 from customers (tap again to show them).
- Admin → Catalogue → Logs 2: turn Marketplace / Marketplace 2 on or off (off = maintenance screen),
  see every RakibSocials product with API cost + stock, set your price (0 = hidden), see profit and sales.

## Customers
- /marketplace2 — same design as /marketplace, with switch buttons at the top.
- Purchases appear instantly and stay in My Purchases, marked "[Marketplace 2]".
