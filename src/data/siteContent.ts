export interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  content: string;
}

export const siteContent: Record<string, Record<string, PageContent>> = {
  solutions: {
    "white-label-online-casino-software": {
      title: "White Label Online Casino Software",
      subtitle: "Launch Your Casino Brand in Weeks, Not Months",
      description: "Our comprehensive White Label solution provides everything you need to start a successful online casino business with your own brand identity.",
      features: [
        "Fully customizable frontend design",
        "Integrated payment gateways (Fiat & Crypto)",
        "3000+ Games from top providers",
        "Robust Backoffice & CRM",
        "Licensing assistance included"
      ],
      content: "Our White Label Online Casino Software is the fastest way to enter the iGaming market. We handle the technical infrastructure, game integrations, and payment processing, allowing you to focus on marketing and player retention. With our solution, you get a fully functional casino platform under your own brand name, complete with a license sub-lease option."
    },
    "turnkey-casino-software": {
      title: "Turnkey Casino Software",
      subtitle: "Complete Control for Established Operators",
      description: "A standalone software solution for operators who have their own license and want full control over their operation.",
      features: [
        "Self-hosted option available",
        "Full API access",
        "Customizable bonus engine",
        "Advanced risk management tools",
        "Unlimited scalability"
      ],
      content: "Profitplus Gaming's Turnkey solution is designed for experienced operators who require a robust, scalable platform. Unlike White Label, Turnkey gives you complete ownership of the technical and legal aspects, including your own gaming license. We provide the technology; you run the business your way."
    },
    "self-service-casino": {
      title: "Self-Service Casino",
      subtitle: "Modular Solutions for Specific Needs",
      description: "Pick and choose the components you need to enhance your existing iGaming platform.",
      features: [
        "API-first architecture",
        "Module-based integration",
        "Pay only for what you use",
        "Seamless third-party compatibility",
        "Rapid deployment"
      ],
      content: "Already have a platform but missing a sportsbook or a specific game provider? Our Self-Service Casino model allows you to integrate specific modules into your existing infrastructure via API. It's the flexible choice for growing businesses."
    }
  },
  services: {
    "casino-games-integration": {
      title: "Casino Games Integration",
      subtitle: "One API, Thousands of Games",
      description: "Seamlessly integrate thousands of games from the world's top providers through a single unified API.",
      features: [
        "Single API for all providers",
        "Over 50+ Game Providers",
        "Slots, Live Casino, Virtual Sports",
        "Seamless Wallet integration",
        "Monthly new game updates"
      ],
      content: "Stop wasting time integrating game providers one by one. With Profitplus Gaming's Aggregation API, you get instant access to the industry's best content including Evolution, Pragmatic Play, Ezugi, and many more. Our robust API ensures high performance and zero downtime."
    },
    "casino-games-aggregator": {
      title: "Casino Games Aggregator",
      subtitle: "The Ultimate Content Hub",
      description: "Access a vast library of gaming content through our centralized aggregation platform.",
      features: [
        "Unified reporting system",
        "Automated game management",
        "Promotional tools across providers",
        "Cross-provider jackpots",
        "Real-time analytics"
      ],
      content: "Our Game Aggregator solution simplifies content management. Instead of managing multiple contracts and technical integrations, you deal with one partner. We negotiate the best rates with providers so you can offer the best games to your players at competitive margins."
    },
    "online-casino-payment-solutions": {
      title: "Online Casino Payment Solutions",
      subtitle: "Secure Global Transaction Processing",
      description: "Accept payments from players worldwide with our multi-currency and crypto-friendly payment gateway.",
      features: [
        "Credit/Debit Cards (Visa/Mastercard)",
        "E-wallets (Skrill, Neteller, PayPal)",
        "Cryptocurrencies (BTC, ETH, USDT)",
        "Local payment methods for Asia/LatAm/Africa",
        "Anti-fraud protection"
      ],
      content: "Payment processing is the backbone of any iGaming operation. Our gateway supports over 100 payment methods, ensuring your players can deposit and withdraw easily, no matter where they are. We specialize in high-risk processing and crypto payments."
    },
    "bonus-system-standalone": {
      title: "Bonus System Standalone",
      subtitle: "Engage and Retain Players",
      description: "A powerful, standalone bonus engine to drive player acquisition and retention.",
      features: [
        "Deposit bonuses & Free spins",
        "Cashback automation",
        "Tournaments and Leaderboards",
        "VIP/Loyalty levels",
        "Wagering requirement management"
      ],
      content: "Gamification is key to retention. Our standalone bonus system can be integrated into any platform to manage complex promotional campaigns, track wagering requirements in real-time, and reward loyal players automatically."
    },
    "sportsbook-solutions-integration-api": {
      title: "Sportsbook Solutions & Integration API",
      subtitle: "World-Class Sports Betting Feed",
      description: "Add a comprehensive sportsbook to your casino with our high-speed betting API.",
      features: [
        "Pre-match and Live betting",
        "50,000+ monthly events",
        "eSports coverage",
        "Virtual sports",
        "Risk management included"
      ],
      content: "Offer your players the thrill of sports betting. Our Sportsbook solution covers all major leagues and sports, providing competitive odds and a massive range of markets. Available as a turnkey solution or an API integration."
    },
    "bank-accounts": {
      title: "Bank Accounts & Corporate Structure",
      subtitle: "Financial Infrastructure for iGaming",
      description: "We assist in setting up corporate bank accounts and merchant accounts for high-risk businesses.",
      features: [
        "Offshore banking introduction",
        "IBAN accounts for gaming companies",
        "Crypto-friendly banking",
        "Corporate formation services",
        "Compliance assistance"
      ],
      content: "Navigating the financial world as a gaming company can be difficult. We leverage our network of gaming-friendly banks and EMIs to help you secure the necessary financial infrastructure to operate legally and efficiently."
    },
    "licensing": {
      title: "Gaming Licensing Services",
      subtitle: "Operate Legally and globally",
      description: "Expert guidance in obtaining gaming licenses in Curacao, Malta, Kahnawake, and other jurisdictions.",
      features: [
        "Curacao Sub-license options",
        "Malta (MGA) application support",
        "Anjouan & Kahnawake licensing",
        "Compliance consulting",
        "Corporate structuring for licensing"
      ],
      content: "A gaming license is your passport to the global market. Whether you need a quick and affordable Curacao license or a prestigious MGA license, our legal team guides you through the entire application process, ensuring full compliance."
    },
    "live-casino-bundle": {
      title: "Live Casino Bundle",
      subtitle: "Real Dealer Experience",
      description: "A curated package of the best Live Dealer games for your platform.",
      features: [
        "Blackjack, Roulette, Baccarat",
        "Game Shows",
        "Multi-language dealers",
        "HD streaming quality",
        "Mobile optimized"
      ],
      content: "Bring the casino floor to your players' screens. Our Live Casino bundle includes top-tier tables from Evolution, Pragmatic Live, and others, offering an immersive experience that rivals land-based casinos."
    },
    "slots-bundle": {
      title: "Slots Bundle",
      subtitle: "The Best Reel Action",
      description: "A massive collection of the most popular slot games.",
      features: [
        "Classic 3-reel slots",
        "Modern Video Slots",
        "Megaways & Jackpots",
        "Buy Feature games",
        "RNG Certified"
      ],
      content: "Slots are the biggest revenue driver. Our bundle gives you instant access to thousands of titles, from classic fruit machines to the latest high-volatility video slots, ensuring there is something for every type of player."
    }
  },
  casino: {
    "online-casino-software": {
      title: "Online Casino Software",
      subtitle: "The Core of Your Business",
      description: "A robust, stable, and secure platform to run your online casino operation.",
      features: [
        "99.9% Uptime guarantee",
        "Mobile-first design",
        "Multi-language & Multi-currency",
        "Affiliate system included",
        "SEO friendly"
      ],
      content: "Our core Online Casino Software is the foundation of your success. Built with the latest technology, it ensures speed, security, and scalability. It comes with a powerful CMS, allowing you to manage content, banners, and games with ease."
    },
    "live-casino-software": {
      title: "Live Casino Software",
      subtitle: "Streaming Technology for Live Games",
      description: "Specialized software for operators running their own live dealer studios.",
      features: [
        "Low-latency video streaming",
        "Dealer management interface",
        "Bet detection systems",
        "Studio setup consultancy",
        "Custom branding options"
      ],
      content: "If you plan to run your own live studio, our Live Casino Software provides the technical backbone. From video encoding to bet processing, we handle the tech so you can focus on the production value."
    },
    "casino-games": {
      title: "Casino Games Library",
      subtitle: "Diverse Content for All Players",
      description: "Explore our full catalog of RNG and Live games.",
      features: [
        "Table Games (Poker, Blackjack)",
        "Crash Games (Aviator style)",
        "Skill-based games",
        "Scratch cards",
        "Keno"
      ],
      content: "Diversity keeps players engaged. Beyond slots, our library includes a wide array of table games, casual games, and instant-win games to cater to different player demographics and preferences."
    },
    "lottery-bingo": {
      title: "Lottery & Bingo Software",
      subtitle: "Community Gaming Solutions",
      description: "Launch your own lottery or bingo site with our specialized software.",
      features: [
        "Global lottery feeds",
        "Custom bingo rooms",
        "Chat functionality",
        "Syndicate play",
        "Instant draws"
      ],
      content: "Lottery and Bingo appeal to a broad audience. Our software allows you to offer betting on international lotteries or host your own bingo rooms, fostering a strong community feel among your players."
    },
    "casino-tournament": {
      title: "Casino Tournament Software",
      subtitle: "Competitive Social Gaming",
      description: "Run exciting tournaments to boost player activity and retention.",
      features: [
        "Real-time leaderboards",
        "Flexible prize structures",
        "Automated payouts",
        "Cross-game tournaments",
        "Schedule management"
      ],
      content: "Turn solo play into a competition. Our tournament module lets you set up daily, weekly, or monthly tournaments on specific games, driving engagement and increasing session times."
    },
    "streaming-platform": {
      title: "Streaming Platform",
      subtitle: "Live Sports & Event Streaming",
      description: "Integrate live sports streams directly into your betting platform.",
      features: [
        "Low latency",
        "Rights management",
        "Mobile compatible",
        "In-stream betting",
        "Match statistics overlay"
      ],
      content: "Watch and Bet. Our streaming solution allows you to broadcast live sports events directly on your site, significantly increasing in-play betting volume and user time-on-site."
    }
  },
  "white-label": {
    "white-label-betting-platform": {
      title: "White Label Betting Platform",
      subtitle: "Launch a Sportsbook Fast",
      description: "A complete sports betting solution branded for you.",
      features: [
        "Comprehensive sportsbook",
        "Risk management team",
        "24/7 Support",
        "Customizable UI",
        "Quick market entry"
      ],
      content: "Enter the lucrative sports betting market with our White Label Betting Platform. We provide the odds, the risk management, and the platform; you provide the brand and the players. It's the most efficient route to becoming a bookmaker."
    },
    "white-label-casino": {
      title: "White Label Casino",
      subtitle: "Your Brand, Our Technology",
      description: "The classic White Label solution for casino operators.",
      features: [
        "License coverage",
        "Payment processing managed",
        "Game aggregation included",
        "Ready-to-go frontend",
        "Fast setup (2-4 weeks)"
      ],
      content: "Our flagship White Label Casino product is the industry standard for new operators. Avoid the headache of obtaining your own license and banking agreements. We provide a turnkey business-in-a-box solution that lets you start generating revenue almost immediately."
    }
  }
};
