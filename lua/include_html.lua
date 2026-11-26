-- <div id="..." data-vstavi="pot/do/datoteke.html"></div>
-- dobi vsebino te datoteke
function RawBlock(el)
  if el.format ~= "html" then return nil end

  local pot = el.text:match('data%-insert="([^"]+)"')
  if not pot then return nil end

  local f = io.open(pot, "r")
  if not f then
    io.stderr:write("Napaka: ne najdem " .. pot .. "\n")
    os.exit(1)
  end
  local html = f:read("a")
  f:close()

  local odpri = el.text:match("^%s*(<div[^>]*>)")
  if not odpri then return nil end
  odpri = odpri:gsub('%s*data%-insert="[^"]*"', "")

  return pandoc.RawBlock("html", odpri .. "\n" .. html .. "\n</div>")
end
