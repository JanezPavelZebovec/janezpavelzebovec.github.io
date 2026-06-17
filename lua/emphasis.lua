function Emph(el)
  return pandoc.RawInline("html", "<i>" .. pandoc.utils.stringify(el) .. "</i>")
end

function Strong(el)
  return pandoc.RawInline("html", "<b>" .. pandoc.utils.stringify(el) .. "</b>")
end
