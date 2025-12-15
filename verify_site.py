from playwright.sync_api import sync_playwright

def verify_site_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Homepage
        print("Navigating to Homepage...")
        page.goto("http://localhost:3000")
        page.wait_for_selector("text=Profitplus Gaming")
        page.screenshot(path="/home/jules/verification/01_homepage.png", full_page=True)
        print("Homepage verified.")

        # 2. Verify Dynamic Page (White Label Casino)
        print("Navigating to White Label Casino page...")
        # Direct navigation is safer than hoping dropdown click works instantly in headless
        page.goto("http://localhost:3000/solutions/white-label-online-casino-software")

        # Using a more robust selector that doesn't rely on exact text match if font loading is slow
        # But we know the H1 should contain "White Label Online Casino"
        page.wait_for_selector("h1", timeout=10000)

        # Take screenshot
        page.screenshot(path="/home/jules/verification/02_dynamic_page.png", full_page=True)
        print("Dynamic Page verified.")

        # 3. Verify About Us
        print("Navigating to About Us...")
        page.goto("http://localhost:3000/about-us")
        page.wait_for_selector("h1", timeout=10000)
        page.screenshot(path="/home/jules/verification/03_about_us.png", full_page=True)
        print("About Us verified.")

        # 4. Verify Contact Us
        print("Navigating to Contact Us...")
        page.goto("http://localhost:3000/contact-us")
        page.wait_for_selector("h1", timeout=10000)
        page.screenshot(path="/home/jules/verification/04_contact_us.png", full_page=True)
        print("Contact Us verified.")

        browser.close()

if __name__ == "__main__":
    verify_site_navigation()
