UPDATE site_content
SET content = jsonb_set(content, '{footer}', to_jsonb('© 2026 Rapstar Community: Forever - Beta'::text)),
    revision = revision + 1,
    updated_at = now()
WHERE id = 'home'
  AND content->>'footer' IN (
    '© 2024 Star World Community - Beta',
    '© 2026 Rapstar Community - Beta'
  );
