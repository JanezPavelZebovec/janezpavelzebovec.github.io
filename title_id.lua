-- Inicializiraj slovar na začetku
local used_ids = {}

function Header(el)
  local naslov = pandoc.utils.stringify(el.content)

  -- Zamenjaj šumnike
  naslov = naslov
    :gsub("č", "c"):gsub("Č", "C")
    :gsub("š", "s"):gsub("Š", "S")
    :gsub("ž", "z"):gsub("Ž", "Z")

  -- Presledke in druge nečrkovne znake spremeni v podčrtaje
  naslov = naslov:gsub("[^%w]", "_")

  -- Odstrani zaporedne podčrtaje
  naslov = naslov:gsub("__+", "_"):gsub("^_+", ""):gsub("_+$", "")

  -- Poskrbi za edinstvenost
  local base_id = naslov
  local counter = 1
  while used_ids[naslov] do
    naslov = base_id .. "-" .. counter
    counter = counter + 1
  end
  used_ids[naslov] = true

  -- Nastavi nov ID
  el.identifier = naslov
  return el
end
