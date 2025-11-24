import { test, expect } from '@du_pw/test';
import { getRole, logInViaForm, logOutViaUi } from "@du_pw/support/users";

test.describe('@du_policies - Login and out Tests', () => {
  const policy_editor = getRole('policy_editor');

  // @source https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1203994715/UAT+-+Policies+local
  test('POL-001 - Create a new Policy node', async ({page, context}) => {
    // 1. Authenticate as qa_policy_editor.
    await logInViaForm(page, context, policy_editor);

    // 2. Navigate to the "add Policy" form using the Admin toolbar.
    //    Content > Add content > Policy
    // await page.getByRole('link', { name: 'Content' }).click();
    await page.locator('[data-drupal-link-system-path="admin/content"]').click();
    // await page.locator('[data-drupal-link-system-path="node/add"]').click();
    // await page.getByRole('link', { name: 'Policy' }).click();

    //
    // Enter “Hello World” for the Title
    //
    // At the bottom of the editing form, click Save.
  });
});