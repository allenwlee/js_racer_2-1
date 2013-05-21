helpers do 

  def new_game(players)
    @game = Game.create
    players.each do |player|
      @game.users << player
    end
    @game
  end

  def create_players(players)
    users = []
    players.each do |k,v| 
      user = User.find_or_create_by_name(v)
      users << user
    end
    new_game(users)
  end

end

