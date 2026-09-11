/* ---------------------------------------------------------------------------
   Runtime configuration for BranchForge. Edited through /admin.html, or by hand.

   THIS FILE IS PUBLIC. Everything in it ships to every visitor.
   Payment Link URLs, business details and the admin hash are all fine to publish.
   A Stripe SECRET key (sk_live_... / sk_test_...) is NOT. Never put one here.
--------------------------------------------------------------------------- */
window.SITE_CONFIG = {
  // SHA-256 of the admin passphrase. This only hides the form from a casual
  // visitor -- anyone can read this file and bypass it. Nothing behind it is
  // secret; the real gate on changing the live site is your GitHub login.
  admin: { passHash: "5b9e9741342f4f8a87a03b52634853031e9478d49220cadd57e189392e0b7bb3" },

  // Shown in the footer of every page. Google and Stripe both verify these.
  business: {
    company:   "BranchForge Ltd",
    companyNo: "",
    vatNo:     "",
    street:    "3 Hopton St",
    city:      "Worcester",
    postcode:  "WR2 5LH",
    phone:     "+44 1905 420425"
  },

  // Data collector that feeds the admin dashboard. Without it the dashboard
  // shows nothing rather than inventing figures. See stripe/README.md.
  analyticsEndpoint: "https://branchforge-haulcrest-collector.stellapark1141.workers.dev",

  // Optional: Checkout Sessions for baskets with more than one machine.
  checkoutEndpoint: "https://branchforge-haulcrest-collector.stellapark1141.workers.dev/checkout",

  // One Stripe Payment Link per machine. Blank = that machine routes to an
  // enquiry instead of pretending to take payment.
  paymentLinks: {
    "BF-HC15H": "https://buy.stripe.com/7sYcN51Ge3wif7edDC6c000",
    "BF-CREX10K": "https://buy.stripe.com/4gMcN5gB8d6S7EM2YY6c001",
    "BF-MD500": "https://buy.stripe.com/14A00jfx45Eq6AI7fe6c002",
    "BF-MSS739": "https://buy.stripe.com/14A4gzbgO6Iu2ks8ji6c003"
  }
};
