# DU Policies Module

A Drupal custom module for managing and displaying University of Denver policy documents in PDF form.

## Version

**10.26.2** - Removes the use of taxonomy to create drop-down fields, using text lists instead. Also adds twig template usage. 
**10.26.0** - This version is a carbon copy of the configuration harvested from DU's Drupal 9 instance.

## Description

The DU Policies module provides a complete content type, paragraph type, views, taxonomies, and user role for managing university policy documents. It enables content editors to add, update, list, and search policy documents with structured metadata.

## Entity Structure

```
Policy Node (node.type.policy)
├── Field: Policy Document (field_policy_document) - File upload
├── Field: Keywords (field_keywords) - Text
├── Field: Policy Approver (field_policy_approver)
├── Field: Policy Responsible Department (field_policy_responsible_departm) 
├── Field: Policy State (field_policy_state)
└── Field: Updated Date (field_updated_date) - Date

Policy Paragraph (paragraphs.paragraphs_type.policy)
├── Field: Policy State (field_policy_state)
└── Renders policy view block within page content

Policy View Block (views.view.policy)
├── Displays list of policy nodes
├── Exposed filters (using Better Exposed Filters module)
└── Searchable and filterable by metadata

User Role: Policy Editor (user.role.policy_editor)
└── Permissions for managing policy content
```

## Dependencies

### Drupal Module Dependencies
- `views` (core)
- `better_exposed_filters` (contrib)

### Composer Dependencies
- `drupal/better_exposed_filters: ^6.0`

## Installation

1. Ensure dependencies are installed:
   ```bash
   composer require drupal/better_exposed_filters
   ```

2. Enable the module:
   ```bash
   drush en du_policies
   ```

3. Clear cache:
   ```bash
   drush cr
   ```

## Known Shortcomings

### Configuration Installation
- **All configuration is added via the `config/install` directory.** This works well for fresh installations, but update hooks need to be implemented to safely install on sites with existing roles, paragraphs, or basic page configurations.
- The policy paragraph type must be **manually added** to the paragraph field on a basic page before it can be used.

### Template Dependencies
- The policy view currently renders using Twig templates from the `pl_drupal` theme:
  - `themes/custom/pl_drupal/templates/field/field--node--field-page-content.html.twig`
- **These templates and related CSS need to be moved into the `du_policies` module** for proper encapsulation and portability.

### Testing
- No automated testing has been implemented yet.

## Future Enhancements

- [ ] **Playwright testing** - Add end-to-end testing coverage
- [ ] **Self-contained templates** - Move Twig templates and CSS into the module
- [ ] **Update hooks** - Add configuration update hooks for safe installation on existing sites
- [ ] **Automated paragraph field configuration** - Automatically add policy paragraph to basic page content field

## Documentation

### Product History and Requirements
https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1050542136/Policies+local

### UAT Cases
https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1203994715/UAT+-+Policies+local

## License

GPL-2.0+

## Maintainer

University of Denver
