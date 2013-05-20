User.create(name: 'amy')
User.create(name: 'allen')
User.create(name: 'hamster')
User.create(name: 'dog')
User.create(name: 'cat')
User.create(name: 'horse')
User.create(name: 'fish')

15.times do
Game.create(winner_id: rand(6))
end

15.times do
GamesUser.create(user_id: rand(6), game_id: rand(15))
end
