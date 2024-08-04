'use strict'

/**
 * Описание правил для поднятия версии проекта
 * https://github.com/semantic-release/commit-analyzer#releaserules
 * Список типов release
 * https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-types.js
 */
module.exports = [
  { type: "docs", scope: "README", release: false },
  { type: "docs", scope: "ARCHITECTURE", release: false },
  { type: "docs", scope: "CONTRIBUTING", release: false },
  { type: "refactor", scope: "core-*", release: "minor" },
  { type: "refactor", release: "patch" },
  { scope: "no-release", release: false }
]
