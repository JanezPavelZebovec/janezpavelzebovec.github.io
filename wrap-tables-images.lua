-- wrap-tables-images.lua

local in_sequence = false

function Block(el)
  local is_table_or_image = (el.t == 'Table' or el.t == 'Figure' or 
                              (el.t == 'Para' and #el.content == 1 and el.content[1].t == 'Image'))
  
  if is_table_or_image then
    if not in_sequence then
      -- Začni novo zaporedje - zapri 'content'
      in_sequence = true
      return {
        pandoc.RawBlock('html', '</div>'),
        el
      }
    else
      -- Nadaljuj zaporedje, saj je očitno v nizu slik/preglednic
      return el
    end
  else
    if in_sequence then
      -- Zaključi zaporedje - odpri content
      in_sequence = false
      return {
        pandoc.RawBlock('html', '<div class="content">'),
        el
      }
    else
      return el
    end
  end
end
