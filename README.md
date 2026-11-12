# Awesome App Monetization [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of SDKs, platforms, official docs, policies and open source tools for earning revenue from apps, games, websites, bots and communities.

Maintained by [Moonetix](https://moonetix.com).

Most products end up combining several revenue streams: rewarded ads and an offerwall for users who do not pay, purchases or subscriptions for users who do, and display ads or memberships on the web. Each stream brings its own SDK, its own platform rules and its own fraud surface. This list collects the official pages for each piece, plus the measurement, anti-fraud and policy references you need to run them together.

Links go to official sites and docs. Descriptions are one neutral line. Corrections and additions are welcome; read the [contribution guidelines](CONTRIBUTING.md) first.

## Contents

- [Rewarded ads and mediation](#rewarded-ads-and-mediation)
- [Offerwalls](#offerwalls)
- [In-app purchases and subscriptions](#in-app-purchases-and-subscriptions)
- [Web monetization](#web-monetization)
- [Ad networks for web](#ad-networks-for-web)
- [Attribution and analytics](#attribution-and-analytics)
- [Anti-fraud and traffic quality](#anti-fraud-and-traffic-quality)
- [Policies](#policies)
- [Open source tools and libraries](#open-source-tools-and-libraries)
- [Learning](#learning)
- [About Moonetix](#about-moonetix)

## Rewarded ads and mediation

Ad networks with rewarded formats, and the mediation platforms that run an auction across them.

- [AdMob](https://admob.google.com/home/) - Google's mobile ad network with rewarded, interstitial, banner and native formats, plus mediation.
- [AdsGram](https://adsgram.ai) - Ad network for Telegram Mini Apps and bots, including rewarded formats.
- [AppLovin MAX](https://support.applovin.com/en/max/) - In-app mediation platform with in-app bidding across many ad networks.
- [Appodeal](https://appodeal.com) - Mediation platform for mobile apps and games.
- [Chartboost](https://loopme.ai/chartboost/) - Mobile game ad network with a mediation SDK, now part of LoopMe.
- [H5 Games Ads](https://developers.google.com/ad-placement) - Google's Ad Placement API for interstitial and rewarded ads in HTML5 web games.
- [InMobi](https://www.inmobi.com/) - Mobile advertising platform with an ad network and exchange for app publishers.
- [Liftoff Monetize](https://liftoff.ai/monetize/) - In-app ad network and exchange, formerly Vungle.
- [Meta Audience Network](https://www.facebook.com/audiencenetwork/) - Meta's ad network for mobile apps, available through bidding.
- [Mintegral](https://www.mintegral.com/en/monetization) - Mobile ad network with rewarded video and playable formats.
- [Pangle](https://www.pangleglobal.com/) - ByteDance's ad network for mobile apps.
- [Unity Ads](https://unity.com/products/unity-ads) - Ad network for mobile games with rewarded video.
- [Unity LevelPlay](https://unity.com/products/levelplay) - Mediation platform from Unity, formerly ironSource LevelPlay.

## Offerwalls

An offerwall lists offers (install and reach a level, sign up, finish a survey) and pays users in your own currency when they complete one. The network pays you per completed offer and tells your server through a signed postback. For SDKs, guides and postback security resources, see [Awesome Offerwalls](https://github.com/moonetix/awesome-offerwalls).

- [Moonetix](https://moonetix.com/publishers) - Affiliate network with a hosted offerwall (link, iframe, floating button), an Offers API, and SDKs for Android, iOS, Flutter, React Native and Unity.
- [AdGem](https://adgem.com) - Offerwall and rewarded video ad units for app publishers.
- [adjoe Playtime](https://adjoe.io/solutions/monetize-your-app/playtime/) - Offerwall that rewards users for the time they spend in advertised apps.
- [BitLabs](https://bitlabs.ai) - Rewarded surveys, games, shopping and offers for apps and websites, part of Prodege.
- [CPX Research](https://www.cpx-research.com) - Paid survey wall for apps and websites.
- [Hang My Ads](https://hangmyads.com) - Performance advertising agency with a mobile offerwall and an API for publishers.
- [Lootably](https://lootably.com) - Rewards-based monetization for mobile app and web publishers.
- [Monlix](https://monlix.com) - Offerwall with games, videos, offers and surveys shown inside apps and websites.
- [PubScale](https://pubscale.com) - Growth and monetization platform that includes an offerwall product.
- [Tapjoy](https://unity.com/products/tapjoy) - In-app rewarded offerwall, now part of Unity.
- [TheoremReach](https://theoremreach.com) - Rewarded surveys and offers for websites and mobile apps.
- [TimeWall](https://timewall.io) - Survey and micro task offerwall for websites and apps.
- [Torox](https://torox.io) - Offerwall and rewarded traffic network for apps, games and rewards sites, formerly OfferToro.
- [Upwall](https://upwall.io) - Hosted offerwall link and an Offers API for native integrations.
- [Wannads](https://wannads.com) - Offerwall and mobile SDK for apps, games and websites.

## In-app purchases and subscriptions

### Platforms

Hosted backends that validate receipts, track entitlements and run paywall tests across app stores.

- [Adapty](https://adapty.io) - SDK and backend for in-app subscriptions, with paywall A/B tests and analytics.
- [Apphud](https://apphud.com) - In-app subscription infrastructure with analytics and paywall tests.
- [Purchasely](https://www.purchasely.com) - Paywall builder and in-app subscription platform.
- [Qonversion](https://qonversion.io) - In-app subscription backend with analytics and paywall experiments.
- [RevenueCat](https://www.revenuecat.com) - In-app purchase and subscription backend with SDKs for mobile, web and game engines.
- [Superwall](https://superwall.com) - Remotely configured paywalls and paywall experiments for mobile apps.

### Official docs

- [App Store Server API](https://developer.apple.com/documentation/appstoreserverapi) - Server API to look up transactions, subscription status and refunds.
- [App Store Server Notifications](https://developer.apple.com/documentation/appstoreservernotifications) - Server callbacks for purchases, renewals, refunds and other events.
- [Discord monetization](https://docs.discord.com/developers/monetization/overview) - Subscriptions and one-time purchases inside Discord apps.
- [Google Play Billing](https://developer.android.com/google/play/billing) - Selling in-app products and subscriptions on Google Play.
- [Google Play real-time developer notifications](https://developer.android.com/google/play/billing/rtdn-reference) - Pub/Sub messages for subscription and purchase state changes.
- [In-App Purchase](https://developer.apple.com/in-app-purchase/) - Apple's overview of in-app purchase types, pricing and tools.
- [Steam microtransactions](https://partner.steamgames.com/doc/features/microtransactions) - In-game purchases paid from the Steam Wallet.
- [StoreKit](https://developer.apple.com/documentation/storekit) - Apple's framework for in-app purchases and subscriptions.
- [Telegram Stars payments](https://core.telegram.org/bots/payments-stars) - Selling digital goods in bots and Mini Apps for Telegram Stars.
- [Unity IAP](https://docs.unity.com/en-us/iap) - Unity's cross-store in-app purchase package.

## Web monetization

Paywalls, memberships, subscriptions and donations for sites, newsletters and creators.

- [Buy Me a Coffee](https://buymeacoffee.com) - Donations, memberships and digital product sales for creators.
- [Ghost](https://ghost.org) - Open source publishing platform with paid memberships and newsletters.
- [GitHub Sponsors](https://github.com/sponsors) - Recurring and one-time sponsorships for open source developers.
- [Google Offerwall](https://support.google.com/admanager/answer/13860694) - AdSense and Ad Manager message that gives visitors a choice, such as a rewarded ad, before they reach gated content.
- [Lemon Squeezy](https://www.lemonsqueezy.com) - Merchant of record for selling software and digital products.
- [Memberful](https://memberful.com) - Membership and subscription software for creators and publishers.
- [Open Collective](https://opencollective.com) - Fundraising with public budgets for open source projects and communities.
- [Paddle](https://www.paddle.com) - Merchant of record for software and SaaS payments.
- [Patreon](https://www.patreon.com) - Membership platform for creators.
- [Piano](https://piano.io) - Subscription, paywall and audience analytics platform for publishers.
- [Stripe Billing](https://stripe.com/billing) - Recurring billing and subscription management.
- [Substack](https://substack.com) - Newsletter platform with paid subscriptions.
- [Web Monetization](https://webmonetization.org) - Proposed web standard for sending payments from visitors to websites, built on Open Payments.

## Ad networks for web

Display, native and header bidding for websites. Most require a minimum amount of traffic and an approval review.

- [Adsterra](https://adsterra.com) - Ad network with display, popunder, native and direct link formats.
- [Amazon Publisher Services](https://aps.amazon.com) - Header bidding and Amazon demand for publishers.
- [Carbon Ads](https://www.carbonads.net) - Single, unobtrusive ad placements for developer and design audiences.
- [EthicalAds](https://www.ethicalads.io) - Ad network for developer audiences that targets by page content, without tracking.
- [Ezoic](https://www.ezoic.com) - Ad management platform that tests placements and runs header bidding for publishers.
- [Google Ad Manager](https://admanager.google.com/home/) - Ad server and exchange for publishers with direct and programmatic demand.
- [Google AdSense](https://adsense.google.com) - Google's display ad program for websites.
- [Media.net](https://www.media.net) - Contextual ad network for publishers.
- [Mediavine](https://www.mediavine.com) - Full-service ad management for content publishers.
- [Monetag](https://monetag.com) - Ad network with push, popunder, in-page and direct link formats.
- [Prebid](https://prebid.org) - Open source header bidding for websites, apps and servers.
- [Raptive](https://raptive.com) - Ad management for creators and publishers, formerly AdThrive.

## Attribution and analytics

### Mobile measurement partners

An MMP attributes installs and in-app events to the campaign that drove them, and reports ad revenue per user.

- [Adjust](https://dev.adjust.com/en/) - Mobile measurement, attribution and fraud prevention. Links to the SDK and API docs.
- [Airbridge](https://www.airbridge.io) - Mobile and web attribution with marketing mix modeling.
- [AppMetrica](https://appmetrica.io) - Mobile analytics and attribution from Yandex.
- [AppsFlyer](https://www.appsflyer.com) - Mobile attribution, deep linking and marketing analytics.
- [Branch](https://www.branch.io) - Deep linking and mobile attribution.
- [Kochava](https://www.kochava.com) - Mobile attribution and measurement platform.
- [Singular](https://www.singular.net) - Marketing analytics that combines attribution with cost data.
- [Tenjin](https://tenjin.com) - Attribution and ad revenue analytics for mobile games.

### Platform attribution APIs

- [AdAttributionKit](https://developer.apple.com/documentation/adattributionkit) - Apple's privacy-preserving ad attribution framework.
- [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) - The iOS permission prompt required before tracking users across apps and websites.
- [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer) - API that returns the referral data of an install from Google Play.
- [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) - Apple's install attribution API that preceded AdAttributionKit.

### Product analytics

- [Amplitude](https://amplitude.com) - Product analytics and experimentation.
- [Google Analytics for Firebase](https://firebase.google.com/products/analytics) - App event analytics that connects to AdMob and Google Ads.
- [Mixpanel](https://mixpanel.com) - Event-based product analytics.
- [PostHog](https://posthog.com) - Product analytics, session replay and feature flags, with an open source core.

## Anti-fraud and traffic quality

### Bot checks

- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) - CAPTCHA alternative that verifies visitors without puzzles.
- [Fingerprint](https://fingerprint.com) - Device identification for fraud prevention.
- [hCaptcha](https://www.hcaptcha.com) - CAPTCHA and bot detection service.
- [reCAPTCHA](https://developers.google.com/recaptcha) - Google's bot detection for websites and apps.

### Device and app integrity

- [DeviceCheck and App Attest](https://developer.apple.com/documentation/devicecheck) - Apple APIs that flag devices and confirm requests come from your genuine app.
- [Firebase App Check](https://firebase.google.com/products/app-check) - Confirms backend requests come from your real app, using Play Integrity, App Attest or reCAPTCHA.
- [Play Integrity API](https://developer.android.com/google/play/integrity) - Confirms requests come from your genuine app on a genuine Android device.

### IP, VPN and proxy data

- [ipgeolocation.io](https://ipgeolocation.io) - IP geolocation with VPN, proxy and threat lookups.
- [IPinfo](https://ipinfo.io) - IP geolocation, ASN and privacy detection data.
- [IPQualityScore](https://www.ipqualityscore.com) - Fraud scoring for IP addresses, emails, phone numbers and devices.
- [MaxMind](https://www.maxmind.com) - GeoIP databases and minFraud transaction risk scoring.
- [proxycheck.io](https://proxycheck.io) - VPN and proxy detection API.
- [Scamalytics](https://scamalytics.com) - Fraud risk scores for IP addresses.
- [Spur](https://docs.spur.us/) - IP intelligence for VPN, residential proxy and anonymization detection. Links to the API docs.

### Ad fraud and supply chain

- [ads.txt and app-ads.txt](https://iabtechlab.com/ads-txt/) - IAB Tech Lab standard that lets sites and apps declare who may sell their inventory.
- [DoubleVerify](https://doubleverify.com) - Ad verification and invalid traffic detection.
- [HUMAN](https://www.humansecurity.com) - Bot and ad fraud detection, formerly White Ops.
- [Integral Ad Science](https://integralads.com) - Ad verification, brand safety and fraud detection.
- [Pixalate](https://www.pixalate.com) - Ad fraud detection and supply chain quality ratings for apps, CTV and the web.
- [sellers.json](https://iabtechlab.com/sellers-json/) - IAB Tech Lab standard that lists the sellers an ad system pays.
- [TrafficGuard](https://www.trafficguard.ai) - Invalid click and install detection for ad campaigns.

## Policies

Read the official rules of every platform you ship on before you add ads, rewards or purchases. A reward for a rating, review, join, invite or like breaks most of them.

### App stores

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) - Rules for App Store apps, including ads, in-app purchases and incentives.
- [Apple User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/) - When an app must ask for permission to track.
- [Google Play Ads policy](https://support.google.com/googleplay/android-developer/answer/9857753) - Rules for ads in Play apps, including rewarded formats.
- [Google Play Developer Policy Center](https://play.google/developer-content-policy/) - All Google Play developer policies in one place.
- [Google Play Families policies](https://support.google.com/googleplay/android-developer/answer/9893335) - Extra rules for apps that target children.
- [Google Play Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738) - When Google Play Billing is required for digital goods.

### Ad programs

- [AdMob program policies](https://support.google.com/admob/answer/6128543) - Rules for AdMob publishers, including rewarded ads and invalid traffic.
- [AdSense Program policies](https://support.google.com/adsense/answer/48182) - Rules for AdSense publishers, including the ban on incentivized clicks.

### PC and browser

- [Chrome Web Store ads policy](https://developer.chrome.com/docs/webstore/program-policies/ads) - Rules for ads shown by extensions.
- [Chrome Web Store affiliate ads policy](https://developer.chrome.com/docs/webstore/program-policies/affiliate-ads) - Rules for affiliate links and codes in extensions.
- [Chrome Web Store Program Policies](https://developer.chrome.com/docs/webstore/program-policies/) - All policies for Chrome extensions.
- [Firefox Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/) - Rules for add-ons listed on addons.mozilla.org.
- [Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/) - Terms between Valve and Steam users, including Steam Wallet rules.
- [Steamworks onboarding rules](https://partner.steamgames.com/doc/gettingstarted/onboarding) - Valve's rules for what may ship on Steam, which exclude applications with advertising-based business models.

### Communities and messaging

- [Discord Community Guidelines](https://discord.com/guidelines) - Platform rules, including spam and platform manipulation.
- [Discord Terms of Service](https://discord.com/terms) - Terms for every Discord user, developer and server owner.
- [Telegram Bot Platform Developer Terms of Service](https://telegram.org/tos/bot-developers) - Terms for bot developers.
- [Telegram Mini Apps Terms of Service](https://telegram.org/tos/mini-apps) - Terms for Mini Apps.
- [Telegram Stars Terms of Service](https://telegram.org/tos/stars) - Terms for buying, spending and receiving Stars.

## Open source tools and libraries

- [Adjust Android SDK](https://github.com/adjust/android_sdk) - Adjust measurement SDK for Android.
- [Adjust iOS SDK](https://github.com/adjust/ios_sdk) - Adjust measurement SDK for iOS.
- [App Store Server Library for Node.js](https://github.com/apple/app-store-server-library-node) - Apple's library for the App Store Server API, notifications and signed transactions.
- [App Store Server Library for Python](https://github.com/apple/app-store-server-library-python) - The same library for Python.
- [AppLovin MAX Flutter](https://github.com/AppLovin/AppLovin-MAX-Flutter) - Official Flutter plugin for AppLovin MAX.
- [cordova-plugin-purchase](https://github.com/j3k0/cordova-plugin-purchase) - In-app purchases for Cordova and Capacitor apps.
- [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - Browser fingerprinting library.
- [Flutter in_app_purchase](https://github.com/flutter/packages/tree/main/packages/in_app_purchase) - Flutter team's plugin for App Store and Google Play purchases.
- [Ghost](https://github.com/TryGhost/Ghost) - Publishing platform with built-in paid memberships.
- [Google Mobile Ads examples for Android](https://github.com/googleads/googleads-mobile-android-examples) - Sample apps for every AdMob format, including rewarded.
- [Google Mobile Ads examples for iOS](https://github.com/googleads/googleads-mobile-ios-examples) - Sample apps for every AdMob format, including rewarded.
- [Google Mobile Ads Flutter plugin](https://github.com/googleads/googleads-mobile-flutter) - Official AdMob and Ad Manager plugin for Flutter.
- [Google Mobile Ads Unity plugin](https://github.com/googleads/googleads-mobile-unity) - Official AdMob and Ad Manager plugin for Unity.
- [IAB TCF JavaScript library](https://github.com/InteractiveAdvertisingBureau/iabtcf-es) - Encode and decode Transparency and Consent Framework strings.
- [Kill Bill](https://github.com/killbill/killbill) - Subscription billing and payments platform.
- [Lago](https://github.com/getlago/lago) - Usage-based metering and billing.
- [libmaxminddb](https://github.com/maxmind/libmaxminddb) - C library for reading MaxMind DB files such as GeoIP databases.
- [lists_vpn](https://github.com/X4BNet/lists_vpn) - Maintained lists of VPN and data center IP ranges.
- [Matomo](https://github.com/matomo-org/matomo) - Self-hosted web and app analytics.
- [OpenRTB](https://github.com/InteractiveAdvertisingBureau/openrtb2.x) - Specification of the protocol used in programmatic ad auctions.
- [PostHog](https://github.com/PostHog/posthog) - Product analytics, session replay and feature flags.
- [Prebid Server](https://github.com/prebid/prebid-server) - Server-side header bidding.
- [Prebid.js](https://github.com/prebid/Prebid.js) - Header bidding library for websites.
- [RevenueCat Android SDK](https://github.com/RevenueCat/purchases-android) - RevenueCat purchases SDK for Android.
- [RevenueCat iOS SDK](https://github.com/RevenueCat/purchases-ios) - RevenueCat purchases SDK for iOS.
- [Revive Adserver](https://github.com/revive-adserver/revive-adserver) - Self-hosted ad server for websites.

## Learning

### Ads and mediation

- [AdMob rewarded ads](https://developers.google.com/admob/android/rewarded) - Official guide to rewarded ads on Android.
- [AdMob server-side verification](https://developers.google.com/admob/android/ssv) - Verify rewarded ad callbacks on your server before you grant the reward.
- [AppLovin MAX vs ironSource vs AdMob](https://moonetix.com/academy/monetization/applovin-max-vs-ironsource-vs-admob) - Bidding, networks, SDKs and reporting compared.
- [eCPM vs RPM](https://moonetix.com/academy/glossary/ecpm-vs-rpm) - Impression-based and page-based earnings per 1,000.
- [Hybrid monetization for games](https://moonetix.com/academy/monetization/hybrid-monetization) - Mixing rewarded ads, offerwalls, interstitials and purchases by player segment.
- [In-app bidding vs waterfall](https://moonetix.com/academy/glossary/in-app-bidding-vs-waterfall) - How mediation picks the winning ad.
- [Prebid overview](https://docs.prebid.org/overview/intro.html) - How header bidding works and what each Prebid product does.
- [Rewarded video vs interstitial ads](https://moonetix.com/academy/monetization/rewarded-video-vs-interstitial-ads) - When to use each, and what the policies allow.
- [Unity LevelPlay documentation](https://docs.unity.com/en-us/grow/levelplay/platform/fundamentals) - Concepts and setup for LevelPlay mediation.
- [What are rewarded ads?](https://moonetix.com/academy/glossary/what-are-rewarded-ads) - Rewarded video, offerwalls and rewarded surveys compared.
- [What is ad mediation?](https://moonetix.com/academy/glossary/what-is-ad-mediation) - Waterfalls and bidding in plain terms.
- [What is fill rate?](https://moonetix.com/academy/glossary/what-is-fill-rate) - The formula, and how to set your own benchmark.

### Purchases, currencies and rewards

- [Auto-renewable subscriptions](https://developer.apple.com/app-store/subscriptions/) - Apple's guide to offering and managing subscriptions.
- [Fight fraud and abuse in Google Play Billing](https://developer.android.com/google/play/billing/security) - Verify purchases on your server and handle refunds.
- [Gift card APIs for rewards apps](https://moonetix.com/academy/monetization/gift-card-apis-rewards-apps) - Catalogs, pricing and safe ordering for reward payouts.
- [How to price AI credits](https://moonetix.com/academy/monetization/how-to-price-ai-credits) - Credit value, margin, packs and free tiers from real cost per generation.
- [Offerwall vs rewarded video](https://moonetix.com/academy/monetization/offerwall-vs-rewarded-video) - How each pays and how they affect a game economy.
- [Reward hold periods](https://moonetix.com/academy/monetization/reward-hold-periods) - Holding earnings before cash-out to absorb reversals.
- [Unity IAP tutorial](https://moonetix.com/academy/integrations/unity-iap-tutorial) - Sell coins and a Remove Ads purchase, with server-side validation.
- [Virtual currency exchange rate](https://moonetix.com/academy/monetization/virtual-currency-exchange-rate) - Rate per dollar, user split, rounding and bonuses, with worked setups.
- [Virtual economy design](https://moonetix.com/academy/monetization/virtual-economy-design) - Sources, sinks and the metrics that catch inflation.
- [What is a virtual currency?](https://moonetix.com/academy/glossary/what-is-a-virtual-currency) - Soft and hard currency, earned and bought.

### Measurement

- [GAID and IDFA](https://moonetix.com/academy/glossary/gaid-and-idfa) - Mobile advertising IDs, ATT and the Android AD_ID permission.
- [SKAdNetwork and ATT](https://moonetix.com/academy/glossary/skadnetwork-and-att) - What iOS attribution postbacks hold and what advertisers still see.
- [What is an MMP?](https://moonetix.com/academy/glossary/what-is-an-mmp) - How a mobile measurement partner credits installs and events.
- [What is attribution?](https://moonetix.com/academy/glossary/what-is-attribution) - Last click, view-through and attribution windows.

### Traffic quality

- [Emulator and device farm detection](https://moonetix.com/academy/traffic-quality/emulator-device-farm-detection) - What Play Integrity and App Attest prove, and server-side farm signals.
- [Play Integrity verdicts](https://developer.android.com/google/play/integrity/verdicts) - What each field of an integrity verdict means.
- [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) - Validate a Turnstile token on your server.
- [What is a residential proxy?](https://moonetix.com/academy/glossary/what-is-a-residential-proxy) - How it differs from VPN and data center traffic.
- [What is device fingerprinting?](https://moonetix.com/academy/glossary/what-is-device-fingerprinting) - Signals, accuracy limits and privacy rules.
- [What is invalid traffic?](https://moonetix.com/academy/glossary/what-is-invalid-traffic) - GIVT and SIVT under the MRC standard.
- [What is IP reputation?](https://moonetix.com/academy/glossary/what-is-ip-reputation) - How sites detect VPNs and proxies, and how to treat flagged visitors fairly.

### Platform rules

- [Ads in Steam games](https://moonetix.com/academy/monetization/ads-in-steam-games) - Valve's rules on in-game and rewarded ads, with sources.
- [Incentivized installs and Google Play policy](https://moonetix.com/academy/strategy/incentivized-installs-google-play-policy) - What the rules allow and what gets apps removed.
- [Monetize a browser extension](https://moonetix.com/academy/monetization/monetize-browser-extension) - Store rules on ads and affiliate links, and a server-side points balance.
- [Monetize a Discord bot](https://moonetix.com/academy/monetization/monetize-discord-bot) - Premium Apps, external memberships and what Discord bans.
- [Offerwall age rules](https://moonetix.com/academy/traffic-quality/offerwall-age-rules) - The 16+ requirement and age gate options.
- [Offerwalls in iOS apps](https://moonetix.com/academy/monetization/offerwall-ios-app-rules) - What Apple guidelines 3.1.1, 3.2.2 and 5.1.2 mean for rewarded offers.
- [Telegram Stars vs offerwall](https://moonetix.com/academy/monetization/telegram-stars-vs-offerwall) - How channels and bots earn with each, and when to use both.

## About Moonetix

Moonetix is an affiliate network. Publishers add its offerwall to an app, game, website, bot or community, and users earn the publisher's own currency by completing offers. Integration is a signed link, an iframe, the Offers API, or SDKs for Android, iOS, Flutter, React Native and Unity, with documentation at [docs.moonetix.com](https://docs.moonetix.com).

Open source from Moonetix:

- **Data and tools:** [datacenter-ip-ranges](https://github.com/moonetix/datacenter-ip-ranges), [postback-tester](https://github.com/moonetix/postback-tester), [affiliate-postback-macros](https://github.com/moonetix/affiliate-postback-macros), [country-tiers](https://github.com/moonetix/country-tiers), [reward-economy-kit](https://github.com/moonetix/reward-economy-kit), [offerwall-fraud-playbook](https://github.com/moonetix/offerwall-fraud-playbook), [signup-guard](https://github.com/moonetix/signup-guard), [referral-engine](https://github.com/moonetix/referral-engine), [gamification-kit](https://github.com/moonetix/gamification-kit).
- **Integrations:** [offerwall-postback-handlers](https://github.com/moonetix/offerwall-postback-handlers), [offerwall-nextjs-starter](https://github.com/moonetix/offerwall-nextjs-starter), [offerwall-laravel](https://github.com/moonetix/offerwall-laravel), [offerwall-django](https://github.com/moonetix/offerwall-django), [telegram-mini-app-offerwall](https://github.com/moonetix/telegram-mini-app-offerwall), [discord-rewards-bot](https://github.com/moonetix/discord-rewards-bot), [moonetix-offerwall-wordpress](https://github.com/moonetix/moonetix-offerwall-wordpress).

Publisher accounts: [moonetix.com/register](https://moonetix.com/register?from=github-awesome-app-monetization).
