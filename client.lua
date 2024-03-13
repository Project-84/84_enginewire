RegisterCommand('testminigame', function ()
    SendNuiMessage({
        action = 'open',
       })
       SetNuiFocus(true, true)
end,false)