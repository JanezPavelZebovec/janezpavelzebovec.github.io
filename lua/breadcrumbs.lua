function Meta(meta) -- Meta je ime, ki ga prepozna Pandoc
  if not meta.md_link then -- če dokument nima metapodatka md_link
    return meta -- če vrne meta, Pandoc uporabi drugo različico
  end

  local path = pandoc.utils.stringify(meta.md_link) -- podatke dobi iz nastavljenega --metadata=md_link="*"
  path = path:gsub("%.md$", "")     -- odstrani končnico .md
  local parts = {} -- deli poti
  for p in path:gmatch("[^/]+") do -- razdeli pot po poševnicah na dele
    table.insert(parts, p)
  end

  local crumbs = {} -- seznam povezav HTML
  local acc = "" -- sestavljana pot

  -- dom
  table.insert(crumbs, '<a href="/">dom</a>') -- doda korensko/domačo povezavo

  for i, p in ipairs(parts) do
    acc = acc .. "/" .. p -- sprotno sestavljanje poti
    local label = p --local label = p:gsub("_", " ")
    table.insert(crumbs,
      string.format('<a href="%s/">%s</a>', acc, label) -- ustvari povezavo HTML
    )
  end

  meta.breadcrumbs = pandoc.MetaBlocks{ -- združi povezave v en blok HTML
    pandoc.RawBlock("html", table.concat(crumbs, " / "))
  }

  return meta
end
