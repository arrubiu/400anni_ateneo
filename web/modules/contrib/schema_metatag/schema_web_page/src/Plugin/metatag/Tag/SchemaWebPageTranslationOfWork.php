<?php

namespace Drupal\schema_web_page\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaIdReferenceBase;

/**
 * Provides a plugin for the 'schema_web_page_translation_of_work' meta tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_web_page_translation_of_work",
 *   label = @Translation("translationOfWork"),
 *   description = @Translation("The website id that this is a direct translation of"),
 *   name = "translationOfWork",
 *   group = "schema_web_page",
 *   weight = 12,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = FALSE
 * )
 */
class SchemaWebPageTranslationOfWork extends SchemaIdReferenceBase {

}