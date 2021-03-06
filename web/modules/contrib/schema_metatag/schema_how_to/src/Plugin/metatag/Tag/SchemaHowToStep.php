<?php

namespace Drupal\schema_how_to\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaHowToStepBase;

/**
 * Provides a plugin for the 'schema_how_to_name' meta tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_how_to_step",
 *   label = @Translation("step"),
 *   description = @Translation("REQUIRED BY GOOGLE. An array of HowToStep elements which comprise the full instructions of the how-to."),
 *   name = "step",
 *   group = "schema_how_to",
 *   weight = 10,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = TRUE
 * )
 */
class SchemaHowToStep extends SchemaHowToStepBase {
  // Nothing here yet. Just a placeholder class for a plugin.
}
