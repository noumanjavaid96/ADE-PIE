import os
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Go to the local file
        page.goto(f'file://{file_path}')

        # --- Interact with the page to test the corrected logic ---

        # 1. Click the "Answer Incorrectly" button for Q1
        incorrect_btn_q1 = page.get_by_role("button", name="Answer Incorrectly (1st try)")
        incorrect_btn_q1.click()

        # Assert that the score has decreased to 70
        score_value = page.locator("#score-value")
        expect(score_value).to_have_text("70")

        # 2. Click the "Answer Correctly" button for Q1
        correct_btn_q1 = page.get_by_role("button", name="Answer Correctly (2nd try)")
        correct_btn_q1.click()

        # Assert that the score has increased to 72
        expect(score_value).to_have_text("72")

        # 3. Click the "Answer Correctly" button for Q2
        correct_btn_q2 = page.get_by_role("button", name="Answer Correctly (1st try)")
        correct_btn_q2.click()

        # Assert that the score has increased to 77
        expect(score_value).to_have_text("77")

        # Take a full-page screenshot of the final state
        page.screenshot(path='jules-scratch/verification/verification_final_fix.png', full_page=True)

        browser.close()

if __name__ == "__main__":
    run()