class Game < ActiveRecord::Base
  has_and_belongs_to_many :users
  belongs_to :winner, :class_name => "User"

  def new_game(players)
    @game = Game.create
    players.each do |player|
      @game.users << player
    end
    @game
  end
end
