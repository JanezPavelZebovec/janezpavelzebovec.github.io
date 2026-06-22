function Emph(el)
  table.insert(el.content, 1, pandoc.RawInline("html", "<i>"))
  table.insert(el.content, pandoc.RawInline("html", "</i>"))
  return el.content
end

function Strong(el)
  table.insert(el.content, 1, pandoc.RawInline("html", "<b>"))
  table.insert(el.content, pandoc.RawInline("html", "</b>"))
  return el.content
end
