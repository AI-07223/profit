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
    "daily-match-posters": {
      title: "Daily Match Posters",
      subtitle: "Engage Your Audience Every Day",
      description: "High-quality, professional match posters delivered daily to keep your betting community engaged and excited about upcoming events.",
      features: [
        "Daily custom designs for major sports events",
        "Optimized for social media (Instagram, Telegram, Facebook)",
        "Includes your brand logo and specific odds",
        "High-resolution formats for print and web",
        "Fast turnaround times for last-minute matches"
      ],
      content: "Consistent visual content is crucial for maintaining an active betting community. Our design team creates eye-catching posters for daily cricket matches, football leagues, and other major sporting events. These posters are not just images; they are call-to-action tools designed to drive bets and user activity on your platform. We handle the creative heavy lifting so you can focus on operations."
    },
    "google-meta-ads": {
      title: "Google & Meta Ads Management",
      subtitle: "Targeted Traffic Acquisition",
      description: "Expertly managed advertising campaigns on Google and Meta platforms designed to maximize ROI and acquire high-value players.",
      features: [
        "Strategic audience targeting and segmentation",
        "Compliance-focused ad copy and creatives",
        "Real-time performance monitoring and optimization",
        "Retargeting campaigns for higher conversion",
        "Detailed analytics and ROI reporting"
      ],
      content: "Navigating the restrictions of gambling advertising on major platforms requires expertise. Our team specializes in running compliant, high-converting campaigns on Google Search, Display, Facebook, and Instagram. We use advanced targeting strategies to find players who are actively looking for betting platforms, ensuring your marketing budget is spent efficiently on acquiring genuine users."
    },
    "telegram-ads": {
      title: "Telegram Ads Marketing",
      subtitle: "Tap Into the Most Active Betting Communities",
      description: "Strategic marketing campaigns within the Telegram ecosystem, reaching highly engaged audiences in the iGaming and betting niche.",
      features: [
        "Direct placement in high-traffic betting channels",
        "Custom bot development for user engagement",
        "Sponsored posts and community management",
        "Cross-promotion strategies",
        "Analytics on channel growth and user acquisition"
      ],
      content: "Telegram is the heartbeat of the modern betting industry. Our Telegram Ads service helps you penetrate this exclusive market. We have established networks of high-authority channels and influencers where we can promote your brand. Whether it's through sponsored posts, channel takeovers, or automated bot marketing, we ensure your brand gets visible in front of the most relevant audience available."
    },
    "logo-design": {
      title: "Professional Logo Design",
      subtitle: "Identity That Builds Trust",
      description: "Custom logo design services that create a strong, memorable, and trustworthy brand identity for your iGaming business.",
      features: [
        "Multiple unique concepts to choose from",
        "Vector files for unlimited scalability",
        "Brand color palette and typography selection",
        "Social media kit included",
        "Full copyright ownership transfer"
      ],
      content: "Your logo is the first thing a player sees. In the crowded iGaming market, a professional, polished brand identity is essential for building trust. Our designers understand the aesthetics of the betting world—bold, dynamic, and reliable. We work with you to create a visual identity that resonates with your target demographic and stands out from the competition."
    },
    "landing-page": {
      title: "High-Converting Landing Pages",
      subtitle: "Turn Clicks into Depositors",
      description: "Optimized landing pages designed specifically for iGaming campaigns, focused on maximum conversion rates and user registration.",
      features: [
        "Mobile-first responsive design",
        "Fast loading speeds for better UX",
        "Integrated registration forms and bonus offers",
        "A/B testing capabilities",
        "SEO-friendly structure"
      ],
      content: "Traffic is useless if it doesn't convert. Our landing page service focuses on one metric: Conversion Rate. We build dedicated pages for your specific campaigns (e.g., IPL signups, Welcome Bonus offers) that remove distractions and guide the user towards a single goal: depositing. Using psychological triggers and clean UX, we ensure the highest possible return on your ad spend."
    },
    "branding-solution": {
      title: "Complete Branding Solution",
      subtitle: "End-to-End Brand Strategy",
      description: "A holistic approach to building your iGaming brand, from visual identity to tone of voice and market positioning.",
      features: [
        "Comprehensive brand guidelines book",
        "Unified visual language across all channels",
        "Tone of voice and content strategy",
        "Competitor analysis and positioning",
        "Marketing collateral templates"
      ],
      content: "Building a B2C brand requires more than just a logo. It requires a consistent voice and experience across every touchpoint. Our Complete Branding Solution gives you a blueprint for success. We define who you are, who your players are, and how you speak to them. This consistency builds long-term loyalty and turns a generic platform into a recognized market leader."
    },
    "backup-team": {
      title: "24/7 Backup & Support Team",
      subtitle: "Reliability When You Need It Most",
      description: "A dedicated technical and operational support team available round-the-clock to ensure your business never stops running.",
      features: [
        "24/7 Technical monitoring and response",
        "Emergency issue resolution",
        "Server uptime management",
        "Player support assistance",
        "Seamless communication channels"
      ],
      content: "The iGaming industry never sleeps, and neither do we. Our 24/7 Backup Team acts as your safety net. Whether it's a server spike during a major match or a critical payment gateway issue, our team is on standby to resolve it immediately. We provide the peace of mind you need to focus on growth, knowing that your backend operations are in safe, capable hands."
    },
    "expert-team": {
      title: "Expert Consultancy Team",
      subtitle: "Achieve Your Targets with Industry Veterans",
      description: "Access to a team of iGaming veterans who provide strategic guidance to help you hit your revenue and growth targets.",
      features: [
        "Customized growth strategy planning",
        "Risk management and fraud prevention consulting",
        "Market expansion advice",
        "Operational efficiency audits",
        "Regulatory compliance guidance"
      ],
      content: "Don't guess your way to success. Our Expert Team service gives you direct access to professionals who have built and scaled successful iGaming brands. We work as an extension of your management team, analyzing your current performance and identifying untapped opportunities. From optimizing your bonus strategies to refining your acquisition funnels, we provide actionable insights that directly impact your bottom line."
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
